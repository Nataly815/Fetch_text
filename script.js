'use strict'


let nickname = document.querySelector('.nickname');
let username = document.querySelector('.username');
let userAvatar = document.querySelector('.userAvatar');
let userBio = document.querySelector('.bio');
let userUrl = document.querySelector('.url');

let url = window.location.toString();
let currentDate = document.querySelector('.current-date');
let date = new Date();


let preloader = document.querySelector('.preloader');
let wrap = document.querySelector('.wrap');

function removePreloader(){
	preloader.style.display = 'none';
    wrap.style.display = 'block';
}

function getName(url){
    let nameUrl = url.split('=')[1];
    if (nameUrl == undefined) {
        nameUrl = 'Nataly815';
    }
    return nameUrl;
}

const name = getName(url);

const getDate = new Promise((resolve, reject) => setTimeout(() => date ? resolve(date) : reject('Что-то пошло не так...'), 3000));

const getApi = fetch(`https://api.github.com/users/${name}`);

let requestUrl;
let requestDate;

Promise.all([getApi, getDate])
    .then(([url, date]) => {
        requestUrl = url;
        requestDate = date; 
        })
    .then(res => requestUrl.json())
    .then(json => {
        if (json.login !== undefined){
        nickname.innerHTML = json.login;
        username.innerHTML = json.name;
        userAvatar.src = json.avatar_url;
        userBio.innerHTML = json.bio;
        userUrl.href = json.html_url;
        userUrl.innerHTML = "Ссылка на профиль";
        } else {
        document.body.innerHTML = 'Информация о пользователе не доступна!';
        }
    })
    .then(res => {
        currentDate.innerHTML = `${requestDate}`;
        removePreloader();
    })
    .catch(err => document.body.innerHTML = 'Информация о пользователе не доступна');