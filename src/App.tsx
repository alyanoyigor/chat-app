import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ChatBlock } from './components/ChatBlock';
import { MenuContacts } from './components/MenuContacts';

const AppWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 'menu chat';
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [isChatHidden, setIsChatHidden] = useState(true);

  const saveContactData = () => dispatch({ type: 'SAVE_CONTACT_DATA' });
  useEffect(() => {
    window.addEventListener('beforeunload', saveContactData);
    return () => {
      window.removeEventListener('beforeunload', saveContactData);
    };
  }, []);

  return (
    <AppWrapper>
      <MenuContacts
        isMenuHidden={isMenuHidden}
        setIsChatHidden={setIsChatHidden}
        setIsMenuHidden={setIsMenuHidden}
      />
      <ChatBlock
        isChatHidden={isChatHidden}
        setIsChatHidden={setIsChatHidden}
        setIsMenuHidden={setIsMenuHidden}
      />
    </AppWrapper>
  );
};

export default App;
