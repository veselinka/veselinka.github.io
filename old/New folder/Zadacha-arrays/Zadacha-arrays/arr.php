<?php

// $arr1 = array (1,5,2,3,4,8);
// $arrlength = count ($arr);


// 1zadacha
// for ($i=0; $i<=$arrlength-4;$i++){
// 	echo $arr[$i];
// }
// echo "<br/>";
// for ($i=5; $i>=$arrlength-3;$i--){
// 	echo $arr[$i];

// }



// 2zadacha
// 	for ($i=5; $i>=$arrlength-3;$i--){
// 		echo $arr[$i];}
// 		for ($i=0; $i<=2;$i++){
// 			echo $arr[$i];
// }


// 3zadacha =karti za igra
// $colors = array ('Spades', 'Diamonds', 'Hearts', 'Clubs');
// $cards = array (2,3,4,5,6,7,8,9,10,'J','Q','K','A');
// $cardNumber = rand (0, 12);
// $cardColor = rand (0,3);
// echo "You drew ".$cards[$cardNumber]." of ". $colors[$cardColor];



// $people = array (
// 		array('Pesho', 30, 194),
// 		array('Misho', 29, 94),
// 		array('Peshka', 20, 184),
// 		array('Mishka', 28, 214)
// 		);
// for( $row=0; $row<=count($people)-1;$row++){
// 	for ($col=0;$col<=count($people[$row])-1;$col++){
// 		echo $people[$row][$col]." ";
		
// 	}
// 	echo"<br/>";
// }



// $people = array (
// 		array(1,5,2,6),
// 		array(2,1,3,4,5),
// 		array(1,2,3,4),
// 		);

// $sum = 0;
// $min = $people [0][0];
// $max = $people [0][0];


// for( $row=0; $row<=count($people)-1;$row++){
//  	for ($col=0;$col<=count($people[$row])-1;$col++){
// 	if ($people[$row][$col]>$max){
// 		$max == $people[$row][$col];
// 	}

// }

// }
// echo "Max element is: ". $max;


// foreach($people as $minimal){
// 	if ($minimal<$min){
// 		$min = $minimal;
// 	}
// }
// echo "Min element is: ". $min;





// 	echo"<br/>";


// zadachata izkarva (ako smenim samo v echo col i row sa podd red na purviq 1234 na vtoriq 5678 i t.n)
// 1 5 9 13
// 2 6 10 14
// 3 7 11 15
// 4 8 12 16

// $a = array ();
// $n=4;
// $m=4;
// $c=1;


// for( $row=0; $row<$n;$row++){
// for ($col=0;$col<$m;$col++){
// 	$a[$row][$col]=$c++;
	
// }
// }
// 	for ($col=0;$col<=count($a)-1;$col++){
// for( $row=0; $row<=count($a[$col])-1;$row++){
	 	
// 	 		echo $a[$row][$col]. " ";
// 	 	}
// 		echo "<br/>";
// 	}




// $a = array ();
// $n=4;
// $m=4;
// $c=1;

// 	for ($col=0;$col<=$m;$col++){
// 		if($col%2==0){
// for( $row=0; $row<=$n;$row++){
// 	 		 $a[$row][$col]=$c++;
//  }
// 		}
//  else
//  {
//  	for( $row=$n-1; $row>=0;$row--){
// 	 		 $a[$row][$col]=$c++;
//  }
// 	 	}
// 	}
	
// 	for ($row=0;$row<=count($a)-1;$row++){
// 		for( $col=0; $col<=count($a[$row])-1;$col++){
		 
// 			 		echo $a[$row][$col]. " ";
// 		}
	
	
	
// 		echo "<br/>";
// 	}
	
$a = array ();
$n=4;
$m=4;

for ($row=0;$row<=count($a)-1;$row++){
for( $col=0; $col<=count($a[$row])-1;$col++){
			 		echo $a[$row][$col]. " ";

			 		
for ($x=0;$x<=n-1;$x++)
	$a[$x][$x]=$c++;
for ($x=1;$x<=n-1;$x++)
	$a[$x][$x-1]=$c++;
for ($x=2;$x<=n-1;$x++)
	$a[$x][$x-2]=$c++;

			 		
			 		
			}

			
	
	







?>