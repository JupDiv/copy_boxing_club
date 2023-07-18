'use client';

import { useState } from 'react';
import IconFormOnline from '../IconFormOnline/IconFormOnline';
import Form from '../Form/Form';
import { FormOnlineWrapper, FormOnlineContainer } from './FormOnline.styles';

export default function FormOnline() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormOnlineWrapper>
      {isOpen ? (
        <FormOnlineContainer>
          <Form isOpenModal={setIsOpen} place="formOnline" />
        </FormOnlineContainer>
      ) : (
        <IconFormOnline isOpenModal={setIsOpen} />
      )}
    </FormOnlineWrapper>
  );
}
