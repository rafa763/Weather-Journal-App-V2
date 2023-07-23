# Weather-Journal-App-V2

get weather forecast for your city
<!-- insert gif -->
![weather app](https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png)

What was i doing wrong?

- the api key was exposed
- werird architecture, idk what i was thinking

what i did to fix it and what is new?

- i used a proxy server to hide the api key
- the key is now hidden in a .env file
- responses are now cached to prevent unnecessary api calls
- rate limiting is now implemented to prevent api abuse
- google recaptcha is now implemented to prevent bot abuse
- better architecture and code readability!
