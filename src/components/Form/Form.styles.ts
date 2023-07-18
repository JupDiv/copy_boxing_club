import styled from 'styled-components';
import { Button } from '@mui/material';

type ErrorMessagesPhone = {
  $isPhoneError?: boolean;
};

type FormProps = {
  $place?: string;
};

export const FormWrapper = styled.div<FormProps>`
  display: flex;
  border-top: 1px solid #fedb39;
  border-bottom: 1px solid #fedb39;
  border-radius: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.$place === 'formOnline' ? '#293462' : ''};
`;
export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #fedb39;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 454px;
  margin: 10px auto;
  border: 1px solid #fedb39;
  border-radius: 10px;

  @media (max-width: 425px) {
    width: 300px;
  }
`;
export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 2;
  margin: 10px 0;
  width: 85%;
`;
export const FormInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;
export const FormLabel = styled.label`
  color: #1cd6ce;
  text-align: center;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 30px;
`;
export const FormContainerButton = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-around;
  width: 100%;
`;
export const FormButtonSubmit = styled(Button)`
  margin: 10px 10px;
  color: #1cd6ce;
`;

export const FormButtonCancel = styled.button<FormProps>`
  display: ${(props) => (props.$place === 'formOnline' ? 'flex' : 'none')};
  align-items: center;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: #1cd6ce;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  text-decoration: none;
  background-color: transparent;
`;
export const FormErrorMessages = styled.div<ErrorMessagesPhone>`
  position: absolute;
  bottom: ${(props) => (props.$isPhoneError ? '-37px' : '-15px')};
  color: red;
  width: 100%;
  color: #d61c4e;
`;
