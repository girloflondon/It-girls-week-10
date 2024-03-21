function calculateTotalPrice(quantity = 2, price = 15000000) {
  let totalPrice = (quantity * price).toLocaleString("ru-RU");
  let priceMessage = `СТОИМОСТЬ ПОКУПКИ: ${totalPrice} РУБЛЕЙ`;
  let message = document.getElementById("total-price");
  message.textContent = priceMessage;
  alert(priceMessage);
}
