class BluRay {
    ligar() {
        console.log('ligando bluray...')
    }
    desligar() {
        console.log('desligando bluray...')
    }
    tocar() {
        console.log('tocando disco bluray...')
    }
}

class Amplificador {
    ligar() {
        console.log('ligando amplificador...')
    }
    desligar() {
        console.log('desligando amplificador...')
    }
    setarFonte(fonte: string) {
        console.log('setando fonte: ' + fonte)
    }
    setarVolume(volumelevel: number) {
        console.log('setando volume : ' + volumelevel);
    }
}

class Luz {
    ligar() {
        console.log('ligando luzes...')
    }
    desligar() {
        console.log('desligando luzes...')
    }
}

class TV {
    ligar() {
        console.log('ligando TV...')
    }
    desligar() {
        console.log('desligando TV...')
    }
}

class Pipoqueira {
    ligar() {
        console.log('ligando pipoqueira...')
    }
    desligar() {
        console.log('desligando pipoqueira...')
    }
    pop() {
        console.log('fazendo pipoca');
    }
}

class HomeTheatherFacade {
    private bluray: BluRay;
    private amp: Amplificador;
    private luz: Luz;
    private tv: TV;
    private pipoqueira: Pipoqueira;

    constructor(amp: Amplificador, bluray: BluRay, tv: TV, luz: Luz, pipoqueira: Pipoqueira) {
        this.bluray = bluray;
        this.tv = tv;
        this.amp = amp;
        this.luz = luz;
        this.pipoqueira = pipoqueira;
    }

    public assistirFilme() {
        console.log('* Assistir filme:')
        this.pipoqueira.ligar();
        this.pipoqueira.pop();

        this.luz.ligar();

        this.tv.ligar();

        this.amp.ligar();
        this.amp.setarFonte('bluRay');
        this.amp.setarVolume(22);

        this.bluray.ligar();
        this.bluray.tocar();
    }

    public terminarFilme() {
        console.log('* Terminar filme:')
        this.pipoqueira.desligar();
        this.amp.desligar();
        this.tv.desligar();
        this.bluray.desligar();
    }
}

let bluray = new BluRay();
let amp = new Amplificador();
let luz = new Luz();
let pipoqueira = new Pipoqueira();
let tv = new TV();

let homeTheather = new HomeTheatherFacade(amp, bluray, tv, luz, pipoqueira);
homeTheather.assistirFilme();
console.log('-----------------');
homeTheather.terminarFilme();