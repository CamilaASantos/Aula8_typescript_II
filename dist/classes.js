"use strict";
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
    constructor(nome, sobrenome, RA) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._RA = RA;
    }
    // public setNome(nome: string){
    //     this.nome=nome
    // }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    /**
     * Set RA
     * Um RA eh composto somente por 5 digitos
     */
    set RA(RA) {
        if (/^\d{1,5}$/.test(RA)) {
            this._RA = RA;
        }
        else {
            throw new Error("RA is invalid");
        }
    }
}
const aluno1 = new Aluno("João", "Silva", "123456");
// console.log(aluno1.nome)
aluno1.nome = "Pedro";
aluno1.sobrenome = "Penvensie";
aluno1.RA = "12345";
console.log(aluno1.nome);
