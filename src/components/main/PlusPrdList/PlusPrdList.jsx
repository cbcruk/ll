import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'
import Seller from '../../shared/ListItem/Seller'

function PlusPrdList() {
  const { plusPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['plusPrdList']),
    }
  })

  if (!plusPrdList) {
    return null
  }

  return (
    <List title="플러스상품" hasItems={plusPrdList.items.length > 0}>
      {plusPrdList.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            {...pick(item, [
              'productDetailUrl',
              'imageUrl',
              'prdNm',
              'buySatisfyScore',
              'reviewCount',
              'finalPrc',
              'unitTxt',
              'unitPrice',
              'deliveryPriceText',
              'optPrcText',
              'advrtStmt',
              'ctlgCompareBtnUrl',
              'catalogText',
              'catalogCountText',
              'plusUp',
              'promotionFlagInfo',
            ])}
          >
            <Seller
              {...pick(item, [
                'sellerUrl',
                'sellerNickName',
                'sendTodayTxt',
                'sendTodayTimeTxt',
              ])}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default PlusPrdList
