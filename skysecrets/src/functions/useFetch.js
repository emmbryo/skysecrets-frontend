import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(40)
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
        console.log(data)
        setData(data)
        setError(null)
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
  }, [url])

  return { data, error }
}

export default useFetch