import React from 'react'
import { IconExpandLess } from '../Icon'

function Button({ children, ...props }) {
  return (
    <button className="flex items-center text-xs text-gray-500" {...props}>
      {children} <IconExpandLess className="fill-gray-400" />
    </button>
  )
}

export default Button
