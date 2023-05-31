export type Transaction = {
    senderAdress: string,
    recieverAdress: string,
    gasFee?: number,
    amount: number,
    singature?: string;
}