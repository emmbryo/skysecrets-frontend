/* eslint-disable no-unused-vars */
import useFetch from '../functions/useFetch'
import { useState, useContext } from 'react'
import defaultImage from '../img/default.jpg'
import { UserContext } from '../context/UserContext'
import getAccountId from '../functions/accountId'
import { history } from '../history'

/**
 * Image component.
 *
 * @returns {object} react component.
 */
const Image = () => {
  const { user } = useContext(UserContext)
  const { data, isPending, error } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/image`)
  const [explanation, setExplanation] = useState()
  const [descriptionShown, setDescriptionShown] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  /**
   * Shows description.
   */
  const showDescription = () => {
    setExplanation(data.explanation)
    setDescriptionShown(true)
  }
  /**
   * Hides description.
   */
  const hideDescription = () => {
    setExplanation(null)
    setDescriptionShown(false)
  }

  /**
   * Saves image to users library.
   *
   * @param {object} event - ...
   */
  const saveImage = async (event) => {
    try {
      const account = await getAccountId()
      await updateImages(account)
    } catch (error) {
      setErrorMsg(error?.message)
    }
  }

  /**
   * Updates location.
   *
   * @param {object} account - ...
   */
  const updateImages = async (account) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/account/${account.accountId}/images`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ image: { url: data.url, description: data.explanation, copyright: data.copywrite, title: data.title } })
    })
    if (!response.ok) {
      throw new Error('Server not responding')
    }
    history.push('/library')
  }

  return (
    <div className="space-image-container">
      { isPending && (
        <p>Loading...</p>
      )}
      { error && (
        <p>An error occured: { error }</p>
      )}
      { data.title && (
        <p>{ data.title }</p>
      )}
      { error && (
        <div>
          <p>Image of the day could not be loaded...</p>
          <img id="default-img" src={ defaultImage } alt="default" />
        </div>
      )}
      { data.url && (
        <div className="space-image">
          <img src={ data.url } alt="daily" />
        </div>
      )}
      { data.copyright && (
        <p>&copy; { data.copyright }</p>
      )}
      { explanation && (
        <p id="image-explanation">{ explanation }</p>
      )}
      { descriptionShown && (
        <button className="img-button" onClick={hideDescription}>Hide description</button>
      )}
      { !descriptionShown && (
        <button className="img-button" onClick={showDescription}>Show description</button>
      )}
      { errorMsg && (
        <div className="error-msg">
          <p>{error}</p>
        </div>
      )}
      { user && (
        <button className="save-img-button" onClick={saveImage}>Save image to library</button>
      )}
      { !user && (
        <div className="image-login-promt">
          <p>Like the image and want to save it? </p>
          <button className="save-img-button" onClick={() => history.push('/user')}>Go to login page</button>
        </div>
      )}
    </div>
  )
}
export default Image
