export enum Messengers {
  Telegram = 'Telegram',
  Viber = 'Viber',
}

export interface IAppointmentInfo {
  name: string;
  phone: string;
  date: string;
  time: string;
  request: string;
  messenger?: Messengers;
}

export interface ICallbackInfo {
  name: string;
  phone: string;
  messenger?: Messengers;
}
