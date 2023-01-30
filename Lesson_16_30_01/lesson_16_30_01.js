// ************************* Task 1 *******************************

// 1. Реализовать класс Car со следующими свойствами:
// company_name, model, color, country, volume
// Создать экземпляр этого класса
// Вывести в консоль все свойства созданного экземпляра класса
// Реализовать метод get_car_info, который будет выводить в консоль строку в формате: <Модель> (<Компания>, <Страна>): <Объем>.
// Вызвать метод у созданного экземпляра класса

// class Car {
//   constructor(companyName, model, color, country, volume) {
//     this.companyName = companyName;
//     this.model = model;
//     this.color = color;
//     this.country = country;
//     this.volume = volume;
//   }
//   getCarInfo() {
//     console.log(
//       `${this.model} (${this.companyName}, ${this.country}): ${this.volume}`
//     );
//   }
// }

// const car1 = new Car("BMW", "M3", "black", "Germany", "3.0");
// const car2 = new Car("Toyota", "RAV4", "red", "Germany", "2.0");

// car1.getCarInfo();
// car2.getCarInfo();
// console.log(car1.companyName);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.country);
// console.log(car1.volume);

// **************************** Task 2 ******************************
// 2. Реализуйте класс Group (групп), который будет иметь следующие свойства:
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

// class Group {
//   constructor(name, major, number = 15) {
//     this.name = name;
//     this.major = major;
//     this.number = number;
//   }
//   addStudent() {
//     this.number++;
//   }
//   deleteStudent() {
//     this.number--;
//   }
// }

// const group1 = new Group("Morning group", "FrontEnd", 20);
// const group2 = new Group("Evening group", "BackEnd", 30);
// const group3 = new Group("Evening group", "QA");

// group1.addStudent();
// group2.deleteStudent();
// group3.deleteStudent();

// console.log(group1);
// console.log(group2);
// console.log(group3);

// ********************** Task 3 ************************************
// 3. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет возвращать зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней amount)

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
  addDays(amount) {
    return (this.days += amount);
  }
  deleteDays(amount) {
    return (this.days -= amount);
  }
}

const worker1 = new Worker("Kyle", "Rise", 100, 30);
const worker2 = new Worker("Mike", "Green", 200, 30);
const worker3 = new Worker("John", "Nil", 300, 30);

console.log(worker1.getSalary());
console.log(worker2.getSalary() + worker3.getSalary());

console.log(worker2.addDays(5));
console.log(worker3.deleteDays(3));
