import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import LoginForm from './components/auth/LoginForm';
//import SignUpForm from './components/auth/SignupFormModal/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllQuestions from './components/Splash/splash';
import QuestionDetail from './components/QuestionDetail/questionDetail';
import SingleQuestion from './components/OneQuestionPage/oneQuestion';
//import OwnerQuestions from './components/Owner_questions/owner_questions';
import QuestionForm from './components/CreateQuestionForm/questionForm';
import EditQuestionForm from './components/EditQuestionForm/editQuestionForm';
import EditAnswerForm from './components/EditAnswerForm/editAnswerForm';
import RelatedQuestions from './components/RelatedQuestions/relatedQuestions';
import './index.css'
import LoginForm from './components/LoginFormModal/LoginForm';
import Footer from './components/footer/footer';
import SearchResult from './components/SearchResult/searchresult';
import PostPage from './components/OnePostPage/onepostpage';
import OwnerQuestions from './components/Owner_questions/owner_content';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className='sitewide'>

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/search-results' exact={true}>
            <SearchResult />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/users' exact={true} >
            <UsersList />
          </Route>
          <Route path='/users/:userId' exact={true} >
            <User />
          </Route>
          <Route path='/' exact={true} >
            < AllQuestions />
            <Footer />
          </Route>
          <ProtectedRoute path='/question/:questionId' exact={true}>
            < SingleQuestion />
          </ProtectedRoute>
          <ProtectedRoute path='/post/:postId' exact={true}>
            <PostPage />
          </ProtectedRoute>
          <ProtectedRoute path='/your-contents' exact={true}>
            <OwnerQuestions />
          </ProtectedRoute>
          <ProtectedRoute path='/create-question' exact={true}>
            < QuestionForm />
          </ProtectedRoute>
          <ProtectedRoute path='/editQuestion/:questionId' exact={true}>
            < EditQuestionForm />
          </ProtectedRoute>
          <ProtectedRoute path='/editAnswer/:answerId' exact={true}>
            < EditAnswerForm />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
