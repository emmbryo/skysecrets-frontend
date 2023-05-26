/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ImageUnit from './ImageUnit'

/**
 * Library component.
 *
 * @returns {object} react component.
 */
const Library = () => {
  const [images, setImages] = useState([])
  const [populate, setPopulate] = useState(false)

  /**
   * Gets the images from user.
   */
  const getImages = async () => {
    try {
      const account = await getAccountId()
      if (account.account) {
        setImages(await getImageData(account.accountId))
        setPopulate(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * Gets the account id.
   *
   * @returns {object} account id.
   */
  const getAccountId = async () => {
    const urlGetId = 'http://localhost:8080/api/v1/account/'
    const responseId = await fetch(urlGetId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    if (!responseId.ok) {
      throw new Error('Something went wrong with the fetch')
    }
    const account = await responseId.json()
    return account
  }

  /**
   * Returns image data.
   *
   * @param {object} accountId - ...
   * @returns {object} images.
   */
  const getImageData = async (accountId) => {
    const url = `http://localhost:8080/api/v1/account/${accountId}/images`

    const response = await fetch(url, {
      credentials: 'include'
    })
    if (!response.ok) {
      throw new Error('Server not responding')
    }
    const images = await response.json()
    return images
  }

  return (
    <div className="library-container">
      <h3>My library</h3>
      { !populate && (
        <button onClick={getImages}>Load my images</button>
      )}
      { populate && (
        <div className="library-images-container">
          {images.map(image => {
            return <ImageUnit image={image} key={image._id} />
          })}
        </div>
      )}
    </div>
  )
}

// {postData.reasons.map(reason => {
//   return (
//     <li key={reason.id}>{reason.text}</li>
//   )
// })}

export default Library
