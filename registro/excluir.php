<?php 

include '../db/conecta.php';

$selec = "select nm_senha as se from tb_usuario where id_usuario = $cod;";

foreach ($conn->query($selec) as $row) {
    if ($senha == $row["se"]) {
        $conn->query("")
        echo "Excluido com Sucesso"
    }
    else{
        echo "Senha Errada"
    }
}
?>