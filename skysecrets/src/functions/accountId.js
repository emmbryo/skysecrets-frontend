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

export default getAccountId
