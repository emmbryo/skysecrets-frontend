import useFetch from '../functions/useFetch';
import { useState } from 'react'

const Image = () => {

  const {data, isPending, error} = useFetch('http://localhost:8080/api/v1/image')
  console.log('I Image comp', data.url)
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
    <div className="space-image">
      { isPending && (
        <p>Loading...</p>
      )}
      { data.title && (
        <p>{ data.title }</p>
      )}
      { data.url && (
        <img src={ data.url } alt="default-space" />
      )}
      { data.copyright && (
        <p>copyright: { data.copyright }</p>
      )}
      { explanation && (
        <p>{ explanation }</p>
      )}
      { descriptionShown && (
        <button onClick={hideDescription}>Hide description</button>
      )}
      { !descriptionShown && (
        <button onClick={showDescription}>Description</button>
      )}
    </div>
   );
}
 
export default Image;