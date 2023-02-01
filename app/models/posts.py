from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Post(db.Model):
    __tablename__ = 'posts'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    body = db.Column(db.Text, nullable=False)
    image = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    created = db.Column(db.DateTime, nullable=False, server_default=func.now())

    #relationships
    user = db.relationship('User', back_populates='posts')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'body': self.body,
            'image': self.image,
            'created': self.created
        }
