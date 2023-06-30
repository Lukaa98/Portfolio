/* eslint-disable no-undef */

// Importing the emailjs library
import emailjs from 'emailjs-com'

// Function to send an email using emailjs
export function sendEmail(e, resultCallback, errorCallback) {
  e.preventDefault()

  // Extracting form data from event target elements
  let from_name = e.target.elements.from_name.value
  let from_email = e.target.elements.from_email.value
  let subject = e.target.elements.subject.value
  let message = e.target.elements.message.value
  let phone = e.target.elements.phone.value || 'N/A' // If no phone number is provided, use "N/A"

  // Retrieving configuration values from environment variables
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID
  const userId = process.env.REACT_APP_EMAILJS_USERID

  // Checking if the user ID is available
  if (!userId) {
    errorCallback('User ID is missing. Please check your configuration.')
    return
  }

  // Sending the email using emailjs
  emailjs
    .send(serviceId, templateId, { from_name, from_email, subject, message, phone }, userId)
    .then((result) => {
      resultCallback(result.text)
    })
    .catch((error) => {
      errorCallback(error.text)
    })

  // Resetting the form after sending the email
  e.target.reset()
}

// Exporting the sendEmail function as the default export
export default sendEmail
