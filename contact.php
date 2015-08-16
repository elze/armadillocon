<?php

    function clean_string($string) {
 
        $bad = array("content-type","bcc:","to:","cc:","href");
 
        return str_replace($bad,"",$string);
 
      }
 
$nameErr = $emailErr = $titleErr = "";

$err = true;

$responsibilities_email_addresses = array(
	'art_show_and_auction' => 'artshow@armadillocon.org',
	'chairs' => 'dillochair@armadillocon.org',
	'childrens_programming' => 'dillochair@armadillocon.org',
	'conSuite' => 'dillohospitality@armadillocon.org',
	'dealers_room' => 'dillo37dealersroom@gmail.com',
	'gaming' => 'dillogaming@armadillocon.org',
	'guest_liaison' => 'dilloguestliaison@armadillocon.org',
	'hotel_liaison' => 'dillohotel@armadillocon.org',
	'parties' => 'dillochair@armadillocon.org',
	'program_book' => 'dilloprogrambook@armadillocon.org',
	'programming' => 'dilloprograming@armadillocon.org',
	'publicity' => 'dillopublicity@armadillocon.org',
	'registration' => 'dilloregistration@armadillocon.org',
	'volunteering' => 'dillochair@armadillocon.org',
	'website_feedback' => 'dillowebdesigner@armadillocon.org',
	'writers_workshop' => 'dillowritersworkshop@armadillocon.org'
);


if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$email_to2 = 'dillowebdesigner@armadillocon.org';


	$sender_name_orig = $_POST['sender_name'];
	$email_from_orig = $_POST['email_from'];
    	$email_subject_orig = $_POST['subject'];
	$category_orig = $_POST['category'];
     	$email_message_orig .= $_POST['message'];

	$sender_name = clean_string($sender_name_orig);
	$email_from = clean_string($email_from_orig);
    	$email_subject = clean_string($email_subject_orig);
	$category = clean_string($category_orig);
 	$email_message = clean_string($email_message_orig);

	$email_message_full = "Sender: ".$sender_name."\nSender email: ".$email_from."\nCategory: ".$category."\n".$email_message;
	
	$email_to = $responsibilities_email_addresses[$category];	
	if (empty($email_to)) {
		$email_to = 'dillowebdesigner@armadillocon.org';
	}

	// create email headers
	// The to: and from: fields will be the same in this message, because when they are different
	// mail does not get sent, or so it seems.

	$headers1 = 'From: '.$email_to1."\r\n".
	'Reply-To: '.$email_to."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	$headers2 = 'From: '.$email_to2."\r\n". 
	'Reply-To: '.$email_to."\r\n" .
	'X-Mailer: PHP/' . phpversion();

 
	//$wasAccepted1 = mail($email_to1, $email_subject, $email_message_full, $headers1); 
	$wasAccepted2 = mail($email_to2, $email_subject, $email_message_full, $headers2); 

	//header('X-PHP-Response-Code: 200', true, 200);
	//http_response_code(200);
	echo '{"data": {"cat" : "meow"}}';

} // end if ($_SERVER["REQUEST_METHOD"] == "POST")
 
?>

