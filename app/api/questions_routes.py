from flask import Blueprint, jsonify, session, request
from app.models import Question
# from app.forms import
from flask_login import current_user, login_user, logout_user, login_required

import random
#url_prefix='/api/questions'

questions_routes = Blueprint('question', __name__)

#get all questions
@questions_routes.route('/')
def index():
    """get all questions"""
    questions = Question.query.all()

    all_questions = []
    all_questions.extend([i.to_dict() for i in questions])

    return {'Questions': all_questions}


# get question by id
@questions_routes.route('/<int:id>', methods=['GET'])
def one_question(id):
    """ get one question for question detail page """

    question = Question.query.get(id)

    new_question = question.to_dict()

    return {'Question': new_question}


# get all questions by the user
@questions_routes.route('/your-content')
#@login_required
def user_questions():
    questions = Question.query.filter(Question.user_id == current_user.id).all()
    owner_questions = []
    owner_questions.extend([i.to_dict() for i in questions])

    return {'Questions': owner_questions}
