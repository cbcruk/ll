import clsx from 'clsx'
import { pick, sumBy } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import useRouter from '../../../hooks/useRouter'
import { Expand, Tooltip, Fieldset } from '../../shared'
import CategoryLink from './CategoryLink'

function Category() {
  const { query } = useRouter()
  const { ctgrTitleFilterJson, ctgrSubFilterJson, ctgrNaviJson } = useSelector(
    (state) => {
      return {
        ...pick(query, ['dispCtgrNo']),
        ...state.server.categoryFilterJson,
      }
    }
  )
  const islCtgrActive = parseInt(query.dispCtgrNo, 10) === ctgrNaviJson?.lCtgrNo

  return (
    <Fieldset legend="카테고리" canToggle>
      {ctgrNaviJson && (
        <div className="flex flex-col gap-2">
          <CategoryLink id="" hasIcon>
            전체
          </CategoryLink>
          <CategoryLink
            id={ctgrNaviJson.lCtgrNo}
            hasIcon
            count={islCtgrActive ? sumBy(ctgrSubFilterJson.items, 'count') : ''}
            isActive={islCtgrActive}
          >
            {ctgrNaviJson.lCtgrNm}
          </CategoryLink>
          <div className="flex flex-col pl-4">
            {ctgrNaviJson.mCtgrNm && (
              <CategoryLink
                id={ctgrNaviJson.mCtgrNo}
                count={sumBy(ctgrTitleFilterJson.items, 'count')}
                isActive={
                  parseInt(query.dispCtgrNo, 10) === ctgrNaviJson.mCtgrNo
                }
              >
                {ctgrNaviJson.mCtgrNm}
              </CategoryLink>
            )}
            <div
              className={clsx('flex flex-col gap-2 mt-2 text-sm', {
                'pl-4': ctgrNaviJson.mCtgrNm,
              })}
            >
              {ctgrTitleFilterJson.items.map((item) => {
                const isActive = item.code === query.dispCtgrNo

                return (
                  <CategoryLink
                    key={item.code}
                    id={item.code}
                    count={item.count}
                    isActive={isActive}
                  >
                    {item.name}
                  </CategoryLink>
                )
              })}
            </div>
          </div>
        </div>
      )}
      {!ctgrNaviJson && ctgrTitleFilterJson && (
        <Expand
          list={ctgrTitleFilterJson.items}
          total={ctgrSubFilterJson.items.length}
        >
          {({ items, isViewAll, hideTooltip }) => (
            <>
              {items.map((item) => (
                <CategoryLink
                  key={item.code}
                  extraText={item.extraText}
                  id={item.code}
                >
                  {item.name}
                </CategoryLink>
              ))}
              {isViewAll && (
                <Tooltip title="카테고리 전체" handleHide={() => hideTooltip()}>
                  <div className="flex flex-wrap">
                    {ctgrSubFilterJson.items.map((item) => (
                      <CategoryLink
                        key={item.code}
                        id={item.code}
                        count={item.count}
                        className="w-1/4 p-2 pl-0"
                      >
                        {item.name}
                      </CategoryLink>
                    ))}
                  </div>
                </Tooltip>
              )}
            </>
          )}
        </Expand>
      )}
    </Fieldset>
  )
}

export default Category
