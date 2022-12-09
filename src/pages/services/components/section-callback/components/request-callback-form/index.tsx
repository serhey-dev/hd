import { useFormik } from 'formik';

import Button from '@/components/button';
import InputText from '@/components/input-text';
import { ICallbackInfo } from '@/types/callback-info';

const initialValues: ICallbackInfo = {
  name: '',
  phone: '',
};

function validate(values: typeof initialValues) {
  const errors: { name?: string; phone?: string } = {};

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

  return errors;
}

interface IRequestCallbackFormProps {
  onSubmit: (values: ICallbackInfo) => void;
}

export default function RequestCallbackForm(props: IRequestCallbackFormProps) {
  function onSubmit(values: ICallbackInfo) {
    props.onSubmit(values);
    setTimeout(() => {
      form.resetForm();
    }, 800);
  }

  const form = useFormik({
    initialValues,
    validateOnChange: false,
    validate,
    onSubmit,
  });

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
      <Button
        type="submit"
        className="mt-8 mx-auto"
        onClick={form.handleSubmit}
        text="Передзвонити"
      />
    </form>
  );
}
