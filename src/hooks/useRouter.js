import { isArray, omit, without } from 'lodash'
import { parse, stringify } from 'query-string'
import { useCallback, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router'

export const initialState = {
  method: 'getSearchFilterAjax',
  kwd: '',
  selectedFilterYn: 'Y',
  pageNo: 1,
  fromPrice: 0,
  toPrice: 0,
  excptKwd: '',
  pageNum: 1,
  pageSize: 80,
  researchFlag: false,
  lCtgrNo: 0,
  mCtgrNo: 0,
  sCtgrNo: 0,
  dCtgrNo: 0,
  viewType: 'L',
  minPrice: 0,
  maxPrice: 0,
  sortCd: 'NP',
  firstInputKwd: '',
  catalogYN: 'N',
  verticalType: '',
  dispCtgrNo: '',
  officialCertificationSeller: '',
  day11Yn: 'N',
  engineRequestUrl: '',
  attributes: [],
  imgAttributes: [],
  prdServiceTypes: [],
  benefits: [],
  brandCd: [],
  dispCtgrType: [],
  sellerNos: [],
  previousKwd: [],
  previousExcptKwd: [],
}

export function getSearchParams(params) {
  const searchParams = stringify(
    {
      ...initialState,
      ...params,
    },
    {
      arrayFormat: 'comma',
      skipEmptyString: true,
      skipNull: true,
    }
  )

  return searchParams
}

function useRouter() {
  const history = useHistory()
  const location = useLocation()
  const parsedQuery = useMemo(() => {
    return {
      ...initialState,
      ...parse(location.search, { arrayFormat: 'comma' }),
    }
  }, [location.search])
  const updateValue = useCallback(
    (nextQuery, isInitialize) => {
      const search = getSearchParams({
        ...parsedQuery,
        ...(isInitialize ? omit(initialState, ['kwd']) : {}),
        ...nextQuery,
      })

      history.push({
        search,
      })
    },
    [parsedQuery, history]
  )
  const updateValues = useCallback(
    ({ checked, name, value }) => {
      const prevQuery = [].concat(parsedQuery[name])
      const nextQuery = checked
        ? prevQuery.concat(value)
        : without(prevQuery, value)

      history.push({
        search: getSearchParams({
          ...parsedQuery,
          [name]: nextQuery,
        }),
      })
    },
    [parsedQuery, history]
  )
  const removeValue = useCallback(
    ({ name, value }) => {
      history.push({
        search: getSearchParams({
          ...parsedQuery,
          [name]: isArray(parsedQuery[name])
            ? parsedQuery[name].filter((v) => v !== value)
            : '',
        }),
      })
    },
    [parsedQuery, history]
  )

  return {
    query: parsedQuery,
    updateValue,
    updateValues,
    removeValue,
  }
}

export default useRouter
