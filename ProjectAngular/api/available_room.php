<?php
include './db_connect.php';
$room_type  = [];

$sql = "SELECT booking.room_id, check_in,check_out,room.room_id,room.room_type_id,room_no,room_type, room_img,price,max_person FROM booking,room,room_type WHERE booking.room_id=room.room_id AND room_type.room_type_id=room.room_type_id AND status IS NULL AND deleteStatus=0";

if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$room_type[$i]['room_type_id'] = $row['room_type_id'];
		$room_type[$i]['room_type'] = $row['room_type'];
		$room_type[$i]['price'] = $row['price'];
		$room_type[$i]['room_img'] = $row['room_img'];
		$room_type[$i]['max_person'] = $row['max_person'];
		$i++;
	}
	echo json_encode(['data'=>$room_type]);
}
else
{
	http_response_code(404);
}