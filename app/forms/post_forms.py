from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField, DecimalField, TextAreaField, TextField
from wtforms.validators import DataRequired

class CreatePostForm(FlaskForm):
    body = TextAreaField('Body', validators=[DataRequired()])
    image = StringField('image')
    type = StringField('type')


class EditPostForm(FlaskForm):
    body = TextAreaField('Body', validators=[DataRequired()])
    image = TextField('image')
    type = StringField('type')
