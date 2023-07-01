const onClickWhatsApp = (message: string) => {
  const phoneNumber = '+59899680911';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
};

export default onClickWhatsApp;
