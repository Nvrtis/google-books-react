import React from 'react'

const Col = ({ className, ...props }) => (
  <div className={`col-12 ${className}`} {...props} />
)

export default Col