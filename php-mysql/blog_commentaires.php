<?php
  require_once('db.php');
  $billet_id = htmlspecialchars($_GET['id']);
  $billet = $db->query("SELECT * FROM billets WHERE id=$billet_id");
  $commentaires = $db->query("SELECT * FROM commentaires WHERE id_billet=$billet_id");

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <?php $data = $billet->fetch(); ?>
  <h1><?php echo $data['titre']; ?></h1>
  <p><em><?php echo $data['date_creation']; ?></em></p>
  <p><?php echo $data['contenu']; ?></p>
  <?php $billet->closeCursor(); ?>
  <div>
    <h2>Commentaires</h2>
    <?php while($data = $commentaires->fetch()) { ?>
      <p><?php echo $data['commentaire']; ?></p>
      <p><em><?php echo $data['auteur']; ?></em></p>
    <?php } $commentaires->closeCursor(); ?>
  </div>
</body>
</html>
