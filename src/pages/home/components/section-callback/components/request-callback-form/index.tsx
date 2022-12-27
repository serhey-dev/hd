import React from 'react';
import { useFormik } from 'formik';

import { ICallbackInfo, Messengers } from '@/types';

import Viber from '@/components/icons/viber';
import Button from '@/components/buttons/button';
import Telegram from '@/components/icons/telegram';
import InputText from '@/components/form-inputs/input-text';
import InputRadio from '@/components/form-inputs/input-radio';

const initialValues: ICallbackInfo = {
  name: '',
  phone: '',
  messenger: undefined,
};

function validate(values: typeof initialValues) {
  const errors: { name?: string; phone?: string } = {};

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

  return errors;
}

interface IRequestCallbackFormHandles {
  resetForm: () => void;
}

interface IRequestCallbackFormProps {
  onSubmit: (values: ICallbackInfo) => void;
}

const RequestCallbackForm = React.forwardRef<
  IRequestCallbackFormHandles,
  IRequestCallbackFormProps
>(function RequestCallbackForm(props, ref) {
  const form = useFormik({
    initialValues,
    validateOnChange: false,
    validate,
    onSubmit: props.onSubmit,
  });

  React.useImperativeHandle(ref, () => ({
    resetForm: form.resetForm,
  }));

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
      <Button
        type="submit"
        className="mt-8 mx-auto"
        onClick={form.handleSubmit}
        text={!!form.values.messenger ? 'Написати' : 'Передзвонити'}
      />
    </form>
  );
});

export default RequestCallbackForm;
