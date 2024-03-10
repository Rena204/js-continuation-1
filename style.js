
const first = document.querySelector('div#block > p');
console.timeLog(first.innerHTML);

const www = docuent.querySelector("div#block > p.www");
console.log(www.innerHTML);

const link = document.querySelector("a.link");
link.innerHTML = "link text js";
link.href = "https://developer.mozilla.org/ru/";
console.log(link);

document.querySelector("img.photo").src = "https://4x4photo.ru/wp-content/uploads/2023/05/4dbe2bab-04a0-4720-97c4-c54cc40e3a90.jpg";

const newP = document.createElement("p");
newP.textContent = "новый текстовый элемент";
const content = document.querySelector("div.content");
content.appaendChild(newP);
newP.remove();

const button = document.createElement("button");
button.textContent = "counter";
content.appendChild(button);
let counter = 0;
button.addEventListener("mouseover", (e) => {
    console.log(e);
    counter++;
    console.log(counter);
    e.target.textContent = " текст отправлен ";
});


