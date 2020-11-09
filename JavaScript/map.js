//Map and Next-Previous Buttons

let cityNames = ['Sao Paulo, Brazil.', 'Catskill, NY.', 'Jerusalem, Israel.', 'Bet Shemesh, Israel.'];
let cities = ["https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59864178.73705847!2d-46.595299!3d-23.682412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sil!4v1599641179721!5m2!1sen!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21046233.7399315!2d-90.64371181304713!3d42.837266626867745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd969d7649b781%3A0xb0693681a7728950!2sCatskill%2C%20NY%2012414%2C%20USA!5e0!3m2!1sen!2sil!4v1599645782848!5m2!1sen!2sil",
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414392.702208585!2d34.65209896730714!3d32.01671235843016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7bc5e9f0257%3A0x86bfa065fb910ceb!2sBayit%20VeGan%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1599642228473!5m2!1sen!2sil",
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364927.02613544365!2d34.83133014766948!3d31.81354156243686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c45df5bbfddf%3A0xe0072a5512fbef38!2sBet%20Shemesh!5e0!3m2!1sen!2sil!4v1599642283355!5m2!1sen!2sil"];

const nextButton = document.querySelector('.nextbtn');
const prevButton = document.querySelector('.prevbtn');

//Starting City Name and Map
document.querySelector('.cityname').innerHTML = cityNames[0];
document.querySelector('.iframe').src = cities[0];


prevButton.style.visibility = 'hidden';

//Next Button Click
let count = 0;
nextButton.addEventListener('click', () =>{
    if(count < cities.length - 1){
        count += 1;
    }
    document.querySelector('.cityname').innerHTML = cityNames[count];
    document.querySelector('.iframe').src = cities[count];
    if(count > 0){
        prevButton.style.visibility = 'visible';    
    }
    if(count === cities.length -1){ 
        nextButton.style.visibility = 'hidden';
    }
});

//Previous Button Click
prevButton.addEventListener('click', () =>{
    if(count > 0){
        count -= 1;
    }
    document.querySelector('.cityname').innerHTML = cityNames[count];
    document.querySelector('.iframe').src = cities[count]; 
    if(count === 0){ 
        prevButton.style.visibility = 'hidden';
    }
    if(count === cities.length -2){
        nextButton.style.visibility = 'visible';
    }
});    
