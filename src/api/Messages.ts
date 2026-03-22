import { Message } from '@/interfaces/Messages';

const dummyMessages: Message[] = [
  {
    id: '1',
    username: 'rahul',
    message: 'Hey guys 👋',
    timestamp: '2026-03-20T09:10:00Z',
  },
  {
    id: '2',
    username: 'sara',
    message: 'Hello! What’s up?',
    timestamp: '2026-03-20T09:12:00Z',
  },
  {
    id: '3',
    username: 'zaimsal',
    message: 'Anyone working on something interesting?',
    timestamp: '2026-03-20T09:15:00Z',
  },
  {
    id: '4',
    username: 'arjun',
    message: 'Yeah building a chat app 😅',
    timestamp: '2026-03-20T09:18:00Z',
  },
  {
    id: '5',
    username: 'zaimsal',
    message: 'Nicee, using sockets?',
    timestamp: '2026-03-20T09:20:00Z',
  },
  {
    id: '6',
    username: 'rahul',
    message: 'I’m still stuck on frontend 😭',
    timestamp: '2026-03-20T09:25:00Z',
  },
  {
    id: '7',
    username: 'sara',
    message: 'Frontend is always the hardest lol',
    timestamp: '2026-03-20T09:30:00Z',
  },

  // Next day
  {
    id: '8',
    username: 'zaimsal',
    message: 'Good morning everyone ☀️',
    timestamp: '2026-03-21T08:00:00Z',
  },
  {
    id: '9',
    username: 'arjun',
    message: 'Morning bro!',
    timestamp: '2026-03-21T08:05:00Z',
  },
  {
    id: '10',
    username: 'rahul',
    message: 'Did anyone fix that bug?',
    timestamp: '2026-03-21T08:10:00Z',
  },
  {
    id: '11',
    username: 'zaimsal',
    message: 'Yeah, it was a state issue.',
    timestamp: '2026-03-21T08:15:00Z',
  },
  {
    id: '12',
    username: 'sara',
    message: 'Classic React problem 😂',
    timestamp: '2026-03-21T08:17:00Z',
  },
  {
    id: '13',
    username: 'arjun',
    message: 'Works fine now 👍',
    timestamp: '2026-03-21T08:20:00Z',
  },

  // Today
  {
    id: '14',
    username: 'rahul',
    message: 'What are we building today?',
    timestamp: '2026-03-22T10:00:00Z',
  },
  {
    id: '15',
    username: 'zaimsal',
    message: 'Global chat system 😎',
    timestamp: '2026-03-22T10:02:00Z',
  },
  {
    id: '16',
    username: 'sara',
    message: 'That sounds cool!',
    timestamp: '2026-03-22T10:03:00Z',
  },
  {
    id: '17',
    username: 'arjun',
    message: 'Are you adding real-time?',
    timestamp: '2026-03-22T10:05:00Z',
  },
  {
    id: '18',
    username: 'zaimsal',
    message: 'Yep, Socket.IO probably.',
    timestamp: '2026-03-22T10:07:00Z',
  },
  {
    id: '19',
    username: 'rahul',
    message: 'Make it scalable bro 💀',
    timestamp: '2026-03-22T10:08:00Z',
  },
  {
    id: '20',
    username: 'zaimsal',
    message: 'Haha let me first make it work 😭',
    timestamp: '2026-03-22T10:10:00Z',
  },
];

export const getAllMessages = async (): Promise<Message[]> => {
    // Simulate API call delay
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyMessages;
}