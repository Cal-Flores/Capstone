from flask import Blueprint, jsonify, session, request
from app.models import db, Question, Answer
from app.forms import CreateQuestionForm, EditQuestionForm, CreateAnswerForm, EditAnswerForm
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
@login_required
def user_questions():
    """ get all questions by the user """
    questions = Question.query.filter(Question.user_id == current_user.id).all()
    owner_questions = []
    owner_questions.extend([i.to_dict() for i in questions])

    return {'Questions': owner_questions}


##################### Answer requests ##########################

# get answers to one question
@questions_routes.route('/<int:id>/answers', methods=['GET'])
def get_Answers(id):
    answers = Answer.query.filter(Answer.question_id == id).all()
    all_answers = []
    all_answers.extend([i.to_dict() for i in answers])
    return {'Answers': all_answers}


# create answer to a question
@questions_routes.route('/<int:id>/answers', methods=['POST'])
@login_required
def create_answer(id):
    print('this is id', id)
    form = CreateAnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            'body': form.data['body'],
            'image': form.data['image'],
            'question_id': id,
            'user_id': current_user.id,
        }
        new_answer = Answer(**params)
        db.session.add(new_answer)
        db.session.commit()
        return {'answer': new_answer.to_dict()}
    return 'not working'




##################### Post Put requests ########################

@questions_routes.route('/ask-question', methods=['POST'])
@login_required
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

# edit a question
@questions_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_question(id):
    """ Edits a question """
    form = EditQuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        question = Question.query.get(id)

        question.title = form.data['title']
        question.body = form.data['body']
        question.image = form.data['image']

        db.session.commit()
        return question.to_dict()
    return {'Error': 'Bad Request'}


# delete a question
@questions_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_question(id):
    question = Question.query.get(id)
    if question is not None:
        db.session.delete(question)
        db.session.commit()
        return {'message': 'Successfully Deleted'}
    return 'Question not found'
