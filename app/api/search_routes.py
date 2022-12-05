from flask import Blueprint, jsonify, session, request
from app.models import db, Question, Post
from app.forms import SearchForm


search_routes = Blueprint('search', __name__)

@search_routes.route('', methods=['GET', 'POST'])
def index():

    form = SearchForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        if len(form.data['search']) < 3:
            return 'Search requires 3 characters minimun'

        else:
            results = form.data['search']
            results = results.lower()
            questions = Question.query.all()
            posts = Post.query.all()
            content = questions + posts
            all_quest = []
            for i in content:
                if results in i.title.lower() or results in i.body.lower():
                    all_quest.append(
                        {
                            'id': i.id,
                            'user_id': i.user_id,
                            'title': i.title,
                            'body': i.body,
                            'image': i.image
                        })
            return {'questions': all_quest }
    return 'Bad Request'
