const university = {
    universityName: "Polytechnic",
    dean: "Dr. Ivanov"
};

const faculty = {
    facultyName: "",
    groups: [[]],

    enlistStudent(...studentNames) {
        for (let studentName of studentNames) {
            let groupFound = false;
            for (let group of this.groups) {
                if (group.length < 12) {
                    group.push(studentName);
                    groupFound = true;
                    break;
                }
            }

            if (!groupFound) {
                this.groups.push([studentName]);
            }
        }
    }
};

Object.setPrototypeOf(faculty, university);

faculty.enlistStudent("Taras", "Roman", "Ivan", "Olena", "Bohdan", "Natalia", "Oleksandr", "Yulia", "Andrii", "Tetiana", "Vasyl", "Iryna", "Mykola");
console.log(faculty.groups);
  
  
  
  
  