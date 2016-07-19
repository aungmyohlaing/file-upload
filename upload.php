<?php

     $target_dir = "./upload/";        

     $target_file = $target_dir . basename($_FILES["file_upload"]["name"]);
     move_uploaded_file($_FILES["file_upload"]["tmp_name"], $target_file);

     
?>