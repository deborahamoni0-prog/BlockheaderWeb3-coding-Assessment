
let future = new Date("Jan 16, 2026 8:24:52").getTime();
function updateCountdown() {


let present = new Date().getTime();


let time_period = future - present;

const sec = 1000, 
     min = sec * 60,
     hr = min * 60,
     day = hr * 24

     let d = Math.floor(time_period / day),
     h = Math.floor((time_period % day) / hr ),
     m = Math.floor((time_period % hr) / min ),
     s = Math.floor((time_period % min) / sec );

     d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
           m = m < 10 ? '0' +  h : m;
              s = s < 10 ? '0' + s : s;
      
     document.querySelector('.day-no').innerText = d;
      document.querySelector('.hour-no').innerText = h;
       document.querySelector('.minute-no').innerText = m;
        document.querySelector('.second-no').innerText = s;
   
       let timer = setTimeout(updateCountdown, 1000)

        if(time_period < 0){
            clearTimeout(timer);
            document.querySelector('.date').innerHTML = "<h1> LAUNCHED🥳🎊</h1>"
        }
}
updateCountdown();