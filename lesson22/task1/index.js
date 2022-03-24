const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
function removeList() {
  while (eventsListElem.firstChild) {
    eventsListElem.removeChild(eventsListElem.firstChild);
  }
}
removeList();

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px;">${text}</span>`;
};
const btn = document.querySelector('.btn');
const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);
let arr = [
  logGreenDiv,
  logGreenP,
  logGreenSpan,
  logGreyDiv,
  logGreyP,
  logGreySpan,
];
let eventList = function () {
  arr.map((elem) => attachBtn.addEventListener('click', elem));
};

clearBtn.addEventListener('click', removeList);
attachBtn.addEventListener('click', eventList);
removeBtn.removeEventListener('click', eventList, false);
