import React from 'react'
import useRouter from '../../../hooks/useRouter'
import { IconSearch } from '../../shared/Icon'

function Kwd() {
  const { query, updateValue } = useRouter()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        updateValue(
          {
            kwd: e.target.kwd.value,
          },
          true
        )
      }}
      className="relative"
    >
      <input
        type="search"
        name="kwd"
        defaultValue={query.kwd}
        className="w-full rounded-3xl border-gray-300 bg-gray-100"
      />
      <button
        type="submit"
        className="absolute top-1/2 right-1 flex items-center justify-center w-8 h-8 p-1 rounded-full bg-red-500 transform -translate-y-1/2"
      >
        <IconSearch />
      </button>
    </form>
  )
}

export default Kwd
