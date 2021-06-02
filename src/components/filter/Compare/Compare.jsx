import React from 'react'
import { useSelector } from 'react-redux'
import { pick } from 'lodash'
import useRouter from '../../../hooks/useRouter'
import { Checkbox, Fieldset, Switch } from '../../shared'
import { IconMonetization } from '../../shared/Icon'

function Compare() {
  const { query, updateValue, updateValues } = useRouter()
  const {
    catalogYN,
    day11Yn,
    benefits,
    prdServiceTypes,
    isCatalog,
    isDay11FilterShow,
    isStayCouponFilterShow,
    isNewFashionFilterShow,
    isPresentSmsFilterShow,
    isPresentDeliveryFilterShow,
    isHopeShoppingFilterShow,
  } = useSelector((state) => {
    return {
      ...pick(query, [
        'catalogYN',
        'day11Yn',
        'benefits',
        'prdServiceTypes',
        'isCatalog',
      ]),
      ...pick(state.server, [
        'isDay11FilterShow',
        'isStayCouponFilterShow',
        'isNewFashionFilterShow',
        'isPresentSmsFilterShow',
        'isPresentDeliveryFilterShow',
        'isHopeShoppingFilterShow',
      ]),
    }
  })

  return (
    <Fieldset
      legend={
        <div className="flex items-center gap-1">
          <IconMonetization />
          <span className="mr-2">가격비교</span>
          <Switch
            checked={isCatalog || catalogYN === 'Y'}
            handleChange={(e) => {
              updateValue(
                {
                  catalogYN: e.target.checked ? 'Y' : 'N',
                },
                true
              )
            }}
          />
        </div>
      }
    >
      {isDay11FilterShow && (
        <Checkbox
          label="십일절"
          name="day11Yn"
          checked={day11Yn === '11DAY'}
          handleChange={(checked) => {
            updateValue({
              day11Yn: checked ? '11DAY' : '',
            })
          }}
        />
      )}

      {isStayCouponFilterShow && (
        <Checkbox
          label="숙박대전"
          name="benefits"
          checked={benefits.includes('BENEFIT_STAY_ALL')}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'benefits',
              value: 'BENEFIT_STAY_ALL',
            })
          }}
        />
      )}

      {isNewFashionFilterShow && (
        <Checkbox
          label="전국민쇼핑"
          name="benefits"
          checked={benefits.includes('NEW_FASHION_CUPN')}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'benefits',
              value: 'NEW_FASHION_CUPN',
            })
          }}
        />
      )}

      {isHopeShoppingFilterShow && (
        <Checkbox
          label="희망쇼핑"
          name="benefits"
          checked={benefits.includes('HOPE_SHOPPING')}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'benefits',
              value: 'HOPE_SHOPPING',
            })
          }}
        />
      )}

      {isPresentSmsFilterShow && (
        <Checkbox
          label="e쿠폰 선물"
          name="prdServiceTypes"
          checked={prdServiceTypes.includes('PRESENT_SMS')}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'prdServiceTypes',
              value: 'PRESENT_SMS',
            })
          }}
        />
      )}

      {isPresentDeliveryFilterShow && (
        <Checkbox
          label="배송 선물"
          name="prdServiceTypes"
          checked={prdServiceTypes.includes('PRESENT_DELIVERY')}
          handleChange={(checked) => {
            updateValues({
              checked,
              name: 'prdServiceTypes',
              value: 'PRESENT_DELIVERY',
            })
          }}
        />
      )}
    </Fieldset>
  )
}

export default Compare
