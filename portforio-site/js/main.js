/*Scroll reveal */
ScrollReveal({ reset: false, distance: '60px', duration:1000, delay: 200}); /*ture:何回スクロールしてもアニメーションが適用される　false:一度だけ distance*/

ScrollReveal().reveal('.sec-title', { 
    delay: 200, 
    origin:'left'
}); 

/*アイコン用*/
ScrollReveal().reveal('.fa-common', { 
    delay: 500, 
    origin:'bottom'
}); 
