import useFetch from '../functions/useFetch';
import { useState } from 'react'

const Image = () => {

  const imageData = useFetch('http://localhost:8080/api/v1/image')
  console.log('I Image comp', imageData.data.url)
  const [explanation, setExplanation] = useState()
  const [descriptionShown, setDescriptionShown] = useState(false)

  function showDescription () {
    setExplanation(imageData.data.explanation)
    setDescriptionShown(true)
  }
  function hideDescription () {
    setExplanation(null)
    setDescriptionShown(false)

  }

  return ( 
    <div className="space-image">
      { imageData.data.title && (
        <p>{ imageData.data.title }</p>
      )}
      { imageData.data.url && (
        <img src={ imageData.data.url } alt="default-space" />
      )}
      { imageData.data.copyright && (
        <p>copyright: { imageData.data.copyright }</p>
      )}
      { explanation && (
        <p>{ explanation }</p>
      )}
      { descriptionShown && (
        <button onClick={hideDescription}>Hide</button>
      )}
      { !descriptionShown && (
        <button onClick={showDescription}>Description</button>
      )}
    </div>
   );
}
 
export default Image;