<?php
  try {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8','root','password');
  }
  catch(Exception $e) {
      die('Erreur :'. $e->getMessage());
  }


// SELECT
$req = $bdd->prepare("SELECT nom, prix FROM jeux_video WHERE possesseur = :possesseur AND prix <= :prix ORDER BY prix");
$req->execute(array(
  'possesseur' => $_GET['possesseur'],
  'prix' => $_GET['prix']
)) or die(print_r($bdd->errorInfo()));

echo '<ul>';
while ($donnees = $req->fetch())
{
	echo '<li>' . $donnees['nom'] . ' (' . $donnees['prix'] . ' EUR)</li>';
}
echo '</ul>';
$req->closeCursor();

// INSERT
$req = $bdd->prepare('INSERT INTO jeux_video(nom, possesseur, console, prix, nbre_joueurs_max, commentaires) VALUES(:nom, :possesseur, :console, :prix, :nbre_joueurs_max, :commentaires)');

$req->execute(array(
  'nom' => $nom,
  'possesseur' => $possesseur,
  'console' => $console,
  'prix' => $prix,
  'nbre_joueurs_max' => $nbre_joueurs_max,
  'commentaires' => $commentaires
));

echo 'Le jeu a bien été ajouté !';

// UPDATE
$req = $bdd->prepare('UPDATE jeux_video SET prix = :nvprix, nbre_joueurs_max = :nv_nb_joueurs WHERE nom = :nom_jeu');

$req->execute(array(
	'nvprix' => $nvprix,
	'nv_nb_joueurs' => $nv_nb_joueurs,
	'nom_jeu' => $nom_jeu
));

// DELETE
 $req = $bdd->prepare("DELETE FROM jeux_video WHERE nom = :nom");
 $req->execute(array(
   'nom' => $nom
 ));
