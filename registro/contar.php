<?php 

include '../db/conecta.php';
$vez = $_REQUEST['vez'];
$selec = "select count(id_usuario) from tb_usuario ;";
$naFoi = true;
foreach ($conn->query($selec) as $row) {
    echo $row['id_usuario']."|";
    echo $row['nm_usuario'];
    $naFoi = false;
}

if ($naFoi) {
    echo "true";
}

?>