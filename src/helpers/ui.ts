import { Messengers } from '@/types';

export function getMessengerText({ messenger }: { messenger?: Messengers }) {
  if (messenger === Messengers.Telegram) {
    return 'Писати у Telegram.';
  }

  if (messenger === Messengers.Viber) {
    return 'Писати у Viber.';
  }
}

export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})/, '$1($2)-$3-$4-$5');
}

export function mergeClasses(...classes: (string | undefined)[]) {
  return classes.reduce((acc, c) => (!!c ? acc + ` ${c}` : acc), '');
}

export function isAndroid() {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.navigator.userAgent.indexOf('Android') > -1;
}

export function isIPhone() {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.navigator.userAgent.indexOf('iPhone') > -1;
}
