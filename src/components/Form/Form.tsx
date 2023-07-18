import {
  FormWrapper,
  Form,
  FormInputWrapper,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormContainerButton,
  FormButtonSubmit,
  FormButtonCancel,
  FormErrorMessages,
  FormTitle,
} from './Form.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Мінімум 2 символи')
    .max(15, 'Максимум 15 символів')
    .required('Обовʼязкове поле')
    .matches(
      /^[А-ЯІЄЇҐа-яієїґA-Za-z'`"ʼ*]+$/gm,
      'Імʼя може містити тільки букви'
    ),
  phone: Yup.string()
    .min(10, 'Мінімум 10 символів')
    .max(12, 'Максимум 12 символів')
    .matches(/^380\d{9}$/gm, 'Номер телефону має бути в форматі 380XXXXXXXXX')
    .required('Обовʼязкове поле'),
  message: Yup.string()
    .min(2, 'Мінімум 2 символи')
    .max(100, 'Максимум 100 символів')
    .required('Обовʼязкове поле'),
});

type FormProps = {
  place?: string;
  isOpenModal?: (value: boolean) => void;
};

export default function CallBack({ place, isOpenModal }: FormProps) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const request = fetch('/api/sentform', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitting(false);

      resetForm();
      isOpenModal?.(false);
    },
  });

  return (
    <FormWrapper $place={place}>
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle>Звʼязатись</FormTitle>
        <FormInputWrapper>
          <FormInputContainer>
            <FormLabel htmlFor="name">Імʼя</FormLabel>
            <FormInput
              id="name"
              type="text"
              placeholder="Імʼя"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <FormErrorMessages>{formik.errors.name}</FormErrorMessages>
            ) : null}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="phone">Телефон</FormLabel>
            <FormInput
              id="phone"
              type="text"
              placeholder="380ХХХХХХХ"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <FormErrorMessages
                $isPhoneError={formik.errors.phone.length > 25}
              >
                {formik.errors.phone}
              </FormErrorMessages>
            ) : null}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="message">Повідомлення</FormLabel>
            <FormInput
              id="message"
              type="text"
              placeholder="Повідомлення"
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message ? (
              <FormErrorMessages>{formik.errors.message}</FormErrorMessages>
            ) : null}
          </FormInputContainer>
        </FormInputWrapper>
        <FormContainerButton>
          <FormButtonSubmit
            type="submit"
            variant="outlined"
            endIcon={<SendIcon />}
          >
            Відправити
          </FormButtonSubmit>
          <FormButtonCancel $place={place} onClick={() => isOpenModal?.(false)}>
            Закрити
          </FormButtonCancel>
        </FormContainerButton>
      </Form>
    </FormWrapper>
  );
}
