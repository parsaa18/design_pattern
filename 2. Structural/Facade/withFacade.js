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

class CheckoutFacade {
  constructor() {
    this.inventory = new InventoryManager();
    this.payment = new PaymentProcessor();
    this.shipping = new ShippingService();
  }

  checkout(itemId, quantity, cardDetails, address) {
    if (!this.inventory.checkStock(itemId, quantity)) {
      return { success: false, message: "Item out of stock" };
    }

    const shippingCost = this.shipping.calculateShipping(address);

    const itemPrice = quantity * 50;
    const totalAmount = itemPrice + shippingCost;
    if (!this.payment.processPayment(totalAmount, cardDetails)) {
      return { success: false, message: "Payment failed" };
    }

    const trackingNumber = this.shipping.shipOrder(itemId, address);

    return {
      success: true,
      message: "Order placed successfully",
      totalAmount,
      trackingNumber,
    };
  }
}
function placeOrder() {
  const checkout = new CheckoutFacade();

  const orderDetails = {
    itemId: "ITEM001",
    quantity: 2,
    cardDetails: { cardNumber: "1234-5678-9012-3456" },
    address: "123 Main St, City",
  };

  const result = checkout.checkout(
    orderDetails.itemId,
    orderDetails.quantity,
    orderDetails.cardDetails,
    orderDetails.address
  );

  console.log(result);
}

placeOrder();
