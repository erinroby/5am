import { connect } from 'react-redux'
import InquiryList from '../components/InquiryList'

const getVisibileInqueries = (inquiries, filter) => {
  switch (filter) {
    default:
      return inquiries
  }
}

const mapStateToProps = (state) => {
  return {
    inquiries: getVisibileInqueries(state.inquiries, state.visibilityFilter)
  }
}

const VisibileInquiryList = connect(mapStateToProps)(InquiryList)

export default VisibileInquiryList
