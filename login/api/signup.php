<?php


require_once('connectLogin.php');

// if (isset($_POST['username']) && isset($_POST['password'])) {
    $_POST = json_decode(file_get_contents("php://input"),true);
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = mysqli_query($connect,"INSERT INTO users(username,password) VALUES ('$username','$password')");
    echo 'yes';
// }


?>