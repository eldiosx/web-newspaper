// Creamos arrays con los id de los botones
const buttonsIds = [  "button01",  "button02",  "button03",  "button04",  "button05",  "button06",  "button07",  "button08",  "button09",  "button10",  "button11",  "button12",  "button13",  "button14",  "button15",  "button16",  "button17",  "button18",  "button19",  "button20",  "button21",  "button22",  "button23",  "button24",  "button25",  "button26",  "button27",  "button28",  "button29",  "button30",  "button31",  "button32",  "button33",  "button34",  "button35",  "button36",  "button37",  "button38",  "button39",  "button40",  "button41",  "button42",  "button43",  "button44",  "button45",  "button46",  "button47",  "button48",  "button49",  "button50",  "button51",  "button52",  "button53",  "button54",  "button55",  "button56",  "button57",  "button58",  "button59",  "button60"];
// Creamos arrays con los id de los audios
const audiosIds = [  "audio01",  "audio02",  "audio03",  "audio04",  "audio05",  "audio06",  "audio07",  "audio08",  "audio09",  "audio10",  "audio11",  "audio12",  "audio13",  "audio14",  "audio15",  "audio16",  "audio17",  "audio18",  "audio19",  "audio20",  "audio21",  "audio22",  "audio23",  "audio24",  "audio25",  "audio26",  "audio27",  "audio28",  "audio29",  "audio30",  "audio31",  "audio32",  "audio33",  "audio34",  "audio35",  "audio36",  "audio37",  "audio38",  "audio39",  "audio40",  "audio41",  "audio42",  "audio43",  "audio44",  "audio45",  "audio46",  "audio47",  "audio48",  "audio49",  "audio50",  "audio51",  "audio52",  "audio53",  "audio54",  "audio55",  "audio56",  "audio57",  "audio58",  "audio59",  "audio60"];

// Creamos arrays vacíos donde almacenaremos los botones y los audios
const buttons = [];
const audios = [];

// Recorremos los arrays de ids y los utilizamos para obtener los elementos y almacenarlos en los arrays correspondientes
for (let i = 0; i < buttonsIds.length; i++) {
  buttons.push(document.getElementById(buttonsIds[i]));
  audios.push(document.getElementById(audiosIds[i]));
}

// Recorremos los arrays de botones y añadimos el evento mousedown a cada uno
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", () => {
    buttons[i].currentTime = 0;
    audios[i].play();
  });
}
