<?php
$i=0;
$temp=0;
$arr = array(
			array(1,3,6),
			array(2,7,4),
			array(5,10,3)
		);

for ($row=0; $row <= count($arr)-1; $row++) {
		for ($col=0; $col <= count($arr[$row])-1; $col++ ) {
		$isSorted = true;	
		
		
		
		
}
for ($index=0; $index<count($arr)- 1; $index++) {
			if ($arr[$index] > $arr[$index+1]) {
				$w = $arr[$index];
				$arr[$index] = $arr[$index+1];
				$arr[$index+1] = $w;

				$isSorted = false;
			}
		}

		if ($isSorted == true) {
			break;
		}
	}
			echo $arr[$row][$col] . " ";







// for ($i=1; $i <= count($a); $i++) {
	// 	$isSorted = true;

	// 	for ($index=0; $index<count($a)- $i; $index++) {
	// 		if ($a[$index] > $a[$index+1]) {
	// 			$w = $a[$index];
	// 			$a[$index] = $a[$index+1];
	// 			$a[$index+1] = $w;
		
	// 			$isSorted = false;
	// 		}
	// 	}

	// 	if ($isSorted == true) {
	// 		break;
	// 	}
	// }














// for ($a=0; $a <= $row; $a++) {
// 	for ($b=0; $b <= $col; $b++ ){
// 		echo $arr[$a][$b] . " ";
// 	}
// 	$change=0;
// 	$c=1;
// 	while(c>0)
// 	{
// 		$c=0;
// 	}
// 	for($a=1;$a<$row*$col;$a++){
// 		$row1=$a/$col;
// 		$col1=$a%$col;
// 		$row2=($a-1)/2;
// 		$col2=($a%$col)%2;
// 		if($arr[$row1][$col1]<$arr[$row2][$col2]){
// 			$c=1;
// 			$new=$arr[$row2][$col2];
// 			$arr[$row2][$col2]=$arr[$row1][$col1];
// 			$arr[$row1][$col1]=$new;
// 			$change++;
// 		}
// 	}
// 	for ($a=0; $a <= $row; $a++) {
// 	for ($b=0; $b <= $col; $b++ ){
// 		echo $arr[$a][$b] . " ";
		
// 	}
// 	}		
		
?>