from app.models import db, Question, environment, SCHEMA

def seed_questions():
    q1 = Question(
        user_id = 1,
        title='Who is the best quarterback in the NFC right now?',
        body="""When the NFL put together its Top 100 players of all time #1 was WR Jerry Rice. Hard to argue that selection based on the incredible numbers he put up during his career. He ranks first all-time in yards, receptions, and touchdowns (both receiving and total TDs). To put it in some context he is almost 7000 yards ahead of the next closest player in career receiving yards (Terrell Owens), 224 catches ahead of the #2 player in career receptions (Tony Gonzalez) and 33 touchdowns ahead of #2 player in career TDs (Emmitt Smith). Certainly his longevity was a key factor in his ability to put up those career numbers but there was much more to it. He was a 10 time All Pro, led the NFL in receptions twice, receiving yards 6 times and receiving touchdowns 6 times. Add to that he won the Bert Bell award (1987 player of the year) and a Super Bowl MVP. Without question he was the most dominant WR in NFL history and he is a great choice as the best NFL player of all time.
              the other player that deserves consideration is Jim Brown - RB of the Cleveland Browns. There have been rushers who have surpassed Browns achievements in rushing yards and TDs, but very few players ever dominated the league in the manner Jim Brown did. He only played 9 NFL seasons but he was elite from the beginning to the end of his career. In his rookie season he was named NFL MVP ............ in his final season in 1965 he was the MVP again. He won the rushing title in 8 of his 9 seasons (4th in 1962). In his amazing 1963 season he set the single season rushing standard record - subsequently surpassed by O.J. Simpson. But what was incredible is that he had more rushing yards than the #2 and #3 rushers COMBINED. He had more rushing yards than 11 of the 14 teams in the NFL.
              Rice or Brown .... both great choices""",
        image='https://qph.cf2.quoracdn.net/main-qimg-75adb4e1ed6bff15007921397006b680-lq'
    )
    q2 = Question(
        user_id = 1,
        title='Regulars, what answers do you give to the "what team should I root for" question?',
        body="""You'll also know that the most common question people have is "what team should I cheer for?" I'd like to collect everyone's common answers, preferably focusing more on general answers instead of specific team recommendations, so we can leave a sticky up about it. (i.e. I wouldn't recommend someone watch the Ravens just to see Lamar Jackson because there's no guarantee he doesn't get injured and become a non-factor in a year or two) So what do you folks usually recommend to help someone decide on a team to follow? I'd like to get as many ideas and opinions as possible to make a more complete resource for new or prospective fans. """
    )
    q3 = Question(
        user_id = 2,
        title="Am I crazy to think CB's have almost an impossible task and WR's are over-praised?",
        body="""Every now and then, I'll see some clip about some WR running an amazing route where he just leaves the CB in the dust. And everyone is saying Wow, what a route god.
                The CB had no chance on this. Just left him in the dust. Yeah, no kidding he had no shot. How the heck is someone supposed to track an uber-fast WR where you have zero clue what route he's running or the kind of moves he'll do. The WR is always a step ahead because he knows exactly what he wants to run, especially an elite WR.
                That's why it amazes me when I heard of elite CB's shutting WR's because their job is so hard. I feel like they should be praised more than these WR's. """
    )

    db.session.add(q1)
    db.session.add(q2)
    db.session.add(q3)
    db.session.commit()


def undo_questions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
