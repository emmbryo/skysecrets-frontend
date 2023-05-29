/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
/**
 * ImageUnite component.
 *
 * @param {*} props - url, title, _id
 * @returns {*} react component.
 */
const ImageUnit = (props) => {
  const [showDescription, setShowDescription] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  /**
   * Toggles the description.
   */
  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  /**
   * Deletes the image.
   *
   * @param {*} event the clicked element.
   */
  const deleteImage = async (event) => {
    try {
      const accountId = await getAccountId()

      const url = `${process.env.REACT_APP_API_BASE_URL}/account/${accountId.accountId}/images`

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ id: event.target.id })
      })

      if (!response.ok) {
        setError('unable to delete')
      } else {
        props.onImageUnitChange()
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

  return (
    <div className="image-unit-container" key={props.image._id}>
      <p>{props.image.title}</p>
      <div className="image-unit">
        <img src={props.image.url} alt={props.image.title} />
      </div>
      { showDescription && (
       <p>{props.image.description}</p>
      )}
      <div className="image-button-container">
        { !showDescription && (
          <button className="image-unit-button" onClick={toggleDescription}>Show description</button>
        )}
      { showDescription && (
          <button className="image-unit-button" onClick={toggleDescription}>Hide description</button>
      )}
      <button id={props.image._id} className="image-unit-button" onClick={deleteImage}>Delete from library</button>
      { error && (
        <div className="error-msg">
          <p>{error}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default ImageUnit
