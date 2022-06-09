//const boom = require('@hapi/boom');
const db = require('./dbservices');

class refugioService {
  constructor() {
    this.generate();
  }
  generate() {
  }

  //Animales
  async createAnimal(data) {
    console.log(data);
    const result = await db.query(
      `INSERT INTO mydb.animales (Id_animal, Nombre, Especie, Edad, Vacunas, Fecha_ingreso) VALUES
      ( '${data.Id_animal}',
         '${data.Nombre}',
          '${data.Especie}',
          ${data.Edad},
          ${data.Vacunas},
          ${data.Fecha_ingreso})`
    );
    return result;
  }

  async findAnimal() {
    const result = await db.query(`SELECT *
        FROM animales`);
    return result;
  }

  async findOneAnimal(Id_animal) {
    const result = await db.query(
      `SELECT *
        FROM animales WHERE Id_animal=${Id_animal}`);
    return result;

  }

  //Dueños
  async createDueño(data) {
    console.log(data);
    const result = await db.query(
      `INSERT INTO mydb.dueños (Id_dueño, Nombre, correo_electronico, Direccion, Telefono) VALUES
      ( '${data.Id_dueño}',
         '${data.Nombre}',
          '${data.Correo_electronico}',
          '${data.Direccion}',
          ${data.Telefono})`
    );
    return result;
  }

  async findDueño() {
    const result = await db.query(`SELECT *
        FROM Dueños`);
    return result;
  }

  async findOneDueño(Id_dueño) {
    const result = await db.query(
      `SELECT *
        FROM Dueños WHERE Id_Dueño=${Id_dueño}`);
    return result;

  }

  //Adopciones
  async orderByAnimal() {
    const result = await db.query(`SELECT a.Id_animal, a.Nombre, d.Id_Dueño, d.Nombre
    FROM Animales as a, Dueños as d, adopciones as b WHERE d.Id_Dueño = b.Dueños_Id_animales`);
    return result;
  }

  async orderByDueño() {
    const result = await db.query(`SELECT a.Id_animal, a.Nombre, d.Id_Dueño, d.Nombre
    FROM Animales as a, Dueños as d, adopciones as b WHERE d.Id_Dueño = b.dueños_Id_dueño`);
    return result;
  }

  async searchByAnimal() {
    const result = await db.query(`SELECT a.Id_animal, a.Nombre, d.Id_Dueño, d.Nombre
        FROM Animal as a, Dueños as d WHERE a.Id_animal=${Id_animal}`);
    return result;
  }

  async searchByDueño() {
    const result = await db.query(`SELECT a.Id_animal, a.Nombre, d.Id_Dueño, d.Nombre
        FROM Animal as a, Dueños as d WHERE d.Id_dueño=${Id_Dueño}`);
    return result;
  }
}

module.exports = TaqueriasService;
