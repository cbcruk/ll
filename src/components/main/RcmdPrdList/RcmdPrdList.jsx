import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'

function RcmdPrdList() {
  const { rcmdPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['rcmdPrdList']),
    }
  })

  return (
    <List
      title="추천상품"
      direction="row"
      hasItems={rcmdPrdList.items.length > 0}
    >
      {rcmdPrdList.items.map((item) => {
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
            ])}
          />
        )
      })}
    </List>
  )
}

export default RcmdPrdList