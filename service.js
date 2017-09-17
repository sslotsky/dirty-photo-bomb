let messageId = 0;

export default function service() {
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const notify = message => listeners.forEach(l => l(message, messageId++));
  const unsubscribe = listener =>
    listeners.splice(listeners.indexOf(listener), 1);

  return { subscribe, unsubscribe, notify };
}
