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

    for (var i = 1; i < numberOfRows; i++) {
        let gradeStudent = 0;

        for (var j = 2; j < 6; j++) {
            let celulaInput = table.rows[i].cells[j].querySelector('input');
            let grade = celulaInput ? parseFloat(celulaInput.value) : 0;

            gradeStudent += grade;
        }

        avarageStudents.push(gradeStudent / 4);
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

    return classAvarage / numberStudents;
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
        }
        else if (avarageStudents[i - 1] < 5) {
            situationChecked = 'Disapproved';
        }
        else {
            situationChecked = 'Recovery';
        }

        let celulaOutputAvarage = table.rows[i].cells[6].querySelector('output');
        let celulaOutputSituation = table.rows[i].cells[7].querySelector('output');

        celulaOutputAvarage.textContent = avarageStudents[i - 1];
        celulaOutputSituation.textContent = situationChecked;

    }

}

function createStudent() {

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

        for (var i = 1; i <= 4; i++) {
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
