var bgcnt = 0;
var bgstring = '';
const forshow = 'click for show!!';

function explain_show() {
  const explain = document.getElementsByClassName('background');
  bgcnt = 1 - bgcnt;

  if (bgcnt == 1) {
    bgstring = explain[0].innerHTML;
    explain[0].innerHTML = forshow;
  }
  else {
    explain[0].innerHTML = bgstring;
  }
}

function art_rotate() {
  content_swap(1, 2);
  content_swap(2, 3);
}

function content_swap(src, des) {
  let query1 = '#history .history' + src;
  let query2 = '#history .history' + des;

  let h1 = document.querySelector(query1 + ' h3');
  let h2 = document.querySelector(query2 + ' h3');

  let ts = h1.innerHTML;
  h1.innerHTML = h2.innerHTML;
  h2.innerHTML = ts;

  let p1 = document.querySelector(query1 + ' p');
  let p2 = document.querySelector(query2 + ' p');

  let ps = p1.innerHTML;
  p1.innerHTML = p2.innerHTML;
  p2.innerHTML = ps;
}