import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import List from '../../shared/List'
import ListItem from '../../shared/ListItem'
import Seller from '../../shared/ListItem/Seller'

function CommonPrdList() {
  const { commonPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['commonPrdList']),
    }
  })

  if (!commonPrdList) {
    return null
  }

  return (
    <List title="일반상품" hasItems={commonPrdList.items.length > 0}>
      {commonPrdList.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            {...pick(item, [
              'productDetailUrl',
              'imageUrl',
              'productDetailUrl',
              'prdNm',
              'buySatisfyScore',
              'reviewCount',
              'finalPrc',
              'unitTxt',
              'unitPrice',
              'deliveryPriceText',
              'ctlgCompareBtnUrl',
              'catalogText',
              'catalogCountText',
              'optPrcText',
              'advrtStmt',
              'benefitTextInfo',
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

export default CommonPrdList
