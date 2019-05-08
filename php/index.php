<?php
$file = './test_file.js';
header('Content-Type: text/plain; charset=utf-8');
echo readfile($file);
?>