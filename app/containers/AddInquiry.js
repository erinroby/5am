import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import InquiryForm from '../components/Form'
import { addInquiry } from '../actions/actionsIndex'

let AddInquiry = ({ dispatch }) => {
  return (
    <div className='AddInquiry'>
      <InquiryForm onSubmit={(values) => {
        dispatch(addInquiry(
          values.prompt,
          values.startDatetime,
          values.endDatetime,
          values.description,
          values.tags.split(',')
        ))
        dispatch(reset('InquiryForm'))
      }} />
    </div>
  )
}

export default connect()(AddInquiry)
