class twitterCard {
    constructor({
        username,
        icon,
        friends,
        follower,
        theme
    }) {
        this.username = username;
        this.icon = icon;
        this.friends = friends;
        this.follower = follower;
        this.theme = theme;
    }

    renderCards() {
        switch(this.theme) {
            case "Dark": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: rgb(21, 23, 33); border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="${this.icon}" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial" font-size="22px">${this.username}</text>
                <text x="170" y="100" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(255, 255, 255)" font-family="Arial" font-size="18px">${this.follower}</text>
                <text x="320" y="100" fill="rgb(255, 255, 255)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(255, 255, 255)" font-family="Arial" font-size="20px">${this.friends}</text>
                </svg>`
            }
            break;
            case "White": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: rgb(255, 255, 255); border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="http://pbs.twimg.com/profile_images/1455909204024336386/q1kYzd1f_400x400.jpg" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="22px">@meetabeast</text>
                <text x="170" y="100" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(0, 0, 0)" font-family="Arial" font-size="18px">6</text>
                <text x="320" y="100" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(0, 0, 0)" font-family="Arial" font-size="20px">25</text>
                </svg>`
            }
            break;
            case "Transparent": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: transparent; border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="http://pbs.twimg.com/profile_images/1455909204024336386/q1kYzd1f_400x400.jpg" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="22px">@meetabeast</text>
                <text x="170" y="100" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(0, 0, 0)" font-family="Arial" font-size="18px">6</text>
                <text x="320" y="100" fill="rgb(0, 0, 0)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(0, 0, 0)" font-family="Arial" font-size="20px">25</text>
                </svg>`
            }
            break;
            case "Red": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: rgb(21, 23, 33); border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="http://pbs.twimg.com/profile_images/1455909204024336386/q1kYzd1f_400x400.jpg" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial" font-size="22px">@meetabeast</text>
                <text x="170" y="100" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(219, 20, 20)" font-family="Arial" font-size="18px">6</text>
                <text x="320" y="100" fill="rgb(219, 20, 20)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(219, 20, 20)" font-family="Arial" font-size="20px">25</text>
                </svg>`
            }
            break;
            case "Green": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: rgb(21, 23, 33); border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="http://pbs.twimg.com/profile_images/1455909204024336386/q1kYzd1f_400x400.jpg" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial" font-size="22px">@meetabeast</text>
                <text x="170" y="100" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(51, 153, 51)" font-family="Arial" font-size="18px">6</text>
                <text x="320" y="100" fill="rgb(51, 153, 51)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(51, 153, 51)" font-family="Arial" font-size="20px">25</text>
                </svg>`
            }
            break;
            case "Blue": {
                return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background-color: rgb(21, 23, 33); border-radius: 10px">
                <image x="10" y="30" width="125" height="125" href="http://pbs.twimg.com/profile_images/1455909204024336386/q1kYzd1f_400x400.jpg" clip-path="inset(0% round 50%)"/>
                <text x="160" y="50" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial" font-size="22px">@meetabeast</text>
                <text x="170" y="100" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial" font-size="20px">Followers:</text>
                <text x="170" y="130" fill="rgb(0, 204, 255)" font-family="Arial" font-size="18px">6</text>
                <text x="320" y="100" fill="rgb(0, 204, 255)" font-weight="bold" font-family="Arial" font-size="20px">Following:</text>
                <text x="320" y="130" fill="rgb(0, 204, 255)" font-family="Arial" font-size="20px">25</text>
                </svg>`
            }
        }
    }
}

module.exports = twitterCard;