const btngrp = document.querySelectorAll('.counterBtn');
const counter = document.querySelector('#counter');
let count = 0;

btngrp.forEach(function(button){
  button.addEventListener('click', function(){
    if(button.classList.contains('nextBtn')){
      count ++;
    }
    else if(button.classList.contains('prevBtn')){
      count --;
    }

    counter.textContent = count;
    
    if(count < 0){
      counter.style.color = '#9a1117';
    }
    else if(count > 0){
      counter.style.color = 'green';
    }
    else{
      counter.style.color = '#000';
    }
  })
})