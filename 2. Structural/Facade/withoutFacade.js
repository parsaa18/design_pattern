class InventoryManager {
  checkStock(itemId, quantity) {
    console.log(`Checking stock for item ${itemId}: ${quantity} available`);
    return quantity > 0;
  }
}

class PaymentProcessor {
  processPayment(amount, cardDetails) {
    console.log(
      `Processing payment of $${amount} with card ${cardDetails.cardNumber}`
    );
    return true;
  }
}

class ShippingService {
  calculateShipping(address) {
    console.log(`Calculating shipping cost for address: ${address}`);
    return 10;
  }

  shipOrder(itemId, address) {
    console.log(`Shipping item ${itemId} to ${address}`);
    return "TRK12345";
  }
}

function placeOrderWithoutFacade() {
  const inventory = new InventoryManager();
  const payment = new PaymentProcessor();
  const shipping = new ShippingService();

  const itemId = "ITEM001";
  const quantity = 2;
  const cardDetails = { cardNumber: "1234-5678-9012-3456" };
  const address = "123 Main St, City";

  if (!inventory.checkStock(itemId, quantity)) {
    console.log("Item out of stock");
    return;
  }

  const shippingCost = shipping.calculateShipping(address);
  const itemPrice = quantity * 50;
  const totalAmount = itemPrice + shippingCost;

  if (!payment.processPayment(totalAmount, cardDetails)) {
    console.log("Payment failed");
    return;
  }

  const trackingNumber = shipping.shipOrder(itemId, address);
  console.log({
    success: true,
    message: "Order placed successfully",
    totalAmount,
    trackingNumber,
  });
}

placeOrderWithoutFacade();
