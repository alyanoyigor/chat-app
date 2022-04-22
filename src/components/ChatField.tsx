import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import SendMessageIcon from '../assets/svg/sendMessage.svg';

const InputWrapper = styled(Container)`
  background-color: #f5f5f5;
  border-top: 1px solid #ececec;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const ButtonField = styled.button`
  padding: 0;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  width: 100%;
  height: 100%;
  background-image: url(${SendMessageIcon});
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #ececec;
  width: 100%;
  outline: none;
  background-color: #fafafa;
`;

export const ChatField = () => {
  return (
    <InputWrapper>
      <Form>
        <Input type="text" placeholder="Type your message" />
        <ButtonField type="submit" />
      </Form>
    </InputWrapper>
  );
};
