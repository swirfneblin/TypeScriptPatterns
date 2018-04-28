abstract class Carro {
    public descricao: string;
    public retornaDescricao(): string {
        return this.descricao;
    }
    public abstract custo(): number;
}

class ModelS extends Carro {
    public descricao = "Model S";
    public custo(): number {
        return 73000;
    }
}

class ModelX extends Carro {
    public descricao = "Model X";
    public custo(): number {
        return 77000;
    }
}


abstract class CarroOpcoes extends Carro {
    decoratedCar: Carro;
    public abstract retornaDescricao(): string;
    public abstract custo(): number;
}

class MelhoriaPilotoAuto extends CarroOpcoes {
    decoratedCar: Carro;

    constructor(car: Carro) {
        super();
        this.decoratedCar = car;
    }

    public retornaDescricao(): string {
        return this.decoratedCar.retornaDescricao() + ', Melhoria Piloto automatico'
    }
    public custo(): number {
        return this.decoratedCar.custo() + 4000;
    }
}

class AssentoCorrida extends CarroOpcoes {
    decoratedCar: Carro;

    constructor(car: Carro) {
        super();
        this.decoratedCar = car;
    }

    public retornaDescricao(): string {
        return this.decoratedCar.retornaDescricao() + ', Assentos para corrida'
    }
    public custo(): number {
        return this.decoratedCar.custo() + 5000;
    }
}

let myTesla = new ModelS();
myTesla = new AssentoCorrida(myTesla);

console.log(myTesla.custo());
console.log(myTesla.retornaDescricao());

myTesla = new MelhoriaPilotoAuto(myTesla);

console.log(myTesla.custo());
console.log(myTesla.retornaDescricao())