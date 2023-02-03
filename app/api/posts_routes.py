from flask import Blueprint, jsonify, session, request
from app.models import db, Post
from app.forms import CreatePostForm, EditPostForm
from flask_login import current_user, login_user, logout_user, login_required
from app.s3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


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


@posts_routes.route('/create-post', methods=['POST'])
@login_required
def create_post():
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = current_user.id
    #user_id = 7

    if form.validate_on_submit():
        params = {
            'body': form.data['body'],
            'image': form.data['image'],
            'type': form.data['type'],
            'user_id': user_id
        }
        newPost = Post(**params)
        db.session.add(newPost)
        db.session.commit()
        return newPost.to_dict()
    return {'Error': 'bad request'}

@posts_routes.route("/images", methods=["POST"])
@login_required
def upload_image():
    """
    Add an image via an s3 bucket for a post
    """
    new_list = []
    if request.files:
        for x in request.files.getlist('image'):
            if not allowed_file(x.filename):
                return {"errors": "File(s) type not permitted"}, 400
            x.filename = get_unique_filename(x.filename)

            upload = upload_file_to_s3(x)

            if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
                return upload, 400

            url = upload["url"]
            new_list.append(url)

        # return {"images": "[" + ", ".join(new_list) + "]"}
        return {"images": "[" + ", ".join(new_list) + "]"}
    else:
        return {"images": ''}
# edit a question
@posts_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_posts(id):
    form = EditPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post.query.get(id)


        post.body = form.data['body']
        post.image = form.data['image']
        post.type = form.data['type']

        db.session.commit()
        return post.to_dict()
    return {'Error': 'Bad Request'}


# delete a question
@posts_routes.route('/<int:id>', methods=['DELETE'])
#@login_required
def delete_post(id):
    post = Post.query.get(id)
    if post is not None:
        db.session.delete(post)
        db.session.commit()
        return {'message': 'Successfully Deleted'}
    return 'Post not found'
