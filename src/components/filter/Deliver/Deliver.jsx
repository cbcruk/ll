import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Fieldset } from '../../shared'

function Deliver() {
  const { query, updateValues } = useRouter()
  const { benefits } = query
  const { deliverFilterJson } = useSelector((state) => {
    return {
      deliverFilterJson: state.server.deliverFilterJson,
    }
  })

  return (
    <Fieldset legend="배송혜택" canToggle>
      {deliverFilterJson.items.map((item) => (
        <Checkbox
          key={item.code}
          label={item.name}
          name="benefits"
          checked={benefits.includes(item.code)}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'benefits',
              value: item.code,
            })
          }}
        />
      ))}
    </Fieldset>
  )
}

export default Deliver
