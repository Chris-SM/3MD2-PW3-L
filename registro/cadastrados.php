<?php 

include '../db/conecta.php';
$vez = $_REQUEST['vez'];
$selec = "select id_usuario, nm_usuario,nm_email,nr_telefone,nm_login,nm_local_foto from tb_usuario limit 1 offset $vez;";
$naFoi = true;
foreach ($conn->query($selec) as $row) {
    echo $row['id_usuario']."|";
    echo $row['nm_usuario']."|";
    echo $row['nm_login']."|";
    echo $row['nm_email']."|";
    echo $row['nr_telefone']."|";
    echo $row['nm_local_foto'];
    $naFoi = false;
}

if ($naFoi) {
    echo "true";
}

?>