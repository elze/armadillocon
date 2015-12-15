	// That's right, responsibilities_email_addresses.php is not in Github. I didn't want to make the committee members
	// email addresses public, which they would become in Github.

	include 'responsibilities_email_addresses.php';

	$category = $clean_key_value_pairs['category'];
	$email_subject = $clean_key_value_pairs['subject'];
	$email_from = $clean_key_value_pairs['email_from'];

	if (empty($email_from)) {
		$error .= "Sender's email adddress is missing. ";
		//$send_email = FALSE;	
	}
	$email_message = $clean_key_value_pairs['message'];
	if (empty($email_message)) {	
		$error .= "Message is missing.";
	}

	if (empty($category)) {
		$error .= "Category is missing. ";
	}
	$email_to = $responsibilities_email_addresses[$category];	
	if (empty($email_to)) {
		//$email_to = 'dillowebdesigner@armadillocon.org';
		$error .= "Category ".$category." is not recognized. ";
	}
