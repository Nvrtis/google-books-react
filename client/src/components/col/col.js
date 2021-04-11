import React from 'react'

const Col = ({ className, ...props }) => (
  <div className={`col-4 ${className}`} {...props} />
)

export default Col