interface Iphone {
    useLightning();
}

interface Android {
    useMicroUsb();
}

class iPhone7 implements Iphone {
    useLightning() {
        console.log('Usando porta lightning...');
    }
}

class GooglePixel implements Android {
    useMicroUsb() {
        console.log('Usando Micro USB...');
    }
}

class LigthningToMicroUsbAdapter implements Android {
    iPhoneDevice: Iphone;

    constructor(iphone: Iphone) {
        this.iPhoneDevice = iphone;
    }

    useMicroUsb() {
        console.log('Desejo utilizar micro USB, convertendo para iphone');
        this.iPhoneDevice.useLightning();
    }
}

let iphone = new iPhone7();
let chargeAdapter = new LigthningToMicroUsbAdapter(iphone);
chargeAdapter.useMicroUsb();
