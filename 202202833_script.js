var bshow = true;
var bgstring = '';
const forshow = 'click for show!!';
var history_start_index = 0;
var history_data = [];

function explain_show() {
  const explain = document.getElementsByClassName('background');
  bshow = !bshow;

  if (!bshow) {
    bgstring = explain[0].innerHTML;
    explain[0].innerHTML = forshow;
  }
  else {
    explain[0].innerHTML = bgstring;
  }
}

function art_rotate() {// history 카드를 로테이션 시킨다.
  let hs = [];
  for (let i=0; i<3; i++) {
    let query = '#history .history' + i + ' h3';
    hs.push(document.querySelector(query).innerHTML);
  }

  for (let i=0, si=1; i<3; i++, si++) {
    let query = '#history .history' + (si % 3) + ' h3';
    let ele = document.querySelector(query);
    ele.innerHTML = hs[i];

    let index = 0;
    for (let j=0; j<3; j++) {
      if (ele.innerHTML == history_data[j].key) {
        index = j; break;
      }
    }
    query = '#history .history' + (si % 3) + ' p';
    ele = document.querySelector(query);
    ele.innerHTML = history_data[index].value;
  }
}

function history_initdata() {
  for (let i=0; i<3; i++) {
    let key   = document.querySelector('#history .history' + i + ' h3').innerHTML;
    let value = document.querySelector('#history .history' + i + ' p').innerHTML;
    let obj = {};
    obj.key = key;
    obj.value = value;
    history_data.push(obj);
  }
  console.log(history_data);
}

function alert_home() {
  alert('HOME으로 이동합니다.');
}