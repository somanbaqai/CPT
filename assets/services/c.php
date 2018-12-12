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

echo "success"
$conn->close();
?>