import clsx from 'clsx'
import React from 'react'

function Switch({ checked, handleChange }) {
  return (
    <label
      className={clsx('relative inline-block w-9 h-4 rounded-full', {
        'bg-gray-300': !checked,
        'bg-red-300': checked,
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="absolute opacity-0"
      />
      <div
        className={clsx(
          'absolute top-1/2 left-0 w-5 h-5 rounded-full bg-white shadow transform -translate-y-1/2 transition-all',
          {
            'translate-x-full': checked,
            'bg-red-500': checked,
          }
        )}
      />
    </label>
  )
}

export default Switch
