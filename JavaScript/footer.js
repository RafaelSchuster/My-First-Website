//Dynamic Footer

let technologies = ['HTML', 'CSS', 'JavaScript'];
let sentence = 'This website was built using';

function concatenate() {

    //Concatenate until one before the last with the comma   
    for (let i = 0; i < technologies.length - 1; i++) {
        sentence += ` ${technologies[i]},`;
    }
    //Adds the last
    sentence += ` and ${technologies[technologies.length-1]}.`;
    return sentence;
}

concatenate(technologies);
document.querySelector('.footertext').innerHTML = sentence;