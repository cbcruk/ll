import React from 'react'

function Rate({ score }) {
  return (
    <span
      className="block relative rounded-lg bg-gray-200 overflow-hidden"
      style={{
        width: 54,
        height: 10,
      }}
      title={score}
    >
      <span
        className="absolute left-0 top-0 h-full bg-yellow-300"
        style={{
          width: `${(score / 5) * 100}%`,
        }}
      />
    </span>
  )
}

export default Rate
