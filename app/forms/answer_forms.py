from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField, SelectField
from wtforms.validators import DataRequired

class CreateAnswerForm(FlaskForm):
    body = StringField('Body', validators=[DataRequired()])
    image = StringField('Image')

class EditAnswerForm(FlaskForm):
    body = StringField('Body', validators=[DataRequired()])
    image = StringField('Image')
