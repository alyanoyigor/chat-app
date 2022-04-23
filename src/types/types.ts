export type ChatMessageData = {
  text: string;
  isFromMe: boolean;
  date: string;
};

export type ContactData = {
  imgPath: string;
  name: string;
  id: number;
  messages: ChatMessageData[];
};

export type State = {
  selectedUserId: string;
  searchContactValue: string;
  contactsData: ContactData[];
};
