<?php 

include '../db/conecta.php';

$selec = "select count(id_usuario) as qt from tb_usuario;";

foreach ($conn->query($selec) as $row) {
    echo $row['qt'];
}
?>