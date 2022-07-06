enum Profissao{
    Padeiro,
    Atriz,
    Jogador
}

interface curriculo{
    nome:String,
    idade:Number,
    profissao:Profissao
}


const pessoa_1:curriculo={
    nome:'Maria',
    idade:29,
    profissao:Profissao.Atriz
}

const pessoa_2:curriculo={
    nome:'Roberto',
    idade:19,
    profissao:Profissao.Padeiro
}

const pessoa_3:curriculo={
    nome:'Laura',
    idade:32,
    profissao:Profissao.Atriz
}

const pessoa_4:curriculo={
    nome:'carlos',
    idade:19,
    profissao:Profissao.Padeiro
}
