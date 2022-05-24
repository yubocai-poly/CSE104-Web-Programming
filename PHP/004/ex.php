<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style1.css">
    <title> Form </title>
</head>

<body>

    <h1> HTML Form </h1>

    <form>
        Name: <input type="text" name="Name"> 
        <br> 
        Surname: <input type="text" name="Surname"> 
        <br>
        Email: <input type="email" name="Email"> 
        <br>
        Telephone Number: <input type="telephone" name="Telephone"> 
        <br>
        <input type="submit" value="Submit">
    </form>

    <?php
    if( isset($_GET['Name']) && isset($_GET['Surname']) ){
        $name = $_GET['Name'];
        $surname = $_GET['Surname'];
        $email = $_GET['Email'];
        $telephone = $_GET['Telephone'];
        print "<p>Hello $name $surname</p>";
        print "<p>Your Email Address is: $email</p>";
        print "<p>Your Telephone Number is: $telephone</p>";
    }
    ?>

</body>

</html>