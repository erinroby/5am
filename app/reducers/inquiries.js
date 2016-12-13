const inquiry = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_INQUIRY':
      return {
        startDatetime: action.startDatetime,
        endDatetime: action.endDatetime,
        prompt: action.prompt,
        description: action.description,
        tags: action.tags || [],
        id: action.id
      }
    default:
      return state
  }
}

const inquiries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INQUIRY':
      return [
        ...state,
        inquiry(undefined, action)
      ]
    default:
      return state
  }
}

export default inquiries
