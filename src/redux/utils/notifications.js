// Проста логіка push-повідомлень через alert або можна підключити toast бібліотеки

export const notifySuccess = (message) => {
  // Можна замінити на toast бібліотеки
  alert(`Success: ${message}`);
};

export const notifyError = (message) => {
  alert(`Error: ${message}`);
};
