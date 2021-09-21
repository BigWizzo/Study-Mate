import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SubjectList from './components/subjects/SubjectList';
import StudentLogin from './components/students/StudentLogin';
import Page404 from './components/Page404/Page404';
import ClockingsList from './components/clockings/ClockingsList';
import StudentCreate from './components/students/StudentCreate';
import ClockingItemDetails from './components/clockings/ClockingItemDetails';
import SubjectNew from './components/subjects/SubjectNew';
import ClockingNew from './components/clockings/ClockingNew';
import ClockingEdit from './components/clockings/ClockingEdit';
import BottomNav from './components/navbar/BottomNav';
import Appheader from './components/header/Appheader';

function App({ student }) {
  return (
    <>
      <Appheader />
      <div className="container-fluid">
        <Switch>
          <Route path="/" component={SubjectList} exact />
          <Route path="/study-mate-frontend" component={SubjectList} />
          <Route path="/subjects" component={SubjectList} />
          <Route path="/login" component={StudentLogin} />
          <Route path="/signup" component={StudentCreate} />
          <Route path="/subjects/new" component={SubjectNew} />
          <Route path="/subjects/:id" component={ClockingsList} />
          <Route path="/clockings/new" component={ClockingNew} />
          <Route path="/clockings/:id" component={ClockingItemDetails} exact />
          <Route path="/clockings/:id/edit" component={ClockingEdit} exact />
          <Route component={Page404} />
        </Switch>
      </div>
      {student && <BottomNav />}
    </>
  );
}

App.propTypes = {
  student: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student.student,
});

export default connect(mapStateToProps)(App);
