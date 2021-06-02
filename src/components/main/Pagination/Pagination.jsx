import clsx from 'clsx'
import { pick, range } from 'lodash'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { SkipButton } from '../../shared'

function Pagination() {
  const { updateValue } = useRouter()
  const pagination = useSelector((state) =>
    pick(state.server, ['curPage', 'totalPage', 'totalCount'])
  )
  const { curr, prev, next, end, last, list } = useMemo(() => {
    const start = 10 * parseInt((pagination.curPage - 1) / 10) + 1
    const end = 10 * parseInt((pagination.curPage - 1) / 10) + 10

    return {
      start,
      end,
      curr: parseInt(pagination.curPage, 10),
      prev: 10 * parseInt((pagination.curPage - 1) / 10),
      next: 10 * parseInt((pagination.curPage - 1) / 10) + 11,
      last: parseInt(pagination.totalPage, 10),
      list: range(start, end + 1),
    }
  }, [pagination])

  return (
    <div className="flex items-center justify-center gap-4 py-10 text-gray-400">
      {prev !== 0 && (
        <SkipButton
          direction="prev"
          onClick={() => {
            updateValue({
              pageNo: prev,
            })
          }}
        />
      )}

      {list.map((item) => (
        <button
          key={item}
          onClick={() => {
            updateValue({
              pageNo: item,
            })
          }}
          className={clsx('', {
            'text-black': item === curr,
            'font-bold': item === curr,
          })}
        >
          {item}
        </button>
      ))}

      {end < last && (
        <SkipButton
          direction="next"
          onClick={() => {
            updateValue({
              pageNo: next,
            })
          }}
        />
      )}
    </div>
  )
}

export default Pagination
