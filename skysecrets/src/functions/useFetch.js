import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(40)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw Error('Something went wrong with the fetch.')
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, isPending, error }
}

export default useFetch