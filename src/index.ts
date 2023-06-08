import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, users } from './database'
import { ACCOUNT_TYPE, PASS_TYPE, TUser } from './types'

const app = express()

app.use(express.json())
app.use(cors())

//teste da porta do sevidor
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

//teste de retorno
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
    console.log('Pong no console!');
    
})

//teste de respostas das contas que são puxadas do database
app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//isso é um endpoint para busca de um id específico
app.get("/accounts/:id", (req: Request, res: Response) =>{
    const id = req.params.id
    const result = accounts.find((account) =>{
        return account.id === id
    })
    res.status(200).send({object: result})
})

//endpoint que delata um id
app.delete("/accounts/:id", (req: Request, res: Response) =>{
    const id = req.params.id as string //força para que seja uma string
    
    const accountIndex = accounts.findIndex((account) =>{
        return account.id === id 
    })
    console.log('Index: ', accountIndex);
    
    //verificação para saber se o index é >= 0, para deletar o objeto do array.
    if(accountIndex >= 0){
        accounts.splice(accountIndex, 1)
        res.status(200).send('Item deletado com sucesso!')
    }else{
        res.status(404).send('Item não encontrado!')
    }
    
})

//endpoint para edição de informações
app.put("/accounts/:id", (req: Request, res: Response) =>{
    const id = req.params.id 

    const newId = req.body.id as string | undefined //tipagem para forçar a vinda como string ou undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const account = accounts.find((account) =>{
        return account.id === id
    })

    if(account){
        account.id = newId || account.id
        account.ownerName = newOwnerName || account.ownerName
        account.balance = isNaN(newBalance) ? account.balance : newBalance //verificando se de fato é um número
        account.type = newType || account.type
    }
    res.status(200).send('Item atualizado com sucesso!')


})

/* exercício de fixação */

app.post('/users', (req: Request, res: Response) =>{
    const { id, name, email, password, type } = req.body

    const newUser:TUser ={
        id,
        name,
        email,
        password,
        type
    }
    users.push(newUser)
    console.log('registro funcionando!');
    res.status(200).send('Usuário registrado!')
})

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

app.put("/users/:id", (req: Request, res: Response) =>{
    const id = req.params.id 

    const newId = req.body.id as string | undefined //tipagem para forçar a vinda como string ou undefined
    const newName = req.body.name as string | undefined
    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined
    const newType = req.body.type as PASS_TYPE | undefined

    const user = users.find((users) =>{
        return users.id === id
    })

    if(user){
        user.id = newId || user.id
        user.name = newName || user.name
        user.email = newEmail || user.email
        user.password = newPassword || user.password
        user.type = newType || user.type
    }
    res.status(200).send('Cadastro atualizado com sucesso!')
})

app.delete("/users/:id", (req: Request, res: Response) =>{
    const id = req.params.id as string //força para que seja uma string
    
    const userIndex = users.findIndex((user) =>{
        return user.id === id 
    })
    console.log('Index: ', userIndex);
    
    //verificação para saber se o index é >= 0, para deletar o objeto do array.
    if(userIndex >= 0){
        users.splice(userIndex, 1)
        res.status(200).send('Usuário deletado com sucesso!')
    }else{
        res.status(404).send('Usuário não encontrado!')
    }
    
})



