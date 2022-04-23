import { ContactData, State } from '../types/types';
import { contactsData } from '../data/contactsData';

type ReducerAction =
  | { type: 'SET_USER_ID'; payload: string }
  | { type: 'SET_READ_MESSAGES'; payload: string }
  | { type: 'SET_SEARCH_CONTACT_VALUE'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: { text: string; isFromMe: boolean; id: string } };

const defaultState: State = {
  selectedUserId: '',
  searchContactValue: '',
  contactsData: [...contactsData],
};

const savedContactsData = localStorage.getItem('contactsData');
if (savedContactsData) {
  defaultState.contactsData = JSON.parse(savedContactsData);
}

window.addEventListener('beforeunload', () =>
  localStorage.setItem('contactsData', JSON.stringify(defaultState.contactsData))
);

// eslint-disable-next-line default-param-last
const reducer = (state: State = defaultState, action: ReducerAction): State => {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, selectedUserId: action.payload };
    case 'ADD_MESSAGE': {
      let copyContactsData = [...state.contactsData];
      const selectedContactData = copyContactsData.find(
        (contact) => contact.id === Number(action.payload.id)
      );
      copyContactsData = copyContactsData.filter(
        (contact) => contact.id !== Number(action.payload.id)
      );

      if (selectedContactData) {
        selectedContactData.messages = [
          ...selectedContactData.messages,
          {
            isRead: action.payload.id === state.selectedUserId,
            isFromMe: action.payload.isFromMe,
            date: new Date().toString(),
            text: action.payload.text,
          },
        ];
        return { ...state, contactsData: [selectedContactData, ...copyContactsData] };
      }
      return state;
    }
    case 'SET_SEARCH_CONTACT_VALUE':
      return { ...state, searchContactValue: action.payload };
    case 'SET_READ_MESSAGES': {
      const contacts = [...state.contactsData];
      const findContact = (contactData: ContactData) => contactData.id === Number(action.payload);
      const contact = state.contactsData.find(findContact);
      const contactIndex = state.contactsData.findIndex(findContact);
      if (contact) {
        contact.messages[contact.messages.length - 1].isRead = true;
        contacts[contactIndex] = contact;
        return { ...state, contactsData: contacts };
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
