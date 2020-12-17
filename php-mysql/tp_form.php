<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Secret</title>
</head>
<body>
  <?php
    $secret = "Cheen,e6";
    if(!isset($_POST['password'])) {
  ?>
    <form action="#" method="post">
      <input type="password" name="password">
      <input type="submit">
    </form>
  <?php
} elseif($_POST['password'] !== $secret) {
    echo "Mot de passe incorrect";
  } else {
    echo "Mot de passe = Foo&Bar";
  }
  ?>
</body>
</html>
