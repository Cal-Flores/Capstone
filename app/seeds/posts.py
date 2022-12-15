from app.models import db, Post, environment, SCHEMA

def seed_posts():
    post1 = Post(
        user_id = 1,
        body="""These past two months I’ve realized my place is still on the field and not in the stands. That time will come. But it’s not now. I love my teammates, and I love my supportive family. They make it all possible. I’m coming back for my 23rd season in Tampa. Unfinished business LFG""",
        image='https://pbs.twimg.com/media/FNxAUm6WYAITJTy?format=jpg&name=small',
        type='post'
    )
    post2 = Post(
        user_id = 2,
        body="""This tricky coverage has fooled some of the league’s best quarterbacks but Dak Prescott and Tony Pollard destroyed it on Sunday, scoring a 68-yard TD.""",
        image='https://www.si.com/.image/t_share/MTg1NTQyODc0NjgxNTgyNjc0/dak-pollard-lv.jpg',
        type='post'
    )
    post3 = Post(
        user_id = 7,
        body="""Since drafting TJ Watt in 2017, the Steelers have ranked 1st, 1st, 1st, 1st, and 1st in sacks. Since week 2, with Watt out of the lineup, the Steelers rank 32nd in sacks, by a safe margin..""",
        image='https://cdn.vox-cdn.com/thumbor/hOskM2qSYTmlKkMxtiT2gX1zGJw=/0x0:2241x3000/1400x933/filters:focal(1067x562:1425x920):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66969485/1181474500.jpg.0.jpg',
        type='post'
    )
    post4 = Post(
        user_id= 7,
        body= """Find you a man that looks at you the way Justin Herbert looks at coach Staley""",
        image= 'https://www.lafbnetwork.com/wp-content/uploads/2022/01/Staley-scaled.jpeg',
        type='post'
    )
    post5 = Post(
        user_id=4,
        body="""Joseph Lee Burrow (born December 10, 1996) is an American football quarterback for the Cincinnati Bengals of the National Football League (NFL). Following a stint with Ohio State, Burrow played college football at LSU, where he won the Heisman Trophy and the 2020 College Football Playoff National Championship as a senior. He was selected by the Bengals first overall in the 2020 NFL Draft.

After an injury-shortened rookie season, Burrow rebounded in his second year by leading the Bengals to their first playoff win since 1990 – ending the longest active drought in the four major North American sports – and an appearance in Super Bowl LVI.Burrow was born in Ames, Iowa, on December 10, 1996, the son of Robin and Jim Burrow. Jim is a former football player and coach whose career lasted over 40 years. Burrow was born in Ames when his father was on the coaching staff at Iowa State University. According to a 2019 Sports Illustrated story, "The Burrow athletic lineage dates back nearly a century." In the 1940s, his paternal grandmother set a Mississippi state high school record with an 82-point game in basketball. His paternal grandfather played basketball at Mississippi State; his uncle, John Burrow, played football at Ole Miss; and two older brothers also played football at Nebraska.

In his playoff debut, Burrow threw for 244 yards and two touchdowns in the 26–19 win against the Las Vegas Raiders in the Wild Card round, ending the Bengals' playoff win drought that had been active since the 1990 season.[83] During the Divisional round against the top-seeded Tennessee Titans, Burrow threw for 348 yards and an interception in the 19–16 win, which was the first time in franchise history the Bengals won a playoff game on the road.[84] The victory occurred despite Burrow being sacked nine times, tying Warren Moon in 1993 for the most times sacked in a playoff game and becoming the most-sacked quarterback to win a playoff game.[85] In the AFC Championship Game against the Kansas City Chiefs, Burrow threw for 250 yards, two touchdowns, an interception, and helped the Bengals overcome a 21–3 deficit to win 27–24 in overtime. The 18-point comeback was tied with the Indianapolis Colts in 2006 for the largest in a conference championship. With the victory, the Bengals reached Super Bowl LVI, first appearance since Super Bowl XXIII in 1988.In the Super Bowl, Burrow threw for 263 yards and a touchdown, but was sacked 7 times, ultimately losing to the Los Angeles Rams 23–20.""",
    image='https://nesn.com/wp-content/uploads/sites/5/2022/12/Joe-Burrow-1.jpg?w=640&h=360&crop=1',
    type='post'
    )
    post6 = Post(
        user_id=5,
        body="""After being selected in the first round in 2020, the expectation was he would become the guy, which was accelerated last offseason when Amari Cooper was traded to the Cleveland Browns.

Heading into Week 14, Lamb is ninth in the NFL in receiving yards (928), 10th in receptions (69), tied for ninth in touchdowns (six), tied for third in catches of 20 or more yards (18) and 11th among wide receivers in yards after catch (330).

He is on pace for 98 receptions, 1,377 yards and nine touchdowns.

“I’m not nearly where I want to be yet at this position. Like, at all,” Lamb said. “And I’m growing, still figuring it out. But we’re enjoying the process.”
Lamb’s numbers have come despite playing just six full games this season with quarterback Dak Prescott, who suffered a fractured thumb in the fourth quarter of the season opener. Since Prescott’s return, he has 36 catches for 519 yards and four touchdowns. At that rate, he would finish a 17-game season with 105 receptions for 1,471 yards and 11 touchdowns.

“We’re cooking now,” Lamb said.""",
        image='https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1110%2Fr935711_1296x729_16%2D9.jpg',
        type='post'
    )
    post7 = Post(
        user_id=10,
        body="""For All Of Patrick Mahomes' Magical TDs, This One Might Top Them All
There almost aren't words anymore for this guy. Based on where his eyes were, you would've thought Patrick Mahomes was casually flipping the ball out of bounds, staring down the defender flying right into his face, and making a business decision to avoid getting his head taken off.

That ain't how Mahomes does things. Here's the extended look that features the reverse angle, which only makes it freakier:
I'm convinced the way he flicked this ball helped him avoid a big hit. BEFORE he even let it go, Mahomes stiff-armed a defender, wasn't even looking in Jerick McKinnon's direction, and yet still got off some sort of contorted pass to him to the befuddlement of the Broncos' entire elite defense. McKinnon did the rest to cap off the 56-yard scoring play.

I was fighting for my damn life to get a screenshot of Mahomes as he threw the ball. Still doesn't make a lick of sense to be honest. Has anyone ever thrown a football sidearmed and underhanded at the same time? I feel like that's pretty much what he did.

Just feasting on this supposedly exceptional Broncos D. Well, to be fair to those guys, I'm sure Russell Wilson's lack of production and personality are wearing thin to the point where they're damn near ready to tap out. Doesn't help when you're facing an all-time talented playmaker like Mahomes and he's shredding you every which way on a Sunday.""",
        image='https://static01.nyt.com/images/2021/09/06/sports/06nfl-afc-1/merlin_193493604_34c59793-e38e-4907-9048-66679371f316-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        type='post'
    )
    post8 = Post(
        user_id=6,
        body="""Stefon Diggs didn’t mince his words, thinks Josh Allen is the quarterback of his destiny. Stefon Diggs was a good receiver during his first several seasons with the Minnesota Vikings, but he wasn't great. When the Buffalo Bills made an aggressive move to trade for the wideout during the 2020 offseason, that was when he really blossomed. Why? Well, a great quarterback - Josh Allen - can also help a great receiver in Diggs.

In a recent episode of Bleacher Report's "The Voncast," Diggs told his all-world Bills teammate Von Miller about what it was like to finally connect with Allen roughly two years ago. When Miller asked Diggs about what Allen was able to do for his career, the star receiver was quite passionate and didn't hold back the praise for his star quarterback.

If anything, it seems Diggs credits Allen for helping him become a household name (and vice versa).

"When I first got to Buffalo, it was like it worked in tandem," he said, explaining how the team encourages players to be themselves and he and Allen had natural chemistry.

"If you got a good quarterback, you got something," he continued. "I'm grateful 'cause I've had some good quarterbacks in the past, shoutout to them. But this that quarterback that God had for me at the end of the tunnel. 'I've got something for you. Just make sure you're sharpening your blade. When it's time, it's going to cut.""",
        image='https://www.gannett-cdn.com/-mm-/b4c760c8db21a6bd93f42e41a742fa52de42f2c7/c=0-83-3695-2161/local/-/media/2022/10/12/USATODAY/usatsports/USATSI_17479875-e1665609189878.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp',
        type='post'
    )
    post9 = Post(
        user_id=8,
        body="""It didn’t take long for Steelers Nation to adorn tight end Pat Freiermuth with a nickname.

Just as fans chanted “HEEEAAATH!” after Pittsburgh Steelers great Heath Miller made a play, they chant “MUUUUUTH!” when Freiermuth does.
The tight end said that teammate Cam Heyward pointed it out after making one of his first catches this season. “It was low,” Freiermuth told Steelers.com reporter Missi Matthews in an interview this season. “There were barely any people [chanting it], and I was confused, but I caught on pretty quick.”

Freiermuth said it got more noticeable as the season went on. “It gives me energy after I make a catch, and I love it.”

Freiermuth much rather prefers Muth over the other nickname he’s heard since high school.""",
        image='https://steelerswire.usatoday.com/wp-content/uploads/sites/76/2021/10/USATSI_17068685-1.jpg?w=1000&h=600&crop=1',
        type='post'
    )
    post10 = Post (
        user_id=3,
        body="""An important trait in a friendship is honesty. A good friend tells the truth. It shouldn’t be done in a mean-spirited way, but when people’s friends are honest with them it allows for better decision-making and even self-improvement.

Micah Parsons is on his way to both the Pro Football and Homeboy Hall of Fame. He was outstanding as a rookie for the Dallas Cowboys in 2021, dominating both as an inside linebacker and a pass rusher. As great as he played—he recorded 13 sacks—it still might be a stretch to say he had the best season of any defensive player in the league last season, but there would be no fault in him saying that. Borderline irrational self-confidence is part of what allows football players to get into high-speed collisions on foot at least 17 times per season.

However, the 2021 Defensive Rookie of the Year and first-team All-Pro Parsons would bestow the honor upon Trevon Diggs — also a first-team All-Pro performer.But it’s not a friend’s job to read PFF articles, and rankings, and go into deep analysis about another friend. A friend’s job is to defend other friends even if the argument is flawed. Parsons went to bat for Diggs, and that’s the kind of person anyone would want to share a huddle with.
Yes, Diggs was an interception machine last season. At times it looked more like he was returning punts than playing in pass coverage. He intercepted the ball 11 times in 2021. No player has totaled that many since 1981. Turnovers are game-changers in football, unlike any other sport. Give the opposing team one extra possession, and that can be the difference in the game and the season.""",
        image='https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/6-W17MGHdtiFmpOpvJah5tnzNvM=/1660x934/filters:focal(2684x371:2694x361):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/VO6VT5A3TRAUJKTKI6XXSYFQ6Y.jpg',
        type='post'
    )
    post11 = Post (
        user_id=9,
        body="""
        SuperBowl Predictions
        NFC
        #1 Eagles
        #2 Vikings vs #7 Lions
        #3 49ers vs # #6 Commanders
        #4 Buccaneers vs #5  Cowboys

        AFC
        #1 Chiefs
        #2 Bills vs #7 Chargers
        #3 Bengals vs # #6 Ravens
        #4 Titans vs #5 Dolphins
        """,
        image='https://library.sportingnews.com/2022-01/nfl-playoff-bracket-012422-ftr_26e8d3ui7h0l10gh7bx70m7lh.png',
        type='post'
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
