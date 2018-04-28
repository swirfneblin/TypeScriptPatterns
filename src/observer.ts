interface Subject {
    registrarObserver(o: Observer);
    removerObserver(o: Observer);
    notificarObserver();
}

interface Observer {
    atualizarTemperatura(temperatura: number);
}

class EstacaoTempo implements Subject {
    private temperatura: number;
    private observers: Observer[] = [];

    registrarObserver(o: Observer) {
        this.observers.push(o);
    }

    removerObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notificarObserver() {
        for (let observer of this.observers) {
            observer.atualizarTemperatura(this.temperatura);
        }
    }

    setTemperature(temp: number) {
        console.log('A temperatura da estacao eh: ' + temp);
        this.temperatura = temp;
        this.notificarObserver();
    }
}

class TemperaturaExibidor implements Observer {
    private subject: Subject;
    constructor(estacaoTempo: Subject) {
        this.subject = estacaoTempo;
        estacaoTempo.registrarObserver(this);
    }

    atualizarTemperatura(temperatura: number) {
        console.log('Exibidor de Temperatura: Atualizando...');
        // logica para exibicao
    }
}

class Ventilador implements Observer {
    private subject: Subject;
    constructor(estacaoTempo: Subject) {
        this.subject = estacaoTempo;
        estacaoTempo.registrarObserver(this);
    }

    atualizarTemperatura(temperatura: number) {
        if (temperatura > 25) {
            console.log('Ligando ventilador...');
            // logica para exibicao  
        } else {
            console.log('Desligando ventilador...');
            // logica para exibicao
        }
    }
}

let estacaoTempo = new EstacaoTempo();
let exibicaoTemperatura = new TemperaturaExibidor(estacaoTempo);
let ventilador = new Ventilador(estacaoTempo);

estacaoTempo.setTemperature(20);
estacaoTempo.setTemperature(30);
