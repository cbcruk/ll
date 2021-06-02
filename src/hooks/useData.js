import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions as serverActions } from '../store/server'
import useRouter, { getSearchParams } from './useRouter'

function useData() {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const { server } = useSelector((state) => {
    return {
      server: state.server,
    }
  })

  useEffect(() => {
    const { kwd } = query

    if (!kwd) {
      return
    }

    const searchParams = getSearchParams(query)

    fetch(`/search?${searchParams}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch(serverActions.setState(data))
      })
      .catch((e) => {
        console.error(e)
      })
  }, [query])

  return {
    server,
  }
}

export default useData
