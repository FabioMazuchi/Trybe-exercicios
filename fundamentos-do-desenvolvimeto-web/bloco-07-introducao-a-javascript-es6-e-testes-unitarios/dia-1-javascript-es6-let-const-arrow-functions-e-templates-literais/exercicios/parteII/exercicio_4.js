const skills = ['HTML', 'CSS', 'Javascript', 'Git', 'Github'];

function skillsFrase (para)  {
    const func1 = para => {`Tryber ${para} aqui!`};

    let resultado = `${func1(para)}
    
    Minhas cinco skills são:`;

    for (let i = 0; i < skills.length; i++) {
        resultado = `${resultado}

        - ${skills[i]}`;
    }

    resultado = `${resultado}
        
        #goTrybe
        `;

    return resultado;
}

console.log(skillsFrase('Fabio'));

