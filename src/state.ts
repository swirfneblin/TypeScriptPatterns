interface State {
    order: Order;
    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;

    public currentState: State;

    constructor() {
        this.cancelledOrderState = new CancelOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Cancelando seu pagamento...');
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log('Pagamento verificado. Enviando em breve...');
        this.order.setState(this.order.orderBeingPreparedState);
    }

    shipOrder() {
        console.log('Nao pudemos processar o pedido porque o pagamento esta pendente');
    }
}

class CancelOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Seu pedido foi cancelado');
    }

    verifyPayment() {
        console.log('Pedido cancelado, nao pudemos verificar pagamento');
    }

    shipOrder() {
        console.log('Pedido nao enviado, ele foi cancelado');
    }
}

class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Cancelando seu pagamento');
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log('Seu pagamento ja foi verificado');
    }

    shipOrder() {
        console.log('Enviando seu pedido agora');
        this.order.setState(this.order.orderShippedState);
    }
}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Voce nao pode cancelar, ja foi enviado');
    }

    verifyPayment() {
        console.log('Voce nao pode verificar pagamento, ja foi enviado');
    }

    shipOrder() {
        console.log('Voce nao pode enviar novamente, ja foi enviado');
    }
}

let order = new Order();
order.getState().shipOrder();
console.log('Order state: ' + (<any>order.getState()).constructor.name);

order.getState().verifyPayment();
order.getState().verifyPayment();

order.getState().shipOrder();
order.getState().cancelOrder();

