<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $filamentColor = htmlspecialchars($_POST['filamentColor']);
    $color1 = htmlspecialchars($_POST['color1']);
    $color2 = htmlspecialchars($_POST['color2']);
    $prompt = htmlspecialchars($_POST['prompt']);

    // Prepare the submission data as a string
    $submission = "Name: $name\nPhone: $phone\nFilament Color: $filamentColor\nColor 1: $color1\nColor 2: $color2\nPrompt: $prompt\n\n";

    // Specify the file to store the submissions
    $file = 'submissions.txt';

    // Save the submission to the file (append mode)
    file_put_contents($file, $submission, FILE_APPEND | LOCK_EX);

    // Optionally redirect or show a success message
    echo "<p>Thank you for your submission! We'll review it soon.</p>";
} else {
    echo "<p>There was an error with your submission. Please try again.</p>";
}
?>
