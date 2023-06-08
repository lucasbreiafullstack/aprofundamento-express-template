import { ACCOUNT_TYPE, TAccount, PASS_TYPE, TUser } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]

//type de treinamento
export const users: TUser[] = [
    {
        id: 'a001',
        name: 'Lucas',
        email: "lucas@exemple.com",
        password: 'lucas123',
        type: PASS_TYPE.BLACK
    }
]