/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import ImageUnit from './ImageUnit'

/**
 * Library component.
 *
 * @returns {object} react component.
 */
const Library = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)

  /**
   * Signals a refresh of page.
   */
  const handleRefresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    getImages()
  }, [])
  /**
   * Gets the images from authenticated user.
   */
  const getImages = async () => {
    try {
      const account = await getAccountId()
      if (account.account) {
        setImages(await getImageData(account.accountId))
      }
    } catch (error) {
      setError(error?.message)
    }
  }
  /**
   * Gets the account id.
   *
   * @returns {object} account id.
   */
  const getAccountId = async () => {
    const urlGetId = `${process.env.REACT_APP_API_BASE_URL}/account/`
    const responseId = await fetch(urlGetId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    if (!responseId.ok) {
      throw new Error('Server not responding')
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
    const url = `${process.env.REACT_APP_API_BASE_URL}/account/${accountId}/images`

    const response = await fetch(url, {
      credentials: 'include'
    })
    if (!response.ok) {
      throw new Error('Server not responding')
    }
    const images = await response.json()
    return images.reverse()
  }

  return (
    <div className="library-container">
      <h3>My library</h3>
      { error && (
        <div className="error msg">
          <p>{error}</p>
        </div>
      )}
      { images && (
        <div className="library-images-container">
          {images.map(image => {
            return <ImageUnit image={image} key={image._id} onImageUnitChange={handleRefresh} />
          })}
        </div>
      )}
    </div>
  )
}

export default Library
