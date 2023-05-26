/* eslint-disable no-unused-vars */
import { useState } from 'react'
/**
 * ImageUnite component.
 *
 * @param {*} props - url, title, _id
 * @returns {*} react component.
 */
const ImageUnit = (props) => {
  const [showDescription, setShowDescription] = useState(false)

  /**
   * Toggles the description.
   */
  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  console.log(props)
  return (
    <div className="image-unit-container" key={props.image._id}>
      <p>{props.image.title}</p>
      <img src={props.image.url} alt={props.image.title} />
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
      <button className="image-unit-button">Delete from library</button>
      </div>
    </div>
  )
}

export default ImageUnit
