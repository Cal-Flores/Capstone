from flask import Blueprint, jsonify, session, request
from app.models import db, Post
from app.forms import CreatePostForm, EditPostForm
from flask_login import current_user, login_user, logout_user, login_required


posts_routes = Blueprint('post', __name__)


################ Get Requests ###################

# prefix /api/posts

#get all posts
@posts_routes.route('/')
def index():
    posts = Post.query.all()
    all_posts = []
    all_posts.extend([i.to_dict() for i in posts])

    return {'Posts': all_posts}

#get one post
@posts_routes.route('/<int:id>', methods=['GET'])
def one_post(id):
    post = Post.query.get(id)
    new_post = post.to_dict()
    return {'Post': new_post}

# get all posts by the user
@posts_routes.route('/your-posts')
@login_required
def user_posts():
    posts = Post.query.filter(Post.user_id == current_user.id).all()
    owner_posts = []
    owner_posts.extend([i.to_dict() for i in posts])

    return {'Posts': owner_posts}


##################### Answer requests ##########################
