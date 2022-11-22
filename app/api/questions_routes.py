from flask import Blueprint, jsonify, session, request
from app.models import db, Question
from app.forms import CreateQuestionForm, EditQuestionForm
from flask_login import current_user, login_user, logout_user, login_required

import random
#url_prefix='/api/questions'

questions_routes = Blueprint('question', __name__)

################ Get Requests ###################

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
    """ get all questions by the user """
    questions = Question.query.filter(Question.user_id == current_user.id).all()
    owner_questions = []
    owner_questions.extend([i.to_dict() for i in questions])

    return {'Questions': owner_questions}


##################### Post requests ########################

@questions_routes.route('/ask-question', methods=['POST'])
#@login_required
def create_question():
    """ post a new question """
    form = CreateQuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = current_user.id

    if form.validate_on_submit():

        params = {
            'title': form.data['title'],
            'body': form.data['body'],
            'image': form.data['image'],
            'user_id': user_id
        }
        newQuestion = Question(**params)
        db.session.add(newQuestion)
        db.session.commit()
        return newQuestion.to_dict()
    return {'Error': 'bad request'}
