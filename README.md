<h1 align="center">Twitter Readme Badge 🖼</h1>

You want to show your twitter profile on your github readme then this API is just right for you here you can show your twitter profile in different styles.

# Start 🔑

1. You need your twitter username? If you don't have an account yet, you can create one on the Twitter website.
2. Copy your username to your clipboard.
3. Now you can write the following URL in your readme:
```
![Twitter Badge](<your domain>/twitter/<your username>)
```

# Card Styles 🖌

So that your card also gets the perfect style. we have different styles available.

In order for you to be able to select the different styles, the URL must look like this:
```
<your domain>/twitter/<your username>?theme=<theme>
```
The following styles are available: `dark`, `white`, `transparent`, `blue`, `green`, `red`

# Host yourself 💻

1. First install this project.
2. Open the Project.
3. Create an `.env` file with the content:
```
API_KEY=<your twitter api key>
API_KEY_SECRET=<your twitter api secret>
ACCESS_TOKEN=<your twitter api access token>
ACCESS_TOKEN_SECRET=<your twitter api access token secret>
PORT=<your port>
```
4. Run the following command in the terminal:
```
node index.js
```
5. The API running 
6. Have Fun with the API
