import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import studentReducer from './students/studentReducer';
import subjectReducer from './subjects/subjectReducer';
import clockingReducer from './clockings/clockingReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['student', 'subject', 'clocking'],
};

const rootReducer = combineReducers({
  student: studentReducer,
  subjects: subjectReducer,
  clockings: clockingReducer,
});

export default persistReducer(persistConfig, rootReducer);
