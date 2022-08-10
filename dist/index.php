<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
require_once($_SERVER["DOCUMENT_ROOT"]."/dealincom/class/iHelper.php");

$ActiveUser = CUser::GetLogin();
$ActiveUserID = CUser::GetID();

$reqNumber = $_REQUEST['reqNumber'];
$source = $_REQUEST['source'];

if (isset($placementOptions['ID'])) {
  $dealId = $placementOptions['ID'];

} else {
  $dealId = $_REQUEST['dealId'];
}

if (isset($_REQUEST['PLACEMENT']) && $_REQUEST['PLACEMENT'] == 'CRM_DEAL_DETAIL_TAB')
{
    $placement = "deal";
} else {
    $placement = "contact";
}

//iHelper::logTelegram(var_export($_REQUEST, true));
?>

<!doctype html>
<html lang="ru">

<head>
<link rel="icon" href="https://crm.centralnoe.ru/dealincom/assets/svg/location-pin-svgrepo-com.svg">
  <!-- <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1"> -->

  <script defer="defer" src="bundle-v1.0.js?<?echo(chr(rand(65,90)).chr(rand(65,90)).'='.rand(0,1000000));?>"></script>
   <link href="main-v1.0.css?s=<?= rand(0, 1000000) ?>" rel="stylesheet">
  <script>
    let reqNumber = '<? echo ($reqNumber); ?>';
    let userId = '<? echo ($ActiveUserID); ?>';;
    let userLogin = '<? echo ($ActiveUser); ?>';;
    let source = '<? echo ($source); ?>';
    let dealId = '<? echo ($dealId); ?>';;
  </script>
</head>

<body>
  <?php

  echo ('<div id="root"></div>');

  ?>
</body>

</html>
