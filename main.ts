function getHello(name:string){
    return 'Hello ' + name;
}

var nome = "Muller";

document.body.innerHTML = getHello(nome);

interface ICar{
    marca:string;
    name:string;
    potencia:number;
}

class Car{
    marca:string;
    name:string;
    potencia:number;
}

var getCar = function(car:ICar){
    console.log(car.marca,car.name,car.potencia);
}

var prisma = new Car();
prisma.marca = "Chevrolet";
prisma.name = "Prisma";

getCar(prisma);

