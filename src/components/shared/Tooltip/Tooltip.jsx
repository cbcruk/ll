import React from 'react'
import { IconClose } from '../Icon'

function Tooltip({ title, children, handleHide }) {
  return (
    <div className="absolute top-4 left-full z-10 w-screen-md max-h-screen-sm overflow-y-auto bg-white shadow">
      <div className="flex items-center justify-between sticky top-0 p-4 border-b border-gray-200 bg-white">
        {title}
        <button type="button" onClick={() => handleHide()} className="ml-auto">
          <IconClose />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export default Tooltip
