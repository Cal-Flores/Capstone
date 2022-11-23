from flask import Blueprint, jsonify, session, request
from app.models import db, Question, Answer
from app.forms import CreateAnswerForm, EditAnswerForm
from flask_login import current_user, login_user, logout_user, login_required

answers_routes = Blueprint('answer', __name__)
