import clsx from 'clsx'
import React from 'react'
import { IconArrowDownward, IconChevronRight } from '../Icon'

function Compare({ catalogText, catalogCountText, modelExactSellers, buyUrl }) {
  return (
    <div className="flex flex-col min-w-50 border-l pl-4">
      <div className="flex gap-2">
        <span className="font-bold">{catalogText}</span>
        <span className="text-blue-400">{catalogCountText}개</span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {modelExactSellers.map((seller, index) => (
          <div key={seller.prdNo}>
            <a
              href={seller.productDetailUrl}
              className={clsx('flex justify-between', {
                'text-red-400': index === 0,
              })}
            >
              <span className="truncate pr-2">{seller.nckNm}</span>
              <span className="flex items-center">
                {index === 0 && (
                  <IconArrowDownward
                    width="14"
                    height="14"
                    className="fill-red-500"
                  />
                )}
                {parseInt(seller.finalPrc, 10).toLocaleString()}원
              </span>
            </a>
          </div>
        ))}
      </div>
      <a
        href={buyUrl}
        className="flex justify-center items-center w-full p-2 rounded-full border mt-4 text-center"
      >
        최저가 구매하기{' '}
        <IconChevronRight width="20" height="20" className="fill-blue-400" />
      </a>
    </div>
  )
}

export default Compare
