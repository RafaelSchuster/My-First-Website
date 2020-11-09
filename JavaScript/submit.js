//Submit button

//Submit Button and Required inputs
const submitBtn = document.querySelector('.submit');
const reqInputs = document.querySelector('.form').querySelectorAll("[required]");
           
submitBtn.style.visibility = 'hidden';

for(let i = 0; i <reqInputs.length; i++){ 
    reqInputs[i].addEventListener('input', ()=>{
        submitBtn.style.visibility = 'hidden';
        for(let i = 0; i <reqInputs.length; i++){
            if(reqInputs[i].value === ''){
                return;
            }
        }
        submitBtn.style.visibility = 'visible';
    });
}


















