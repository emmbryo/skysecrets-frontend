/* eslint-disable no-unused-vars */
import useFetch from '../functions/useFetch'
import { useState, useContext } from 'react'
import defaultImage from '../img/default.jpg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

/**
 * Image component.
 *
 * @returns {object} react component.
 */
const Image = () => {
  const { user } = useContext(UserContext)
  const { data, isPending, error } = useFetch('http://localhost:8080/api/v1/image')
  const [explanation, setExplanation] = useState()
  const [descriptionShown, setDescriptionShown] = useState(false)
  const history = useHistory()

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
      console.log('saving: ', data.title)
      const account = await getAccountId()
      console.log(account)
      await updateImages(account)
    } catch (error) {
      console.log(error)
    }

    // history.push('/user')
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
   * Updates location.
   *
   * @param {object} account - ...
   */
  const updateImages = async (account) => {
    const url = `http://localhost:8080/api/v1/account/${account.accountId}/images`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ image: { url: data.url, description: data.explanation, copyright: data.copywrite, title: data.title } })
    })
    if (!response.ok) {
      throw new Error('Something went wrong with the fetch')
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
        <button onClick={hideDescription}>Hide description</button>
      )}
      { !descriptionShown && (
        <button onClick={showDescription}>Show description</button>
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
