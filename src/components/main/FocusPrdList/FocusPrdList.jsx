import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'
import Seller from '../../shared/ListItem/Seller'

function FocusPrdList() {
  const { focusPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['focusPrdList']),
    }
  })

  return (
    <List title="포커스클릭" hasItems={focusPrdList.items.length > 0}>
      {focusPrdList.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            className="gap-4"
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

export default FocusPrdList
