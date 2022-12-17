export enum Messengers {
  Telegram = 'Telegram',
  Viber = 'Viber',
}

export function getMessengerInfo({ messenger }: { messenger?: Messengers }) {
  if (messenger === Messengers.Telegram) {
    return 'Писати у Telegram.';
  }

  if (messenger === Messengers.Viber) {
    return 'Писати у Viber.';
  }
}
