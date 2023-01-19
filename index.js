const express = require("express");
const twit = require("twit");
require("dotenv").config();
const Card = require("./card");
const imgtobase64 = require("image-to-base64");
const { Themes } = require("./types");

const app = express();
const twiterClient = new twit({
    consumer_key: "CNpofvLsHMNb9RXCfxcD44sy9",
    consumer_secret: "db7489uzO4vLOSzQGmkfOtrflaMpj2Ufmcji5LzGBaYpY5w37D",
    access_token: "1375364568755634178-gO6URpyjXr2NshvX1eR03I2L8YCgCx",
    access_token_secret: "iJJl8pKqavayAwftV0Cc9jtInEZqtdCmgadwmFBWJ2N3k"
});

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "ok" });
});

app.get("/twitter/:username", async (req, res) => {
    let username = req.params.username;
    let theme = req.query.theme;

    theme = Themes[theme];

    if(!theme) {
        theme = "Dark";
    }

    if(!username) {
        return res.status(404).json({ message: "Error no username found in the url"});
    }

    username = username.replace("_", " ")

    twiterClient.get("users/lookup", { screen_name: username }, async function(err, data) {
        if(err) {
            return res.status(404).json({ message: "No user found with the username"});
        }

        let icon = data[0].profile_image_url_https.replace("normal", "400x400");
        icon = await imgtobase64(icon)
        icon = "data:image/png;base64," + icon

        let card = new Card({
            username: `@${data[0].screen_name}`,
            friends: data[0].friends_count,
            follower: data[0].followers_count,
            icon: icon,
            theme: theme
        })

        res.set("Cache-Control", "public, max-age=30");
        res.set("Content-Type", "image/svg+xml")
        res.send(card.renderCards())
    })
})

app.get("*", (req, res) => {
    res.status(404).json({ message: "Path not found." });
});

app.listen(process.env.PORT || 3000, () => console.log("Listening on port " + process.env.PORT || 3000))
