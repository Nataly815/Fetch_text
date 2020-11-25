'use strict'

let nickname = document.querySelector('.nickname');
let username = document.querySelector('.username');
let userAvatar = document.querySelector('.userAvatar');
let userBio = document.querySelector('.bio');
let userUrl = document.querySelector('.url');

let name = 'Nataly815';

fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(json => {
        nickname.innerHTML = json.login;
        username.innerHTML = json.name;
        userAvatar.src = json.avatar_url;
        userBio.innerHTML = json.bio;
        userUrl.innerHTML = json.html_url;
    })
    .catch(err => h1.innerHTML = 'Информация о пользователе не доступна');

    