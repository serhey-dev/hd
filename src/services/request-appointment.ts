import Config from '@/config';
// import { getMessengerText } from '@/helpers/ui';
import { ICallbackInfo, IAppointmentInfo } from '@/types';

function sendMessage(text: string) {
  return fetch(`https://api.telegram.org/bot${Config.TELEGRAM_API_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      chat_id: Config.TELEGRAM_API_CHAT_ID,
      text: text,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

interface IRequestAppointmentPayload extends IAppointmentInfo {}

export function requestAppointment(payload: IRequestAppointmentPayload) {
  // DEV
  // return sendMessage(
  //   `Новий запис на зустріч! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
  //     payload,
  //   )} Дата: ${payload.date}. Час: ${payload.time}. Запит: ${payload.request || 'Не заповнений'}.`,
  // );
}

interface IRequestCallPayload extends ICallbackInfo {}

export function requestCallback(payload: IRequestCallPayload) {
  // DEV
  // return sendMessage(
  //   `Новий запит на дзвінок! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
  //     payload,
  //   )}`,
  // );
}
