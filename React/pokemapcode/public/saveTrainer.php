<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$trainerFilePath = "./Kanto_Route_View/trainers.json";

// Falls Datei nicht existiert oder leer ist, erstelle eine leere Trainer-Liste
if (!file_exists($trainerFilePath) || filesize($trainerFilePath) == 0) {
    file_put_contents($trainerFilePath, json_encode(["trainers" => []], JSON_PRETTY_PRINT));
}

// Rohdaten aus Request lesen
$rawData = file_get_contents("php://input");

if (!$rawData) {
    http_response_code(400);
    echo json_encode(["error" => "❌ Kein JSON empfangen!"]);
    exit();
}

// Debug: Zeige die empfangenen Daten im Server-Log
error_log("📥 Empfangene Daten: " . $rawData);

// JSON-Parsing versuchen
$newTrainer = json_decode($rawData, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["error" => "❌ Fehlerhafte JSON-Daten: " . json_last_error_msg()]);
    exit();
}

// Prüfen, ob die minimalen Felder vorhanden sind
if (!isset($newTrainer["lat"]) || !isset($newTrainer["lng"]) || !isset($newTrainer["name"]) || !isset($newTrainer["pokemon"])) {
    http_response_code(400);
    echo json_encode(["error" => "❌ Ungültige Trainer-Daten erhalten!"]);
    exit();
}

// Bestehende Trainer-Daten aus `trainers.json` laden
$trainersData = json_decode(file_get_contents($trainerFilePath), true);

// Prüfen, ob `trainers` existiert (falls nicht, neu anlegen)
if (!isset($trainersData["trainers"]) || !is_array($trainersData["trainers"])) {
    $trainersData["trainers"] = [];
}

// Prüfen, ob dieser Trainer bereits existiert
$trainerExists = false;
foreach ($trainersData["trainers"] as $trainer) {
    if ($trainer["lat"] == $newTrainer["lat"] && $trainer["lng"] == $newTrainer["lng"] && $trainer["name"] == $newTrainer["name"]) {
        $trainerExists = true;
        break;
    }
}

// Falls Trainer noch nicht existiert, hinzufügen
if (!$trainerExists) {
    $trainersData["trainers"][] = $newTrainer;

    // Speichern der aktualisierten Daten
    if (file_put_contents($trainerFilePath, json_encode($trainersData, JSON_PRETTY_PRINT))) {
        echo json_encode(["success" => "Trainer erfolgreich gespeichert!"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "❌ Fehler beim Speichern der Trainer-Datei!"]);
    }
} else {
    echo json_encode(["message" => "⚠️ Trainer bereits vorhanden, wird nicht erneut gespeichert."]);
}

?>
