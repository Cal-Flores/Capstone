from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField, DecimalField, TextAreaField
from wtforms.validators import DataRequired

class CreatePostForm(FlaskForm):
    body = TextAreaField('Body', validators=[DataRequired()])
    image = StringField('Image')
    type = StringField('type')


class EditPostForm(FlaskForm):
    body = TextAreaField('Body', validators=[DataRequired()])
    image = StringField('Image')
    type = StringField('type')
