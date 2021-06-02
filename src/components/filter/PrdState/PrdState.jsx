import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Fieldset, Radio } from '../../shared'

function PrdState() {
  const { query, updateValue } = useRouter()
  const { verticalType, verticalFilterJson } = useSelector((state) => {
    return {
      ...pick(query, ['verticalType']),
      verticalFilterJson: state.server.verticalFilterJson,
    }
  })

  return (
    <Fieldset legend="상품유형" canToggle>
      {verticalFilterJson.items.map((item) =>
        React.createElement(Radio, {
          key: item.code,
          label: item.title,
          name: 'verticalType',
          checked: verticalType.includes(item.code),
          handleChange() {
            updateValue({
              verticalType: item.code,
            })
          },
        })
      )}
    </Fieldset>
  )
}

export default PrdState
