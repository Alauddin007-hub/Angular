<?php 
    include_once("db_connect.php");


    $postdata = file_get_contents("php://input");
    // echo $postdata;

    $result = json_decode($postdata);

    

    if(isset($result->name) && isset($result->email) && isset($result->phone) && isset($result->complain_type) && isset($result->complain)){

        $name = $result->name;
        $email = $result->email;
        $phone = $result->phone;
        $complain_type = $result->complain_type;
        $complain = $result->complain;

        $db->query("INSERT INTO `complaint`(`id`, `complainant_name`, `email`, `phone_number`, `complaint_type`, `complaint`, `created_at`, `resolve_status`, `resolve_date`, `budget`) VALUES(NULL, '$name', '$email', '$phone', '$complain_type', '$complain',NOW(), '', '', '')");

        if($db->affected_rows>0){
            echo json_encode(['status'=>"Successfully Inserted"]);
        }
    } else {
        echo json_encode(['status'=>"No field can be blank"]);
    }

    