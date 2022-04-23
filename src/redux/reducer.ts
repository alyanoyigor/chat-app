import { State } from '../types/types';
import { contactsData } from '../data/contactsData';

type ReducerAction =
  | { type: 'SET_USER_ID'; payload: string }
  | { type: 'SET_SEARCH_CONTACT_VALUE'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: { text: string; isFromMe: boolean; id: string } };

const defaultState: State = {
  selectedUserId: '',
  searchContactValue: '',
  contactsData: [...contactsData],
};

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
    default:
      return state;
  }
};

export default reducer;
