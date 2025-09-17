class LightButton {
  render() {
    return "Botão branco criado";
  }
}

class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}

class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

class UIFactory {
  createButton() {
    throw new Error("Método createButton() deve ser implementado.");
  }

  createWindow() {
    throw new Error("Método createWindow() deve ser implementado.");
  }
}

class LightUIFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }

  createWindow() {
    return new LightWindow();
  }
}

class DarkUIFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }

  createWindow() {
    return new DarkWindow();
  }
}

const theme = "dark";

let factory;
if (theme === "light") {
  factory = new LightUIFactory();
} else {
  factory = new DarkUIFactory();
}

const button = factory.createButton();
const windowUI = factory.createWindow();

console.log(button.render());
console.log(windowUI.render());
