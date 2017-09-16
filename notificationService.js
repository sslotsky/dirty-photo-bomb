let notificationService = null;
let messageId = 0;

export default function service() {
  if (!notificationService) {
    const listeners = [];
    const subscribe = listener => listeners.push(listener);
    const unsubscribe = listener =>
      listeners.splice(listeners.indexOf(listener), 1);
    const notify = message => listeners.forEach(l => l(message, messageId++));
    notificationService = { subscribe, unsubscribe, notify };
  }

  return notificationService;
}
