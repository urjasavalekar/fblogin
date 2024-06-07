<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    echo 'Invalid login details';
} else {
    echo 'Invalid request method.';
}
?>