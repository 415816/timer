let time = 5 * 60;
let r = document.querySelector('span');
let tmp = time;

setInterval(function(){
    let c = tmp--;
    let m = (c/60) >> 0;
    let s = (c - m * 60) + '';
    r.textContent = m + ':' + (s.length > 1 ? '' : '0') + s;
    tmp != 0 || (tmp=time);
},1000);

let cons = () => {
    console.log('1');
}

let co = document.querySelector('button');
co.onclick = () => console.log('1');

x => x;
console.log(x);