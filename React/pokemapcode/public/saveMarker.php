<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Falls die Anfrage ein "OPTIONS"-Request ist (CORS Preflight), direkt mit 200 OK antworten
if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// POST-Anfrage verarbeiten
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Rohdaten aus dem Request lesen (da kein JSON, sondern reiner Text)
    $data = file_get_contents("php://input");

    // Prüfen, ob Daten vorhanden sind
    if (!$data) {
        http_response_code(400);
        echo "Fehler: Keine Daten erhalten!";
        exit();
    }

    // Datei speichern (Achtung: Pfad muss stimmen!)
    $filePath = "./Johto_Route_View/overworldMarkers.js";
    if (file_put_contents($filePath, $data, FILE_APPEND)) {
        echo "Erfolgreich gespeichert!";
    } else {
        http_response_code(500);
        echo "Fehler beim Speichern der Datei!";
    }
}
?>
