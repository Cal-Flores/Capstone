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

    return {'Questions': questions}
