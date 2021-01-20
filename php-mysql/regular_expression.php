<?php
  // PCRE
  // Delimiter = #
  // #Regex#Options
  // Options i = case insensitive #Guitar#i
  // | = OR  #guitar|piano#
  // ^ = Beginning #^Hello#
  // $ = ending #goodbye$#
  // [] = group of keys #l[eio]ft#
  // [a-z] = area of keys #[0-9]# or #[0-9][a-z]#
  // [^0-9] = not
  // ? = 0 or 1 time #a?#
  // + = 1 or several times #a+#
  // * = 0,  1 or several times #a*#
  // (ay)* =  group of letter
  // {3} = repeat #a{3}# or #a{3,5}# or #a{3, }# infinite
  // \ for meta keys = # ! ^ $ ( ) [ ] { } ? + * . \ |
  // do not use \ in brackets like #[a-z?+*{}]# except with #, ]
  // for - put it at the end #[a-z-]#
  // \d = [0-9] \D = [^0-9]
  // \w = [a-zA-Z0-9_] \W = [^a-zA-Z0-9_]
  // \t = tabulation
  // \n = new ligne
  // \r = carriage return
  // \s  = white space
  // \S  = not a white space
  //. = evrything (except \n use options s )

  // POSIX
  // do not use delemiter #
  // do not use abreviated class like /n /t /r /s or /S


  $mobile = "#^0[6-7][0-9]{8}$#";
  $fixe = "#^0[1-589][0-9]{8}$#";

  $email = "#^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]{2,}\.[a-z]{1,4}$#";

  $string = "contact@example.com";

  if(preg_match($email,$string)) {
    echo "true";
  } else {
    echo "false";
  }

  // preg_replace

  $regex = "#\[b\](.+)\[/b\]#i";
  $texte = "Lorem ipsum dolor sit amet, [b]consectetur[/b] adipisicing elit. Esse sunt temporibus enim earum. Aliquid libero enim, dolor at veniam odio, perspiciatis, similique quas quae ipsa voluptatibus ut esse reiciendis obcaecati.";

  if(preg_match($regex,$texte)) {
    preg_replace($regex,"<strong>$1</strong>",$texte);
    echo $texte;
  }
