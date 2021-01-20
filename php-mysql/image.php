<?php

  header("Content-type: image/png");
  $image = imagecreate(200,50);
  $bleu = imagecolorallocate($image, 156, 227, 254);
  $blanc = imagecolorallocate($image, 255, 255, 255);
  imagestring($image, 5, 35, 15, "Hello world!", $blanc);
  imagepng($image);
