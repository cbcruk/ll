import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Fieldset } from '../../shared'
import { IconRefresh } from '../../shared/Icon'
import ButtonGroup from './ButtonGroup'

function Selected() {
  const { query, updateValue, removeValue } = useRouter()
  const {
    attributeFilterJson,
    imgAttrFilterJson,
    benefitFilterJson,
    partnersFilterJson,
    brandFilterJson,
    deliverFilterJson,
    categoryFilterJson,
    verticalFilterJson,
  } = useSelector((state) => {
    return {
      ...pick(state.server, [
        'attributeFilterJson',
        'imgAttrFilterJson',
        'partnersFilterJson',
        'benefitFilterJson',
        'brandFilterJson',
        'deliverFilterJson',
        'categoryFilterJson',
        'verticalFilterJson',
      ]),
    }
  })
  const [minPrice, maxPrice] = [query.minPrice, query.maxPrice].map((price) =>
    parseInt(price, 10)
  )
  const [previousKwd, previousExcptKwd] = [
    'previousKwd',
    'previousExcptKwd',
  ].map((key) => (query[key] ? [].concat(query[key]) : []))

  return (
    <Fieldset
      legend={
        <>
          선택된 필터
          <button
            onClick={() => {
              updateValue({}, true)
            }}
            className="inline-flex items-center text-gray-400 text-xs"
          >
            초기화{' '}
            <IconRefresh width="16" height="16" className="fill-gray-400" />
          </button>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <ButtonGroup
          items={attributeFilterJson.items
            .reduce((prev, current) => prev.concat(current.values), [])
            .map((item) => ({
              value: item.code,
              label: item.valueName,
            }))}
          query={query.attributes}
          name="attributes"
        />

        <ButtonGroup
          items={imgAttrFilterJson.items
            .reduce((prev, current) => prev.concat(current.values), [])
            .map((item) => ({
              value: item.code,
              label: item.valueName,
            }))}
          query={query.imgAttributes}
          name="imgAttributes"
        />

        <ButtonGroup
          items={(partnersFilterJson?.partnersTitleFilterJson?.items ?? []).map(
            (item) => ({
              value: item.code,
              label: item.title,
            })
          )}
          query={query.sellerNos}
          name="sellerNos"
        />

        <ButtonGroup
          items={benefitFilterJson.items.map((item) => ({
            value: item.code,
            label: item.name,
          }))}
          query={query.benefits}
          name="benefits"
        />

        <ButtonGroup
          items={brandFilterJson.brandSubFilterJson.items.map((item) => ({
            value: item.code,
            label: item.name,
          }))}
          query={query.brandCd}
          name="brandCd"
        />

        <ButtonGroup
          items={deliverFilterJson.items.map((item) => ({
            value: item.code,
            label: item.name,
          }))}
          query={query.benefits}
          name="benefits"
        />

        <ButtonGroup
          items={(categoryFilterJson?.ctgrTitleFilterJson?.items ?? []).map(
            (item) => ({
              value: item.code,
              label: item.name,
            })
          )}
          query={query.dispCtgrNo}
          name="dispCtgrNo"
        />

        <ButtonGroup
          items={verticalFilterJson.items.map((item) => ({
            value: item.code,
            label: item.title,
          }))}
          query={query.verticalType}
          name="verticalType"
        />

        {[
          !minPrice && maxPrice && [0, maxPrice],
          minPrice && maxPrice && [minPrice, maxPrice],
          minPrice && !maxPrice && [minPrice, 0],
        ]
          .filter(Boolean)
          .map((item) => (
            <button
              key={item.join('_')}
              onClick={() => {
                updateValue({
                  minPrice: 0,
                  maxPrice: 0,
                })
              }}
            >
              {`${item[0] || ''}~${item[1]}`}
            </button>
          ))}

        {previousKwd.map((kwd) => {
          return (
            <button
              key={kwd}
              onClick={() => {
                removeValue({
                  name: 'previousKwd',
                  value: kwd,
                })
              }}
            >
              포함 - {kwd}
            </button>
          )
        })}

        {previousExcptKwd.map((kwd) => {
          return (
            <button
              key={kwd}
              onClick={() => {
                removeValue({
                  name: 'previousExcptKwd',
                  value: kwd,
                })
              }}
            >
              제외 - {kwd}
            </button>
          )
        })}
      </div>
    </Fieldset>
  )
}

export default Selected
