import { useState } from 'react';

function useChatMenu() {
  const [isChatMenuShown, setIsChatMenuShown] = useState(false);

  return { isChatMenuShown, setIsChatMenuShown };
}

export default useChatMenu;
