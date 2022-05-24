<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style3_1.css">
    <title> Ex_03_01 </title>
</head>

<body>

<?php
foreach($_GET as $first_name=>$last_name) {
  print "<p>Hello, $first_name $last_name</p>";
}
?>

</body>

</html>