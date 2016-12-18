export default class Persona {
  constructor (nombre) {
    this.nombre = nombre
  }

  saluda () {
    document.write(`Hola! Soy ${this.nombre}`)
  }
}
