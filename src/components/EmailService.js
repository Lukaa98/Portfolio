/* eslint-disable no-undef */
import emailjs from 'emailjs-com'

export function sendEmail(e, resultCallback, errorCallback) {
  e.preventDefault()

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
  const userId = process.env.REACT_APP_EMAILJS_USERID

  if (!userId) {
    errorCallback('User ID is missing. Please check your configuration.')
    return
  }

  emailjs
    .sendForm(serviceId, templateId, e.target, userId)
    .then((result) => {
      resultCallback(result.text)
    })
    .catch((error) => {
      errorCallback(error.text)
    })

  e.target.reset()
}

export default sendEmail
