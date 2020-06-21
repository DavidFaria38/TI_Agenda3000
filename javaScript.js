
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
}
function btnCloseAdd() {
    document.querySelector('.bg-modal').style.display = 'none'
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
    var dias = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
    return dias[n - 1]
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
        return (false)
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
    console.log(`cor1 = ${cor1}`);
    console.log(`cor2 = ${cor2}`);
    console.log(`cor3 = ${cor3}`);
    console.log(`================================`);
}
/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */