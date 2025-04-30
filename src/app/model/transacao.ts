
export class Transacao {

    readonly id = gerarId();
    readonly data = new Date();
    
    constructor(
        public readonly type: TipoTransacao,
        public readonly value: number
    ) { }
}
export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
}

function gerarId(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  }
