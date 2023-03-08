<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">

        @viteReactRefresh
        @vite(['resources/js/components/app.css' , 'resources/js/app.jsx','resources/js/login.jsx'
        ,'resources/js/navbar.jsx','resources/js/register.jsx'])
    </head>
    <body >
    <div id="navbar"></div>

       <div id="app"></div>
       <div id="login"></div>  

       
       

    </body>
</html>
