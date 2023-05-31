import { useState, useEffect } from 'react'

/**
 * Custom hook for fetch.
 *
 * @param {string} url - what to fetch.
 * @returns {object} - data, pending, error.
 */
const useFetch = (url) => {
  const [data, setData] = useState(40)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Server not responding')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      })
  // eslint-disable-next-line
  // react-hooks/exhaustive-deps
  }, [])

  return { data, isPending, error }
}

export default useFetch
