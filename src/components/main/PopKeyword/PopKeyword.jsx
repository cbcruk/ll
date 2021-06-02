import clsx from 'clsx'
import { chunk, pick } from 'lodash'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SkipButton } from '../../shared'
import { getStatus } from './helpers'
import Icon from './Icon'

function PopKeyword() {
  const { popKeyword } = useSelector((state) => {
    return {
      ...pick(state.server, ['popKeyword']),
    }
  })
  const [page, setPage] = useState(1)
  const total = popKeyword.count / 10
  const group = chunk(popKeyword.items, 10)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          실시간 쇼핑 검색어
          <span className="text-xs font-normal text-blue-300">
            {popKeyword.date}
          </span>
        </h2>
        <div className="flex items-center gap-2">
          <SkipButton
            direction="prev"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          />
          <span className="font-bold ml-2 mr-2">
            {page}
            <span className="text-gray-300 font-normal"> / {total}</span>
          </span>
          <SkipButton
            direction="next"
            disabled={page === total}
            onClick={() => setPage(page + 1)}
          />
        </div>
      </div>
      <div className="flex">
        {[
          [0, 5],
          [5, 10],
        ].map((range, index) => {
          return (
            <div key={range.join()} className="flex-1">
              {group[page - 1].slice(...range).map((item) => {
                const status = getStatus(item.rankOrder)

                return (
                  <div
                    key={item.currentRank}
                    className={clsx(
                      'relative p-4 border not-first-of-type:-mt-px hover:border-red-400 hover:z-1 text-md',
                      {
                        '-ml-px': index === 1,
                      }
                    )}
                  >
                    <a href={item.pcSearchLink} className="flex items-center">
                      <span className="text-red-400 font-bold">
                        {item.currentRank}
                      </span>
                      <span className="ml-2">
                        {item.keyword}
                        <span className="text-gray-400 text-xs ml-2">
                          {item.explanation}
                        </span>
                      </span>
                      <span className="ml-auto">
                        <Icon name={status[0]} />
                      </span>
                    </a>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopKeyword
