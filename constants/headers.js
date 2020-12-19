const releaseLevel = 'prod'

const SONGERAUDIO = {
  'Content-Type': 'application/json',
  'X-CLIENT-ID': releaseLevel === 'prod' ? 'web' : 'test_client_id',
  'X-Tenant': 'songer-audio',
  'X-COGNITO-CLIENT-ID': process.env.GATSBY_COGNITO_CLIENT_ID,
}

export default {
  SONGERAUDIO
}