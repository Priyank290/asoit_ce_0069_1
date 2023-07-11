<?php

echo strlen("Hello world!"),"<br>"; // outputs 12

$str="ANT Internship";

echo $str,"<br>";

echo "Length of str is:",strlen($str),"<br>";

echo "Total words in str:",str_word_count($str), "<br>"; 
echo "Reverse string of str is:",strrev($str), "<br>";
echo "AWT is present in str or not:", strpos($str, "ANT"), "<br>"; 
// echo "Internship is present in str or not:", strpos($str, "Internship"), "<br>";
echo "Replace AWT with Advanced Web Technology:",str_replace("ANT", "Advanced Web Techo",$str);
echo "Add a backlash in front of W:", addslashes('A "M" T Internship'),"<br>";

?>