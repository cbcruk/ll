import clsx from 'clsx'
import { noop } from 'lodash'
import React from 'react'

function Checkbox({ name, label, handleChange = noop, className, ...props }) {
  const checked = props.defaultChecked ? 'defaultChecked' : 'checked'

  return (
    <label className={clsx('flex items-center gap-1 text-xs', className)}>
      <input
        type="checkbox"
        name={name}
        onChange={(e) => handleChange(e.target.checked)}
        className="rounded border-gray-400 w-4 h-4"
        {...{
          ...props,
          [checked]: props[checked],
        }}
      />
      {label}
    </label>
  )
}

export default Checkbox
