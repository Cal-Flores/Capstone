from flask import Blueprint, jsonify, session, request
from app.models import db, Question, Answer
from app.forms import CreateAnswerForm, EditAnswerForm
from flask_login import current_user, login_user, logout_user, login_required

answers_routes = Blueprint('answer', __name__)

# get all answers by user
@answers_routes.route('/user-answers', methods=['GET'])
@login_required
def get_user_answers():
    answers = Answer.query.filter(Answer.user_id == current_user.id)
    my_answers=[]
    my_answers.extend([i.to_dict() for i in answers])
    return {'answers': my_answers}


# delete a question
@answers_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_answer(id):
    answer = Answer.query.get(id)
    if answer is not None:
        db.session.delete(answer)
        db.session.commit()
        return {'message': 'Delete completed'}
    return {'ERROR': 'answer not found'}

# edit a question
@answers_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_answer(id):
    form = EditAnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        answer = Answer.query.get(id)

        answer.body = form.data['body']
        answer.image = form.data['image']

        db.session.commit()
        return {'answer': answer.to_dict()}
    return {'ERROR': 'bad request'}
