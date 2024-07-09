
document.addEventListener('DOMContentLoaded', () => {
    const Addform = document.getElementById('Addform');
    const Editform = document.getElementById('Editform');
    const studentTable = document.querySelector('.studentTable');

    let students = [];
    let editIndex = -1;

    Addform.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudent = {
            name: Addform.AddstudentName.value,
            age: Addform.AddstudentAge.value,
            email: Addform.AddstudentEmail.value,
            phone: Addform.AddstudentNumber.value,
            address: Addform.AddstudentAddress.value,
        };
        students.push(newStudent);
        Addform.reset();
        renderTable();
    });

    Editform.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateStudent = {
            name: Editform.ConfirmStudentName.value,
            age: Editform.ConfirmStudentAge.value,
            email: Editform.ConfirmStudentEmail.value,
            phone: Editform.ConfirmStudentNumber.value,
            address: Editform.ConfirmStudentAddress.value,
        };
        students[editIndex] = updateStudent;
        editIndex = -1;
        Editform.reset();
        renderTable();
    });

    const renderTable = () => {
        const tableHTML = `
            <table border = "5px" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${students.map((student, index) => `
                        <tr>
                            <td>${student.name}</td>
                            <td>${student.age}</td>
                            <td>${student.email}</td>
                            <td>${student.phone}</td>
                            <td>${student.address}</td>
                            <td>
                                <button onclick='editStudent(${index})'>Edit</button>
                                <button onclick='deleteStudent(${index})'>Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        studentTable.innerHTML = tableHTML;
    };

    window.editStudent = (index) => {
        editIndex = index;
        const student = students[index];
        Editform.ConfirmStudentName.value = student.name;
        Editform.ConfirmStudentAge.value = student.age;
        Editform.ConfirmStudentEmail.value = student.email;
        Editform.ConfirmStudentNumber.value = student.phone;
        Editform.ConfirmStudentAddress.value = student.address;
    };

    window.deleteStudent = (index) => {
        students.splice(index, 1);
        renderTable();
    };
});
