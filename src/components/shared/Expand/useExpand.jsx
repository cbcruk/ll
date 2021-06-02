import { useReducer } from 'react'

function useExpand() {
  const [state, dispatch] = useReducer(
    (state, payload) => {
      return {
        ...state,
        ...payload,
      }
    },
    {
      isViewMore: false,
      isViewAll: false,
    }
  )

  return {
    state,
    dispatch,
  }
}

export default useExpand
