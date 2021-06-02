import React from 'react'
import {
  IconArrowDownward,
  IconArrowUpward,
  IconNew,
  IconRemove,
} from '../../shared/Icon'

function Icon({ name }) {
  switch (name) {
    case 'new':
      return <IconNew className="fill-red-500" width="20" height="20" />
    case 'steady':
      return <IconRemove className="fill-gray-500" width="16" height="16" />
    case 'up':
      return <IconArrowUpward className="fill-red-500" width="16" height="16" />
    case 'down':
      return (
        <IconArrowDownward className="fill-blue-500" width="16" height="16" />
      )
    default:
      return null
  }
}

export default Icon
