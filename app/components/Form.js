import React from 'react'
import { Field, reduxForm } from 'redux-form'

const InquiryForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Inquiry</label>
      <div>
        <Field name='prompt' component='input' type='text' placeholder='Inquiry Here' />
      </div>
    </div>
    <div>
      <label>Start</label>
      <div>
        <Field name='startDatetime' component='input' type='text' placeholder='When to begin.' />
      </div>
    </div>
    <div>
      <label>End</label>
      <div>
        <Field name='endDatetime' component='input' type='text' placeholder='When to end.' />
      </div>
    </div>
    <div>
      <label>Tell me more!</label>
      <div>
        <Field name='description' component='textarea' />
      </div>
    </div>
    <div>
      <label>Tags</label>
      <div>
        <Field name='tags' component='input' type='text' placeholder='Tags' />
      </div>
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
  </form>

export default reduxForm({
  form: 'inquiry'
})(InquiryForm)
