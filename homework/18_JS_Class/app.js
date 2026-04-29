class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getInfo() {
    return `Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին`;
  }

  getAge() {
    return 2026 - this.year;
  }
}

const car1 = new Car("Mitsubishi", "Lancer", 2008, "սև");
const car2 = new Car("BMW", "M5", 2020, "կապույտ");

const cars = [car1, car2];

cars.forEach((car) => {
  console.log(car.getInfo());
  console.log(`Մեքենայի տարիքը: ${car.getAge()} տարեկան`);
});