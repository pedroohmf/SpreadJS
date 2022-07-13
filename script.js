// Example 01
// let numeros = [1, 2, 3, 4];

// let outros = [...numeros, 5, 6, 7, 8];

// console.log(outros);



// Example 02
// let info = {
//     nome: 'Pedro',
//     sobrenome: 'Henrique',
//     idade: 26,
// };


// let novasInfos = {
//     ...info,
//     cidade: 'Ouro Branco',
//     estado: 'Minas Gerais',
//     bairro: 'Siderurgia',
//     faculdade: 'IFMG Campus Ouro Branco',
// }
// console.log(novasInfos);



// Example 03
function adicionarInfo(info) {
    let novasInfos = {
        ...info,
        status: 0,
        token: 'sasas56as5as4a6saas',
        data_cadastro: '.....'
    };

    return novasInfos;
}


console.log(adicionarInfo({ nome: 'Pedro', sobrenome: 'Henrique', idade: 26 }))