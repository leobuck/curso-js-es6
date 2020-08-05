/* Classes */
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Leo';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

/* Const & Let */
const user = { nome: 'Leo' };

user.nome = 'Diego';

console.log(user);

function testeNumeros(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;

        console.log(x, y);
    }
}

testeNumeros(10);

/* Arrays */
const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);

/* Arrow Functions */
const array = [1, 3, 4, 5, 8, 10];

const newArray = array.map(item => item * 2);

console.log(newArray);

const teste = () => ({ nome: 'Leo' });

console.log(teste());

/* Valores Padrão */
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

/* Desestruturação 
const usuario = {
    nome: 'Leo',
    idade: 21,
    endereco: {
        cidade: 'Santa Barbara dOeste',
        estado: 'SP',
    },
};

const {nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(usuario.nome);
}

mostraNome(usuario);*/

/* Operadores rest/spread 
// REST
const usuario = {
    nome: 'Leo',
    idade: 21,
    empresa: 'Buck'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arra = [1, 2, 3, 4];

const [a, b, ...c] = arra;

console.log(a);
console.log(b);
console.log(c);

function somaNumeros(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaNumeros(1, 3, 4));

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Leo',
    idade: 21,
    empresa: 'Buck'
};

const usuario2 = { ...usuario1, nome: 'Diego' };

console.log(usuario2);*/

/* Template Literals 
const nome = 'Leo';
const idade = 21;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);*/

/* Object Short Syntax */
const nome = 'Leo';
const idade = 21;

const usuario = {
    nome,
    idade,
    empresa: 'Buck'
};

console.log(usuario);
