<?php


$servername = "sql308.epizy.com";
$username = "epiz_23073276";
$password = "zE4ihK8yTTk";
$dbname = "epiz_23073276_cpt";

// Create connection
$conn = new mysqli($servername, $username,$password,$dbname);
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