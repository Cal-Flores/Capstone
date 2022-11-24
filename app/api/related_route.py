from flask import Blueprint, jsonify, session, request
from app.models import db, Question, Answer
from app.forms import CreateQuestionForm, EditQuestionForm, CreateAnswerForm, EditAnswerForm
from flask_login import current_user, login_user, logout_user, login_required

import random
# url_prefix='/api/related'

relateds_routes = Blueprint('related', __name__)

#get Related questions
@relateds_routes.route('/relatedQ')
def relate():
    """get Related questions"""
    questions = Question.query.filter(Question.id % 2 != 0)

    all_questions = []
    all_questions.extend([i.to_dict() for i in questions])

    return {'Related': all_questions}
