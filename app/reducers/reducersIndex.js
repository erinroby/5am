import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import inquiries from './inquiries'
import visibilityFilter from './visibilityFilter'

const inquiryApp = combineReducers({
  form: formReducer,
  inquiries,
  visibilityFilter
})

export default inquiryApp
