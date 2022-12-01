<?php
include 'functions.php';
$pdo = pdo_connect_mysql();
$msg = '';
// Check if POST data is not empty
if (!empty($_POST)) {
    $id = isset($_POST['id']) && !empty($_POST['id']) && $_POST['id'] != 'auto' ? $_POST['id'] : NULL;
    $studentId = isset($_POST['studentId']) ? $_POST['studentId'] : '';
    $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
    $firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
    $middleName = isset($_POST['middleName']) ? $_POST['middleName'] : '';
    $birthDate = isset($_POST['birthDate']) ? $_POST['birthDate'] : date('Y-m-d');
    $college = isset($_POST['college']) ? $_POST['college'] : '';
    $program = isset($_POST['program']) ? $_POST['program'] : '';
    $address = isset($_POST['address']) ? $_POST['address'] : '';
    $contactPerson = isset($_POST['contactPerson']) ? $_POST['contactPerson'] : '';
    $contactPersonNumber = isset($_POST['contactPersonNumber']) ? $_POST['contactPersonNumber'] : '';
    // Insert new record into the contacts table
    $stmt = $pdo->prepare('INSERT INTO students VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$id, $studentId, $lastName, $firstName, $middleName, $birthDate, $college, $program, $address, $contactPerson, $contactPersonNumber]);
    // Output message
    $msg = 'Created Successfully!';
}
?>

<?=template_header('Create')?>

<div class="content update">
	<h2>Create Student Info</h2>
    <form action="create.php" method="post">
        <label for="id">ID</label>
        <label for="studentId">Student ID</label>
        <label for="lastName"> Last Name</label>
        <input type="text" name="id" placeholder="26" value="auto" id="id">
        <input type="number" name="studentId" id="studentId" placeholder="ex. 000000000" class="form-control" required>
        <input type="text" name="lastName" id="lastName" class="form-control name" placeholder="Last Name" required>
        <label for="firstName">First Name</label>
        <label for="middleName">Middle Name</label>
        <input type="text" name="firstName" id="fistName" class="form-control name" placeholder="First Name" required>
        <input type="text" name="middleName" id="middleName" class="form-control name" placeholder="Middle Name" required>
        <label for="birthDate">Date of Birth</label>
        <label for="college">College</label>
        <input type="date" name="birthDate" id="birthdate" class="form-control" required>
        <select name="college" id="college" onchange="programDropdown(this.options[this.selectedIndex].value)">
                    <option>Select a college</option>
                    <option value="College of Criminal Justice Education">College of Criminal Justice Education</option>
                    <option value="College of Information Technology and Computer Science">College of Information Technology and Computer Science</option>
                    <option value="College of Teacher Education">College of Teacher Education</option>
                    <option value="College of Accountancy">College of Accountancy</option>
                    <option value="College of Arts and Sciences">College of Arts and Sciences</option>
                    <option value="College of Business Administration">College of Business Administration</option>
                    <option value="College of Engineering and Architecture">College of Engineering and Architecture</option>
                    <option value="College of Hospitality and Management">College of Hospitality and Management</option>
                    <option value="College of Nursing">College of Nursing</option>
                    <option value="College of Law">College of Law</option>
                </select>
        <label for="program">Program</label>
        <label for="Address">Address</label>
        <select name="program" id="program">
                     <option>Select a program</option>
                </select>
                <input type="text" name="address" id="address" class="form-control name" placeholder="Address" required>
        <label for="contactPerson">Contact Person</label>
        <label for="contactPeronNumber">Contact Person Number</label>
        <input type="text" name="contactPerson" id="contactPerson" placeholder="Parent's or Guardian's name" class="form-control" required>
        <input type="text" name="contactPersonNumber" id="contactPersonNumber" placeholder="Parent's or Guardian's Contact Number" class="form-control" required>
        <input type="submit" value="Create">
    </form>
    <script src="script.js"></script>
    <?php if ($msg): ?>
    <p><?=$msg?></p>
    <?php endif; ?>
</div>

<?=template_footer()?>