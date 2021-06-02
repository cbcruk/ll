import clsx from 'clsx'
import React from 'react'
import { IconChevronLeft, IconChevronRight } from '../../shared/Icon'

function SkipButton({ direction, ...props }) {
  return (
    <button className="rounded-full shadow p-1" {...props}>
      {React.createElement(
        direction === 'prev' ? IconChevronLeft : IconChevronRight,
        {
          className: clsx({
            'fill-gray-400': props.disabled,
          }),
        }
      )}
    </button>
  )
}

export default SkipButton
