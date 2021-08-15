import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import studentReducer from './students/studentReducer';
import subjectReducer from './subjects/subjectReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['student', 'subject'],
};

const rootReducer = combineReducers({
  student: studentReducer,
  subjects: subjectReducer,
});

export default persistReducer(persistConfig, rootReducer);
