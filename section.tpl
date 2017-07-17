<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <title>[[*meta-title]]</title>
  <base href="[[++site_url]]" />
  <meta charset="[[++modx_charset]]">
  <meta name="description" content="[[*description]]" />
  <meta name="keywords" content="[[*meta-keywords]]" />

  <meta name=viewport content="width=device-width, initial-scale=1">

  <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />

  <meta name="publisher" content="Talk Design & Print" />
  <meta name="copyright" content="KK Winchester Ltd" />
  <meta name="author" content="KK Winchester Ltd" />
  <meta name="robots" content="ALL" />
  <meta name="rating" content="General" />
  <meta name="revisit-after" content="7 Days" />
  <meta name="classification" content="Business" />
  <meta name="distribution" content="Global" />
  <meta name="dc.title" content="" />
  <meta name="dc.creator" content="Talk Design & Print" />
  <meta name="dc.subject" content="Business" />
  <meta name="dc.description" content="" />
  <meta name="dc.publisher" content="Talk Design & Print" />
  <meta name="dc.contributor" content="Talk Design & Print" />
  <meta name="dc.date" content="" />
  <meta name="dc.type" content="Design and Print" />
  <meta name="format" content="html" />
  <meta name="language" content="en-gb" />
  <meta name="coverage" content="Global" />

  <meta name="google-site-verification" content="toP8RP_W5uAeP6ioPo5368-igJL1s1EclCsFJ9P0yp0" />
  <meta name="msvalidate.01" content="BEE6ADFE78D7314814F709CADBF6471F" />
  <meta name="alexaVerifyID" content="84iW9nfYFx2UszWkOrqEP_6HE2I" />
  [[canonical]]

  <link href="/css/[[*css-version]]/font-awesome.min.css" rel="stylesheet" type="text/css" />
  <link href="/css/[[*css-version]]/main.min.css?201704051222" rel="stylesheet" type="text/css" />
  <link href="/css/[[*css-version]]/hamburgers.min.css?201704051222" rel="stylesheet" type="text/css" />
  <link href="/css/[[*css-version]]/menu.min.css?201704051222" rel="stylesheet" type="text/css" />
  [[-flexslider-css]]

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

  [[*head-extra]]

</head>

<body id="home" [[*body-extra]]>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
  ga('create', 'UA-98131844-1', 'auto');
  ga('send', 'pageview');
 </script>

[[-cookieplugin]]

<div id="top"></div>

<header class="cf">
  <div id="headercontainer">
    <div class="logo">
      <a href="/" id="logo"><span><p class="hidden">Talk Design &amp; Print - 01962 864900</p></span></a>
    </div>

  [[$toolbar]]

  <button class="menu-button hamburger hamburger--squeeze" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <span class="hamburger-label">Menu</span>
  </button>

  [[$navigation]]

  </div><!-- #headercontainer -->
</header>

[[getResources?
&parents=`[[~id]]`
&limit=`999`
&sortby=`{"menuindex":"ASC"}`
&tpl=`tpl_content`
&includeContent=`1`
&depth=`0`
]]

[[$footer]]

<a href="javascript:;" class="top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

[[*footer-extra]]

<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCY9EcMZRpXFqDKPJ4E4WuLsk2A41Yfm5o"></script>

</body>
</html>
