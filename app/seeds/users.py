from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='George', last_name='St-pierre', profile_pic='https://upload.wikimedia.org/wikipedia/commons/9/95/Georges_St-Pierre.png?20180520230149')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='Michelle', last_name='Waterson', profile_pic='https://upload.wikimedia.org/wikipedia/commons/a/a1/Michelle_Waterson_smiling_UFC_229.jpg')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='Robert', last_name='Whittaker', profile_pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDbgMh_X9vfk6hxGRIr5faVDo80lH30Faa66YYWtRlBKjkE6')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
