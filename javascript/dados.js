const express = require('express');


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const xmen = [
        { id: 1, name: 'Ciclope' },
        { id: 2, name: 'Wolverine' },
        { id: 3, name: 'Vampira' },
        { id: 4, name: 'Tempestade' },
        { id: 5, name: 'Fera' },
        { id: 6, name: 'Gambit' },
        { id: 7, name: 'Jubileu' },
        { id: 8, name: 'Jean Grey' },
        { id: 9, name: 'Morfo' },
        { id: 10, name: 'Magneto' },
    ];

    res.json(xmen);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/1', (req, res) => {
    const ciclope = [
        { id: 1},
        { name: 'Ciclope' },
        { real_name: 'Scott Summers'},
        { height: '1,88 metros'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/cyclops.png?raw=true' },
        { habilities: 'Rajada Ótica, Percepção Espacial e Resistência a Energia.' },
        { level: 'Alfa' },
        { description: 'Após aciende na infancia Ciclope não possui controle dos seus poderes, assim o mesmo utiliza um visor com quartzo rubi para poder controlar sua rajada optica.' },
        
    ];

    res.json(ciclope);
});

app.get('/2', (req, res) => {
    const wolverine = [
        { id: 2},
        { name: 'Wolverine' },
        { real_name: 'James Logan Howlett'},
        { height: '1,63 m'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/wolverine.png?raw=true' },
        { habilities: 'Fator de Cura Regenerativo, Garras de Adamantium, Sentidos Sobre-Humanos, Força Aprimorada, Velocidade Sobre-Humana e Adaptação a Climas Inóspitos.' },
        { level: 'Beta' },
        { description: 'Após o projeto Arma X, Wolverine recebeu suas garras de adamantium e teve varias aventuras até se juntar aos X-Men.' },
        
    ];

    res.json(wolverine);
});

app.get('/3', (req, res) => {
    const vampira = [
        { id: 3},
        { name: 'Vampira' },
        { real_name: 'Anna Marie'},
        { height: '1,68 m'},
        { gender: 'Feminino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/rouge.png?raw=true' },
        { habilities: 'Absorção de Poder, Super força e Voô.' },
        { level: 'Alfa' },
        { description: 'Filha adotiva de Mistica e irmã de Noturno, após a absorção dos poderes da Mr. Marvel a mesma decidiu abandonar a equipe da Mistica e se juntar aos X-Men.' },
        
    ];

    res.json(vampira);
});

app.get('/4', (req, res) => {
    const tempestade = [
        { id: 4},
        { name: 'Tempestade' },
        { real_name: 'Ororo Munroe'},
        { height: '1.68 m'},
        { gender: 'Feminino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/storm.png?raw=true' },
        { habilities: 'Controle das condições climaticas e de elementos.' },
        { level: 'Ômega' },
        { description: 'É descendente de uma antiga linhagem de sacerdotistas Africanas, as quais têm cabelos brancos, olhos azuis, e o potencial para utilizar magia.' },
        
    ];

    res.json(tempestade);
});

app.get('/5', (req, res) => {
    const fera = [
        { id: 5},
        { name: 'Fera' },
        { real_name: 'Hank McCoy'},
        { height: '1,86 m'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/fera.png?raw=true' },
        { habilities: 'Força, Resistencia, Velocidade, Reflexos, Faro e Audição Aguçada.' },
        { level: 'Gama' },
        { description: 'Um dos grandes amigos de Professor Xavier e sempre foi muito inteligente, inicialmente era um pouco desajeitado mas logo foi ficando mais ágil e vivia se pendurando em tudo.' },
        
    ];

    res.json(fera);
});

app.get('/6', (req, res) => {
    const gambit = [
        { id: 6},
        { name: 'Gambit' },
        { real_name: 'Remy LeBeau'},
        { height: '1.88 m'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/gambit.png?raw=true' },
        { habilities: 'Aceleração Molecular, Charme Hipnótico e Explosões Temporizadas.' },
        { level: 'Beta' },
        { description: 'Remy foi colocado sob os cuidados de uma gangue de ladrões de rua, os quais cuidaram da criança e lhe ensinaram as formas de roubo. Atualmente foi recrutado pelos X-Men por Tempestade.' },
        
    ];

    res.json(gambit);
});

app.get('/7', (req, res) => {
    const jubileu = [
        { id: 7},
        { name: 'Jubileu' },
        { real_name: 'Jubilation Lee'},
        { height: '1,65 m'},
        { gender: 'Feminino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/jubilee.png?raw=true' },
        { habilities: 'Plasmides de energia e Escudos Psciônico.' },
        { level: 'Alfa' },
        { description: 'Nasceu e cresceu em Beverly Hills como a filha de dois imigrantes chineses prósperos, após atacada por uma sentinela no shopping foi recrutada para os X-Men.' },
        
    ];

    res.json(jubileu);
});


app.get('/8', (req, res) => {
    const jean_grey = [
        { id: 8},
        { name: 'Jean Grey' },
        { real_name: 'Jean Grey'},
        { height: '1.67 m'},
        { gender: 'Feminino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/jean-grey.png?raw=true' },
        { habilities: 'Empatia, Telepatia e Telecinese.' },
        { level: 'Ômega' },
        { description: 'Jean teve seus poderes despertados durante uma fatalidade com sua amiga Anne, fazendo que esse evento causase trauma e que fosse procurada por Professor Xavier.' },
        
    ];

    res.json(jean_grey);
});

app.get('/9', (req, res) => {
    const morfo = [
        { id: 9},
        { name: 'Morfo' },
        { real_name: 'Kevin Sidney'},
        { height: '1,80 m'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/Morph.png?raw=true' },
        { habilities: 'Maléficiência e Recuperação amorfa.' },
        { level: 'Gama' },
        { description: 'Morfo tenta animar situações de outra forma tensa com brincadeiras sem mente, ele se manteve como humano para evitar conflitos, até ser recrutado pelos X-Men.' },
        
    ];

    res.json(morfo);
});

app.get('/10', (req, res) => {
    const magneto = [
        { id: 10},
        { name: 'Magneto' },
        { real_name: 'Erik Magnus Lehnsherr'},
        { height: '1.93 m'},
        { gender: 'Masculino'},
        { image: 'https://github.com/ORFJunior/Xmen/blob/main/images/magneto.png?raw=true' },
        { habilities: 'Magnetocinese e Resistência Telepática.' },
        { level: 'Ômega' },
        { description: 'Inicialmente como vilão, Magneto se tornou lider dos X-Men após o desaparecimento(morte) do Professor Xavier.' },
        
    ];

    res.json(magneto);
});

app.listen(port, () => console.log(` http://localhost:${port}/`));