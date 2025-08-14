<?php 

include '../db/conecta.php';
$vez = $_REQUEST['vez'];
$selec = "select id_usuario, nm_usuario from tb_usuario limit 1 offset $vez;";
$naFoi = true;
foreach ($conn->query($selec) as $row) {
    print $row['id_usuario']."|";
    print $row['nm_usuario'];
    $naFoi = false;
}

if ($naFoi) {
    echo "true";
}

?>