import { Auth } from 'aws-amplify'
import axios from 'axios'
import headers from 'constants/headers'

const makeAxiosCall = async (req, model, error) => {
  return new Promise((resolve, reject) => {
    axios(req)
      .then((response) => {
        resolve(model(response))
      })
      .catch((error_) => {
        reject(error(error_))
      })
  })
}

const setHeaders = async (restMap) => {
  try {
    const session = await Auth.currentSession()
    restMap.headers = Object.assign({}, headers.SONGERAUDIO, restMap.headers || {})
    restMap.headers.Authorization = `Bearer ${session.idToken.jwtToken}`
  } catch (error) {
    console.log('RestApiService error', error)
  }
}

const execute = async (restMap, key, method, params, data) => {
  params = params || {}
  let { endpoint } = restMap[key]
  if (params.append) {
    endpoint += params.append
  }
  await setHeaders(restMap[key])
  const req = {
    method,
    url: endpoint,
    data: data || null,
    headers: restMap[key].headers,
  }
  return makeAxiosCall(req, restMap[key].model, restMap[key].error)
}

class RestApiService {
  constructor(restMap) {
    this.restMap = restMap
  }

  /**
   * Perform a get request
   * @param {string} key - the key in the service map to use
   * @param {object} [params] - optional rest params
   * @param {object} [data] - the data to use in the request body
   */
  get(key, params, data) {
    return execute(this.restMap, key, 'GET', params, data)
  }

  /**
   * Perform a post request
   * @param {string} key - the key in the service map to use
   * @param {object} [params] - optional rest params
   * @param {object} [data] - the data to use in the request body
   */
  post(key, params, data) {
    return execute(this.restMap, key, 'POST', params, data)
  }

  /**
   * Perform a put request
   * @param {string} key - the key in the service map to use
   * @param {object} [params] - optional rest params
   * @param {object} [data] - the data to use in the request body
   */
  put(key, params, data) {
    return execute(this.restMap, key, 'PUT', params, data)
  }

  /**
   * Perform a patch request
   * @param {string} key - the key in the service map to use
   * @param {object} [params] - optional rest params
   * @param {object} [data] - the data to use in the request body
   */
  patch(key, params, data) {
    return execute(this.restMap, key, 'PATCH', params, data)
  }

  /**
   * Perform a delete request
   * @param {string} key - the key in the service map to use
   * @param {object} [params] - optional rest params
   * @param {object} [data] - the data to use in the request body
   */
  delete(key, params, data) {
    return execute(this.restMap, key, 'DELETE', params, data)
  }
}

export default RestApiService
