<?php
foreach($_GET as $key=>$value) {
  print "<p>($key,$value)</p>";
}

$value = $_GET["param1"];
print $value;
?>