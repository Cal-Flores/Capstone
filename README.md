# Fourth Quorra

Fourth Quorra is a website clone of Quora. Quora is an online community to ask questions, share posts and interact with other users via a follow and upvote downvote system. This is the perfect site for those who enjoy scrollling and having an interactive feed with your interests. Fourth Quorra specializes in American Football related content.


# Wiki
Information about this project:
- [Feature List](https://github.com/Cal-Flores/Capstone/wiki/Features-List)

- [Database Schema](https://github.com/Cal-Flores/Capstone/wiki/DB-Schema)

- [User Stories](https://github.com/Cal-Flores/Capstone/wiki/User-Stories)


# Technologies used
 - [<img src='https://img.shields.io/badge/-flask-yellow' alt='Javascript Logo'  target='_blank'/>](https://flask.palletsprojects.com/en/2.2.x/)
 - [<img src='https://img.shields.io/badge/-React-blue' alt='React Logo' target='_blank'/>](https://reactjs.org/)
 - [<img src='https://img.shields.io/badge/-HTML5-orange' alt='HTML Logo' target='_blank'/>](https://html.com/)
 - [<img src='https://img.shields.io/badge/-CSS-blue' target='_blank'/>](https://www.w3.org/Style/CSS/Overview.en.html)
 - [<img src='https://img.shields.io/badge/-postgres-lightgrey' target='_blank'/>](https://www.postgresql.org/)
 - [<img src='https://img.shields.io/badge/-render-purple' target='_blank'/>](https://render.com/)


# Getting Started

1. Clone the repo
```
git clone https://github.com/Cal-Flores/Capstone.git
```

2. Install Packages
```
pipenv install
cd react-app
npm install
```

3. Create a .env file and set the environment variables for SECRET_KEY and DATABASE_URL to your choosing.

4. Migrate and seed the files.
```
flask run db init
flask run migrate
flask seed all
```
5. Run the server and start the react app
```
pipenv run flask run
cd react-app
npm start
```


# The App

The Home page of Fourth Quora displays to all users the questions from the database as well as use of the search bar. To interact with the questions you must be logged in. Once logged in you have access to all questions comments and the ability to view your activity on the platform such as questions and answers you have posted. Logged in users gain the ability to ask questions.
 ![homeimage](ReadmeFeatures/Homeimage.png)


 When clicking on a question title in the home page you are redirected to the individual Questions page. On this page all answers belonging to the question are displayed. You may also create a question here to be posted for all logged in users to see. Related questions also appears here for users to navigate to.
 ![Questiondetail](ReadmeFeatures/Questiondetail.png)

Logged in users can view all thier activity including questions they have asked as well as Answers they have posted. This page allows users to edit and delete any content they have posted, as well as the ability to navigate to the questions that have been asked/answered.
![mycontent](ReadmeFeatures/mycontent.png)

<!-- The use of modals for logging in, signing up, creating and editing a question and answer are heavily utilized.
![questionmodal](readmeFeatures/questionmodal.png)
![loginmodal](readmeFeatures/loginmodal.png) -->

## Road Map for the future
- <s> creating posts to include images. </s>
- The ability to set tags on posts/questions.
- <s> The abilty to delete and edit a Booking you have made. </s>
- The ability to reply to a comment

## Code im proud of

```
search_routes = Blueprint('search', __name__)

@search_routes.route('', methods=['GET', 'POST'])
def index():

    form = SearchForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        if len(form.data['search']) < 3:
            return 'Search requires 3 characters minimun'

        else:
            results = form.data['search']
            results = results.lower()
            questions = Question.query.all()
            posts = Post.query.all()
            all_quest = []
            for i in questions:
                if results in i.title.lower() or results in i.body.lower():
                    all_quest.append(
                        {
                            'id': i.id,
                            'user_id': i.user_id,
                            'title': i.title,
                            'body': i.body,
                            'image': i.image
                        })
            for x in posts:
                if results in x.body.lower():
                    all_quest.append(
                        {
                            'id': x.id,
                            'user_id': x.user_id,
                            'body': x.body,
                            'image': x.image
                        }
                    )
            return {'questions': all_quest }
    return 'Bad Request'

```
This is my backend route to handle searchs! The search bar on the frontend is a form, using WTForms I gather the data the user inputs. First we make sure they inputed data is enough letters for a competent search (there is also a frontend validator). Then we take the string the user provided and lower case it so the user does not have to worry about capitilization. We then iterate our data base to query if a question title or body, lower cased, contains the users input. We do the same method to a post, and if there is a match we push that question/post into an array. We then pass this array to our frontend so the component may display all relevant content.

```
function AllQuestions() {
    const dispatch = useDispatch()
    let questions = useSelector(state => state.questions.Questions)
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts.Posts)

    const data = posts
    const shuffledData = questions?.concat(posts)
    // const shuffledData = data?.sort((a, b) => 0.5 - Math.random());
    function DateComparator(dateAPair, dateBPair) {

        var DateA = new Date(dateAPair.created);
        var DateB = new Date(dateBPair.created);
        if (DateA < DateB) {
            return -1;
        } else if (DateA > DateB) {
            return 1;
        } else {
            return 0;
        }
    }

    shuffledData?.sort(DateComparator);
```
This is my sorting algorithm comparing an array of objects by thier time created. first we cincat two arrays and then pass it to the helper function.
The function compares the first two entries in the array, and creates new dates then compares them. 
