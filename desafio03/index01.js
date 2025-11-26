class Desconto {
  calcular(valor) {
    return valor;
  }
}

class DescontoNormal extends Desconto {
  calcular(valor) {
    return valor * 0.9;
  }
}

class DescontoVip extends Desconto {
  calcular(valor) {
    return valor * 0.8;
  }
}

class Carrinho {
  constructor(desconto) {
    this.desconto = desconto;
  }

  finalizarCompra(valor) {
    const total = this.desconto.calcular(valor);
    console.log(`Total após desconto: R$${total}`);
  }
}

// Cliente
const descontoVip = new DescontoVip();
const carrinho = new Carrinho(descontoVip);
carrinho.finalizarCompra(100);
