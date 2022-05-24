<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style3_2.css">
    <title> Ex_03_02 </title>
</head>

<body>


<?php
/* http://localhost:8000/ex3_2.php?draw=squirrel */
foreach($_GET as $picture) {
  echo "<img src='pics/$picture.jpg'></img>";
}
?>

</body>

</html>