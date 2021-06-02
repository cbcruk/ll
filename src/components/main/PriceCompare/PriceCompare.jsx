import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem } from '../../shared'
import Compare from '../../shared/ListItem/Compare'

function PriceCompare() {
  const { priceCompare } = useSelector((state) => {
    return {
      ...pick(state.server, ['priceCompare']),
    }
  })

  return (
    <List title="가격비교" hasItems={priceCompare.items.length > 0}>
      {priceCompare.items.map((item) => {
        return (
          <ListItem
            key={item.prdNo}
            type="priceCompare"
            {...pick(item, [
              'productDetailUrl',
              'imageUrl',
              'prdNm',
              'buySatisfyScore',
              'reviewCount',
              'pricePrefix',
              'finalPrc',
              'unitTxt',
              'catalogText',
              'catalogCountText',
              'modelExactSellers',
              'buyUrl',
              'optPrcText',
              'pricePrefix',
            ])}
          >
            <Compare
              {...pick(item, [
                'catalogText',
                'catalogCountText',
                'modelExactSellers',
                'buyUrl',
              ])}
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default PriceCompare
