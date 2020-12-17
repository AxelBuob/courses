<?php
  session_start();
  //print_r($_SESSION);
  if(!isset($_SESSION['name'])) { ?>
  <a href="login.php">Login</a>
<?php } else { ?>
  <a href="logout.php">Logout</a>
  <h1>Hello <?php echo $_SESSION['name']; ?></h1>
<?php } ?>
