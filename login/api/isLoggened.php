<?php

$_POST = json_decode(file_get_contents("php://input"),true);

if (isset($_POST['isLoggened'])) {
    session_start();
    if (isset($_SESSION['login'])) {
        echo $_SESSION['login'];
    } else {
        echo 'error';
    }
}
