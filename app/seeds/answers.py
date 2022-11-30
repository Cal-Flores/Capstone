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
    answer6 = Answer(
        user_id=8,
        question_id=1,
        body="""What Emmitt Smith did will never be matched for a RB. he is always my go to answer fot this question"""
    )
    answer6 = Answer(
        user_id=10,
        question_id=4,
        body="""Playing defense is much more tiring than playing offense.
                Reacting is more exhausting than being in control. The offense has control of the play and dictates the direction it goes.
                Also, especially at 'skill' positions like WR and RB you swap personnel much more often. On defense, you keep your best players on the field more often. Its harder to keep guys rested on the defensive side."""
    )
    answer7 = Answer(
        user_id=9,
        question_id=4,
        body="""Like others have said defense it more reactive than offense is. If you want some examples of how important time of possession can be just looks at some eagles games from when Chip Kelly was coach. His offenses were very fast paced and didn’t huddle, 3 and outs by the offense would only take a few minutes in real time and put the defense at a disadvantage."""
    )
    answer8 = Answer(
        user_id=8,
        question_id=5,
        body="""Do you have a VPN? You can watch NFL Gamepass for free if you set your location to Ukraine."""
    )
    answer9 = Answer(
        user_id=7,
        question_id=6,
        body="""Honestly it depends on a lot. Big bruising back, maybe you smash it in, but being a little further back will open the passing game a LOT. Receivers have room to work a route and it's a lot less crowded. Any NFL QB can make all the throws from inside the 30. On the lower levels you don't always have that in your QB."""
    )
    answer10 = Answer(
        user_id=4,
        question_id=7,
        body="""This depends on the HC. Many HCs do call plays for their team on the side of the ball where they have background (Kliff Kingsbury, Sean McVay, Matt LaFleur, and Kyle Shanahan all call offensive plays, for example).
                If they’re not actually calling the plays, they still lead the meetings with the OC and DC throughout the week to decide on the game plan, and during the game, they still have lots to focus on (clock management, strategic adjustments, etc.)"""
    )
    answer11 = Answer(
        user_id=5,
        question_id=8,
        body="""New England Patriots: Team that was largely irrelevant until about 2000 when a great coach (Bill Belicheck) and a great QB (Tom Brady) came together and now have tied for the most Super Bowls ever. They became the evil empire but with Brady's departure to Tampa, the empire is functionally dead."""
    )
    answer12 = Answer(
        user_id=10,
        question_id=9,
        body="""I agree, and not only would sitting random players certain weeks cause tons of backlash from fans, gamblers and fantasy owners, but an 18 week season would push the Super Bowl back one week to Presidents’ Day which for many is a national holiday, and giving them a Monday off work so we can actually enjoy the Super Bowl without the Sunday Scaries. And 18 week season will allow an extra bye for rest and recovery for players and generate an extra week of revenue for all."""
    )
    answer13 = Answer(
        user_id=9,
        question_id=10,
        body="""All the partnerhips for betting inclines me to belive this theory which makes me sad."""
    )
    answer14 = Answer(
        user_id=8,
        question_id=11,
        body="""Must be an Ohio thing."""
    )
    answer15 = Answer(
        user_id=7,
        question_id=12,
        body="""Another way to stay interested during the game if you’re not a die-hard fan is prop bets. You can do this for real on websites, but I really just mean fun bets with your boyfriend and other people at the party. Stuff like who will win the toss, will the first points be scored by a kicker, how many interceptions will there be, what color is the Gatorade poured on the winning coach at the end… google it if you like the idea - there are tons of examples. Have fun and make sure you cheer for the Bengals :-)"""
    )
    answer16 = Answer(
        user_id=3,
        question_id=13,
        body="""Nope. TB12 IS the GOAT, but the Bucs had a great team on both sides of the ball and excellent coaching.
                No risk it no biscuit!"""
    )
    answer17 = Answer(
        user_id=3,
        question_id=14,
        body="""Other teams eventually figure you out too. May take a few weeks but it becomes more obvious how to beat certain teams. Which makes it more impressive when teams go 14-2. You know what you need to do to beat the chiefs or Packers but it’s still extremely difficult to do."""
    )
    answer18 = Answer(
        user_id=3,
        question_id=15,
        body="""They do. In the huddle they’ll say something like “on 2”. Meaning on the second count. Also they do post snap. Mayfield says “turbo” for on 1. In college they’ll do a clap a lot of times. Sometimes you’ll hear something g like “Sunday” or “Monday” to mean on 1 or 2. Sometimes they’ll say “red 19” or “black 40” which is a dead play. Then they’ll follow up with their regular cadence like “green 19” or “white 80” signaling a live play"""
    )



    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.add(answer7)
    db.session.add(answer8)
    db.session.add(answer9)
    db.session.add(answer10)
    db.session.add(answer11)
    db.session.add(answer12)
    db.session.add(answer13)
    db.session.add(answer14)
    db.session.add(answer15)
    db.session.add(answer16)
    db.session.add(answer17)
    db.session.add(answer18)
    db.session.commit()


def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
