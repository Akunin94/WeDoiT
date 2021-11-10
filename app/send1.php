<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    mail ('gromovs1989@gmail.com', 'Заказ с сайта: WeDo iT', "Имя: {$name}, Телефон: {$phone}");

    header("Location: https://wedoit-nsk.ru/");
    die();