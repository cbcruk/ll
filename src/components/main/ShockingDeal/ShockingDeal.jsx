import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'

function ShockingDeal() {
  const { shockingDeal } = useSelector((state) => {
    return {
      ...pick(state.server, ['shockingDeal']),
    }
  })

  return (
    <List
      title="쇼킹딜"
      direction="row"
      hasItems={shockingDeal.items.length > 0}
    >
      {shockingDeal.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            className="flex-col max-w-46 border border-transparent hover:border-red-600"
            imageSize={180}
            {...pick(item, [
              'prdNo',
              'productDetailUrl',
              'imageUrl',
              'prdNm',
              'finalPrc',
              'unitTxt',
              'deliveryPriceText',
              'sendTodayTxt',
              'sendTodayTimeTxt',
              'benefitTextInfo',
              'advrtStmt',
              'optPrcText',
              'discountText',
              'selQty',
              'sellerNickName',
              'sellerUrl',
            ])}
          />
        )
      })}
    </List>
  )
}

export default ShockingDeal
