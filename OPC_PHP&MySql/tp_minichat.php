<form action="tp_minichat_post.php" method="post">
  <label for="pseudo">Pseudo
    <input type="text" name="pseudo">
  </label>
  <label for="message">Message
    <textarea name="message" cols="30" rows="10"></textarea>
  </label>
  <input type="submit">
</form>

<?php
  try {
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8','root','Pho6cai6');
  }
  catch(Exception $e) {
      die('Erreur :'. $e->getMessage());
  }
  $select_all_messages = $bdd->query("SELECT * FROM minichat");
  echo '<table><tbody>';
  while($data = $select_all_messages->fetch()) {
    echo '<tr>';
    echo '<th>'.$data['id'].'</th>';
    echo '<th>'.$data['pseudo'].'</th>';
    echo '<th>'.$data['message'].'</th>';
    echo '</tr>';
  }
  echo '</tbody></table>';
  $select_all_messages->closeCursor();
