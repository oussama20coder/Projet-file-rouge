<?php


require_once('connectLogin.php');

// if (isset($_POST['username']) && isset($_POST['password'])) {
$_POST = json_decode(file_get_contents("php://input"), true);
$username = $_POST['username'];
$password = $_POST['password'];
$sql = mysqli_query($connect, "SELECT id,username FROM users WHERE username = '$username' AND password = '$password' ");
if (mysqli_num_rows($sql) === 1) {
    session_start();
    $_SESSION['login'] = json_encode(mysqli_fetch_all($sql));
    echo $_SESSION['login'];
} else {
    echo 'error';
}
    
// }
