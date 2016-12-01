<?php
$arr =array(1,2,7,9,11);{
for ($i=0;$i<count($arr);$i++) 
{
	$isSorted=true;
echo $arr[$i]."<br/>";
}
}
for ($i=0;$i<count($arr)-1;$i++){
	if($arr[$i]>$arr[$i+1]){
		$isSorted=false;
		echo $arr[$i]." > ". $arr[$i+1];
		echo "<br/>";
		echo "Elementite na masiva ne sa sortirani";
	}
}
?>