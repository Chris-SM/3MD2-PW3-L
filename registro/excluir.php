<?php 

include '../db/conecta.php';

$cod = $_REQUEST["ide"];
$senha = $_REQUEST["senha"];


$selec = "select nm_senha from tb_usuario where id_usuario = $cod;";
echo $cod;
echo $senha;


foreach ($conn->query($selec) as $row) {
    var_dump($row);
    if ($senha == $row[0]) {
        $conn->query("delete from tb_usuario where id_usuario= $cod;");
        echo "Excluido com Sucesso";
    }
    else{
        echo "Senha Errada";
    }
}
?>