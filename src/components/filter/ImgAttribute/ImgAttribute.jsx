import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Fieldset } from '../../shared'

function ImgAttribute() {
  const { query, updateValues } = useRouter()
  const { imgAttributes } = query
  const { imgAttrFilterJson } = useSelector((state) => {
    return {
      imgAttrFilterJson: state.server.imgAttrFilterJson,
    }
  })

  return imgAttrFilterJson.items.map((item, index) => (
    <Fieldset key={index} legend={item.attributeName} canToggle>
      {item.values.map((value) => {
        return (
          <Checkbox
            key={value.code}
            label={value.valueName}
            name="imgAttributes"
            checked={imgAttributes.includes(value.code)}
            handleChange={(checked) => {
              updateValues({
                checked,
                name: 'imgAttributes',
                value: value.code,
              })
            }}
          />
        )
      })}
    </Fieldset>
  ))
}

export default ImgAttribute
