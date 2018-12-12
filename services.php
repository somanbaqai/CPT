<?php


$servername = "databases.000webhost.com";
$username = "id8059285_soman";
$password = "baqai123";
$dbname = "id8059285_cpt_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select * from announcments";
$result = $conn->query($sql);
$r = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $r[] = $row;
    }
} else {
    echo "0 results";
}
print_r(json_encode($r));
$conn->close();
?>