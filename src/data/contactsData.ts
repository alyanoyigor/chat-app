import { ChatMessage } from '../types/types';

type ContactsData = {
  imgPath: string;
  name: string;
  id: number;
  messages: ChatMessage[];
};

export const contactsData: ContactsData[] = [
  {
    imgPath: 'https://randomuser.me/api/portraits/women/28.jpg',
    name: 'Alice Freeman',
    id: 1,
    messages: [
      { isFromMe: false, text: 'Hello, where are you? Call me!', date: 'April 17, 2022 12:24:00' },
      {
        isFromMe: true,
        text: "Hey Alice, I'm sorry, I had some things to do at home.",
        date: 'April 18, 2022 10:22:41',
      },
      {
        isFromMe: false,
        text: 'Okay, I just got a little nervous',
        date: 'April 18, 2022 10:24:01',
      },
      { isFromMe: true, text: 'Why? I was always at home', date: 'April 18, 2022 10:25:25' },
    ],
  },
  {
    imgPath: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Josefina',
    id: 2,
    messages: [
      {
        isFromMe: false,
        text: 'Quickly come to the meeting room 18',
        date: 'April 21, 2022 22:24:00',
      },
      {
        isFromMe: true,
        text: "I'm having breakfast right now, can't you wait for 10 minutes?",
        date: 'April 21, 2022 22:29:41',
      },
      {
        isFromMe: false,
        text: 'We are loosing money! Quick!',
        date: 'April 21, 2022 22:30:01',
      },
    ],
  },
  {
    imgPath: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Velasquez',
    id: 3,
    messages: [],
  },
  {
    imgPath: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Barrera',
    id: 4,
    messages: [],
  },
];
