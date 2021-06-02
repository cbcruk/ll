import React, { useReducer } from 'react'

const initialState = {
  minPrice: 0,
  maxPrice: 0,
}

function Form({ handleSubmit }) {
  const [price, dispatch] = useReducer((prev, payload) => {
    return {
      ...prev,
      ...payload,
    }
  }, initialState)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        handleSubmit(price)

        dispatch(initialState)

        e.target.reset()
      }}
      className="flex gap-2 items-center mt-2"
    >
      <input
        type="number"
        placeholder="최저가"
        onChange={(e) =>
          dispatch({
            minPrice: parseInt(e.target.value, 10),
          })
        }
        className="w-24 h-8 text-xs border-gray-300 placeholder-gray-400"
      />
      ~
      <input
        type="number"
        placeholder="최고가"
        onChange={(e) =>
          dispatch({
            maxPrice: parseInt(e.target.value, 10),
          })
        }
        className="w-24 h-8 text-xs border-gray-300 placeholder-gray-400"
      />
    </form>
  )
}

export default Form
