import clsx from 'clsx'
import React from 'react'
import Rate from './Rate'

function ListItem({
  productDetailUrl,
  imageUrl,
  prdNm,
  buySatisfyScore,
  reviewCount,
  finalPrc,
  unitTxt,
  unitPrice,
  deliveryPriceText,
  ctlgCompareBtnUrl,
  catalogText,
  catalogCountText,
  sendTodayTxt,
  sendTodayTimeTxt,
  benefitTextInfo,
  advrtStmt,
  optPrcText,
  discountText,
  pricePrefix,
  selQty,
  sellerNickName,
  sellerUrl,
  plusUp,
  promotionFlagInfo,
  type,
  className,
  children,
  imageSize = 180,
}) {
  const isColumn = (className ?? '').includes('flex-col')

  return (
    <div
      className={clsx('flex border-t-1', className, {
        'pt-4': !isColumn,
        'gap-4': !isColumn,
      })}
    >
      <a href={productDetailUrl}>
        <img src={imageUrl} alt="" width={imageSize} height={imageSize} />
      </a>
      <div className="flex flex-col flex-1 gap-1 p-1">
        {promotionFlagInfo && (
          <div className="flex items-center gap-2">
            {promotionFlagInfo.map((info, index) => (
              <span
                key={index}
                className="text-xs border p-0.5"
                style={{
                  color: `#${info.color}`,
                  backgroundColor: `#${info.color}0a`,
                  borderColor: `#${info.color}66`,
                }}
              >
                {info.title}
              </span>
            ))}
          </div>
        )}
        <a href={productDetailUrl}>{prdNm}</a>
        {buySatisfyScore && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Rate score={buySatisfyScore} />
            리뷰 {parseInt(reviewCount, 10).toLocaleString()}건
          </div>
        )}
        {discountText && <div className="text-red-500">{discountText}</div>}
        {finalPrc && (
          <div className="flex items-center gap-2">
            <span
              className={clsx({
                'text-red-500': type === 'priceCompare',
              })}
            >
              {pricePrefix ?? ''}
              <span className="font-bold text-lg">{finalPrc}</span>
              {unitTxt}
              {optPrcText ?? ''}
            </span>
            <span className="text-gray-400">{unitPrice}</span>
          </div>
        )}
        {deliveryPriceText && (
          <div className="text-xs text-gray-500">{deliveryPriceText}</div>
        )}
        {selQty && <div className="text-xs text-gray-500">{selQty}개 구매</div>}
        {sendTodayTxt && (
          <div className="text-xs">
            <span className="text-blue-400">{sendTodayTxt}</span>{' '}
            {sendTodayTimeTxt}
          </div>
        )}
        {sellerNickName && <a href={sellerUrl}>{sellerNickName}</a>}
        {benefitTextInfo &&
          benefitTextInfo.map((info, index) => {
            return (
              <div key={index}>
                {info.benefitText1}{' '}
                <span className="text-blue-400">{info.benefitBlueText}</span>
                {info.benefitText2}
              </div>
            )
          })}
        <div className="flex justify-between items-center mt-2 text-xs">
          {advrtStmt && <div className="text-green-600">{advrtStmt}</div>}
          <div className="flex items-center gap-2">
            {plusUp && <div className="text-gray-400">플러스up</div>}
            {ctlgCompareBtnUrl && (
              <a
                href={ctlgCompareBtnUrl}
                className="rounded-full p-2 border border-gray-300"
              >
                {catalogText}{' '}
                <span className="font-bold">{catalogCountText}개</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex ml-auto">{children}</div>
    </div>
  )
}

export default ListItem
