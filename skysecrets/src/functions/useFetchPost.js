import { useState, useEffect } from 'react'

/**
 * Custom hook for posting with fetch.
 *
 * @param {string} url where to fetch.
 * @param {object} requestData body of request.
 * @returns {object} data, ispending, error.
 */
const useFetchPost = (url, requestData) => {
  const [postData, setPostData] = useState(null)
  const [postIsPending, setPostIsPending] = useState(true)
  const [postError, setPostError] = useState(null)

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(res => {
        if (!res.ok) {
          throw Error('Server not responding')
        }
        return res.json()
      })
      .then(postData => {
        setPostData(postData)
        setPostIsPending(false)
        setPostError(null)
      })
      .catch(err => {
        setPostIsPending(false)
        setPostError(err.message)
      })
  // eslint-disable-next-line
  // react-hooks/exhaustive-deps
  }, [])

  return { postData, postIsPending, postError }
}

export default useFetchPost
