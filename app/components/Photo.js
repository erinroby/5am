import React, { PropTypes } from 'react'

const Photo = ({ name, photoURL }) =>
  <img
    scr={photoURL}
    alt={name}
  />

const propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Object.assign(Photo, propTypes)
