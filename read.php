<?php
include 'functions.php';
// Connect to MySQL database
$pdo = pdo_connect_mysql();
// Get the page via GET request (URL param: page), if non exists default the page to 1
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
// Number of records to show on each page
$records_per_page = 5;

// Prepare the SQL statement and get records from our contacts table, LIMIT will determine the page
$stmt = $pdo->prepare('SELECT * FROM students ORDER BY id LIMIT :current_page, :record_per_page');
$stmt->bindValue(':current_page', ($page-1)*$records_per_page, PDO::PARAM_INT);
$stmt->bindValue(':record_per_page', $records_per_page, PDO::PARAM_INT);
$stmt->execute();
// Fetch the records so we can display them in our template.
$students = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Get the total number of contacts, this is so we can determine whether there should be a next and previous button
$num_students = $pdo->query('SELECT COUNT(*) FROM students')->fetchColumn();
?>
<?=template_header('Read')?>


<div class="content read">
	<h2>Read Registration</h2>
	<a href="create.php" class="create-registration">Register Student</a></a>
	<table>
        <thead>
            <tr>
                <td>#</td>
                <td>Student Id</td>
                <td>Last Name</td>
                <td>First Name</td>
                <td>Middle Name</td>
                <td>Date of Birth</td>
                <td>College</td>
                <td>Program</td>
                <td>Address</td>
                <td>Parent's or Guardian's Name</td>
                <td>Parent's or Guardian's Contact Number</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($students as $student): ?>
            <tr>
                <td><?=$student['id']?></td>
                <td><?=$student['studentId']?></td>
                <td><?=$student['lastName']?></td>
                <td><?=$student['firstName']?></td>
                <td><?=$student['middleName']?></td>
                <td><?=$student['birthDate']?></td>
                <td><?=$student['college']?></td>
                <td><?=$student['program']?></td>
                <td><?=$student['address']?></td>
                <td><?=$student['contactPerson']?></td>
                <td><?=$student['contactPersonNumber']?></td>
                
                <td class="actions">
                    <a href="update.php?id=<?=$student['id']?>" class="edit"><i class="fas fa-pen fa-xs"></i></a>
                    <a href="delete.php?id=<?=$student['id']?>" class="trash"><i class="fas fa-trash fa-xs"></i></a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
	<div class="pagination">
		<?php if ($page > 1): ?>
		<a href="read.php?page=<?=$page-1?>"><i class="fas fa-angle-double-left fa-sm"></i></a>
		<?php endif; ?>
		<?php if ($page*$records_per_page < $num_students): ?>
		<a href="read.php?page=<?=$page+1?>"><i class="fas fa-angle-double-right fa-sm"></i></a>
		<?php endif; ?>
	</div>
</div>

<?=template_footer()?>