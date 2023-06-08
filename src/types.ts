//enum é um objeto de tipagens
export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

//tipagem padrão
export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}

//CRUD para fixção de conhecimento
export enum PASS_TYPE{
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Gold",
    PLATINUM = "Platina",
    BLACK = "Black"
}

export type TUser = {
    id: string,
    name: string,
    email: string,
    password: string | number
    type: PASS_TYPE
}