<?php
  session_start();
  $admin['name'] = 'root';
  $admin['password'] = 'password';
  if (!isset($_POST['name']) OR !isset($_POST['password'])) { ?>
    <form action="#" method="post">
      <input type="name" name="name">
      <input type="password" name="password">
      <input type="submit">
    </form>
  <?php } elseif ($_POST['name'] !== $admin['name'] OR $_POST['password'] !== $admin['password']) { ?>
    <p>Wrong credential!</p>
  <?php } else {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['password'] = $_POST['password'];
    setcookie('name',$_POST['name'],time() + 30*24*3600, null, null, false, true);
    setcookie('password',$_POST['password'],time() + 30*24*3600, null, null, false, true);
    header('Location: ./index.php');
  } ?>
