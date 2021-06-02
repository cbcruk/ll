import clsx from 'clsx'
import React from 'react'

function List({ title, direction, hasItems, children }) {
  if (!hasItems) {
    return null
  }

  return (
    <div className="relative flex flex-col gap-2">
      <h2 className="font-bold text-lg">{title}</h2>
      <div
        className={clsx('flex gap-4', {
          'flex-col': direction !== 'row',
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default List
