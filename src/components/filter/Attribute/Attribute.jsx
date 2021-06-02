import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Fieldset } from '../../shared'

function Attribute() {
  const { updateValues } = useRouter()
  const { attributeFilterJson } = useSelector((state) => {
    return {
      attributeFilterJson: state.server.attributeFilterJson,
    }
  })

  return attributeFilterJson.items.map((item) => (
    <Fieldset key={item.attributeNo} legend={item.attributeName} canToggle>
      {item.values.map((value) => {
        return (
          <Checkbox
            key={value.code}
            label={value.valueName}
            name="attributes"
            checked={value.selected}
            handleChange={(checked) => {
              updateValues({
                checked,
                name: 'attributes',
                value: value.code,
              })
            }}
          />
        )
      })}
    </Fieldset>
  ))
}

export default Attribute
