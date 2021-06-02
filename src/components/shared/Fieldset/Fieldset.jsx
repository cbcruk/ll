import clsx from 'clsx'
import React, { useReducer } from 'react'
import { IconExpandLess, IconExpandMore } from '../Icon'

function Fieldset({ legend, canToggle, children }) {
  const [state, dispatch] = useReducer((prev) => !prev, true)

  return (
    <div className="relative flex flex-col gap-3 not-first-of-type:pt-4 not-first-of-type:border-t not-first-of-type:mt-4">
      <div className="flex items-center justify-between font-bold">
        {legend}
        {canToggle && (
          <button onClick={() => dispatch()}>
            {state ? <IconExpandMore /> : <IconExpandLess />}
          </button>
        )}
      </div>
      <div
        className={clsx('flex flex-col gap-2', {
          hidden: !state,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default Fieldset
