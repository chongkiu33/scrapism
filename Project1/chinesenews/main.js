document.addEventListener('DOMContentLoaded', ready);




function ready() {
  wifiDetect();
}

var state1 = 0;
function wifiDetect() {
  let uncle = document.querySelectorAll('.chinadaily');
  let daddy = document.querySelectorAll('.chinacensored');
  
  handleStateChange();

  function handleStateChange() {
    state1++;

    if (navigator.onLine) {
      for(let i = 0; i < uncle.length;i++){
        
        daddy[i].classList.add('invisible');
      }
      } else {
        for(let i = 0; i < uncle.length;i++){
          
          daddy[i].classList.remove('invisible');
        }
      }
      
  }

  window.addEventListener('online', handleStateChange);
  window.addEventListener('offline', handleStateChange);
}

