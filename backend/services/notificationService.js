/**
 * Send a notification to the user.
 * @param {string} message - The notification message.
 */
const sendNotification = (message) => {
    if (Notification.permission === 'granted') {
      new Notification('Rejuvo', { body: message });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('Rejuvo', { body: message });
        }
      });
    }
  };
  
  module.exports = { sendNotification };