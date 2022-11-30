from app.models import db, Question, environment, SCHEMA

def seed_questions():
    q1 = Question(
        user_id = 2,
        title='Who is the best player in NFL history?',
        body="""When the NFL put together its Top 100 players of all time #1 was WR Jerry Rice. Hard to argue that selection based on the incredible numbers he put up during his career. He ranks first all-time in yards, receptions, and touchdowns (both receiving and total TDs). To put it in some context he is almost 7000 yards ahead of the next closest player in career receiving yards (Terrell Owens), 224 catches ahead of the #2 player in career receptions (Tony Gonzalez) and 33 touchdowns ahead of #2 player in career TDs (Emmitt Smith). Certainly his longevity was a key factor in his ability to put up those career numbers but there was much more to it. He was a 10 time All Pro, led the NFL in receptions twice, receiving yards 6 times and receiving touchdowns 6 times. Add to that he won the Bert Bell award (1987 player of the year) and a Super Bowl MVP. Without question he was the most dominant WR in NFL history and he is a great choice as the best NFL player of all time.
              the other player that deserves consideration is Jim Brown - RB of the Cleveland Browns. There have been rushers who have surpassed Browns achievements in rushing yards and TDs, but very few players ever dominated the league in the manner Jim Brown did. He only played 9 NFL seasons but he was elite from the beginning to the end of his career. In his rookie season he was named NFL MVP ............ in his final season in 1965 he was the MVP again. He won the rushing title in 8 of his 9 seasons (4th in 1962). In his amazing 1963 season he set the single season rushing standard record - subsequently surpassed by O.J. Simpson. But what was incredible is that he had more rushing yards than the #2 and #3 rushers COMBINED. He had more rushing yards than 11 of the 14 teams in the NFL.
              Rice or Brown .... both great choices""",
        image='https://qph.cf2.quoracdn.net/main-qimg-75adb4e1ed6bff15007921397006b680-lq'
    )
    q2 = Question(
        user_id = 3,
        title='Regulars, what answers do you give to the "what team should I root for" question?',
        body="""You'll also know that the most common question people have is "what team should I cheer for?" I'd like to collect everyone's common answers, preferably focusing more on general answers instead of specific team recommendations, so we can leave a sticky up about it. (i.e. I wouldn't recommend someone watch the Ravens just to see Lamar Jackson because there's no guarantee he doesn't get injured and become a non-factor in a year or two) So what do you folks usually recommend to help someone decide on a team to follow? I'd like to get as many ideas and opinions as possible to make a more complete resource for new or prospective fans. """
    )
    q3 = Question(
        user_id = 4,
        title="Am I crazy to think CB's have almost an impossible task and WR's are over-praised?",
        body="""Every now and then, I'll see some clip about some WR running an amazing route where he just leaves the CB in the dust. And everyone is saying Wow, what a route god.
                The CB had no chance on this. Just left him in the dust. Yeah, no kidding he had no shot. How the heck is someone supposed to track an uber-fast WR where you have zero clue what route he's running or the kind of moves he'll do. The WR is always a step ahead because he knows exactly what he wants to run, especially an elite WR.
                That's why it amazes me when I heard of elite CB's shutting WR's because their job is so hard. I feel like they should be praised more than these WR's. """
    )
    q4 = Question(
        user_id = 5,
        title='Time of possession question',
        body="""Having trouble understanding a concept I have read a few times- long offensive drives help out that teams defense.
                How is it not a zero sum game? If your defense is resting, so is the other teams offense. If you still have the ball after 3+ minutes of a drive (whatever you consider a long drive) that means you havent scored anyways, although presumably you have moved the ball downfield otherwise you would have used 2 or less minutes. I understand that concept, just not the causation of time of possession being a direct benefit to the D. It seems more like it’s correlated but since I’ve only watched a few years I’m probably missing something. Maybe defense is physically more taxing than offense?"""
    )
    q5 = Question(
        user_id = 6,
        title='Someone please help me',
        body="""My parents dropped cable but really want to watch nfl games. We have a dish and can get local games, but Mondat Night Football is borderline impossible to watch without some sort of live TV subscription. Any way around this?"""
    )
    q6 = Question(
        user_id = 7,
        title='Is 1st & 10 from the 15-yard-line a preferable situation to 1st & goal from the 10-yard-line? If yes, is that ever considered in practical play?',
        body="""The reasoning behind it being that in the first scenario, you still have the option to get a first down and possibly up to 8 shots at the endzone, and only 4 max in the second scenario. The defense also has a bit more space to defend in the first scenario."""
    )
    q7 = Question(
        user_id = 8,
        title='If the offensive and defensive coordinators call the plays for either side of the ball. Then what does the head coach do?',
        body="""Does the Head coach overrule coordinators, does he make suggestions, is he the simply a figurehead? What’s going on?"""
    )
    q8 = Question(
        user_id = 9,
        title='Can someone give me a TLDR summary of all the teams? Like what their strengths & weaknesses are, their culture etc',
        body="""Something like “Ravens: very run heavy team, known for having a good defense, Lamar is a polarizing qb etc. Steelers/Ravens is a bitter rivalry up there with Yankees/Red Sox, they also hate the browns and recently the Titans. Strengths: Lamar, good run game; weaknesses: crap receivers
                I think summaries like this would be super helpful for all the new fans who want to genuinely understand the teams
                EDIT: people are listing their teams best players but most of us don’t know who they are so pls include their position"""
    )
    q9 = Question(
        user_id = 10,
        title='According to Rob Gronkowski every NFL player should be required to sit out at least one game per season',
        body="""According to Rob Gronkowski he feels like every NFL player should be required to sit out at least on game per season. The argument being on top of the bye week an extra week or rest would give players the extra time to recover. I could see NFL teams making this work.
                What are your thoughts?"""
    )
    q10 = Question(
        user_id = 11,
        title='Im starting to believe professional sports, specifically NFL are predetermined/scripted.',
        body="""Throughtout this season I have been noticing how many games are ending in OT or will have one team lose the entire game and win by a small margin within last 4 minutes of the game.
                I wonder if these games are allowed to be play mostly without direction, but have predetermined endings. The viewership of NFL games has been declining, so what better way to raise ratings (and ensure all commercials are watched) than to have majority of the games have nail biting endings"""
    )
    q11 = Question(
        user_id = 1,
        title="What's the origin behind the name 'Bengals'?",
        body="""Not really a typical NFL Noobs question, but thought I'll try my luck. As an Indian guy, it confuses the hell out of me. Bengal is a state in India, and there's a bunch of Tigers that originate from the jungles there that are called Bengal Tigers. So while I get the whole association with Tigers, it's so weird to see a team being called the Bengals. Is there anything else in the US that the word means? Like, what am I missing - is a Bengal something else in the US? Because the tiger thing makes it seem like this has to be a play on the Bengal Tigers thing. But it's a state in India, you don't use a plural with it. The tigers aren't called Bengals for sure. To us, it's like having an Indian sports team that's called the Delhi Floridas.
                 It's just weird!"""
    )
    q12 = Question(
        user_id = 2,
        title='Is there some kind of beginners guide to the Superbowl for 2022? I want to make a good impression on my new boyfriend and his friends',
        body="""Hi everybody! I'm a total newbie when it comes to football. I've never been really into sports in general, let alone the NFL. I barely know what's going on, but I'm going to a Superbowl party with my new boyfriend and I don't want to be the stereotype of the uninterested girlfriend.
                Can anyone point me to some articles to read or videos to watch to help me get some background on the sport, the teams, the players etc, to help me get excited about the game? He really loves football and I want to be able to connect with him on that level."""
    )
    q13 = Question(
        user_id = 3,
        title='Did Tom Brady carry the Buccaneers to the super bowl win?',
        body="""I'm an NBA fan that just learned that Tom brady won his 7th super bowl
                My friends told me a little more about it, apparently he got traded to Buccaneers(supposedly average team) this year, and won his 7th super bowl straight out the gate, at the age of 43? That's like steph curry winning 6 championships, then gets traded at the age of 40 to some shitty team like knicks, then precedes to win another championship. I mean this just sounds unreal to me, did tom carry the Buccaneers?"""
    )
    q14 = Question(
        user_id = 4,
        title='How does a collapse happen?',
        body="""Hi all. I'm relatively new to the sport, but have been watching this season every week. After half a dozen games Steelers looked unstoppable, very confident and assured.
                Then came a sequence of losses, culminating in their disastrous playoff game.
                Comments I see online are hyperbolic and aren't helpful to a newcomer like me. "The Steelers shown for the frauds they are" is a weird statement. I'm not sure 'frauds' would win 11 games in a row. Consistency is the hardest thing to cultivate in any sport.
                However in this case, could it be simply because they were up against mediocre teams this season? Looking at their schedule I guess Titans and Ravens were their only real threat?
                So I'd like some insight into how collapses like this occur. Both in general, and for the Steelers specifically.
                Thanks for the help!""")
    q15 = Question(
        user_id = 5,
        title='Why doesn’t the QB tell his lineman how many fake snaps he’ll do?',
        body="""I’ve been following the nfl for awhile but I’ve never played football myself so that’s maybe why I don’t know but?
                Basically, the Qb will do something like “green 18, set hut!” To get the defense to jump offsides, but sometimes his own lineman jump, causing a false start, why doesn’t the QB just tell the Oline how many fake snaps he will do so they don’t jump and push the team back 5 yards?"""
    )
    q16 = Question(
        user_id = 6,
        title='What does it mean when a Quarterback calls out “57 is the mic” for example',
        body="""I assume he’s calling out the opposite teams number 57 for his teams knowledge but what significance does the mic part mean?"""
    )
    q17 = Question(
        user_id = 7,
        title='What is the purpose of players mentioning which college they attended?',
        body="""You know during a game, their head pops up and they introduce their name followed by the college. Why do we need that information? Especially for older veteran players?"""
    )
    q18 = Question(
        user_id = 9,
        title='Learning football for my boyfriend',
        body="""Hell y'all, my boyfriend is a huge football fan. I'm trying to surprise him by learning some stuff so we could watch games together.
                Where could I watch some games online (websites, etc.)? Or even better, who should I watch and support?
                Or.. what do you recommend I start doing?

                Update: We broke up lol"""
    )
    q19 = Question(
        user_id = 8,
        title="What do referees say to players during games? I see that happening but have no idea what's going on.",
        body="""Could be talking about a play or rule. Could just be them being friendly talking about the game or the year they are having."""
    )
    q20 = Question(
        user_id = 11,
        title='How would you define the culture, tradition and identity of each NFL team to a new fan?',
        body="""Yup, I'm the new guy. """
    )

    db.session.add(q1)
    db.session.add(q2)
    db.session.add(q3)
    db.session.add(q4)
    db.session.add(q5)
    db.session.add(q6)
    db.session.add(q7)
    db.session.add(q8)
    db.session.add(q9)
    db.session.add(q10)
    db.session.add(q11)
    db.session.add(q12)
    db.session.add(q13)
    db.session.add(q14)
    db.session.add(q15)
    db.session.add(q16)
    db.session.add(q17)
    db.session.add(q18)
    db.session.add(q19)
    db.session.add(q20)
    db.session.commit()


def undo_questions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
