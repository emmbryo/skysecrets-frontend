import { useState, useEffect } from 'react'

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
        if(!res.ok) {
          throw Error('Something went wrong with the fetch.')
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
  }, [url, requestData])

  return { postData, postIsPending, postError }
}

export default useFetchPost