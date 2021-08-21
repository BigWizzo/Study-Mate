import { Route, Switch } from 'react-router-dom';
import SubjectList from './components/subjects/SubjectList';
import StudentLogin from './components/students/StudentLogin';
import Page404 from './components/Page404/Page404';
import NavBar from './components/navbar/NavBar';
import ClockingsList from './components/clockings/ClockingsList';
import StudentCreate from './components/students/StudentCreate';
import StudentLogout from './components/students/StudentLogout';
import ClockingItemDetails from './components/clockings/ClockingItemDetails';
import SubjectNew from './components/subjects/SubjectNew';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route path="/" component={SubjectList} exact />
          <Route path="/login" component={StudentLogin} />
          <Route path="/signup" component={StudentCreate} />
          <Route path="/login" component={StudentLogout} />
          <Route path="/subjects/new" component={SubjectNew} />
          <Route path="/subjects/:id" component={ClockingsList} />
          <Route path="/clockings/:id" component={ClockingItemDetails} />
          <Route component={Page404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
