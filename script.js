let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let t_button = document.getElementById('tformat');
let form = document.getElementById('form');

let twelve = document.getElementById('fst');
let twenty_four = document.getElementById('snd');
let is12HourFormat = true;
let meri=document.getElementById('meri');

function updateClock() {
    let time = new Date();
    let hr_change = time.getHours();
    let min_change = time.getMinutes();
    let sec_change = time.getSeconds();
    

    
    if (is12HourFormat) {
        if(hr_change>=0 && hr_change<12){
              meri.innerHTML='AM';
              meri.style.display='block';
        }
        else
        {
            meri.innerHTML='PM';
            meri.style.display='block';
        }
        hr_change = hr_change % 12;
        if (hr_change == 0) hr_change = 12;
    }
    else{
        meri.style.display='none';
    }

    hr.innerHTML = hr_change <= 9 ? '0' + hr_change : hr_change;
    min.innerHTML = min_change <= 9 ? '0' + min_change : min_change;
    sec.innerHTML = sec_change <= 9 ? '0' + sec_change : sec_change;
}

setInterval(updateClock, 1000);

t_button.addEventListener('click', (event) => {
    // event.stopPropagation(); // Prevents the click event from bubbling up to the document

    if (form.classList.contains('show')) {
        form.classList.remove('show');
        setTimeout(() => {
            form.style.display = 'none';
        }, 500);
    }
    else {
        form.style.display = 'flex';
        setTimeout(() => {
            form.classList.add('show');
        }, 1) // to work properly animation
    }

});

document.addEventListener('click', (event) => {
    if (!form.contains(event.target) && !t_button.contains(event.target)) {
        form.classList.remove('show');
        setTimeout(() => {
            form.style.display = 'none';
        }, 500)
    }
});

twelve.addEventListener('click', () => {
    twelve.style.color = 'rgb(0, 255, 0)';
    twenty_four.style.color = 'rgb(255, 255, 255)';
    is12HourFormat = true;
})
twenty_four.addEventListener('click', () => {
    twenty_four.style.color = 'rgb(0, 255, 0)';
    twelve.style.color = 'rgb(255, 255, 255)';
    is12HourFormat = false;
})




let hr_hand=document.getElementById('hr_hand');
let min_hand=document.getElementById('min_hand');
let sec_hand=document.getElementById('sec_hand');
function analog_clock(){
    let time=new Date();
    let hr_change = (time.getHours()%12)*30 + time.getMinutes()*0.5 ; //360deg--12hr + 30deg---60min ;
    let min_change = time.getMinutes()*6 + time.getSeconds()*0.1 ; // 360deg--60min  + 6deg --60sec;
    let sec_change = time.getSeconds()*6;  //360deg -- 60sec

    sec_hand.style.transform=`rotate(${sec_change}deg)`;
    min_hand.style.transform=`rotate(${min_change}deg)`;
    hr_hand.style.transform=`rotate(${hr_change}deg)`;
}

setInterval(analog_clock,1000);



