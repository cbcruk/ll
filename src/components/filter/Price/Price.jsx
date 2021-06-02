import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Fieldset, Radio } from '../../shared'
import Form from './Form'

function Price() {
  const { query, updateValue } = useRouter()
  const { minPrice, maxPrice, priceFilterJson } = useSelector((state) => {
    return {
      ...pick(query, ['minPrice', 'maxPrice']),
      priceFilterJson: state.server.priceFilterJson,
    }
  })
  const setPrice = (price) => updateValue(price)

  return (
    <Fieldset legend="가격" canToggle>
      {priceFilterJson.items.map((item) => (
        <Radio
          key={item.name}
          label={item.name}
          name="price"
          checked={
            parseInt(minPrice || 0, 10) === item.minPrice &&
            parseInt(maxPrice || 0, 10) === item.maxPrice
          }
          handleChange={() => {
            setPrice({
              minPrice: item.minPrice,
              fromPrice: item.minPrice,
              maxPrice: item.maxPrice,
              toPrice: item.maxPrice,
            })
          }}
        />
      ))}
      <Form
        handleSubmit={({ minPrice, maxPrice }) => {
          setPrice({
            minPrice: minPrice,
            fromPrice: minPrice,
            maxPrice: maxPrice,
            toPrice: maxPrice,
          })
        }}
      />
    </Fieldset>
  )
}

export default Price
