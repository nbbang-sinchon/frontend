import { useState } from 'react';

function useAlert() {
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const openAlertModal = () => {
    setAlertModalVisible(true);
  };

  const closeAlertModal = () => {
    setAlertModalVisible(false);
  };

  return { setAlertMessage, openAlertModal, alertModalVisible, alertMessage, closeAlertModal };
}

export default useAlert;
