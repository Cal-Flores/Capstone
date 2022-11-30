from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='George', last_name='St-pierre', profile_pic='https://upload.wikimedia.org/wikipedia/commons/9/95/Georges_St-Pierre.png?20180520230149')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='Michelle', last_name='Waterson', profile_pic='https://upload.wikimedia.org/wikipedia/commons/a/a1/Michelle_Waterson_smiling_UFC_229.jpg')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='Robert', last_name='Whittaker', profile_pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDbgMh_X9vfk6hxGRIr5faVDo80lH30Faa66YYWtRlBKjkE6')
    guts = User(
        username='blacksword', email='guts@aa.io', password='password', first_name='Guts', last_name='Galliard', profile_pic='https://www.giantbomb.com/a/uploads/scale_small/0/1051/244247-guts.jpg')
    casca = User(
        username='warrior', email='casca@aa.io', password='password', first_name='Casca', last_name='Freeces', profile_pic='https://cdn.myanimelist.net/images/characters/14/72697.jpg')
    griffith = User(
        username='hawk', email='griffith@aa.io', password='password', first_name='Griffith', last_name='Falcon', profile_pic='https://upload.wikimedia.org/wikipedia/en/7/7a/GriffithBerserk.png')
    amy = User(
        username='amy', email='amy@aa.io', password='password', first_name='Amy', last_name='Jones', profile_pic='')
    harry = User(
        username='oned', email='harry@aa.io', password='password', first_name='Harry', last_name='Styles', profile_pic='')
    harley = User(
        username='bear', email='harley@aa.io', password='password', first_name='Harley', last_name='Jones', profile_pic='https://todaysveterinarypractice.com/wp-content/uploads/sites/4/2019/01/Chocolate-Lab_shutterstock_405052057_Paul-Ekert.jpg')
    megan = User(
        username='carly', email='megan@aa.io', password='password', first_name='Megan', last_name='Lipa', profile_pic='https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX214_CR0,0,214,317_AL_.jpg')
    ryan = User(
        username='coder', email='ryan@aa.io', password='password', first_name='Ryan', last_name='Webster', profile_pic='https://ca.slack-edge.com/T03GU501J-U015KPAP17T-06c9ca4a2901-192')
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(demo)
    db.session.add(guts)
    db.session.add(casca)
    db.session.add(griffith)
    db.session.add(amy)
    db.session.add(harry)
    db.session.add(harley)
    db.session.add(megan)
    db.session.add(ryan)
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
