function getHello(name) {
    return 'Hello ' + name;
}
var nome = "Muller";
document.body.innerHTML = getHello(nome);
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.marca, car.name, car.potencia);
};
var prisma = new Car();
prisma.marca = "Chevrolet";
prisma.name = "Prisma";
getCar(prisma);
