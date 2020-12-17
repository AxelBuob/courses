<?php
  require_once('db.php');
  $req = $db->query('SELECT * FROM billets');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mon super blog</title>
</head>
<body>
  <h1>Mon super blog</h1>
    <?php while($data = $req->fetch()) { ?>
    <p>
      <h2><?php echo $data['titre']; ?></h2>
      <p><em><?php echo $data['date_creation']; ?></em></p>
      <p><?php echo $data['contenu']; ?></p>
      <p><a href="blog_commentaires.php?id=<?php echo $data['id']; ?>">Lire la suite</a></p>
    </p>
  <?php } ?>
</body>
</html>
