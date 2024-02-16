function avarageStudentsList(){
    let table = document.getElementById("table");
    let numberOfRows = table.rows.length;
    let avarageStudents = [];

    for(var i = 1; i < numberOfRows; i++){
        let gradeStudent = 0;

        for(var j = 2; j < 6; j++){
            let celulaInput = table.rows[i].cells[j].querySelector('input');
            let nota = celulaInput ? celulaInput.value : undefined;

            gradeStudent += Number(nota);
        }

       avarageStudents.push(gradeStudent/4); 
    }

    return avarageStudents;
}

function situationChecked(){



}
