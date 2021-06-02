import clsx from 'clsx'
import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { IconGridView, IconListAlt } from '../../shared/Icon'
import Radio from '../../shared/Radio'

function Header() {
  const { query, updateValue } = useRouter()
  const { totalCount, sortCodes } = useSelector((state) => {
    return {
      ...pick(state.server, ['totalCount', 'sortCodes']),
    }
  })

  return (
    <div className="flex items-center justify-between pb-4">
      <div>검색결과 {parseInt(totalCount, 10).toLocaleString()}건</div>
      <div className="flex items-center gap-4">
        <select
          value={query.sortCd}
          onChange={(e) => {
            updateValue({
              sortCd: e.target.value,
            })
          }}
          className="border-gray-300 rounded-md pl-1 py-1 w-auto"
        >
          {sortCodes.map((option) => {
            return (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            )
          })}
        </select>

        <div className="flex items-center gap-2">
          {['L', 'I'].map((key) => {
            const iconClassName = clsx('fill-gray-400', {
              'fill-red-500': key === query.viewType,
            })

            return (
              <Radio
                key={key}
                name="viewType"
                value={key}
                label={
                  key === 'L' ? (
                    <IconListAlt className={iconClassName} />
                  ) : (
                    <IconGridView className={iconClassName} />
                  )
                }
                checked={key === query.viewType}
                onChange={(e) => {
                  updateValue({
                    viewType: e.target.value,
                  })
                }}
                className="hidden"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
