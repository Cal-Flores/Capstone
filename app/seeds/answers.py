from app.models import db, Answer, environment, SCHEMA


def seed_answers():
    answer1 = Answer(
        user_id=2, question_id=3, body="""You are correct in the sense that the WRs are always a step ahead but this is why studying film is crucial especially for DBs, many receivers make the slightest move before breaking/cutting on the route so studying that specific receiver and his tendencies is a big part of playing Cornerback. This is why they are a lot more elite WRs than there are elite CBs in the NFL, like you said it's obviously more difficult to keep up with a player you have no idea what route is running but the very best CBs in the league can anticipate the route and make a play on the ball. """
    )
    answer2 = Answer(
        user_id=1, question_id=3, body="""That plus pass interference rules make a corners job very hard. But if you haven't seen a game in person, you might not realize that the ball takes a while to reach the receiver. That's why a corners eyes are often looking at the qb. It doesn't matter what route is being run; if the ball is out, it has a predetermined destination, and you just have to go there. """
    )
    answer3 = Answer(
        user_id=1, question_id=2, body="""I would also point out that for European fans, the Jacksonville Jaguars are a good choice as they are committed to play at least 1 game a year in London. This makes it a lot more likely that you can see them play live sometime (at least until the league expands into Europe).
I also know that a lot of new fans are also soccer fans. There are 5 teams who share an owner with a soccer team.

Arsenal FC -> Los Angeles Rams

Columbus Crew -> Cleveland Browns

Fulham FC -> Jacksonville Jaguars

Manchester United -> Tampa Bay Buccaneers

New England Revolution -> New England Patriots"""
    )
    answer4 = Answer(
        user_id=3, question_id=2, body="""Jacksonville is a great team to start watching right now.
They just got Super Bowl MVP quarterback Nick Foles """
    )
    answer5 = Answer(
        user_id=3, question_id=1, body="""Its going to be Patrick Mahomes in due time. Best talent the NFL has ever seen and its not so close."""
    )


    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
