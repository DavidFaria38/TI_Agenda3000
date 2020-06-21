
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
function actionAddTarefa(a, c1, b, c2, c, c3) {
    /*var data = {    
        "disciplinas": [
            {
                "materia": a,
                "coordenadas": c1,
                "cor": "red" 
            },
            {
                "materia": b,
                "coordenadas": c2,
                "cor": "blue" 
            },
            {
                "materia": c,
                "coordenadas": c3 ,
                "cor": "yellow" 
            }
        ]
    }*/

        // armazena no localstorage
    localStorage.setItem("data", JSON.stringify(data));

    // var data1 = data
    // console.log(data1)
    // elndo do armazenamento interno
    var data2 = JSON.parse(localStorage.getItem("data"))

    data2.disciplinas[0].materia = a 
    data2.disciplinas[0].cordenadas = c1
    data2.disciplinas[1].materia = b
    data2.disciplinas[1].cordenadas = c2
    data2.disciplinas[2].materia = c
    data2.disciplinas[2].cordenadas = c3
    // console.log(data2.disciplinas[1])
    
    var xy, materia, x;
    
    for( var i = 0; i < data2.disciplinas.length; i++)
    {
        materia = data2.disciplinas[i].materia;
        xy = data2.disciplinas[i].coordenadas.length;
        for( var j = 0; j < xy; j++)
        {
            // x = data2.disciplinas[i].coordenadas[j];
            document.getElementById(data2.disciplinas[i].coordenadas[j]).innerText = (`${materia}`)

        }

        
        console.log(typeof(materia))
        console.log("xy = " + xy)

        // document.getElementById("11").innerText = ("ola");
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
    var k;


    if (validarInput() == false) {
        console.log('ERROR: Missing Field')
    }
    else {
        console.log('Todos campos preenchidos')
        btnCloseAdd()

        // Verificacao do turno
        // K = primeiro horario de cada turno
        if (tManha)
            turno = 1,
            k = 11
        else if (tTarde)
            turno = 2,
            k = 61
        else if (tNoite)
            turno = 3
            k = 121

        // Verificacao do peso 
        //1.Utizando o parseInt para transformar os pesos em integrers para os calculos
        var pesoTotal = parseInt(peso1) + parseInt(peso2) + parseInt(peso3);

        //2.Calculando a porcentagem dos pesos individuais pelo peso total
        var porcentagem1 = 1/(pesoTotal/peso1);
        var porcentagem2 = 1/(pesoTotal/peso2);
        var porcentagem3 = 1/(pesoTotal/peso3);

        //3.Aplicando as porcentagens calculadas anteriormente sobre o numero de slots disponiveis
        var slotsTotal = 20;//Alteravel
        var slots1 = Math.round(slotsTotal*porcentagem1);
        var slots2 = Math.round(slotsTotal*porcentagem2);
        var slots3 = Math.round(slotsTotal*porcentagem3);
        //OBS.Math.round pode causar um aumento ou diminuiçao de 1 slot

        //4.Armazenamento das coordenadas
        var cordenadas1 = [];
        var cordenadas2 = [];
        var cordenadas3 = [];
        

        //5.Calculos das cordenadas da primeira materia
        for(let i = 0; i < slots1 - 1; ++i){
            cordenadas1[i] = k;
            if(k == 17 || k == 67 || k == 127 || k == 27 || k == 77 || k == 137 || k == 37 || k == 87 || k == 147 )//Datas que representam domingo
            {
                k = k + 4;
            }
            else
            {
                ++k;
            }


        }
        
        //6.Calculos das cordenadas da segunda materia
        for(let i = 0; i < slots2 - 1; ++i){
            cordenadas2[i] = k;
            if(k == 17 || k == 67 || k == 127 || k == 27 || k == 77 || k == 137 || k == 37 || k == 87 || k == 147 )//Datas que representam domingo
            {
                k = k + 4;
            }
            else
            {
                ++k;
            }


        }
        
        //7.Calculos das cordenadas da terceira materia
        for(let i = 0; i < slots3 - 1; ++i){
            cordenadas3[i] = k;
            if(k == 17 || k == 67 || k == 127 || k == 27 || k == 77 || k == 137 || k == 37 || k == 87 || k == 147 )//Datas que representam domingo
            {
                k = k + 4;
            }
            else
            {
                ++k;
            }


        }

        //8.Local para colocar o codigo do local storage:
        
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

document.getElementById('btnDarkMode').addEventListener('click', darkmode)

var islight = 0;
function darkmode()
{
    if(islight % 2 == 0)
	{
        document.getElementById("content").style.backgroundColor = "#0C1B33";
		console.log("black");
		//document.p.style.color = "white";
        
	}
	else
	{
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



/* ========================================================= */
/* ============= FIM - Armazenamento Local ================= */
/* ========================================================= */