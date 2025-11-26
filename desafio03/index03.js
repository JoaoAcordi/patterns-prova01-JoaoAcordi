class OrderService {
  process(orderId) {
    console.log(`Processando pedido #${orderId}...`);
  }
}

class OrderController {
  constructor(service) {
    this.service = service;
  }

  handleRequest(orderId) {
    console.log("Recebendo requisição do cliente...");
    this.service.process(orderId);
  }
}

const service = new OrderService();
const controller = new OrderController(service);
controller.handleRequest(101);
