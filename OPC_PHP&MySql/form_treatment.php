<?php
  echo strip_tags($_POST['prenom']);
  echo strip_tags($_POST['message']);

  if(isset($_FILES['file']) AND $_FILES['file']['error'] == 0) {
     if ($_FILES['file']['size'] <= 1000000) {
      $infosfichier = pathinfo($_FILES['file']['name']);
      $extension_upload = $infosfichier['extension'];
      $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
      if (in_array($extension_upload, $extensions_autorisees)) {
        move_uploaded_file($_FILES['file']['tmp_name'], './uploads/'.basename($_FILES['file']['name']));
        echo "L'envoi a bien été effectué !";
      }
     }
  }
?>
