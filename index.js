let json = `[{
"poster": "https://i.pinimg.com/564x/e1/b9/4a/e1b94a28f4974c4fe11889d4ae85ec46.jpg",
"name": "На последнем дыхании",
"director": "Жан-Люк Годар",
"year": "1960",
"genre": "Драма",
"starring": "Жан-Поль Бельмондо, Джин Сиберг",
"plot": "Мишель Пуакар – настоящий прожигатель жизни, зарабатывающий на жизнь кражами дорогих машин. Он никогда не задумывается о последствиях своих криминальных выходок – просто живет, как хочет, ни на кого не рассчитывая, ни с кем не считаясь. Видимо, потому что молод и самонадеян. Но однажды, по дороге в Париж, Мишель убивает полицейского: просто для того, чтобы избежать неприятных расспросов. Но с этой минуты в его жизни больше не будет ничего, кроме неприятностей."
},{
"poster": "https://i.pinimg.com/564x/c0/68/38/c068383269ee1747e41b37c0fdfac85d.jpg",
"name": "Жюль и Джим",
"director": "Франсуа Трюффо",
"year": "1962",
"genre": "Мелодрама",
"starring": "Жанна Моро, Оскар Вернер, Анри Серр",
"plot": "В начале ХХ века в Париже дружили два товарища - австриец Жюль и француз Джим. Гуляли, разговаривали, разминались в спортзале, обсуждали знакомых девушек, с которыми сентиментальному белокурому Жюлю везло меньше, чем Джиму, а счастья хотелось обоим. А потом в их жизнь вошла роковая женщина - Катрин. Жюль влюбляется и просит Джима не быть помехой его роману с девушкой. Но не все так просто..."
},{
    "poster": "https://i.pinimg.com/564x/c2/bd/36/c2bd366de7101826b347d150748f6652.jpg",
    "name": "Бассейн",
    "director": "Жак Дере",
    "year": "1969",
    "genre": "Мелодрама",
    "starring": "Ален Делон, Роми Шнайдер, Джейн Биркин",
    "plot": "Жан-Поль и Марианна проводят отпуск на Лазурном берегу, в идеальной атмосфере на вилле друзей. Но летняя идиллия прерывается вторжением их друга, бывшего любовника Марианны. Безмятежное состояние героев сменяется обжигающим напряжением, затаённой ревностью, гнетущими намёками и страстями."
}
]`;
document.addEventListener("DOMContentLoaded", function (event) {
    let films = JSON.parse(json);
    let filmContent = "";
    for (let film of films) {
        filmContent += `<div class="film">
        <img src="${film.poster}"></img>
        <h2 id="title">${film.name}</h2>
        <div>Режиссёр: ${film.director}</div>
        <div>Год: ${film.year}</div>
        <div>Жанр: ${film.genre}</div>
        <div>В главных ролях: ${film.starring}</div>
        <div>Сюжет: ${film.plot}</div><br>
        <label>Ваша оценка: </label><select name="score" id="film-score">
        <option value="1" class="score">1</option>
        <option value="2" class="score">2</option>
        <option value="3" class="score">3</option>
        <option value="4" class="score">4</option>
        <option value="5" class="score" selected>5</option>
        </select></label>
        </div>`;
    }

    document.getElementById("filmContainer").innerHTML = filmContent;

    }
)
let movieScore = document.querySelectorAll('.score');
movieScore.addEventListener('onchange', (event) =>
    movieScore.forEach((item) => {
        if (item.selected) {
            localStorage.setItem(item.name, item.value);
    }}));
