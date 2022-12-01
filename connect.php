<?php
    $studentId = $_POST['studentId'];
    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];
    $middleName = $_POST['middleName'];
    $birthDate = $_POST['birthDate'];
    $college = $_POST['college'];
    $program = $_POST['program'];
    $address = $_POST['address'];
    $contactPerson = $_POST['contactPerson'];
    $contactPersonNumber = $_POST['contactPersonNumber'];

    //Connect to Database
    $conn = new mysqli('localhost', 'root', '', 'student_registration');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    }else{
       $stmt = $conn->prepare("insert into students(studentId, lastName, firstName, middleName, birthDate, college, program, address, contactPerson,contactPersonNumber)values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
       $stmt->bind_param("issssssssi", $studentId, $lastName, $firstName, $middleName, $birthDate, $college, $program, $address, $contactPerson,$contactPersonNumber);
       $stmt->execute();
       echo "Registration Successful";
       $stmt->close();
       $conn->close();
    }
?>