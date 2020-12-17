<?php
require('db.php');

// Scalaire function
$upper = $bdd->query("SELECT UPPER(nom) AS nom_maj FROM jeux_video");
$lower = $bdd->query("SELECT LOWER(nom) AS nom_lower FROM jeux_video");

while($data = $lower->fetch()) {
  echo $data['nom_lower'].'<br />';
}
$lower->closeCursor();

//DATE

$date = $bdd->query("SELECT pseudo, message, date FROM minichat");
while($data = $date->fetch()) {
  print_r($data);
  echo '<br />';
}
