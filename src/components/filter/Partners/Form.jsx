import { groupBy } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Sort, Checkbox } from '../../shared'

function Form({ handleHide }) {
  const { query, updateValue } = useRouter()
  const { partnersAllFilterJson } = useSelector((state) => {
    return {
      ...state.server.partnersFilterJson,
    }
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const values = Array.from(e.target.sellerNos)
          .filter((input) => input.checked)
          .map((input) => input.value)

        updateValue({
          sellerNos: values,
        })

        handleHide()
      }}
    >
      <Sort
        defaultKey="groupBy"
        items={[
          { label: '유형별', key: 'groupBy' },
          { label: '가나다순', key: 'charBy' },
        ]}
      >
        {({ sortKey }) => {
          const groupBySubText = groupBy(partnersAllFilterJson.items, 'subText')

          return sortKey === 'groupBy' ? (
            <div className="flex flex-col gap-6 mt-6">
              {Object.keys(groupBySubText).map((label, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-bold">{label}</span>
                  <div className="flex-1 flex flex-wrap">
                    {groupBySubText[label].map((item) => {
                      return (
                        <Checkbox
                          key={item.sellerNos}
                          name="sellerNos"
                          label={item.text}
                          defaultChecked={query.sellerNos.includes(
                            item.sellerNos
                          )}
                          value={item.sellerNos}
                          className="w-1/4 pb-2 pr-2"
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap">
              {partnersAllFilterJson.items.map((item) => (
                <Checkbox
                  key={item.sellerNos}
                  name="sellerNos"
                  label={item.text}
                  defaultChecked={query.sellerNos.includes(item.sellerNos)}
                  value={item.sellerNos}
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
