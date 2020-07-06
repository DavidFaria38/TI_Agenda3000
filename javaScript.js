function openSlideMenu() {

    if (screen.width >= '700') {
        document.getElementById('menu').style.width = '250px';

    } else {
        document.getElementById('menu').style.width = '90%';

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
    let localStrg = JSON.parse(localStorage.getItem('data'));
    let select = `<option value="blank" selected></option>`;
    let peso = `<option value="-1" selected></option>`;
    document.querySelector('.bg-modal').style.display = 'flex'
    document.querySelector('.bg-modal').innerHTML = `
    <div class="modal-content">
    <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
        <p>Adicionar tarefas</p>

        <form action="#">
          <!-- Preferencias 1 -->
          <div class="pref_1">
            <label for="pref_1">Preferencia 1 :</label>
            <select class="materia" name="pref_1" id="pref_1">
              <option value="blank" selected></option>
            </select>
            <select class="peso" name="pesoPref_1" id="pesoPref_1">
              <option value="-1" selected></option>
            </select>
          </div>

          <!-- Preferencias 2 -->
          <div class="pref_2">
            <label for="pref_2">Preferencia 2 :</label>
            <select class="materia" name="pref_2" id="pref_2">
              <option value="blank" selected></option>
            </select>
            <select class="peso" name="pesoPref_2" id="pesoPref_2">
              <option value="-1" selected></option>
            </select>
          </div>

          <!-- Preferencias 3 -->
          <div class="pref_3">
            <label for="pref_3">Preferencia 3 :</label>
            <select class="materia" name="pref_3" id="pref_3">
              <option value="blank" selected></option>
            </select>
            <select class="peso" name="pesoPref_3" id="pesoPref_3">
              <option value="-1" selected></option>
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

      </div>`;

    for(let i = 0; i < localStrg.disciplinas.length; i++){
        let materia = localStrg.disciplinas[i].materia;
        select = select + `<option value="${materia}" selected>${materia}</option>`
    }

    for(let j = 1; j <= 5; j++)
        peso = peso + `<option value="${j}">${j}</option>`

    document.querySelector('#pref_1').innerHTML = select
    document.querySelector('#pref_2').innerHTML = select
    document.querySelector('#pref_3').innerHTML = select
    document.querySelector('#pesoPref_1').innerHTML = peso
    document.querySelector('#pesoPref_2').innerHTML = peso
    document.querySelector('#pesoPref_3').innerHTML = peso
    // peso = peso + `<option value="${i}" selected>$</option>`
}

function btnCloseAdd() {
    document.querySelector('.bg-modal').style.display = 'none'
    document.querySelector('.bg-modal').innerHTML = ``
    // console.log('fecho tela')
}
/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */



/* ========================================================= */
/* ================= Inicio - Janela MyDay =================*/
/* ========================================================= */
var materias = [];
function quedia() {
    var d = new Date();
    var n = d.getDay()
    var dias = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
    return dias[n]
}
function setMyDayToToday() {
    var diahj = quedia();
    if (document.getElementById("diadehoje") != null) {
        document.getElementById("diadehoje").innerHTML = diahj;
    }
    console.log(diahj);

}
function mydayMaterias() {
    let data2 = JSON.parse(localStorage.getItem("data"));
    //console.log(data2);
    var materiasdehj = [];
    let d = new Date();
    let hj = d.getDay();
    if (hj == 0) {
        hj = 7
    }
    for (let i = 0; i < data2.disciplinas.length; i++) {
        for (let z = 0; z < data2.disciplinas[i].coordenadas.length; z++) {
            let mydaycord = "" + data2.disciplinas[i].coordenadas[z];
            let x = mydaycord.length - 1;
            // console.log("mydaycord = " + mydaycord)
            //console.log("cordenadas= " + mydaycord + " lenght= " + x + " hoje= " + hj);
            if (mydaycord[x] == hj) {
                mydaycord = mydaycord.substr(0, x);
                materiasdehj.push(mydaycord + "," + data2.disciplinas[i].materia + "," + data2.disciplinas[i].cor);
            }
        }
    }
    return materiasdehj;
}
function putMymaterias() {
    let arrayMyday = mydayMaterias();
    for (let i = 0; i < arrayMyday.length; i++) {
        //console.log(arrayMyday[i]);
        let breakcomma = arrayMyday[i].indexOf(",");
        let lastBreakcomma = arrayMyday[i].lastIndexOf(",");
        let number = arrayMyday[i].substring(0, breakcomma);
        let sub = arrayMyday[i].substring((breakcomma + 1), lastBreakcomma);
        let color = arrayMyday[i].substring((lastBreakcomma + 1), arrayMyday[i].length);
        //console.log(number + "," + sub + "," + color);
        number = "My" + number;
        document.getElementById(number).style.backgroundColor = color;
        document.getElementById(number).innerText = sub;
    }


}

// load se myday.html estiver sendo exibida
// funcao esta no final de Armazenamento local


/* ========================================================= */
/* =================== Fim - Janela MyDay ==================*/
/* ========================================================= */



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
    let localStrg = JSON.parse(localStorage.getItem('data'));

    let color;
    if (pref == 'mat')
        color = "#caeaf5"
    else if (pref == 'por')
        color = "#0e91bd"
    else if (pref == 'his')
        color = "#9a55b6"
    else if (pref == 'geo')
        color = "#e6e22e"
    else if (pref == 'bio')
        color = "#20b2aa"
    else if (pref == 'fís')
        color = "#eeb958"
    else if (pref == 'quí')
        color = "#e47263"
    else if (pref == 'ing')
        color = "#f5deb3"
    else if (pref == 'tes')
        color = "red"

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


/* ========================================================= */
/* ======================= FIM ============================= */
/* ========================================================= */



/* ========================================================= */
/* ========== Configuracoes de peso das materias =========== */
/* ========================================================= */
function submitAddTarefa() {

    let localStrg = JSON.parse(localStorage.getItem('data'));
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
    var k;


    if (validarInput() == false) {
        console.log('ERROR: Missing Field')
    }
    else {
        console.log('Todos campos preenchidos')
        btnCloseAdd()

        // Verificacao do turno
        if (tManha){
            turno = 1,
            valInit = 1
            valEnd = 6

            console.log('passou manha')
        }
        else if (tTarde){
            turno = 2,
            valInit = 7
            valEnd = 10

            console.log('passou tarde')
        }
        else if (tNoite){
            turno = 3
            valInit = 11
            valEnd = 15

            console.log('passou noite')
        }

        // Verificacao do peso 
        //1.Utizando o parseInt para transformar os pesos em integrers para os calculos
        var pesoTotal = parseInt(peso1) + parseInt(peso2) + parseInt(peso3);

        //2.Calculando a porcentagem dos pesos individuais pelo peso total
        var porcentagem1 = 1/(pesoTotal/peso1);
        var porcentagem2 = 1/(pesoTotal/peso2);
        var porcentagem3 = 1/(pesoTotal/peso3);

        //3.Aplicando as porcentagens calculadas anteriormente sobre o numero de slots disponiveis
        var slotsTotal = 25;//Alteravel
        var slots1 = Math.round(slotsTotal*porcentagem1);
        var slots2 = Math.round(slotsTotal*porcentagem2);
        var slots3 = Math.round(slotsTotal*porcentagem3);
        //OBS.Math.round pode causar um aumento ou diminuiçao de 1 slot

        //4.Armazenamento das coordenadas
        var cordenadas1 = [];
        var cordenadas2 = [];
        var cordenadas3 = [];
        
        let count1 = 0, count2 = 0, count3 = 0;
        for(let i = valInit; i <= valEnd; i++){
            for(let j = 1; j <= 7; j++){
                if(j == 6 ){                               // se for sabado tem 2/3 de chance de nao ter nenhuma materia no slot
                    if(1 > Math.ceil(Math.random() * 3)){
                        let rand = Math.floor(Math.random() * 10);
                        if(rand <= 3 && slots1 != count1){
                            cordenadas1[count1] = parseInt(`${i}${j}`)
                            count1++;
                        }
                        else if (rand > 3 && rand <= 6 && slots2 != count2) {
                            cordenadas2[count2] = parseInt(`${i}${j}`)
                            count2++;
                        }                
                        else if (rand > 6 && rand <= 9 && slots3 != count3) {
                            cordenadas3[count3] = parseInt(`${i}${j}`)
                            count3++;
                        }  
                    }
                } // end if sabado
                else if(j == 7 ){                               // se for domingo tem 1/3 de chance de nao ter nenhuma materia no slot
                    if(2 > Math.ceil(Math.random() * 3)){
                        let rand = Math.floor(Math.random() * 10);
                        if(rand <= 3 && slots1 != count1){
                            cordenadas1[count1] = parseInt(`${i}${j}`)
                            count1++;
                        }
                        else if (rand > 3 && rand <= 6 && slots2 != count2) {
                            cordenadas2[count2] = parseInt(`${i}${j}`)
                            count2++;
                        }                
                        else if (rand > 6 && rand <= 9 && slots3 != count3) {
                            cordenadas3[count3] = parseInt(`${i}${j}`)
                            count3++;
                        }  
                    }
                } // end if do final de semana
                else{
                    let rand = Math.ceil(Math.random() * 10);
                    if(rand <= 3 && slots1 != count1){
                        cordenadas1[count1] = parseInt(`${i}${j}`)
                        count1++;
                    }
                    else if (rand > 3 && rand <= 6 && slots2 != count2) {
                        cordenadas2[count2] = parseInt(`${i}${j}`)
                        count2++;
                    }                
                    else if (rand > 6 && rand <= 9 && slots3 != count3) {
                        cordenadas3[count3] = parseInt(`${i}${j}`)
                        count3++;
                    }                
                }
            }
        } // end for para adicao de materia

        
        //8.Local para colocar o codigo do local storage:
        /* Coloca no local storage as coordenadas */
        for(let j = 0; j < localStrg.disciplinas.length; j++){
            if(localStrg.disciplinas[j].materia == jsPref_1){
                for(let h = 0; h < cordenadas1.length; h++){
                    let lenCoord = localStrg.disciplinas[j].coordenadas.length;
                    localStrg.disciplinas[j].coordenadas[lenCoord] = cordenadas1[h];
                    localStrg.disciplinas[j].nota[lenCoord] = '';
                    console.log('coord 1 = ' + cordenadas1[h])
                }
            }
            if(localStrg.disciplinas[j].materia == jsPref_2){
                for(let h = 0; h < cordenadas2.length; h++){
                    let lenCoord = localStrg.disciplinas[j].coordenadas.length;
                    localStrg.disciplinas[j].coordenadas[lenCoord] = cordenadas2[h];
                    localStrg.disciplinas[j].nota[lenCoord] = '';
                    console.log('coord 2 = ' + cordenadas2[h])
                }
            }
            if(localStrg.disciplinas[j].materia == jsPref_3){
                for(let h = 0; h < cordenadas3.length; h++){
                    let lenCoord = localStrg.disciplinas[j].coordenadas.length;
                    localStrg.disciplinas[j].coordenadas[lenCoord] = cordenadas3[h];
                    localStrg.disciplinas[j].nota[lenCoord] = '';
                    console.log('coord 3 = ' + cordenadas3[h])
                }
            }
            console.log("entrou no for amigo")
        }
        
        localStorage.setItem('data', JSON.stringify(localStrg))
    }

    console.log("jsPref_1 = " + jsPref_1);
    console.log("jsPref_2 = " + jsPref_2);
    console.log("jsPref_3 = " + jsPref_3);
    console.log("Coord 1 = " + cordenadas1);
    console.log("Coord 2 = " + cordenadas2);
    console.log("Coord 3 = " + cordenadas3);
    // console.log(`================================`);
    // console.log("cor1 =" + cor1);
    // console.log(`cor2 = ${cor2}`);
    // console.log(`cor3 = ${cor3}`);
    // console.log(`================================`);
}
/* ========================================================= */
/* ================ FIM - Config peso ====================== */
/* ========================================================= */



/* ========================================================= */
/* ================== Dardmode function ==================== */
/* ========================================================= */
/*felipe darkmode*/
/*David alterou*/
// nao esta funciona ainda

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
/* =========== Inicio - Visualizacao de materias =========== */
/* ========================================================= */
/*funcao tarefa foi descarada */
function getIdCoord(coord) {
    let idObj = -1;
    let localStrg = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < localStrg.disciplinas.length; i++) {
        for (let j = 0; j < localStrg.disciplinas[i].coordenadas.length; j++)
            if (localStrg.disciplinas[i].coordenadas[j] == coord)
            idObj = j;
    }
    return idObj;
}

function editNotas(idMateria, idNota) {
    let content_anotacoes = document.querySelector('.content_anotacoes').innerText;
    
    document.querySelector('.content_anotacoes').style.display = 'none';
    document.querySelector('.editNotas').style.display = 'flex';
    document.querySelector('.viewDisciplina .btn_savealteracoes').style.display = 'inline';
    
    document.querySelector('.editNotas textarea').innerText = content_anotacoes;
}

function savealteracoes(idMateria, idNota) {
    let resposta = confirm('Deseja salvar as alterações?')
    if (resposta == true) {

        let localStrg = JSON.parse(localStorage.getItem('data'));
        let content_anotacoes = document.querySelector('.editNotas textarea').value;
        
        localStrg.disciplinas[idMateria].nota[idNota] = content_anotacoes;
        
        localStorage.setItem('data', JSON.stringify(localStrg));
        console.log(localStrg);
        btnCloseAdd();
    }
}

function showDisciplinaIndividual(coord, idMateria) {

    let localStrg = JSON.parse(localStorage.getItem('data'));
    let idNota = getIdCoord(coord);

    let disciplina = localStrg.disciplinas[idMateria];
    // alert(`idMateria = ${idMateria} \nidNota = ${idNota} \ncoord = ${coord}`)

    let janela = document.querySelector('.bg-modal');
    janela.style.display = 'flex';
    janela.innerHTML = `
    <div class="viewDisciplina">
        <i class="fas fa-times btnClose" onclick="btnCloseAdd()"></i>

        <div class="box_nomeMateria">${disciplina.materia}</div>
          <span class="span_tagAnotacoes">Anotações:</span>
          <div class="content_anotacoes" onclick="editNotas(${idMateria},${idNota})">${disciplina.nota[idNota]}</div>
          <div class="editNotas">
            <textarea name="editNotas" id="editNotas" cols="30" rows="10"></textarea>
          </div>
            <div class="btnViewDisciplina">
          <i class="fas fas fa-check btn_savealteracoes" onclick="savealteracoes(${idMateria},${idNota})"></i>
          <i class="fas fa-times btnRemTarefa" onclick="remTarefaIndividual(${coord}, ${idMateria})"></i>
        </div>
      </div>`;
    document.querySelector('.viewDisciplina .btn_savealteracoes').style.display = 'none';
}

// function showTarefasCB(coord, idMateria) {
//     let localStrg = JSON.parse(localStorage.getItem('data'));
//     let idTarefa = getIdCoord(coord)
//     let tarefas = '';

//     if (true) {
//         let tarefaArray = localStrg.disciplinas[idMateria].tarefa[idTarefa];
//         for(let i = 0; i < tarefaArray.length; i++){
//             console.log(1)
//             tarefas = tarefas + `
//             <div class="item_tarefa">
//                 <div class="nome_itemTarefa">${tarefaArray[i]}</div>
//                 <span class="checkBox_itemTarefa">
//                 <input type="checkbox" name="cBItem" id="cBItem">
//                 </span>
//             </div>`;
//         }
//         document.querySelector('.viewDisciplina .box_tarefas').innerHTML = tarefas;
//     }
// }

// function addTarefaCB(coord, idMateria){
//     let localStrg = JSON.parse(localStorage.getItem('data'));
//     let idTarefa = getIdCoord(coord);
    
//     let tarefa = document.querySelector('.viewDisciplina .addNewTarefa').value;
//     let tarefaArray = localStrg.disciplina[idMateria].tarefa[idTarefa];
//     tarefaArray[tarefaArray.length] = tarefa;
    
//     console.log(localStrg);
//     // localStorage.setItem('data', JSON.stringify(localStrg));
// }

// function remTarefaCB(coord, idMateria){
//     let localStrg = JSON.parse(localStorage.getItem('data'));
//     let idTarefa = getIdCoord(coord);
    
//     let tarefaArray = localStrg.disciplina[idMateria].tarefa[idTarefa];
    
//     tarefaArray.splice(idTarefa, 1);
    
//     console.log(localStrg);
//     // localStorage.setItem('data', JSON.stringify(localStrg));
// }

// function submit_addNewTarefa(coord, indexMateria){
//     let localStrg = JSON.parse(localStorage.getItem('data'));
//     let nameTarefa = document.querySelector('.box_input_addTarefa input').value;

    
//     let disciplina = localStrg.disciplinas[indexMateria];
//     let indexTarefa = getIdCoord(coord);
    
//     let len = disciplina.tarefa[indexTarefa];

//     localStrg.disciplinas[indexMateria].tarefa[indexTarefa][len] = nameTarefa;
//     localStrg.disciplinas[indexMateria].tarefa_state[indexTarefa][len] = false;
    
//     console.log( JSON.stringify(localStrg.disciplinas[indexMateria]));
//     console.log(localStrg.disciplinas[indexMateria]);

//     alert(localStrg)
//     localStorage.clear();
//     localStorage.setItem("data", JSON.stringify(localStrg));
//     btnCloseAdd();
// }

// function addNewTarefa(coord, idMateria){
//     let janela = document.querySelector('.bg-modal');
//     janela.innerHTML = `
//     <div class="viewDisciplina">
//         <i class="fas fa-times btnClose" onclick="btnCloseAdd()"></i>
//         <div class="box_nomeMateria">Adicione tarefa</div>
//         <div class="box_input_addTarefa">
//             <div class="input_nameAddTarefa">Tarefa:</div>
//             <input type="text" name="input_addTarefa" id="input_addTarefa" placeholder="Nome tarefa">
//         </div>
//         <div class="btnViewDisciplina">
//             <i class="fas fa-times btnAddTarefa" onclick="submit_addNewTarefa(${coord}, ${idMateria})"></i>
//             <i class="fas fa-times btnRemTarefa"></i>
//         </div>
//     </div>`
// }

/* ========================================================= */
/* ============= Fim - Visualizacao de materias ============ */
/* ========================================================= */




/* ========================================================= */
/* ================= Armazenamento Local =================== */
/* ========================================================= */

var data = {
    "disciplinas": [
        {
            "materia": "Matemática",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#caeaf5"
        },
        {
            "materia": "Português",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#0e91bd"
        },
        {
            "materia": "História",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#9a55b6"
        },
        {
            "materia": "Geografia",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#e6e22e"
        },
        {
            "materia": "Biologia",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#20b2aa"
        },
        {
            "materia": "Física",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#eeb958"
        },
        {
            "materia": "Química",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#e47263"
        },
        {
            "materia": "Inglês",
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": "#f5deb3"
        }
    ]
    // exemplo de local storage com dados dentro
    // ps. nao enviar fazer commit com esse exemplo ligado
    /*"disciplinas": [
        {
            "materia": "Matemática",
            "coordenadas": ["11", "12", "13", "15", "26"],
            "nota": [],
            "cor": "#caeaf5"
        },
        {
            "materia": "Português",
            "coordenadas": ["12", "13", "23"],
            "nota": [],
            "cor": "#0e91bd"
        },
        {
            "materia": "História",
            "coordenadas": ["41"],
            "nota": [],
            "cor": "#9a55b6"
        },
        {
            "materia": "Geografia",
            "coordenadas": ["51", "56", "57"],
            "nota": [],
            "cor": "#e6e22e"
        },
        {
            "materia": "Biologia",
            "coordenadas": ["16", "17", "25"],
            "nota": [],
            "cor": "#20b2aa"
        },
        {
            "materia": "Física",
            "coordenadas": ["31", "32", "33"],
            "nota": [],
            "cor": "#eeb958"
        },
        {
            "materia": "Química",
            "coordenadas": [],
            "nota": [],
            "cor": "#e47263"
        },
        {
            "materia": "Inglês",
            "coordenadas": [],
            "nota": [],
            "cor": "#f5deb3"
        },
        {
            "materia": "teste de materia",
            "coordenadas": [55],
            "nota": [],
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


function setLocalStorage(){
    let isThere_localStr = localStorage.getItem("data");
    if (isThere_localStr == null) {
        localStorage.setItem("data", JSON.stringify(data));
        console.log('Local Storare SET');
    }
}

function showTable() {
    let table = document.getElementById('table');
    //table.innerHTML = '';
    table.innerHTML = `
    <table>
        <tr class="weekDays">
        <td> </td> 
        <th>Segunda</th>
        <th>Terça</th>
        <th>Quarta</th>
        <th>Quinta</th>
        <th>Sexta</th>
        <th>Sabado</th>
        <th>Domingo</th>
        <tr class="horario manha">
            <th class="time "><span>7:00 - 8:00</span></th>
            <td id="11" onclick="add_rem_TarefaIndividual(11)"></td>
            <td id="12" onclick="add_rem_TarefaIndividual(12)"></td>
            <td id="13" onclick="add_rem_TarefaIndividual(13)"></td>
            <td id="14" onclick="add_rem_TarefaIndividual(14)"></td>
            <td id="15" onclick="add_rem_TarefaIndividual(15)"></td>
            <td id="16" onclick="add_rem_TarefaIndividual(16)"></td>
            <td id="17" onclick="add_rem_TarefaIndividual(17)"></td>
        </tr>
        <tr class="horario manha">
            <th class="time"><span>8:00 - 9:00</span></th>
            <td id="21" onclick="add_rem_TarefaIndividual(21)"></td>
            <td id="22" onclick="add_rem_TarefaIndividual(22)"></td>
            <td id="23" onclick="add_rem_TarefaIndividual(23)"></td>
            <td id="24" onclick="add_rem_TarefaIndividual(24)"></td>
            <td id="25" onclick="add_rem_TarefaIndividual(25)"></td>
            <td id="26" onclick="add_rem_TarefaIndividual(26)"></td>
            <td id="27" onclick="add_rem_TarefaIndividual(27)"></td>
        </tr>
        <tr class="horario manha">
            <th class="time"><span>9:00 - 10:00</span></th>
            <td id="31" onclick="add_rem_TarefaIndividual(31)"></td>
            <td id="32" onclick="add_rem_TarefaIndividual(32)"></td>
            <td id="33" onclick="add_rem_TarefaIndividual(33)"></td>
            <td id="34" onclick="add_rem_TarefaIndividual(34)"></td>
            <td id="35" onclick="add_rem_TarefaIndividual(35)"></td>
            <td id="36" onclick="add_rem_TarefaIndividual(36)"></td>
            <td id="37" onclick="add_rem_TarefaIndividual(37)"></td>
        </tr>
        <tr class="horario manha">
            <th class="time"><span>10:00 - 11:00</span></th>
            <td id="41" onclick="add_rem_TarefaIndividual(41)"></td>
            <td id="42" onclick="add_rem_TarefaIndividual(42)"></td>
            <td id="43" onclick="add_rem_TarefaIndividual(43)"></td>
            <td id="44" onclick="add_rem_TarefaIndividual(44)"></td>
            <td id="45" onclick="add_rem_TarefaIndividual(45)"></td>
            <td id="46" onclick="add_rem_TarefaIndividual(46)"></td>
            <td id="47" onclick="add_rem_TarefaIndividual(47)"></td>
        </tr>
        <tr class="horario manha">
            <th class="time"><span>11:00 - 12:00</span></th>
            <td id="51" onclick="add_rem_TarefaIndividual(51)"></td>
            <td id="52" onclick="add_rem_TarefaIndividual(52)"></td>
            <td id="53" onclick="add_rem_TarefaIndividual(53)"></td>
            <td id="54" onclick="add_rem_TarefaIndividual(54)"></td>
            <td id="55" onclick="add_rem_TarefaIndividual(55)"></td>
            <td id="56" onclick="add_rem_TarefaIndividual(56)"></td>
            <td id="57" onclick="add_rem_TarefaIndividual(57)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>12:00 - 13:00</span></th>
            <td id="61" onclick="add_rem_TarefaIndividual(61)"></td>
            <td id="62" onclick="add_rem_TarefaIndividual(62)"></td>
            <td id="63" onclick="add_rem_TarefaIndividual(63)"></td>
            <td id="64" onclick="add_rem_TarefaIndividual(64)"></td>
            <td id="65" onclick="add_rem_TarefaIndividual(65)"></td>
            <td id="66" onclick="add_rem_TarefaIndividual(66)"></td>
            <td id="67" onclick="add_rem_TarefaIndividual(67)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>13:00 - 14:00</span></th>
            <td id="71" onclick="add_rem_TarefaIndividual(71)"></td>
            <td id="72" onclick="add_rem_TarefaIndividual(72)"></td>
            <td id="73" onclick="add_rem_TarefaIndividual(73)"></td>
            <td id="74" onclick="add_rem_TarefaIndividual(74)"></td>
            <td id="75" onclick="add_rem_TarefaIndividual(75)"></td>
            <td id="76" onclick="add_rem_TarefaIndividual(76)"></td>
            <td id="77" onclick="add_rem_TarefaIndividual(77)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>14:00 - 15:00</span></th>
            <td id="81" onclick="add_rem_TarefaIndividual(81)"></td>
            <td id="82" onclick="add_rem_TarefaIndividual(82)"></td>
            <td id="83" onclick="add_rem_TarefaIndividual(83)"></td>
            <td id="84" onclick="add_rem_TarefaIndividual(84)"></td>
            <td id="85" onclick="add_rem_TarefaIndividual(85)"></td>
            <td id="86" onclick="add_rem_TarefaIndividual(86)"></td>
            <td id="87" onclick="add_rem_TarefaIndividual(87)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>15:00 - 16:00</span></th>
            <td id="91" onclick="add_rem_TarefaIndividual(91)"></td>
            <td id="92" onclick="add_rem_TarefaIndividual(92)"></td>
            <td id="93" onclick="add_rem_TarefaIndividual(93)"></td>
            <td id="94" onclick="add_rem_TarefaIndividual(94)"></td>
            <td id="95" onclick="add_rem_TarefaIndividual(95)"></td>
            <td id="96" onclick="add_rem_TarefaIndividual(96)"></td>
            <td id="97" onclick="add_rem_TarefaIndividual(97)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>16:00 - 17:00</span></th>
            <td id="101" onclick="add_rem_TarefaIndividual(101)"></td>
            <td id="102" onclick="add_rem_TarefaIndividual(102)"></td>
            <td id="103" onclick="add_rem_TarefaIndividual(103)"></td>
            <td id="104" onclick="add_rem_TarefaIndividual(104)"></td>
            <td id="105" onclick="add_rem_TarefaIndividual(105)"></td>
            <td id="106" onclick="add_rem_TarefaIndividual(106)"></td>
            <td id="107" onclick="add_rem_TarefaIndividual(107)"></td>
        </tr>
        <tr class="horario tarde">
            <th class="time"><span>17:00 - 18:00</span></th>
            <td id="111" onclick="add_rem_TarefaIndividual(111)"></td>
            <td id="112" onclick="add_rem_TarefaIndividual(112)"></td>
            <td id="113" onclick="add_rem_TarefaIndividual(113)"></td>
            <td id="114" onclick="add_rem_TarefaIndividual(114)"></td>
            <td id="115" onclick="add_rem_TarefaIndividual(115)"></td>
            <td id="116" onclick="add_rem_TarefaIndividual(116)"></td>
            <td id="117" onclick="add_rem_TarefaIndividual(117)"></td>
        </tr>
        <tr class="horario noite">
            <th class="time"><span>18:00 - 19:00</span></th>
            <td id="121" onclick="add_rem_TarefaIndividual(121)"></td>
            <td id="122" onclick="add_rem_TarefaIndividual(122)"></td>
            <td id="123" onclick="add_rem_TarefaIndividual(123)"></td>
            <td id="124" onclick="add_rem_TarefaIndividual(124)"></td>
            <td id="125" onclick="add_rem_TarefaIndividual(125)"></td>
            <td id="126" onclick="add_rem_TarefaIndividual(126)"></td>
            <td id="127" onclick="add_rem_TarefaIndividual(127)"></td>
        </tr>
        <tr class="horario noite">
            <th class="time"><span>19:00 - 20:00</span></th>
            <td id="131" onclick="add_rem_TarefaIndividual(131)"></td>
            <td id="132" onclick="add_rem_TarefaIndividual(132)"></td>
            <td id="133" onclick="add_rem_TarefaIndividual(133)"></td>
            <td id="134" onclick="add_rem_TarefaIndividual(134)"></td>
            <td id="135" onclick="add_rem_TarefaIndividual(135)"></td>
            <td id="136" onclick="add_rem_TarefaIndividual(136)"></td>
            <td id="137" onclick="add_rem_TarefaIndividual(137)"></td>
        </tr>
        <tr class="horario noite">
            <th class="time"><span>20:00 - 21:00</span></th>
            <td id="141" onclick="add_rem_TarefaIndividual(141)"></td>
            <td id="142" onclick="add_rem_TarefaIndividual(142)"></td>
            <td id="143" onclick="add_rem_TarefaIndividual(143)"></td>
            <td id="144" onclick="add_rem_TarefaIndividual(144)"></td>
            <td id="145" onclick="add_rem_TarefaIndividual(145)"></td>
            <td id="146" onclick="add_rem_TarefaIndividual(146)"></td>
            <td id="147" onclick="add_rem_TarefaIndividual(147)"></td>
        </tr>
        <tr class="horario noite">
            <th class="time"><span>21:00 - 22:00</span></th>
            <td id="151" onclick="add_rem_TarefaIndividual(151)"></td>
            <td id="152" onclick="add_rem_TarefaIndividual(152)"></td>
            <td id="153" onclick="add_rem_TarefaIndividual(153)"></td>
            <td id="154" onclick="add_rem_TarefaIndividual(154)"></td>
            <td id="155" onclick="add_rem_TarefaIndividual(155)"></td>
            <td id="156" onclick="add_rem_TarefaIndividual(156)"></td>
            <td id="157" onclick="add_rem_TarefaIndividual(157)"></td>
        </tr>
    </table>`;
}

function showOnScreenFromLocalStorage() {
    showTable()
    // localStorage.setItem("data", JSON.stringify(data));
    let localStr = JSON.parse(localStorage.getItem("data"));
    let xy, materia, x, y, i, j;

    for (i = 0; i < localStr.disciplinas.length; i++) {
        materia = localStr.disciplinas[i].materia;
        xy = localStr.disciplinas[i].coordenadas.length;
        for (j = 0; j < xy; j++) {
            x = localStr.disciplinas[i].coordenadas[j];
            y = localStr.disciplinas[i].cor;
            if (document.getElementById(`${x}`) != null) {
                document.getElementById(`${x}`).innerText = materia;
                document.getElementById(`${x}`).style.backgroundColor = y;
            }
        }
    }
}

// se pagina estiver em pagina myweek.html mostre as disciplinas
function isWindown() {
    let windowPath = location.pathname;
    setLocalStorage();
    console.log("URL da Pagina = " + windowPath);
    switch (windowPath) {
        case '/myWeek.html':
            showOnScreenFromLocalStorage();
            break;
        case '/myday.html':
            setMyDayToToday();
            putMymaterias();
            break;
        case '/configuracao.html':
            configDisciplinas();
            break;

        default:
            break;
    }
}
onload = isWindown();

/* ========================================================= */
/* ============= FIM - Armazenamento Local ================= */
/* ========================================================= */



/* ========================================================= */
/* =============== Adicao tarefa individual ================ */
/* ========================================================= */

function addTarefaIndividual(coord) {
    let materia, idElemento, elemento;
    //alert('id = ' + `${id}`)
    
    document.querySelector('.bg-modal').style.display = 'flex';
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
    for (let i = 0; i < localStr.disciplinas.length; i++) {
        materia = localStr.disciplinas[i].materia;
        idElemento = document.getElementById('disciplina_select');
        elemento = document.createElement('option');
        elemento.innerHTML = `<option value="${materia}">${materia}</option>`;
        idElemento.add(elemento)
    }
}

function btnSubmit_AddTarefaIndividual(coord) {
    let i, lengthCoord;

    let disciplina_Form = document.getElementById('disciplina_select').value;
    let anotacoes_Form = document.getElementById('anotacoes').value;

    
    let localStr = JSON.parse(localStorage.getItem('data'));
    
    for (i = 0; i < localStr.disciplinas.length; i++) {
        if (localStr.disciplinas[i].materia == disciplina_Form) {
            lengthCoord = localStr.disciplinas[i].coordenadas.length;

            /* dando todos esses elementos o mesmo index de que as coordenadas */
            localStr.disciplinas[i].coordenadas[lengthCoord] = coord;
            localStr.disciplinas[i].nota[lengthCoord] = anotacoes_Form;
            // localStr.disciplinas[i].tarefa[lengthCoord] = lengthCoord;
            // localStr.disciplinas[i].tarefa_state[lengthCoord] = lengthCoord;
        }
    }

    localStorage.setItem('data', JSON.stringify(localStr));
    isWindown();
    // clear na tela
    btnCloseAdd();
}

/* ao prescionar botao remove tarefa */
function btnSubmit_RemTarefaIndividual(coord, materiaIn) {

    // console.log(coord + "," + materiaIn);
    let localStr = JSON.parse(localStorage.getItem("data"));
    let i_removeItem = localStr.disciplinas[materiaIn].coordenadas.indexOf(coord);
    localStr.disciplinas[materiaIn].coordenadas.splice(i_removeItem, 1);
    localStr.disciplinas[materiaIn].nota.splice(i_removeItem, 1);
    localStorage.setItem('data', JSON.stringify(localStr));
    isWindown();
    btnCloseAdd();
}
/* Funcao intermediaria, confirmacao se usuario deseja deletar disciplina */
function remTarefaIndividual(coord, materiaIn) {
    let resposta = confirm('Deseja deletar materia?')
    if (resposta == true) {
        btnSubmit_RemTarefaIndividual(coord, materiaIn);
    }
}

function add_rem_TarefaIndividual(coord) {
    let idMateria;
    let localStr = JSON.parse(localStorage.getItem("data"));
    let valorMateria = false;
    for (let i = 0; i < localStr.disciplinas.length; i++) {
        let disciplinaVerification = localStr.disciplinas[i].coordenadas;
        if (disciplinaVerification.indexOf(coord) != -1) {
            idMateria = i;
            valorMateria = true;
        }
    }
    console.log("valor = " + valorMateria)
    if (valorMateria == false) {
        addTarefaIndividual(coord);
    } else {
        showDisciplinaIndividual(coord, idMateria)
        // remTarefaIndividual(coord, materiaAR);
    }
}
/* ========================================================= */
/* ============== FIM - tarefa individual ================== */
/* ========================================================= */



/* ========================================================= */
/* === Inicio - Adicao/remocao de itens do local storage === */
/* ========================================================= */

// valida se local storage possui parametro item
function ValidacaoInputItemLStrg(item) {
    let result = true;
    let localStr = JSON.parse(localStorage.getItem('data'));
    if (item != '') {
        for (let i = 0; i < localStr.disciplinas.length; i++) {
            let materia = localStr.disciplinas[i].materia;
            if (item == materia) {
                result = false;
                alert(`Agenda3000 já possui item ${item}`);
            }
        }
    } else {
        alert('Por favor preencha a caixa de entrada');
        result = false;
    }
    return result;
}

function manipulacaoItensLocalStorage() {
    // fecha sidebar
    closeSlideMenu();

    let materia, idElemento, elemento;
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.bg-modal').innerHTML = `
    <div class="manipulacaoItensLocalStorage addTarefasIndividuais">
       <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
       <p>Manipulação de Disciplinas</p>

        <div class="elements_addItemLStrg">
            <form action="#">
                <span class="disciplinaMan_span">Disciplina:</span>
                <select class="disciplinaMan_select" name="disciplina" id="disciplina_select">
                    <option value="blank" placeholder="Disciplina" selected></option>
                </select>
            </form>
            <button type="button" class="btn btn-success addItemLStrg" onclick="window_addItemLStrg()">Adicionar</button>
            <button type="button" class="btn btn-danger remItemLStrg" onclick="remItemLStrg()">Remover</button>
        </div>

     </div>`

    // mostrar em select todas opcoes de materia na memoria local
    let localStr = JSON.parse(localStorage.getItem("data"))
    for (let i = 0; i < localStr.disciplinas.length; i++) {
        materia = localStr.disciplinas[i].materia;
        idElemento = document.getElementById('disciplina_select');
        elemento = document.createElement('option');
        elemento.innerHTML = `<option value="${materia}">${materia}</option>`;
        idElemento.add(elemento)
    }
}

// event listener desabilitado, para reativa ir no sidemenu no html e retirar comentario
// tag <a id="manipulacaoItensLocalStorage">
//document.getElementById('configDisciplinas').addEventListener('click', manipulacaoItensLocalStorage);

// Adiciona item do local storage
function pagConfig_window_addItemLStrg() {
    
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.bg-modal').innerHTML = `
    <div class="manipulacaoItensLocalStorage addTarefasIndividuais">
       <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
       <p>Adição de Disciplina</p>

       <div class="elements_addItemLStrg">
            <form action="#">
                <span class="disciplinaMan_span">Nova Disciplina:</span>
                <input type="text" autocomplete="off" class="disciplinaMan_text" id="disciplina_input" placeholder=" Nome disciplina">
                <span class="disciplinaManCor_span">Cor:</span>
                <input type="text" autocomplete="off" class="disciplinaManCor_text" id="disciplinaCor_input" placeholder=" Cor em RGB/Hexadecimal">

            </form>
            <button type="button" class="btn btn-success addItemLStrg" onclick="addItemLStrg()">Adicionar</button>
        </div>

     </div>`

    let btnAdd = document.querySelector('.manipulacaoItensLocalStorage .addItemLStrg');
    btnAdd.style.left = '40%';
}


// remove item do local storage
function pagConfig_remItemLStrg(nameMateria) {
    let indexMateria;

    let result = confirm(`Deseja remover "${nameMateria}" \nQualquer informação contida nele foi apagada permanentemente."`);
    if (result != false) {
        let localStrg = JSON.parse(localStorage.getItem("data"))
        for (let i = 0; i < localStrg.disciplinas.length; i++) {
            indexMateria = localStrg.disciplinas[i].materia.indexOf(nameMateria);
            if(indexMateria != -1){
                localStrg.disciplinas.splice(i, 1)
            }
        }
        localStorage.setItem('data', JSON.stringify(localStrg));

        // refresh na tela
        configDisciplinas();
    }
    
}

function saveEdit(indexItem){
    let localStrg = JSON.parse(localStorage.getItem("data"))
    let name = document.getElementById('disciplina_input').value
    let color = document.getElementById('disciplinaCor_input').value

    localStrg.disciplinas[indexItem].materia = name;
    localStrg.disciplinas[indexItem].cor = color

    localStorage.setItem('data', JSON.stringify(localStrg));
    location.reload();
}

function editItem(indexItem){
    let localStrg = JSON.parse(localStorage.getItem("data"))

    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.bg-modal').innerHTML = `
    <div class="manipulacaoItensLocalStorage addTarefasIndividuais">
       <div class="close_btn_form" onclick="btnCloseAdd()">+</div>
       <p>Edição de Disciplina</p>

       <div class="elements_addItemLStrg">
            <form action="#">
                <span class="disciplinaMan_span">Nome Disciplina:</span>
                <input type="text" autocomplete="off" class="disciplinaMan_text" id="disciplina_input" placeholder=" Nome disciplina">
                <span class="disciplinaManCor_span">Cor:</span>
                <input type="text" autocomplete="off" class="disciplinaManCor_text" id="disciplinaCor_input" placeholder=" Cor em RGB/Hexadecimal">

            </form>
            <button type="button" class="btn btn-success addItemLStrg" onclick="saveEdit(${indexItem})">Salvar</button>
        </div>
     </div>`
    let btnAdd = document.querySelector('.manipulacaoItensLocalStorage .addItemLStrg');
    btnAdd.style.left = '40%';

    document.getElementById('disciplina_input').value = localStrg.disciplinas[indexItem].materia
    document.getElementById('disciplinaCor_input').value = localStrg.disciplinas[indexItem].cor
}

function configDisciplinas(){
    let localStrg = JSON.parse(localStorage.getItem("data"))
    let itens_disciplinas = '';
    box_disciplinas = document.querySelector('.box_disciplinas');
    
    for(let i = 0; i < localStrg.disciplinas.length; i++){
        let materia = localStrg.disciplinas[i].materia;
        let cor = localStrg.disciplinas[i].cor;

        itens_disciplinas += `
        <div class="item_disciplina">
            <span type="button" class="collapse_nameMateria" data-toggle="collapse" data-target="#box_dataItem${i}" aria-expanded="false" aria-controls="box_dataItem${i}" style="background-color: ${cor}">
                ${materia}
            </span>
            <button type="button" class="btn btn-danger" onclick="pagConfig_remItemLStrg('${materia}')">Remover</button>

            <div class="box_dataItem collapse" id="box_dataItem${i}">
                <div class="card card-body dataItem">
                    <span class="tag_anotacao">Anotações:</span>
                        <span class="btn_editColor" onclick="editItem(${i})">Editar</span>
                    <span class="anotacao"></span>
                    
                </div>
            </div>
        </div>`;
    }

    box_disciplinas.innerHTML = itens_disciplinas;

    for(let i = 0; i < localStrg.disciplinas.length; i++){
        let notas_disciplinas = document.querySelector(`.item_disciplina #box_dataItem${i} .dataItem .anotacao`);
        let notas = '';
        if(localStrg.disciplinas[i].nota.length != 0){
            for(let j = 0; j < localStrg.disciplinas[i].nota.length; j++){
                LStrg_nota = localStrg.disciplinas[i].nota[j];
                notas = notas + `<p>${LStrg_nota}</p>`;
            }
        }else{
            notas = `<p class="span_semAnotacao">Nenhuma anotação.</p>`;
        }
        // console.log(localStrg.disciplinas[i].materia + " = " + notas);
        notas_disciplinas.innerHTML = notas;
    }
}



// remove item do local storage
function remItemLStrg() {
    let materia;
    let item = document.getElementById('disciplina_select').value;

    if (item != 'blank') {
        let localStr = JSON.parse(localStorage.getItem("data"))
        for (let i = 0; i < localStr.disciplinas.length; i++) {
            materia = localStr.disciplinas[i].materia;
            let x = localStr.disciplinas;
            if (materia == item)
                x.splice(i, 1);
        }
        localStorage.setItem('data', JSON.stringify(localStr));

        // clear na tela
        btnCloseAdd();
        // refresh na tela, removendo itens retirados da timetable
        isWindown();
        alert(`Item "${item}" foi removido. \nQualquer informação contida nele foi apagada permanentemente.`)
    }
    else {
        document.getElementById('disciplina_select').style.border = 'solid red 2px';
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addItemLStrg() {
    item = document.getElementById('disciplina_input').value;
    color = document.getElementById('disciplinaCor_input').value;
    if(color == ''){
        color = getRandomColor();
    };
    if (ValidacaoInputItemLStrg(item) == true) {
        let inputBox = document.getElementById('disciplina_input');
        inputBox.style.border = 'solid green 2px';

        let localStr = JSON.parse(localStorage.getItem('data'));
        /* Template para add novo item ao local storage */
        let novoItem = {
            "materia": item,
            "coordenadas": [],
            "nota": [],
            "tarefa": [],
            "tarefa_state": [],
            "cor": color
        }
        let len = localStr.disciplinas.length;
        localStr.disciplinas[len] = novoItem;

        localStorage.setItem('data', JSON.stringify(localStr));

        // clear na tela
        btnCloseAdd();
        // refresh na tela, removendo itens retirados da timetable
        isWindown();
    } else {
        let inputBox = document.getElementById('disciplina_input');
        inputBox.style.border = 'solid red 2px';
    }
}

function window_addItemLStrg() {
    let form = document.querySelector('.manipulacaoItensLocalStorage .elements_addItemLStrg');

    form.innerHTML = '';
    form.innerHTML = `
    <div class="elements_addItemLStrg">
        <form action="#">
            <span class="disciplinaMan_span">Nova Disciplina:</span>
            <input type="text"  autocomplete="off" class="disciplinaMan_text" id="disciplina_input" placeholder=" Nome disciplina">
        </form>
        <button type="button" class="btn btn-success addItemLStrg" onclick="addItemLStrg()">Adicionar</button>
    </div>`;
    let btnAdd = document.querySelector('.manipulacaoItensLocalStorage .addItemLStrg');
    btnAdd.style.left = '40%';
}

/* remover botao do side menu */
function delete_localStorage() {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(data));
    isWindown();
}

// document.querySelector('#del_localStorage').addEventListener('click', delete_localStorage)
/* ========================================================= */
/* ===== Fim - Adicao/remocao de itens do local storage ==== */
/* ========================================================= */
