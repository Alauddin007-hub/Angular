<?php
include './db_connect.php';
$room_type  = [];

$sql = "SELECT * FROM  room_type";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$room_type[$i]['room_type_id'] = $row['room_type_id'];
		$room_type[$i]['room_type'] = $row['room_type'];
		$room_type[$i]['price'] = $row['price'];
		$room_type[$i]['room_img'] = $row['room_img'];
		$i++;
	}
	echo json_encode(['data'=>$room_type]);
}
else
{
	http_response_code(404);
}