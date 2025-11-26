class EmailService {
  send(message) {
    console.log(`Enviando email: ${message}`);
  }
}

class SMSService {
  send(message) {
    console.log(`Enviando SMS: ${message}`);
  }
}

class Notificador {
  constructor(notifier) {
    this.notifier = notifier;
  }

  notificar(msg) {
    this.notifier.send(msg);
  }
}

// Cliente
const email = new EmailService();
const notificador = new Notificador(email);
notificador.notificar("Pedido confirmado!");
