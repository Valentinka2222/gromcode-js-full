const boardSeatElem = document.querySelector('.board__selected-seat');
const logTarget = (text, value) => {
  boardSeatElem.textContent += `${text} ${value} `;
};

function removeElementBoard() {
  boardSeatElem.removeChild(boardSeatElem.firstChild);
}

removeElementBoard();

function getLines() {
  const sectorElem = document.querySelectorAll('.sector');
  for (let i = 1; i < 11; i += 1) {
    sectorElem.forEach((elem) => {
      const sectorLineElem = document.createElement('div');
      sectorLineElem.classList.add('sector__line');
      elem.append(sectorLineElem);
      const seatNumber = logTarget.bind(null, 'L', `${i} - `);
      sectorLineElem.addEventListener('click', seatNumber, true);
    });
  }
}

function getSeats() {
  const sectorLineElem = document.querySelectorAll('.sector__line');

  for (let i = 1; i < 11; i += 1) {
    sectorLineElem.forEach((elem) => {
      const sectorLineSeatElem = document.createElement('div');
      sectorLineSeatElem.classList.add('sector__seat');
      elem.append(sectorLineSeatElem);
      const lineNumber = logTarget.bind(null, 'S', `${i}`);

      sectorLineSeatElem.addEventListener('click', lineNumber);
    });
  }
}
function getSector() {
  const arenaElem = document.querySelector('.arena');
  for (let i = 1; i < 4; i += 1) {
    const sectorElem = document.createElement('div');
    sectorElem.classList.add('sector');

    arenaElem.appendChild(sectorElem);

    const sectorNumber = logTarget.bind(null, 'S', `${i} -`);

    sectorElem.addEventListener('click', sectorNumber, true);
  }
}
getSector();
getLines();
getSeats();
function removeLastElementBoard() {
  boardSeatElem.removeChild(boardSeatElem.lastChild);
}

removeLastElementBoard();
