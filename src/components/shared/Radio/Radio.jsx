import React from 'react'

function Radio({ name, label, handleChange, ...props }) {
  return (
    <label className="flex items-center gap-1 text-xs">
      <input
        type="radio"
        name={name}
        onChange={() => handleChange()}
        {...props}
      />
      {label}
    </label>
  )
}

export default Radio
