from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Question(db.Model):
    __tablename__ = 'questions'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    title = db.Column(db.String(200), nullable=False)
    body = db.Column(db.Text, nullable=False)
    image = db.Column(db.String)
    created = db.Column(db.DateTime, nullable=False, server_default=func.now())

    #relationships
    user = db.relationship('User', back_populates='questions')
    answer = db.relationship("Answer", back_populates="question", cascade="all, delete-orphan")



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'body': self.body,
            'image': self.image,
            'created': self.created
        }
