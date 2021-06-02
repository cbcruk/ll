import { sortBy } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Sort } from '../../shared'

function Form({ handleHide }) {
  const { query, updateValue } = useRouter()
  const { brandSubFilterJson } = useSelector((state) => {
    return {
      ...state.server.brandFilterJson,
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const values = Array.from(e.target.brandCd)
          .filter((input) => input.checked)
          .map((input) => input.value)

        updateValue({
          brandCd: values,
        })

        handleHide()
      }}
    >
      <Sort
        defaultKey="rank"
        items={[
          { label: '인기순', key: 'rank' },
          { label: '가나다순', key: 'charIndex' },
        ]}
      >
        {({ sortKey }) => {
          return (
            <div className="flex flex-wrap">
              {sortBy(brandSubFilterJson.items, sortKey).map((item) => (
                <Checkbox
                  key={item.code}
                  name="brandCd"
                  label={item.name}
                  defaultChecked={query.brandCd.includes(item.code)}
                  value={item.code}
                  className="w-1/4 p-2 pl-0"
                />
              ))}
            </div>
          )
        }}
      </Sort>

      <div className="flex justify-center pt-2 mt-10">
        <button type="submit" className="p-2 bg-red-400 text-white">
          선택 완료
        </button>
      </div>
    </form>
  )
}

export default Form
