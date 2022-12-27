// import { getMessengerText } from '@/helpers/ui';
import { ICallbackInfo, IAppointmentInfo } from '@/types';

const BOT_TOKEN = '5780320327:AAGkbAm1vsxfGu53xRwlz6zSL1hSdudUveQ';
const CHAT_ID = '468482416';

function sendMessage(text: string) {
  return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      chat_id: CHAT_ID,
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
  // return sendMessage(
  //   `Новий запис на зустріч! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
  //     payload,
  //   )} Дата: ${payload.date}. Час: ${payload.time}. Запит: ${payload.request || 'Не заповнений'}.`,
  // );
}

interface IRequestCallPayload extends ICallbackInfo {}

export function requestCallback(payload: IRequestCallPayload) {
  // return sendMessage(
  //   `Новий запит на дзвінок! Ім'я: ${payload.name}. Телефон: ${payload.phone}. ${getMessengerText(
  //     payload,
  //   )}`,
  // );
}
