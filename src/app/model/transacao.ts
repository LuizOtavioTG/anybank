export class Transacao {
    constructor(
        public readonly type: TipoTransacao,
        public readonly value: number
    ) { }
}
export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
}


