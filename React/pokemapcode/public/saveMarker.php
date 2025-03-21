<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Process POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $data = file_get_contents("php://input");

    // Check if data is available
    if (!$data) {
        http_response_code(400);
        echo "Error: No data received!";
        exit();
    }

    // Save file (Note: path must be correct!)
    $filePath = "./Einall_Route_View/overworldMarkers.js";
    if (file_put_contents($filePath, $data, FILE_APPEND)) {
        echo "Successfully saved!";
    } else {
        http_response_code(500);
        echo "Error saving the file!";
    }
}

?>
