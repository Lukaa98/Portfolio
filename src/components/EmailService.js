/* eslint-disable no-undef */
import emailjs from 'emailjs-com'

export function sendEmail(e, resultCallback, errorCallback) {
  e.preventDefault()

  let from_name = e.target.elements.from_name.value
  let from_email = e.target.elements.from_email.value
  let subject = e.target.elements.subject.value
  let message = e.target.elements.message.value
  let phone = e.target.elements.phone.value || 'N/A' // If no phone number is provided, use "N/A"

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
  const userId = process.env.REACT_APP_EMAILJS_USERID

  if (!userId) {
    errorCallback('User ID is missing. Please check your configuration.')
    return
  }

  emailjs
    .send(serviceId, templateId, { from_name, from_email, subject, message, phone }, userId)
    .then((result) => {
      resultCallback(result.text)
    })
    .catch((error) => {
      errorCallback(error.text)
    })

  e.target.reset()
}


export default sendEmail
