import React, { useCallback, useMemo } from 'react'
import Button from './Button'
import useExpand from './useExpand'

function Expand({ list = [], total, children }) {
  const { state, dispatch } = useExpand()
  const { isViewMore, isViewAll } = state
  const hideTooltip = useCallback(
    () => dispatch({ isViewAll: false }),
    [dispatch]
  )
  const items = useMemo(() => {
    return isViewMore ? list : list.slice(0, 3)
  }, [isViewMore, list])

  return (
    <>
      {children({ items, isViewAll, hideTooltip })}

      {list.length > 3 && !isViewMore && (
        <Button onClick={() => dispatch({ isViewMore: true })}>더보기</Button>
      )}

      {isViewMore && total > 10 && (
        <Button onClick={() => dispatch({ isViewAll: !isViewAll })}>
          전체보기
        </Button>
      )}
    </>
  )
}

export default Expand
