'use strict'

let nickname = document.querySelector('.nickname');
let username = document.querySelector('.username');
let userAvatar = document.querySelector('.userAvatar');
let userBio = document.querySelector('.bio');
let userUrl = document.querySelector('.url');
let url = window.location.toString();

function getName(url){
    let nameUrl = url.split('=')[1];
    if (nameUrl == undefined) {
        nameUrl = 'Nataly815';
    }
    return nameUrl;
}

let name = getName(url);

fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(json => {
        if (json.login !== undefined){
        nickname.innerHTML = json.login;
        username.innerHTML = json.name;
        userAvatar.src = json.avatar_url;
        userBio.innerHTML = json.bio;
        userUrl.innerHTML = json.html_url;
        } else {
        document.body.innerHTML = 'Информация о пользователе не доступна';
        }
    })
    .catch(err => document.body.innerHTML = 'Информация о пользователе не доступна');