import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { List, ListItem } from '../../shared'
import Compare from '../../shared/ListItem/Compare'

function CatalogPrdList() {
  const { query } = useRouter()
  const { catalogYN } = query
  const { catalogPrdList } = useSelector((state) => {
    return {
      ...pick(state.server, ['catalogPrdList']),
    }
  })

  if (catalogYN === 'N') {
    return null
  }

  if (!catalogPrdList) {
    return null
  }

  return (
    <List title="가격비교 상품" hasItems={catalogPrdList.items.length > 0}>
      {catalogPrdList.items.map((item) => {
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

export default CatalogPrdList
