import React, { useState } from 'react'
import useRouter from '../../../hooks/useRouter'
import { Fieldset, Radio } from '../../shared'

function ReSearch() {
  const { updateValues } = useRouter()
  const [name, setName] = useState('previousKwd')

  return (
    <Fieldset legend="결과내 재검색" canToggle>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()

          updateValues({
            checked: true,
            name: name,
            value: e.target.search.value.trim(),
          })

          e.target.reset()
        }}
      >
        <div className="flex items-center gap-2">
          {[
            {
              label: '포함',
              key: 'previousKwd',
            },
            {
              label: '제외',
              key: 'previousExcptKwd',
            },
          ].map(({ label, key }) => (
            <Radio
              key={key}
              name="kwd"
              label={label}
              checked={name === key}
              handleChange={() => setName(key)}
            />
          ))}
        </div>

        <input
          type="search"
          name="search"
          placeholder="검색어 입력"
          className="w-full h-8 text-xs border-gray-300 placeholder-gray-400"
        />
      </form>
    </Fieldset>
  )
}

export default ReSearch
