import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import studentReducer from './students/studentReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'student',
    ]
}

const rootReducer = combineReducers({
    student: studentReducer,
})

export default persistReducer(persistConfig, rootReducer);