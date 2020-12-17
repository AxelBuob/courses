<?php
// Variables

$age = 17;
$name = 'Axel';
$height = 1.83;
$null = null;
$bool = true;

// Conditions
if($bool) {
  echo 'Hello';
} elseif(!$bool) {
  echo 'Goodbye';
} else {
  echo "I don't know";
}

// switch
switch($age) {
  case 1:
    echo $age;
  break;
  case 15:
    echo $age;
  break;
  case 17:
    echo $age;
  break;
  default:
    echo "idk";
}
// Ternary
$majeur = ($age >= 18) ? true : false;

if($majeur) {
  echo "true";
} else {
  echo "false";
}

// Loops
$nbr = 1;
while($nbr <= 5) {
  echo '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, adipisci. '. $nbr .'</p>';
  $nbr++;
}

for ($nbr = 1; $nbr <= 5; $nbr++) {
  echo '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, facilis.</p>';
}

// Arrays
$names = array('Axel','Justine','Albertine','Karima','Mathilde');

$names[] = 'Axel';
$names[] = 'Justine';
$names[] = 'Albertine';
$names[] = 'Karima';
$names[] = 'Mathilde';

$names[0] = 'Axel';
$names[1] = 'Justine';
$names[2] = 'Albertine';
$names[3] = 'Karima';
$names[4] = 'Mathilde';

$coors = array (
  'firstname' => 'Axel',
  'lastname' => 'Buob',
  'adress' => '2 av de Versailles',
  'city' => 'Paris'
);

$coors['firstname'] = 'Axel';
$coors['lastname'] = 'Buob';
$coors['adress'] = '2 av de Versailles';
$coors['city'] = 'Paris';

echo $coors['city'];

for($i = 0; $i < 5; $i ++) {
  echo $names[$i]. '<br />';
}

foreach($names as $element) {
  echo $element . '<br />';
}

foreach($coors as $key => $element) {
  echo '['.$key.'] vaut '.$element.'<br />';
}

echo '<pre>'.print_r($coors).'</pre>';

// Functions
function sayHello($name) {
  echo 'Hello '. $name .'<br />';
}
sayHello('Axel');

// Include
include('db.php');
