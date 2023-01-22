import Config from '@/config';

export function sendMessage(text: string) {
  return fetch(`https://api.telegram.org/bot${Config.TELEGRAM_API_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      chat_id: Config.TELEGRAM_API_CHAT_ID,
      // DEV
      // chat_id: '338912613',
      text: text,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
