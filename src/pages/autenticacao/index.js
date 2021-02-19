const express = require('express')
const axios = require('axios')
const cookieParser = require('cookie-parser')

const clientID = 'IfLufdLinMxBrXfX3laC8sSi2pYa'
const clientSecret = 'JpcpAGLsJZk3iWGkCpB8_Q7aON8a'

const app = express()
app.use(express.static(`${__dirname}/public`))
app.use(cookieParser())


app.get('/oauth', (req, res) => {
    const requestToken = req.query.code
    let accessToken;

    const buff = Buffer.from(clientID + ':' + clientSecret);
    const base64data = buff.toString('base64');

    axios({
        url: `https://wso2-gw.ua.pt/token?grant_type=authorization_code&code=${requestToken}&schema=openid&redirect_uri=http://localhost:3000/`,
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64data}`,
            accept: 'application/json'
        }
    }).then(response => {
        accessToken = response.data.access_token;

        return axios({
            url: 'https://wso2-gw.ua.pt/userinfo?schema=openid',
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    }).then(response => {
        console.warn("User: ", response.data);
        console.warn("Access Token: ", accessToken);

        /**
         * Agora precisam de guardar o access token e o user info algures
         *
         * O user precisa de enviar sempre o access token, e se quiserem validar que ele está logged
         * precisam de perguntar pelo user info outra vez. Se falhar, têm de expirar o login
         */

        res.cookie('cookieName', accessToken, options) // options is optional
        res.send('')

        res.redirect('index.html');
    }).catch(console.error)
})

app.listen(3000)