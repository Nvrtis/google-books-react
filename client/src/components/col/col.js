import React from 'react'

const Col = ({ className, ...props }) => (
  <div className={`col-3 ${className}`} {...props} />
)

export default Col