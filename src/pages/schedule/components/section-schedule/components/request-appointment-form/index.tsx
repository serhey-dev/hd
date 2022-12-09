import { useFormik } from 'formik';

import Button from '@/components/button';
import InputText from '@/components/input-text';
import InputDate from '@/components/input-date';
import InputTime from '@/components/input-time';
import InputTextArea from '@/components/input-textarea';
import { getDatePlusDays, formatDateToISO } from '@/helpers/date';
import { IAppointmentInfo } from '@/types/appointment-info';

const minDate = getDatePlusDays(1);
const maxDate = getDatePlusDays(30);

const initialValues: IAppointmentInfo = {
  name: '',
  phone: '',
  date: '',
  time: '10:00',
  request: '',
};

function validate(values: IAppointmentInfo) {
  const errors: { name?: string; phone?: string; date?: string; time?: string } = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Будь-ласка введіть ваше ім'я";
  } else if (name.length < 5) {
    errors.name = "Ім'я занадто коротке";
  }

  const phone = values.phone.trim();
  if (!phone || phone.length !== 19) {
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

// TODO - highlight valid field
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
      {/* Date */}
      <label className="block mb-px font-sans mt-3" htmlFor="date">
        Дата та час<span className="text-red font-sans">*</span>:
      </label>
      <div className="flex flex-row">
        <InputDate
          name="date"
          value={form.values.date}
          onChange={(event) => {
            form.handleChange(event);
            form.setErrors({ ...form.errors, date: undefined });
          }}
          className="w-3/4"
          min={formatDateToISO(minDate)}
          max={formatDateToISO(maxDate)}
          error={!!form.errors.date}
        />
        <InputTime
          name="time"
          value={form.values.time}
          onChange={(event) => {
            form.handleChange(event);
            form.setErrors({ ...form.errors, time: undefined });
          }}
          timeListName="appointment-time"
          className="w-1/4 ml-4"
          error={!!form.errors.time}
        />
      </div>
      {!!dateError && <p className="text-red font-sans mt-1">{dateError}</p>}
      {/* Request */}
      <label className="block mb-px font-sans mt-3" htmlFor="request">
        Що вас турбує:
      </label>
      <InputTextArea name="request" value={form.values.request} onChange={form.handleChange} />
      <Button
        type="submit"
        className="mt-8 mx-auto"
        onClick={form.handleSubmit}
        text="Записатись"
      />
    </form>
  );
}
