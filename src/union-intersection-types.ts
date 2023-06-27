interface MembroAcademico {
    name:string,
    sobrenome: string
}

interface Professor extends MembroAcademico{
    siape: string
}

interface Aluno extends MembroAcademico{
    ra: string
}

interface AlunoGrad extends Aluno{
    curso:string
}

interface AlunoPos extends Aluno{
    programa:string,
    orientador:string
}

type MembroUniversidade = MembroAcademico
type AlunoTrilha = AlunoGrad & AlunoPos
type AlunoGeral = AlunoGrad | AlunoPos

const a1: AlunoTrilha={
    nome: 'João',
    sobrenome: 'Silva',
    ra:'1234',
    curso:'bcc',
    programa:'ppgcc',
    orientador:'Manoel Siqueira'
}

const a2: AlunoGeral={
    nome: 'Maria',
    sobrenome: 'Souza',
    ra:'4321',

}