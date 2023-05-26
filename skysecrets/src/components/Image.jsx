import useFetch from '../functions/useFetch'
import { useState } from 'react'
import defaultImage from '../img/default.jpg'
import { useHistory } from 'react-router-dom'

/**
 * Image component.
 *
 * @returns {object} react component.
 */
const Image = () => {
  const { data, isPending, error } = useFetch('http://localhost:8080/api/v1/image')
  const [explanation, setExplanation] = useState()
  const [descriptionShown, setDescriptionShown] = useState(false)
  const history = useHistory()
  const bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbHZpcyIsImdpdmVuX25hbWUiOiJlbHZpc3NzcyIsImZhbWlseV9uYW1lIjoia2luZ2VuIiwiZW1haWwiOiJ0aGVfa2luZ0BzdHVkZW50LmxudS5zZSIsImlkIjoiNjQ2Y2NkYTNlNGQ0YjQwMjliZjNmMjg0IiwiaWF0IjoxNjg1MDI3NDcwLCJleHAiOjE2ODUwNjM0NzB9.fcMFLkZgBmWddayJNiees0Ficcj5wTK005a0XZCm_lz5IgrtF58IP-_L5NlK08tTYMZRINKjc80J7IvnlO6ncASq61DOCfVCgjqng7U1XFdzblvhzcerFKbiiopK0Q9KDQkypAtX2nP4qdkm2PWXnss-tiaaitIsicBl3H4kscnJddZPpAQ7pN8iFFn103nScpROEHNzeinuDtH53mgcrKs3KV_MpqfgKtgKNtMH9TGWOkx8RA0o68EB0x0TE88VD59wZbeIaZej4t2_PyuDbQXBog9mYfGbGO8sivkftEIOjHzpe71U6pJrY6-fUjqM4vd5xe7KOswscXC0EVWNGg'

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
    console.log('saving: ', data.title)
    const account = await getAccountId()
    console.log(account)
    await updateLocation(account)

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
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`
      }
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
  const updateLocation = async (account) => {
    const url = `http://localhost:8080/api/v1/account/${account.accountId}/images`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`
      },
      body: JSON.stringify({ image: { url: data.url, description: data.explanation, copyright: data.copywrite } })
    })
    if (!response.ok) {
      throw new Error('Something went wrong with the fetch')
    }
    history.push('/overview')
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
      <button className="save-img-button" onClick={saveImage}>Save image to library</button>
    </div>
  )
}
export default Image
