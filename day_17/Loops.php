<?php
echo "While";
echo "<br>";
$cars = array("Black", "Pink", "Blue");
$arrlength = count($cars);
for($x = 0; $x < $arrlength; $x++) {
  echo $cars[$x];
  echo "<br>";
}
echo "<br>";
?>

<?php 
echo "Do..While..";
echo "<br>";
$x = 1;
do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
echo "<br>";
?>

<?php
echo "For..";
echo "<br>";
for ($x = 0; $x <= 60; $x+=10) {
  echo "The number is: $x <br>";
}
echo "<br>";
?>

<?php
echo "Foreach..";
echo "<br>";
$colors = array("Kru", "Reeya", "Mansi");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
