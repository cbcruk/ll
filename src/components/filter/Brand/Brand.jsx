import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Expand, Fieldset, Tooltip } from '../../shared'
import Form from './Form'

function Brand() {
  const { query, updateValues } = useRouter()
  const { brandCd } = query
  const { brandTitleFilterJson, brandSubFilterJson } = useSelector((state) => {
    return {
      ...state.server.brandFilterJson,
    }
  })

  return (
    <Fieldset legend="브랜드" canToggle>
      <Expand
        list={brandTitleFilterJson.items}
        total={brandSubFilterJson.items.length}
      >
        {({ items, isViewAll, hideTooltip }) => {
          return (
            <>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <Checkbox
                    key={item.code}
                    label={item.name}
                    name="brandCd"
                    checked={brandCd.includes(item.code)}
                    handleChange={(checked) => {
                      updateValues({
                        checked,
                        name: 'brandCd',
                        value: item.code,
                      })
                    }}
                  />
                ))}
              </div>
              {isViewAll && (
                <Tooltip title="브랜드 전체" handleHide={() => hideTooltip()}>
                  <Form handleHide={() => hideTooltip()} />
                </Tooltip>
              )}
            </>
          )
        }}
      </Expand>
    </Fieldset>
  )
}

export default Brand
