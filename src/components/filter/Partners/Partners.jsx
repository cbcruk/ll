import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Expand, Fieldset, Tooltip } from '../../shared'
import Form from './Form'

function Partners() {
  const { updateValues } = useRouter()
  const { partnersTitleFilterJson, partnersAllFilterJson } = useSelector(
    (state) => {
      return {
        ...state.server.partnersFilterJson,
      }
    }
  )

  if (!partnersTitleFilterJson) {
    return null
  }

  return (
    <Fieldset legend="판매처" canToggle>
      <Expand
        list={partnersTitleFilterJson.items}
        total={partnersAllFilterJson.items.length}
      >
        {({ items, isViewAll, hideTooltip }) => {
          return (
            <>
              {items.map((item) => (
                <Checkbox
                  key={item.code}
                  label={item.title}
                  name="sellerNos"
                  checked={item.isSelected}
                  handleChange={(checked) => {
                    updateValues({
                      checked,
                      name: 'sellerNos',
                      value: item.code,
                    })
                  }}
                />
              ))}
              {isViewAll && (
                <Tooltip title="판매처 전체" handleHide={() => hideTooltip()}>
                  <Form handleHide={hideTooltip} />
                </Tooltip>
              )}
            </>
          )
        }}
      </Expand>
    </Fieldset>
  )
}

export default Partners
