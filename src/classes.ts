// Sem construtor
// class Aluno {
//     nome: string =''
//     sobrenome: string =''
//     RA: string =''

// }

// aluno1.nome = "João"
// aluno1.sobrenome= "Silva"
// aluno1.RA = "1234"

// Com construtor
class Aluno {
    protected _nome: string 
    protected _sobrenome: string 
    protected _RA: string 

    constructor(nome:string, sobrenome:string, RA:string){
        this._nome = nome
        this._sobrenome=sobrenome
        this._RA=RA
    }

    set nome (nome:string){
        this._nome = nome
    }

    get nome() {
        return this._nome
    }

    set sobrenome (sobrenome:string){
        this._sobrenome = sobrenome
    }

    /**
     * Set RA
     * Um RA eh composto somente por 5 digitos
     */
    set RA (RA:string){
        if(/^\d{1,5}$/.test(RA)){
            this._RA = RA
        }
        else{
            throw new Error("RA is invalid")
        } 
    }

    toString(): string {
        return `nome: ${this._nome}\nsobrenome: ${this._sobrenome}\nRA: ${this._RA}\n`
    }
}


class AlunoGrad extends Aluno{
    private _curso: string

    constructor(nome:string,sobrenome:string,RA:string,curso:string){
        super(nome,sobrenome,RA)
        this._curso=curso
    }

    override toString(): string {
        return super.toString() + `curso: ${this._curso}`
    }
}


const aluno1 = new  Aluno("João", "Silva","123456")
// console.log(aluno1.nome)
aluno1.nome="Pedro"
aluno1.sobrenome="Penvensie"
aluno1.RA ="12345"
console.log(aluno1.nome)
console.log(aluno1+ '')

const AlunoGrad1 = new AlunoGrad("Joana",'Siqueira','5678','BCC')
console.log(AlunoGrad1.toString())

exports{
    Aluno:Auno
}