<?php
// // Metod na mehurcheto  - BUBBLE SORT
// //  O(N na vtora) - pri kvadraichna stoinost za vreme e hubavo da izpolzvame po malki chisla, inache stava bavno) 
// $a = array(1,6,3,8,3,6,7,0,3,5,15,4);

// for ($i=1;$i<=count($a);$i++)
// {
// 	$isSorted=true;
// 	for ($index=0;$index<count($a)-$i;$index++)
// 	{
// 		if($a[$index]>$a[$index+1])
// 		{
// 			$w=$a[$index];
// 			$a[$index]=$a[$index+1];
// 			$a[$index+1]=$w;
// 			$isSorted=false;
// 		}
// 	}
// 	if($isSorted==true)
// 	{
// 		break;
// 	}		
// }
// for ($index=0;$index<count($a);$index++){
// 	echo $a[$index]."<br/>";
// }


// SELECTION SORT - sortirane po izbor


$a = array(10,4,7,9,1);
for($k=1;$k<=(count($a)-1)/2;$k++){
	$max=$a[$k-1];
	$maxIndex=$k-1;

	$min=$a[$k-1];
	$minIndex=$k-1;

	for($index=$k-1;$index<=count($a)-$k;$index++){
		if($a[$index]>$max){
			$max=$a[$index];
			$maxIndex= $index;
		}	
		
		if($a[$index]<$min){
			$min=$a[$index];
			$minIndex= $index;
		}	
		
		
	}
	
	$w=$a[count($a)-$k];
	$a[count($a)-$k]=$a[$maxIndex];
	$a[$maxIndex]=$w; 
	
	
	$w=$a[$k-1];
	$a[$k-1]=$a[$minIndex];
	$a[$minIndex]=$w;
	
	
	
}

for ($index=0;$index<count($a);$index++){
echo $a[$index]."<br/>";
}








?>