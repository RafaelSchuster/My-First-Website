// Fetch Image and Name from Github

const gitHubApi = 'https://api.github.com/users/RafaelSchuster';

//Image and Name Recipients
const imageFetch = document.querySelector('.fetch');
const nameFetch = document.querySelector('.fetchname')

fetch(gitHubApi)
    .then(function(response){
        return response.json();   
    })
    .then(function(data){
        console.log(data)
        imageFetch.src = data.avatar_url;
        nameFetch.innerText = data.name
    });
    
    




