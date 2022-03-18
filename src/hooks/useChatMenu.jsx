import { useState } from 'react';

function useChatMenu() {
  const [isChatMenuVisible, setIsChatMenuVisible] = useState(false);

  return { isChatMenuVisible, setIsChatMenuVisible };
}

export default useChatMenu;
