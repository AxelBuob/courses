<?php
try {
  $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8','root','password');
}
catch(Exception $e) {
    die('Erreur :'. $e->getMessage());
}

$insert = $bdd->prepare("INSERT INTO minichat(pseudo, message) VALUES(:pseudo, :message)");
if(isset($_POST['pseudo']) AND isset($_POST['message'])) {
  $pseudo = htmlspecialchars($_POST['pseudo']);
  $message = htmlspecialchars($_POST['message']);
  $insert->execute(array(
    'pseudo' => $pseudo,
    'message' => $message
  ));
};

header('Location: tp_minichat.php');
