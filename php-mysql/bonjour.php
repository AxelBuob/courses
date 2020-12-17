<?php
if(isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter'])) {
  $_GET['repeter'] = (int) $_GET['repeter'];
  if($_GET['repeter'] >= 1 AND $_GET['repeter'] <= 100) {
    for ($i = 0; $i < $_GET['repeter']; $i ++) {
      echo 'Bonjour '.$_GET['prenom'].' '.$_GET['nom'].'! <br />';
    }
  }
} else {
  echo 'Il faut renseigner un mom et un prénom et un nombre de repetitions.';
}
