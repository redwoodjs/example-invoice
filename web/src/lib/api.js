import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@hammerframework/hammer-web'

export const useCell = (
  {
    query,
    Loader = () => null,
    Error = () => null,
    parseData = (data) => ({ ...data }),
    Component,
    componentProps,
  },
  options
) => {
  const result = useRef(null)
  const [status, setStatus] = useState('idle')
  const { error, loading, data, ...queryRest } = useQuery(query, options)
  useEffect(() => {
    if (error) {
      result.current = (
        <Error error={error} {...queryRest} {...componentProps} />
      )
      setStatus('error')
    } else if (loading) {
      result.current = <Loader {...componentProps} />
      setStatus('loading')
    } else {
      result.current = (
        <Component {...parseData(data)} {...queryRest} {...componentProps} />
      )
      setStatus('complete')
    }
  }, [error, loading, data, parseData, status, queryRest, componentProps])

  return { result: result.current }
}
