import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { List, ListItem } from '../../shared'

function SendToday() {
  const { updateValue } = useRouter()
  const { sendToday } = useSelector((state) => {
    return {
      ...pick(state.server, ['sendToday']),
    }
  })

  return (
    <List
      title={`${sendToday.titleText} ${sendToday.highlightedTitleText}`}
      direction="row"
      hasItems={sendToday.items.length > 0}
    >
      {sendToday.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            className="flex-col max-w-46 border border-transparent hover:border-red-600"
            imageSize={180}
            {...pick(item, [
              'productDetailUrl',
              'imageUrl',
              'prdNm',
              'finalPrc',
              'unitTxt',
              'deliveryPriceText',
              'advrtStmt',
              'sellerUrl',
              'sellerNickName',
              'sendTodayTxt',
              'optPrcText',
              'pricePrefix',
              'sellerUrl',
              'sellerNickName',
              'sendTodayTxt',
              'sendTodayTimeTxt',
            ])}
          />
        )
      })}
      <button
        onClick={() => {
          updateValue(
            {
              benefits: 'TODAY_SHIPPING',
            },
            true
          )
        }}
        className="absolute top-0 right-0"
      >
        전체보기
      </button>
    </List>
  )
}

export default SendToday
