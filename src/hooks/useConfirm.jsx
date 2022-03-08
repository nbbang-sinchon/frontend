import { useState } from 'react';

function useConfirm() {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const openConfirmModal = () => {
    setConfirmModalVisible(true);
  };

  const onConfirm = () => {
    setConfirmModalVisible(false);
    setIsConfirm(true);
  };

  const onDisconfirm = () => {
    setConfirmModalVisible(false);
  };

  return { isConfirm, setIsConfirm, openConfirmModal, confirmModalVisible, onConfirm, onDisconfirm };
}

export default useConfirm;
