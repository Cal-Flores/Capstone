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

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
