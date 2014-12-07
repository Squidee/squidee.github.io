<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/

include 'config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
$spam = trim($_POST['whatareyou']);

if($spam == "")
{
$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$subject = "Squidee Contact Form";
$message = stripslashes($_POST['message']);

$error = '';

if(!$error)
{
	$mail = mail(WEBMASTER_EMAIL, $subject, $message,
     "From: ".$name." <noreply@squidee.com>\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());


if($mail)
{
	echo 'OK';
}
}
}


}
?>