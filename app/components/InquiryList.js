import React, { PropTypes } from 'react'
import Inquiry from './Inquiry'

const InquiryList = ({ inquiries }) =>
  <div>
    {inquiries.map((inquiry) =>
      <Inquiry
        key={inquiry.id}
        {...inquiry}
      />
    )}
  </div>

const propTypes = {
  inquiries: PropTypes.arrayOf(PropTypes.shape({
    startDatetime: PropTypes.string.isRequired,
    endDatetime: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // photo: PropTypes.shapeOf({
    //   name: PropTypes.string.isRequired,
    //   url: PropTypes.string.isRequired
    // }).isRequired,
    tags: PropTypes.array
  }).isRequired).isRequired
}

export default Object.assign(InquiryList, { propTypes })
