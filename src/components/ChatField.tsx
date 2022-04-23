import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Container';
import SendMessageIcon from '../assets/svg/sendMessage.svg';
import { State } from '../types/types';

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
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state: State) => state.selectedUserId);

  const getContactMessage = async () => {
    const requestMessage = await axios.get('https://api.chucknorris.io/jokes/random');
    return requestMessage.data.value;
  };

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_MESSAGE', payload: { text: messageText, isFromMe: true, id: userId } });
    setMessageText('');
    setTimeout(() => {
      getContactMessage().then((message) =>
        dispatch({
          type: 'ADD_MESSAGE',
          payload: { text: message, isFromMe: false, id: userId },
        })
      );
    }, 1000 * Math.floor(10 + Math.random() * 5));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmitMessage}>
        <Input
          type="text"
          value={messageText}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <ButtonField type="submit" />
      </Form>
    </InputWrapper>
  );
};
