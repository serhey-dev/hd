import { useFormik } from 'formik';

import { IAppointmentInfo, Messengers } from '@/types';
import { getDateWithExtraDays, formatDateToISO } from '@/helpers/date';

import Viber from '@/components/icons/viber';
import Telegram from '@/components/icons/telegram';
import Button from '@/components/buttons/button';
import InputText from '@/components/form-inputs/input-text';
import InputDate from '@/components/form-inputs/input-date';
import InputTime from '@/components/form-inputs/input-time';
import InputRadio from '@/components/form-inputs/input-radio';
import InputTextArea from '@/components/form-inputs/input-textarea';

const minDate = getDateWithExtraDays(1);
const maxDate = getDateWithExtraDays(30);

const initialValues: IAppointmentInfo = {
  name: '',
  phone: '',
  date: formatDateToISO(minDate),
  time: '10:00',
  request: '',
  messenger: undefined,
};

function validate(values: IAppointmentInfo) {
  const errors: { name?: string; phone?: string; date?: string; time?: string } = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Будь-ласка введіть ваше ім'я";
  } else if (name.length < 5) {
    errors.name = "Ім'я занадто коротке";
  }

  const phone = values.phone.trim().replaceAll(' ', '');
  if (!phone || phone.length !== 17) {
    errors.phone = 'Будь-ласка введіть ваш номер телефону';
  }

  const date = values.date;
  if (!date) {
    errors.date = 'Будь-ласка виберіть дату';
  }
  const dateTime = new Date(date).getTime();
  if (dateTime > maxDate.getTime() || dateTime < minDate.getTime()) {
    errors.date = 'Будь-ласка виберіть коректну дату';
  }

  const time = values.time;
  if (!time) {
    errors.time = 'Будь-ласка виберіть час';
  }
  const [hours] = time.split(':');
  if (Number(hours) < 10 || Number(hours) > 19) {
    errors.time = 'Прийомні години - 10:00 - 19:00';
  }

  return errors;
}

interface IRequestAppointmentFormProps {
  onSubmit: (values: IAppointmentInfo) => void;
}

export default function RequestAppointmentForm(props: IRequestAppointmentFormProps) {
  const form = useFormik({
    initialValues,
    validateOnChange: false,
    validate,
    onSubmit: props.onSubmit,
  });

  const dateError = form.errors.date || form.errors.time;

  return (
    <form className="w-full" onSubmit={form.handleSubmit}>
      {/* Name */}
      <label className="block mb-px font-sans" htmlFor="name">
        Iм'я<span className="text-red font-sans">*</span>:
      </label>
      <InputText
        name="name"
        value={form.values.name}
        onChange={(event) => {
          form.handleChange(event);
          form.setErrors({ ...form.errors, name: undefined });
        }}
        error={!!form.errors.name}
      />
      {!!form.errors.name && <p className="text-red font-sans mt-1">{form.errors.name}</p>}
      {/* Phone */}
      <label className="block mb-px font-sans mt-3" htmlFor="phone">
        Телефон<span className="text-red font-sans">*</span>:
      </label>
      <InputText
        mask="+3\8 (099) 99-99-999"
        name="phone"
        value={form.values.phone}
        onChange={(event) => {
          form.handleChange(event);
          form.setErrors({ ...form.errors, phone: undefined });
        }}
        error={!!form.errors.phone}
      />
      {!!form.errors.phone && <p className="text-red font-sans mt-1">{form.errors.phone}</p>}
      {/* Messengers */}
      <label className="block mb-px font-sans mt-3">Мессенджер:</label>
      <InputRadio
        value={form.values.messenger}
        options={[
          {
            value: Messengers.Telegram,
            content: (
              <div className="flex flex-row items-center">
                <p className="pt-1 ml-2 mr-2 font-sans text-black">Telegram</p>
                <Telegram className="fill-black" />
              </div>
            ),
          },
          {
            value: Messengers.Viber,
            content: (
              <div className="flex flex-row items-center">
                <p className="pt-1 ml-2 mr-2 font-sans text-black">Viber</p>
                <Viber className="fill-black" />
              </div>
            ),
          },
          {
            value: undefined,
            content: <p className="ml-2 font-sans text-black">Передзвонити</p>,
          },
        ]}
        onChange={(value) => {
          form.setFieldValue('messenger', value);
        }}
      />
      {/* Date */}
      <div className="flex flex-row">
        <div className="flex-1 sm:w-1/2 w-3/4">
          <label className="block mb-px font-sans mt-3" htmlFor="date">
            Дата<span className="text-red font-sans">*</span>:
          </label>
          <InputDate
            name="date"
            value={form.values.date}
            onChange={(event) => {
              form.handleChange(event);
              form.setErrors({ ...form.errors, date: undefined });
            }}
            min={formatDateToISO(minDate)}
            max={formatDateToISO(maxDate)}
            className="w-full"
            error={!!form.errors.date}
          />
        </div>
        <div className="flex-1 ml-4 sm:w-1/2 w-1/4">
          <label className="block mb-px font-sans mt-3" htmlFor="time">
            Час<span className="text-red font-sans">*</span>:
          </label>
          <InputTime
            name="time"
            value={form.values.time}
            onChange={(event) => {
              form.handleChange(event);
              form.setErrors({ ...form.errors, time: undefined });
            }}
            timeListName="appointment-time"
            // className="w-1/2 sm:w-1/4"
            error={!!form.errors.time}
          />
        </div>
      </div>
      {!!dateError && <p className="text-red font-sans mt-1">{dateError}</p>}
      {/* Request */}
      <label className="block mb-px font-sans mt-3" htmlFor="request">
        Що вас турбує:
      </label>
      <InputTextArea name="request" value={form.values.request} onChange={form.handleChange} />
      <Button
        type="submit"
        className="mt-8 mx-auto px-8"
        onClick={form.handleSubmit}
        text="Записатись"
      />
    </form>
  );
}
