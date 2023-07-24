<?php 
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "hockeyclubvarna@gmail.com";
$mail->Password = "jxcbmohabhdkxwvw";
// $mail->Password = "zxlyhelslpgwstzw";
// $mail->Username = "btlqksarabeev@gmail.com";
// $mail->Password = "yzhksodegmtlpsnu";

    if (isset($_POST['send_email_message'])) {
    $email = $_POST['email']; 
    $fullName = $_POST['name']; 
    $message = $_POST['message']; 
    
    $mail->setFrom("hockeyclubvarna@gmail.com"); 
    $mail->addAddress($email, $fullName);

    $mail->Subject = "This is your message";
    $mail->Body = $message;

    $mail->send();
    }
?>