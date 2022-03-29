const boardSeatElem = document.querySelector('.board__selected-seat');

function getSector() {
  const arenaElem = document.querySelector('.arena');
  for (let i = 1; i < 4; i += 1) {
    const sectorElem = document.createElement('div');
    sectorElem.classList.add('sector');

    arenaElem.appendChild(sectorElem);

    sectorElem.addEventListener('click', function sector1() {
      boardSeatElem.textContent = `S ${i}`;
    });
  }
}
getSector();

function getSeats() {
  const sectorLineElem = document.querySelectorAll('.sector__line');

  for (let i = 1; i < 11; i += 1) {
    sectorLineElem.forEach((elem) => {
      const sectorLineSeatElem = document.createElement('div');
      sectorLineSeatElem.classList.add('sector__seat');
      elem.append(sectorLineSeatElem);
      sectorLineSeatElem.addEventListener('click', function seat1() {
        boardSeatElem.textContent = `S ${i}`;
      });
    });
  }
}
function getLines() {
  const sectorElem = document.querySelectorAll('.sector');
  for (let i = 1; i < 11; i += 1) {
    sectorElem.forEach((elem) => {
      const sectorLineElem = document.createElement('div');
      sectorLineElem.classList.add('sector__line');
      elem.append(sectorLineElem);
      sectorLineElem.addEventListener('click', function line1() {
        boardSeatElem.textContent = `L ${i}`;
      });
    });
  }
}

getLines();
getSeats();
