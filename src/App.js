import { Route, Switch } from 'react-router-dom';
import SubjectList from './components/subjects/SubjectList';
import StudentLogin from './components/students/StudentLogin';
import Page404 from './components/Page404/Page404';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={SubjectList} exact />
        <Route path="/login" component={StudentLogin} />
        <Route component={Page404} />
      </Switch>
    </main>
  );
}

export default App;
