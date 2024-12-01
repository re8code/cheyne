var bshow = true;
var bgstring = '';
const forshow = 'click for show!!';
var history_start_index = 0;
var history_data = [];
var b1st = true; // history rotation 버튼을 처음 클릭한다.

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
  if (b1st) {
    alert('History 카드가 이동합니다.');
    b1st = false;
  }

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

function table_initdata() {
  let name_data = new Set(['Gimpo Airport Lotte Mall', 'Seoul Botanic Park', 'Heojun Museum']);
  let name = document.getElementsByClassName('table_name');

  let i=0;
  for (const key of name_data.keys()) {
    name[i++].textContent = key;
  }

  set_image('Shopping');
  set_image('Park');
  set_image('Museum');
}

function set_image(type) {
  let resourses = new Map();
  resourses.set('Shopping', './res/gimpo.webp');
  resourses.set('Park', './res/botanic.webp');
  resourses.set('Museum', './res/heojun.jpg');

  let ele = document.querySelector('.' + type + ' img');
  ele.src = resourses.get(type);
}

function check_number(phone) {
  const regex = /\d{3}-\d{4}-\d{4}/;
  if (regex.test(phone) == false)
    throw new Error('Invalid Number!!');
  else
    return phone;
}

function phone_check() {
  const phone = document.getElementById('phone').value;
  try {
    console.log(check_number(phone));
  }
  catch(error) {
    console.log(error.message);
  }
}

function localfood_init() {
  const eles = document.getElementsByClassName('food');
  check_image(eles[0], '갈비탕');
  check_image(eles[1], '버섯매운탕');
}

function check_image(ele, alt_name) {
  if (ele.getAttribute('src')!='' || ele.alt=='') return;

  if (alt_name == '갈비탕') ele.src = './res/galbitang.webp';
  else if (alt_name == '버섯매운탕') ele.src = './res/beoseot.jpg';
}