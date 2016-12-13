import uuid from 'uuid'

export const addInquiry = (startDatetime, endDatetime, prompt, description, tags) => {
  return {
    type: 'ADD_INQUIRY',
    id: uuid.v4(),
    startDatetime,
    endDatetime,
    prompt,
    description,
    tags
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
//
// export const toggleInquiry = (id) => {
//   return {
//     type: 'TOGGLE_INQUIRY',
//     id
//   }
// }
