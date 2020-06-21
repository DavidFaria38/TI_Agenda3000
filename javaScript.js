
function openSlideMenu() {

    if (screen.width >= '700') {
        document.getElementById('menu').style.width = '250px';
        //document.getElementById('content').style.marginLeft = '250px';
    } else {
        document.getElementById('menu').style.width = '100%';
        //document.getElementById('content').style.marginLeft = 'auto';
    }
}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
}




/* ========================================================= */
/* Funcao para abrir e fechar pop-up screen para add tarefas */
/* ========================================================= */
function btnOpenAdd() {
    //confirm("click");
    document.querySelector('.bg-modal').style.display = 'flex'
    document.querySelector('.bg-modal').innerHTML = 
    `
    <div class="modal-content">
    <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
    <p>Adicionar tarefas</p>
    
    <form action="#">
    <!-- Preferencias 1 -->
    <div class="pref_1">
    <label for="pref_1">Preferencia 1 :</label>
    <select class="materia" name="pref_1" id="pref_1">
    <option value="blank" selected></option>
    <option value="mat">Matemática</option>
    <option value="port">Português</option>
    <option value="hist">História</option>
    <option value="geo">Geografia</option>
    <option value="bio">Biologia</option>
    <option value="fis">Física</option>
    <option value="qui">Química</option>
    <option value="ing">Inglês</option>
    </select>
    <select class="peso" name="pesoPref_1" id="pesoPref_1">
    <option value="-1" selected></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    </select>
    </div>
    
    <!-- Preferencias 2 -->
    <div class="pref_2">
    <label for="pref_2">Preferencia 2 :</label>
    <select class="materia" name="pref_2" id="pref_2">
    <option value="blank" selected></option>
    <option value="mat">Matemática</option>
    <option value="port">Português</option>
    <option value="hist">História</option>
    <option value="geo">Geografia</option>
    <option value="bio">Biologia</option>
    <option value="fis">Física</option>
    <option value="qui">Química</option>
    <option value="ing">Inglês</option>
    </select>
    <select class="peso" name="pesoPref_2" id="pesoPref_2">
    <option value="-1" selected></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    </select>
    </div>
    
    <!-- Preferencias 3 -->
    <div class="pref_3">
    <label for="pref_3">Preferencia 3 :</label>
    <select class="materia" name="pref_3" id="pref_3">
    <option value="blank" selected></option>
    <option value="mat">Matemática</option>
    <option value="port">Português</option>
    <option value="hist">História</option>
    <option value="geo">Geografia</option>
    <option value="bio">Biologia</option>
    <option value="fis">Física</option>
    <option value="qui">Química</option>
    <option value="ing">Inglês</option>
    </select>
    <select class="peso" name="pesoPref_3" id="pesoPref_3">
    <option value="-1" selected></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    </select>
    </div>
    
    <div class="turno">
    <label for="turnoManha">Manha</label>
    <input type="radio" name="turno" id="turnoManha">
    <label for="turnoTarde">Tarde</label>
    <input type="radio" name="turno" id="turnoTarde">
    <label for="turnoNoite">Noite</label>
    <input type="radio" name="turno" id="turnoNoite">
    
    <span id="missingFieldTurno" style="color: red;"></span>
    
    </div>
    </form>
    <button id="btnSubmit" onclick="submitAddTarefa()"> Confirmar </button>
    
    </div>`
}
function btnCloseAdd() {
    document.querySelector('.bg-modal').style.display = 'none'
    document.querySelector('.bg-modal').innerHTML = ``
    console.log('fecho tela')
}
/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */

/* ========================================================= */
/* Funcao para dias da semana */
/* ========================================================= */

function quedia() {
    var d = new Date();
    var n = d.getDay()
    var dias = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
    return dias[n]
}
function setMyDayToToday() {
    var diahj = quedia();
    document.getElementById("diadehoje").innerHTML = diahj;
    console.log(diahj);

}

/* ========================================================= */
/* ======== Funcao para validacao do input do user ========= */
/* ========================================================= */
function validarInput() {
    /* Definicao das variaveis a serem usadas */
    let jsPref_1 = document.getElementById('pref_1').value;
    let jsPref_2 = document.getElementById('pref_2').value;
    let jsPref_3 = document.getElementById('pref_3').value;
    let jsPesoPref_1 = document.getElementById('pesoPref_1').value;
    let jsPesoPref_2 = document.getElementById('pesoPref_2').value;
    let jsPesoPref_3 = document.getElementById('pesoPref_3').value;
    let tManha = document.getElementById('turnoManha').checked;
    let tTarde = document.getElementById('turnoTarde').checked;
    let tNoite = document.getElementById('turnoNoite').checked;

    var missingField = 0;

    /* Envia para console o input que o usuario fez */
    /*    
        console.log('pref 1 =' + jsPref_1 + " - " + pesoPref_1.value);
        console.log('pref 2 =' + jsPref_2 + " - " + pesoPref_2.value);
        console.log('pref 3 =' + jsPref_3 + " - " + pesoPref_3.value);
        console.log('turno Manha =' + turnoManha.checked);
        console.log('turno Tarde =' + turnoTarde.checked);
        console.log('turno Noite =' + turnoNoite.checked);
    */

    /* Validacao do input do usuario nas preferencias */
    if (jsPref_1 == 'blank') {
        document.getElementById('pref_1').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pref_1').style.border = '';
    }
    if (jsPref_2 == 'blank') {
        document.getElementById('pref_2').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pref_2').style.border = '';
    }
    if (jsPref_3 == 'blank') {
        document.getElementById('pref_3').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pref_3').style.border = '';
    }

    /* Validacao do input do usuario no peso das preferencias */
    if (jsPesoPref_1 == -1) {
        document.getElementById('pesoPref_1').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pesoPref_1').style.border = '';
    }
    if (jsPesoPref_2 == -1) {
        document.getElementById('pesoPref_2').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pesoPref_2').style.border = '';
    }
    if (jsPesoPref_3 == -1) {
        document.getElementById('pesoPref_3').style.border = 'solid 2px red';
        missingField++;
    } else {
        document.getElementById('pesoPref_3').style.border = '';
    }

    /* Validacao se FORM turno esta vazio */
    if (tManha == false && tTarde == false && tNoite == false) {
        document.getElementById('missingFieldTurno').innerText = '*'
        console.log('ERROR: Turno');
        missingField++;
    } else {
        document.getElementById('missingFieldTurno').innerText = ''
    }


    if (missingField != 0) {
        return (false);
        alert("ERROR PREENCHA CORRETAMENTE");
    } else {
        return (true)
    }
}
/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */



/* ========================================================= */
/* ========= Seleciona a cor dependendo da materia ========= */
/* ========================================================= */
function selecionadorCor(pref) {
    let color;
    if (pref == 'mat')
        color = "#caeaf5"
    else if (pref == 'port')
        color = "#0e91bd"
    else if (pref == 'hist')
        color = "#9a55b6"
    else if (pref == 'geo')
        color = "#e6e22e"
    else if (pref == 'bio')
        color = "#20b2aa"
    else if (pref == 'fis')
        color = "#eeb958"
    else if (pref == 'qui')
        color = "#e47263"
    else if (pref == 'ing')
        color = "#f5deb3"

    return (color);
}
/*
sumario das cores:
lightblue #caeaf5 = Matemática
	      #0e91bd = Português
roxo      #9a55b6 = História
amarelo   #e6e22e = Geografia
green     #20b2aa = Biologia
laranja   #eeb958 = Física
vermelho  #e47263 = Química
wheat     #f5deb3 = Inglês
*/

/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */


/* ========================================================= */
/* ====== Funcao para organizar o peso da preferencia ====== */
/* ========================================================= */
function actionAddTarefa(a, c1, b, c2, c, c3, turno) {
    var selector, i;
    console.log(`${a} > ${b} > ${c} | ${turno}`)

    if (turno == 1) {

        document.getElementById('1a').innerHTML = a;
        document.getElementById('1a').style.backgroundColor = c1;
        document.getElementById('2a').innerHTML = a;
        document.getElementById('2a').style.backgroundColor = c1;
        document.getElementById('3a').innerHTML = b;
        document.getElementById('3a').style.backgroundColor = c2;
        document.getElementById('4a').innerHTML = b;
        document.getElementById('4a').style.backgroundColor = c2;
        document.getElementById('5a').innerHTML = c;
        document.getElementById('5a').style.backgroundColor = c3;

        document.getElementById('1b').innerHTML = b;
        document.getElementById('1b').style.backgroundColor = c2;
        document.getElementById('2b').innerHTML = b;
        document.getElementById('2b').style.backgroundColor = c2;
        document.getElementById('3b').innerHTML = a;
        document.getElementById('3b').style.backgroundColor = c1;
        document.getElementById('4b').innerHTML = a;
        document.getElementById('4b').style.backgroundColor = c1;
        document.getElementById('5b').innerHTML = c;
        document.getElementById('5b').style.backgroundColor = c3;

        document.getElementById('1c').innerHTML = a;
        document.getElementById('1c').style.backgroundColor = c1;
        document.getElementById('2c').innerHTML = a;
        document.getElementById('2c').style.backgroundColor = c1;
        document.getElementById('3c').innerHTML = b;
        document.getElementById('3c').style.backgroundColor = c2;
        document.getElementById('4c').innerHTML = b;
        document.getElementById('4c').style.backgroundColor = c2;
        document.getElementById('5c').innerHTML = c;
        document.getElementById('5c').style.backgroundColor = c3;

        document.getElementById('1d').innerHTML = b;
        document.getElementById('1d').style.backgroundColor = c2;
        document.getElementById('2d').innerHTML = b;
        document.getElementById('2d').style.backgroundColor = c2;
        document.getElementById('3d').innerHTML = a;
        document.getElementById('3d').style.backgroundColor = c1;
        document.getElementById('4d').innerHTML = a;
        document.getElementById('4d').style.backgroundColor = c1;
        document.getElementById('5d').innerHTML = c;
        document.getElementById('5d').style.backgroundColor = c3;

        document.getElementById('1e').innerHTML = a;
        document.getElementById('1e').style.backgroundColor = c1;
        document.getElementById('2e').innerHTML = a;
        document.getElementById('2e').style.backgroundColor = c1;
        document.getElementById('3e').innerHTML = b;
        document.getElementById('3e').style.backgroundColor = c2;
        document.getElementById('4e').innerHTML = b;
        document.getElementById('4e').style.backgroundColor = c2;
        document.getElementById('5e').innerHTML = c;
        document.getElementById('5e').style.backgroundColor = c3;

        console.log('turno selecionado MANHA');
    }
    if (turno == 2) {
        document.getElementById('6a').innerHTML = a;
        document.getElementById('6a').style.backgroundColor = c1;
        document.getElementById('7a').innerHTML = a;
        document.getElementById('7a').style.backgroundColor = c1;
        document.getElementById('8a').innerHTML = b;
        document.getElementById('8a').style.backgroundColor = c2;
        document.getElementById('9a').innerHTML = b;
        document.getElementById('9a').style.backgroundColor = c2;
        document.getElementById('10a').innerHTML = c;
        document.getElementById('10a').style.backgroundColor = c3;

        document.getElementById('6b').innerHTML = b;
        document.getElementById('6b').style.backgroundColor = c2;
        document.getElementById('7b').innerHTML = b;
        document.getElementById('7b').style.backgroundColor = c2;
        document.getElementById('8b').innerHTML = a;
        document.getElementById('8b').style.backgroundColor = c1;
        document.getElementById('9b').innerHTML = a;
        document.getElementById('9b').style.backgroundColor = c1;
        document.getElementById('10b').innerHTML = c;
        document.getElementById('10b').style.backgroundColor = c3;

        document.getElementById('6c').innerHTML = a;
        document.getElementById('6c').style.backgroundColor = c1;
        document.getElementById('7c').innerHTML = a;
        document.getElementById('7c').style.backgroundColor = c1;
        document.getElementById('8c').innerHTML = b;
        document.getElementById('8c').style.backgroundColor = c2;
        document.getElementById('9c').innerHTML = b;
        document.getElementById('9c').style.backgroundColor = c2;
        document.getElementById('10c').innerHTML = c;
        document.getElementById('10c').style.backgroundColor = c3;

        document.getElementById('6d').innerHTML = b;
        document.getElementById('6d').style.backgroundColor = c2;
        document.getElementById('7d').innerHTML = b;
        document.getElementById('7d').style.backgroundColor = c2;
        document.getElementById('8d').innerHTML = a;
        document.getElementById('8d').style.backgroundColor = c1;
        document.getElementById('9d').innerHTML = a;
        document.getElementById('9d').style.backgroundColor = c1;
        document.getElementById('10d').innerHTML = c;
        document.getElementById('10d').style.backgroundColor = c3;

        document.getElementById('6e').innerHTML = a;
        document.getElementById('6e').style.backgroundColor = c1;
        document.getElementById('7e').innerHTML = a;
        document.getElementById('7e').style.backgroundColor = c1;
        document.getElementById('8e').innerHTML = b;
        document.getElementById('8e').style.backgroundColor = c2;
        document.getElementById('9e').innerHTML = b;
        document.getElementById('9e').style.backgroundColor = c2;
        document.getElementById('10e').innerHTML = c;
        document.getElementById('10e').style.backgroundColor = c3;

        console.log('turno selecionado TARDE');
    }
    if (turno == 3) {
        document.getElementById('11a').innerHTML = a;
        document.getElementById('11a').style.backgroundColor = c1;
        document.getElementById('12a').innerHTML = a;
        document.getElementById('12a').style.backgroundColor = c1;
        document.getElementById('13a').innerHTML = b;
        document.getElementById('13a').style.backgroundColor = c2;
        document.getElementById('14a').innerHTML = b;
        document.getElementById('14a').style.backgroundColor = c2;
        document.getElementById('15a').innerHTML = c;
        document.getElementById('15a').style.backgroundColor = c3;

        document.getElementById('11b').innerHTML = b;
        document.getElementById('11b').style.backgroundColor = c2;
        document.getElementById('12b').innerHTML = b;
        document.getElementById('12b').style.backgroundColor = c2;
        document.getElementById('13b').innerHTML = a;
        document.getElementById('13b').style.backgroundColor = c1;
        document.getElementById('14b').innerHTML = a;
        document.getElementById('14b').style.backgroundColor = c1;
        document.getElementById('15b').innerHTML = c;
        document.getElementById('15b').style.backgroundColor = c3;

        document.getElementById('11c').innerHTML = a;
        document.getElementById('11c').style.backgroundColor = c1;
        document.getElementById('12c').innerHTML = a;
        document.getElementById('12c').style.backgroundColor = c1;
        document.getElementById('13c').innerHTML = b;
        document.getElementById('13c').style.backgroundColor = c2;
        document.getElementById('14c').innerHTML = b;
        document.getElementById('14c').style.backgroundColor = c2;
        document.getElementById('15c').innerHTML = c;
        document.getElementById('15c').style.backgroundColor = c3;

        document.getElementById('11d').innerHTML = b;
        document.getElementById('11d').style.backgroundColor = c2;
        document.getElementById('12d').innerHTML = b;
        document.getElementById('12d').style.backgroundColor = c2;
        document.getElementById('13d').innerHTML = a;
        document.getElementById('13d').style.backgroundColor = c1;
        document.getElementById('14d').innerHTML = a;
        document.getElementById('14d').style.backgroundColor = c1;
        document.getElementById('15d').innerHTML = c;
        document.getElementById('15d').style.backgroundColor = c3;

        document.getElementById('11e').innerHTML = a;
        document.getElementById('11e').style.backgroundColor = c1;
        document.getElementById('12e').innerHTML = a;
        document.getElementById('12e').style.backgroundColor = c1;
        document.getElementById('13e').innerHTML = b;
        document.getElementById('13e').style.backgroundColor = c2;
        document.getElementById('14e').innerHTML = b;
        document.getElementById('14e').style.backgroundColor = c2;
        document.getElementById('15e').innerHTML = c;
        document.getElementById('15e').style.backgroundColor = c3;

        console.log('turno selecionado NOITE');
    }

}
/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */


/* ========================================================= */
/* ========== Configuracoes de peso das materias =========== */
/* ========================================================= */
function submitAddTarefa() {

    /* Definicao das variaveis a serem usadas */
    let jsPref_1 = document.getElementById('pref_1').value;
    let jsPref_2 = document.getElementById('pref_2').value;
    let jsPref_3 = document.getElementById('pref_3').value;
    let peso1 = document.getElementById('pesoPref_1').value;
    let peso2 = document.getElementById('pesoPref_2').value;
    let peso3 = document.getElementById('pesoPref_3').value;
    let tManha = document.getElementById('turnoManha').checked;
    let tTarde = document.getElementById('turnoTarde').checked;
    let tNoite = document.getElementById('turnoNoite').checked;

    let turno;
    let cor1 = selecionadorCor(jsPref_1);
    let cor2 = selecionadorCor(jsPref_2);
    let cor3 = selecionadorCor(jsPref_3);

    //actionAddTarefa("hist", "#caeaf5", "mat", "#0e91bd ", "port", "#f5deb3", 1);


    if (validarInput() == false) {
        console.log('ERROR: Missing Field')
    }
    else {
        console.log('Todos campos preenchidos')
        btnCloseAdd()

        // Verificacao do turno
        if (tManha)
            turno = 1
        else if (tTarde)
            turno = 2
        else if (tNoite)
            turno = 3

        // Verificacao do peso 
        if (peso1 > peso2 && peso2 > peso3)
            actionAddTarefa(jsPref_1, cor1, jsPref_2, cor2, jsPref_3, cor3, turno)

        else if (peso2 > peso1 && peso1 > peso3)
            actionAddTarefa(jsPref_2, cor2, jsPref_1, cor1, jsPref_3, cor3, turno)

        else if (peso3 > peso1 && peso1 > peso2)
            actionAddTarefa(jsPref_3, cor3, jsPref_1, cor1, jsPref_2, cor2, turno)

        else if (peso1 > peso3 && peso3 > peso2)
            actionAddTarefa(jsPref_1, cor1, jsPref_3, cor3, jsPref_2, cor2, turno)

        else if (peso2 > peso3 && peso3 > peso1)
            actionAddTarefa(jsPref_2, cor2, jsPref_3, cor3, jsPref_1, cor1, turno)

        else if (peso3 > peso2 && peso2 > peso1)
            actionAddTarefa(jsPref_3, cor3, jsPref_2, cor2, jsPref_1, cor1, turno)
    }

    console.log(`================================`);
    console.log("cor1 =" + cor1);
    console.log(`cor2 = ${cor2}`);
    console.log(`cor3 = ${cor3}`);
    console.log(`================================`);
}
/* ========================================================= */
/* ================ FIM - Config peso ====================== */
/* ========================================================= */



/* ========================================================= */
/* ================== Dardmode function ==================== */
/* ========================================================= */

/*felipe darkmode*/
/*David alterou*/

// document.getElementById('btnDarkMode').addEventListener('click', darkmode)

var islight = 0;
function darkmode() {
    if (islight % 2 == 0) {
        document.getElementById("content").style.backgroundColor = "#0C1B33";
        console.log("black");
        //document.p.style.color = "white";

    }
    else {
        document.getElementById("content").style.backgroundColor = "white";
        console.log("white");
        //document.p.style.color = "black";

    }
    islight++;
}
/* ========================================================= */
/* ================== FIM - Darkmode ======================= */
/* ========================================================= */



/* ========================================================= */
/* ================= Armazenamento Local =================== */
/* ========================================================= */

var data = {
    "disciplinas": [
        {
            "materia": "Matemática",
            "coordenadas": [],
            "nota": "",
            "cor": "#caeaf5"
        },
        {
            "materia": "Português",
            "coordenadas": [],
            "nota": "",
            "cor": "#0e91bd"
        },
        {
            "materia": "História",
            "coordenadas": [],
            "nota": "",
            "cor": "#9a55b6"
        },
        {
            "materia": "Geografia",
            "coordenadas": [],
            "nota": "",
            "cor": "#e6e22e"
        },
        {
            "materia": "Biologia",
            "coordenadas": [],
            "nota": "",
            "cor": "#20b2aa"
        },
        {
            "materia": "Física",
            "coordenadas": [],
            "nota": "",
            "cor": "#eeb958"
        },
        {
            "materia": "Química",
            "coordenadas": [],
            "nota": "",
            "cor": "#e47263"
        },
        {
            "materia": "Inglês",
            "coordenadas": [],
            "nota": "",
            "cor": "#f5deb3"
        },
        {
            "materia": "teste de materia",
            "coordenadas": [],
            "nota": "",
            "cor": "red"
        }
    ]
    /*"disciplinas": [
        {
            "materia": "Matemática",
            "coordenadas": ["11", "12", "13", "15", "26"],
            "nota": "",
            "cor": "#caeaf5"
        },
        {
            "materia": "Português",
            "coordenadas": ["12", "13", "23"],
            "nota": "",
            "cor": "#0e91bd"
        },
        {
            "materia": "História",
            "coordenadas": ["41"],
            "nota": "",
            "cor": "#9a55b6"
        },
        {
            "materia": "Geografia",
            "coordenadas": ["51", "56", "57"],
            "nota": "",
            "cor": "#e6e22e"
        },
        {
            "materia": "Biologia",
            "coordenadas": ["16", "17", "25"],
            "nota": "",
            "cor": "#20b2aa"
        },
        {
            "materia": "Física",
            "coordenadas": ["31", "32", "33"],
            "nota": "",
            "cor": "#eeb958"
        },
        {
            "materia": "Química",
            "coordenadas": [],
            "nota": "",
            "cor": "#e47263"
        },
        {
            "materia": "Inglês",
            "coordenadas": [],
            "nota": "",
            "cor": "#f5deb3"
        },
        {
            "materia": "teste de materia",
            "coordenadas": [55],
            "nota": "",
            "cor": "red"
        }
    ]*/
}

/*
sumario das cores:
lightblue #caeaf5 = Matemática
	      #0e91bd = Português
roxo      #9a55b6 = História
amarelo   #e6e22e = Geografia
green     #20b2aa = Biologia
laranja   #eeb958 = Física
vermelho  #e47263 = Química
wheat     #f5deb3 = Inglês
*/


onload = () => {
    // armazena no localstorage
    localStorage.setItem("data", JSON.stringify(data));
    
    // var data1 = data
    // console.log(data1)
    // lendo do armazenamento interno
    
    let data2 = JSON.parse(localStorage.getItem("data"))
    console.log(data2.disciplinas[1])
    
    let xy, materia, x, y, i, j;
    
    for ( i = 0; i < data2.disciplinas.length; i++) {
        materia = data2.disciplinas[i].materia;
        xy = data2.disciplinas[i].coordenadas.length;
        for ( j = 0; j < xy; j++) {
            x = data2.disciplinas[i].coordenadas[j];
            y = data2.disciplinas[i].cor;
            document.getElementById(`${x}`).innerText = (`${materia}`)
            document.getElementById(`${x}`).style.backgroundColor = y;
        }
    }
}



onload = showOnScreenFromLocalStorage();
function showOnScreenFromLocalStorage(){
    // localStorage.setItem("data", JSON.stringify(data));
    let localStr = JSON.parse(localStorage.getItem("data"));

    let xy, materia, x, y, i, j;

    for ( i = 0; i < localStr.disciplinas.length; i++) {
        materia = localStr.disciplinas[i].materia;
        xy = localStr.disciplinas[i].coordenadas.length;
        for ( j = 0; j < xy; j++) {
            x = localStr.disciplinas[i].coordenadas[j];
            y = localStr.disciplinas[i].cor;
            document.getElementById(`${x}`).innerText = (`${materia}`)
            document.getElementById(`${x}`).style.backgroundColor = y;
        }
    }
}


/* ========================================================= */
/* ============= FIM - Armazenamento Local ================= */
/* ========================================================= */



/* ========================================================= */
/* =============== Adicao tarefa individual ================ */
/* ========================================================= */



function addTarefaIndividual(coord) {
    let materia, idElemento, elemento;
    //alert('id = ' + `${id}`)
    document.querySelector('.bg-modal').style.display = 'flex'
    document.querySelector('.bg-modal').innerHTML = `
     <div class="addTarefasIndividuais">
        <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
        <p>Adicionar tarefas</p>

        <form action="#">

            <!-- <label for="disciplina">Disciplina: </label> -->
            <span class="disciplina_span">Disciplina:</span>
            <select class="disciplina" name="disciplina" id="disciplina_select">
              <option value="blank" placeholder="Disciplina" selected></option>
            </select>
 
        
            <span class="anotacoes_span"> Anotações: </span>
            <textarea name="anotacoes" id="anotacoes" rows="3" placeholder="Anotações"></textarea>
        
        </form>
        <button id="btnSubmit" onclick="btnSubmit_AddTarefaIndividual(${coord})"> Confirmar </button>
      </div>`

    // mostrar em select todas opcoes de materia na memoria local
    let localStr = JSON.parse(localStorage.getItem("data"))
    for(let i = 0; i < localStr.disciplinas.length; i++)
    {   
        materia = localStr.disciplinas[i].materia;
        idElemento = document.getElementById('disciplina_select');
        elemento = document.createElement('option');
        elemento.innerHTML = `<option value="${materia}">${materia}</option>`;
        idElemento.add(elemento)
    }
}

function btnSubmit_AddTarefaIndividual( coord ) {
    let i, lengthCoord;
    
    let disciplina_Form = document.getElementById('disciplina_select').value;
    let anotacoes_Form = document.getElementById('anotacoes').value;
    
    localStr = JSON.parse(localStorage.getItem('data'));
    
    for( i = 0; i < localStr.disciplinas.length; i++){
        if( localStr.disciplinas[i].materia == disciplina_Form){
            lengthCoord = localStr.disciplinas[i].coordenadas.length;
            localStr.disciplinas[i].coordenadas[lengthCoord] = coord; 
        }
    }
    
    localStorage.setItem('data', JSON.stringify(localStr));
    showOnScreenFromLocalStorage();
    // clear na tela
    btnCloseAdd();
}

/* ========================================================= */
/* ============== FIM - tarefa individual ================== */
/* ========================================================= */