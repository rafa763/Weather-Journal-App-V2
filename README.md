# Weather-Journal-App-V2

this project is a remake of an [old project of mine!](https://github.com/rafa763/Weather-Journal-App)

## preview 
https://github.com/rafa763/Weather-Journal-App-V2/assets/63686204/9924a102-0348-4339-9026-a2ee2b97e60b

## how to use?
1. clone the project
2. install the dependencies using your favorite packet manager
   ```
   yarn install OR npm i
   ```
3. obtain an API key from [open weather map](https://openweathermap.org/)
4.  create .env file `check .env.example` to know the env names
5.  run the server using
```
yarn run dev OR npm run dev
```
6. project should now be up and running

### What was I doing wrong?

- the API key was exposed.
- horrendous code style.
- weird architecture, idk what I was thinking of back then.

### What did I do to fix it and what is new?

- i used a proxy server to hide the API key
- the key is now hidden in a `.env` file
- responses are now cached using `Redis` to save unnecessary API calls
- rate-limiting is now implemented to prevent API abuse, with `100 requests every 15 minutes per IP`
- better architecture and code readability!
