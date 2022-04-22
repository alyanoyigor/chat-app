import React from 'react';
import styled from 'styled-components';
import { ChatBlock } from './components/ChatBlock';
import { MenuContacts } from './components/MenuContacts';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  overflow: hidden;
`;

const App = () => {
  return (
    <AppWrapper>
      <MenuContacts />
      <ChatBlock />
    </AppWrapper>
  );
};

export default App;
