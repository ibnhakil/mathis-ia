
// pages/chat.tsx

import dynamic from 'next/dynamic';

const ChatApp = dynamic(() => import('../app'), { ssr: false });

export default function ChatPage() {
  return <ChatApp />;
}
