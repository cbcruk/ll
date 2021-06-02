import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'
import Seller from '../../shared/ListItem/Seller'

function PowerPrdList() {
  const { powerPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['powerPrdList']),
    }
  })

  return (
    <List title="파워상품" hasItems={powerPrdList.items.length > 0}>
      {powerPrdList.items.map((item) => {
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

export default PowerPrdList
