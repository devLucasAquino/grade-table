let countSemesters = 4;

function getTable() {
    let table = document.getElementById("table");
    return table;
}

function getNumberOfRows() {
    let table = getTable();
    let numberOfRows = table.rows.length;
    return numberOfRows;
}

function getNumberStudents() {
    let numberStudents = getNumberOfRows() - 1;
    return numberStudents;
}


function avarageStudentsList() {
    let table = getTable();
    let numberOfRows = getNumberOfRows();
    let avarageStudents = [];
    let columnsSemester = getNumberColumns() - 4; // Isso deve ser ajustado para considerar o novo número de semestres

    for (var i = 1; i < numberOfRows; i++) {
        let gradeStudent = 0;

        for (var n = 0; n < columnsSemester; n++) {
            let j = 2 + n; // Isso deve ser ajustado para considerar o novo número de semestres

            let celulaInput = table.rows[i].cells[j].querySelector('input');
            let grade = celulaInput ? parseFloat(celulaInput.value) : 0;

            gradeStudent += grade;
            j++
        }
        avarageStudents.push(gradeStudent / countSemesters); // Isso deve ser ajustado para usar o valor atualizado de countSemesters
    }

    return avarageStudents;
}

function classAvarage() {
    let numberStudents = getNumberStudents();
    let avarageStudents = avarageStudentsList();
    let classAvarage = 0;

    for (var i = 0; i < avarageStudents.length; i++) {
        classAvarage += avarageStudents[i];
    }

    let classAvarageText =  classAvarage / numberStudents.toFixed(2);
    document.getElementById('button-class-avarage').innerText = 'Class Avarage: ' + classAvarageText; 

}

function checked() {
    let table = getTable();
    let numberOfRows = getNumberOfRows();
    let avarageStudents = avarageStudentsList();
    let situationChecked = '';

    let j = 1;
    for (var i = 1; i < numberOfRows; i++) {
        if (avarageStudents[i - 1] > 6) {
            situationChecked = 'Approved';
            color = "green";
        }
        else if (avarageStudents[i - 1] < 5) {
            situationChecked = 'Disapproved';
            color = "red";

        }
        else {
            situationChecked = 'Recovery';
            color = "yellow";
        }

        let numberOfCells = table.rows[i].cells.length;

        let lastCellIndex = numberOfCells - 1;
        let secondLastCellIndex = numberOfCells - 2

        let celulaOutputAvarage = table.rows[i].cells[secondLastCellIndex].querySelector('output');
        let celulaOutputSituation = table.rows[i].cells[lastCellIndex].querySelector('output')

        celulaOutputAvarage.textContent = avarageStudents[i - 1].toFixed(2);
        celulaOutputSituation.textContent = situationChecked;

        celulaOutputSituation.style.background = color;
    }

}

function createStudent() {
    let countSemester = getNumberColumns() - 4;

    if (getNumberStudents() == 10) {
        window.alert('Limite de alunos alcançados')
    }
    else {

        const newRow = document.createElement('tr');
        const createElementTh = document.createElement('th');
        const contentFirstCol = document.createTextNode(getNumberStudents() + 1);
        createElementTh.appendChild(contentFirstCol);
        newRow.appendChild(createElementTh);

        const createCellName = document.createElement('td');
        const createInputName = document.createElement('input');
        createInputName.type = 'text';
        createInputName.className = 'form-control';
        createInputName.placeholder = 'name';
        createCellName.appendChild(createInputName);
        newRow.appendChild(createCellName);

        for (var i = 1; i <= countSemester; i++) {
            const newCell = document.createElement('td');
            const newInput = document.createElement('input');
            newInput.type = 'number';
            newInput.className = 'form-control';
            newCell.appendChild(newInput);
            newRow.appendChild(newCell);

        }

        for (var i = 1; i <= 2; i++) {
            const newCell = document.createElement('td');
            const newOutput = document.createElement('output');
            newCell.appendChild(newOutput);
            newRow.appendChild(newCell);
        }

        const tableBody = document.querySelector('tbody');
        tableBody.appendChild(newRow);
    }

}

function createGrade() {
    let table = getTable();
    let countSemester = countSemesters;
    countSemesters++;

    if (countSemester == 6) {
        window.alert('limite de nota atingido!');
    } else {

        const newTH = document.createElement('th');
        const textHeader = document.createTextNode(`${countSemester + 1}º Semester`);
        newTH.appendChild(textHeader);
        newTH.setAttribute('scope', 'col');

        let headerRow = table.querySelector('thead tr');
        let insertBeforeIndex = countSemester + 2;
        headerRow.insertBefore(newTH, headerRow.children[insertBeforeIndex]);


        for (var i = 0; i < getNumberOfRows() - 1; i++) {
            var newCell = document.createElement('td');
            var newInput = document.createElement('input');
            newInput.type = 'number';
            newInput.className = 'form-control';
            newCell.appendChild(newInput);

            let row = table.rows[i + 1];
            let insertBeforeCell = row.children[insertBeforeIndex];
            row.insertBefore(newCell, insertBeforeCell);
        }

    }

}

function getNumberColumns() {
    let table = getTable();
    let numberColumns = table.rows[0].cells.length;
    return numberColumns;
}

document.getElementById('optionOrder').addEventListener('change', function(){
    let numberOfRows = getNumberOfRows();
    let table = getTable();
    var nameStudentsList = [];

    for(let i = 1; i < numberOfRows; i++){
        let celulaNameStudents = table.rows[i].cells[1].textContent;
        nameStudentsList.push(celulaNameStudents);
    }

    nameStudentsList.sort(function(a, b) {
     return a.localeCompare(b);
    });
    
    console.log(nameStudentsList);

})