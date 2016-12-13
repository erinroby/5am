import React, { PropTypes } from 'react'
// import Photo from './Photo'

const Inquiry = ({ startDatetime, endDatetime, prompt, description, photo, tags }) =>
  <div className='Inquiry'>
    <div className='InquiryInfo'>
      <div className='InquiryInfo-datetime'>
        {startDatetime} to {endDatetime}
      </div>
      <div className='InquiryInfo-prompt'>{prompt}</div>
    </div>
    <div className='InquiryInfo-description'>
      {description}
    </div>
    <div className='InquiryInfo-tags'>{tags}</div>
  </div>

const propTypes = {
  // startDatetime: PropTypes.instanceOf(Date).isRequired,
  // endDatetime: PropTypes.instanceOf(Date).isRequired,
  startDatetime: PropTypes.string.isRequired,
  endDatetime: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // photo: PropTypes.shapeOf({
  //   name: PropTypes.string.isRequired,
  //   url: PropTypes.string.isRequired
  // }),
  tags: PropTypes.array
}

export default Object.assign(Inquiry, { propTypes })
