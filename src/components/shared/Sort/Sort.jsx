import React, { useState } from 'react'
import Radio from '../Radio'

function Sort({ defaultKey, items, children }) {
  const [sortKey, setSortKey] = useState(defaultKey)

  return (
    <>
      <div className="flex gap-2 mb-4">
        {items.map(({ label, key }) => {
          return (
            <Radio
              key={key}
              name="sort"
              label={label}
              checked={sortKey === key}
              handleChange={() => setSortKey(key)}
            />
          )
        })}
      </div>
      {children({
        sortKey,
      })}
    </>
  )
}

export default Sort
