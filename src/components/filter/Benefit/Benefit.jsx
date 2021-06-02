import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Fieldset } from '../../shared'

function Benefit() {
  const { query, updateValues } = useRouter()
  const { benefits } = query
  const { benefitFilterJson } = useSelector((state) => {
    return {
      benefitFilterJson: state.server.benefitFilterJson,
    }
  })

  if (benefitFilterJson.items.length === 0) {
    return null
  }

  return (
    <Fieldset legend="할인/적립" canToggle>
      {benefitFilterJson.items.map((item) => (
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

export default Benefit
