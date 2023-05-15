import useFetch from '../functions/useFetch';
import { useState } from 'react'
import defaultImage from '../img/default.jpg'

const Image = () => {

  const {data, isPending, error} = useFetch('http://localhost:8080/api/v1/image')
  const [explanation, setExplanation] = useState()
  const [descriptionShown, setDescriptionShown] = useState(false)

  function showDescription () {
    setExplanation(data.explanation)
    setDescriptionShown(true)
  }
  function hideDescription () {
    setExplanation(null)
    setDescriptionShown(false)

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
        <p>copyright: { data.copyright }</p>
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
    </div>
   );
}
 
export default Image;