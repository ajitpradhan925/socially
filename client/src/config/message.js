import { message } from 'antd';

const showInfoMessage = (msg) => {
  message.info(msg);
};

const showErrorMessage = (msg) => {
  message.error(msg);
};

const showSuccessMessage = (msg) => {
  message.success(msg);
};

export {
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
};
