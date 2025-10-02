<?php

include '../db/conecta.php';
session_start();

$usuario = $_REQUEST['login'];
$senha = $_REQUEST['senha'];

$select = "select * from tb_usuario where nm_login = '$usuario';";
$result = $conn->query($select);
if ($conn->query($select)) {
foreach ($conn->query($select) as $row) {
    if ($senha === $row['nm_senha']) {
        $_SESSION['usuario'] = $usuario;
        echo "Certo";
        //Tudo certo
    } else {
        echo "Senha";
        //Senha errada
    }
}
} else {
    //Nada Encontrado
    echo "Nada";
}
exit();
