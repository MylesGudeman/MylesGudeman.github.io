let name = 1;
let icon = "H";
let play_board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");



 
const check_for_event = () => {
  
  if (play_board[0] == icon) {
    winner.innerText = "Event triggered..";
  } 
  
};

const render_name = () => {
  name = ethereum.selectedAddress;
  switch(name){
    case undefined :
      winner.innterHTML="Connect to metamask..";
      break;
    default:
      winner.innerHTML=name;
      break;
  }
}

const render_board = () => {
  
  render_name();
  
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addItem(${i})">${play_board[i]}</div>`
    if (e == 'H' || e == 'X') {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};


// --- Loop Functions

const game_loop = () => {
  render_board();
  check_for_event();
}

const reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  render_board();
};

// --- Helper Functions

const cycle = () => {
  if (icon == 'H'){
    icon = 'X';
  } else {
    icon = 'H';
  }
}

const addItem = e => {
  if (play_board[e] == "") {
    play_board[e] = icon;
    game_loop();
  }
};

// --- Buttons

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  ethereum.request({ method: 'eth_requestAccounts' });
  winner.innerText = "Metamask connected..";
  winner.style.color = "#B4A5A5";
});

//initial render
render_board();