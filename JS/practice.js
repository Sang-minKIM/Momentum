// always const sometimes let and never use var

// undefined is variable with no value, null is variable with value, which is nothing

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const players = {
  name: "nico",
  points: 10,
  fat: true,
};

// We can't change const, but we can change the value in const.
console.log(players);
players.points = players.points + 15;
console.log(players.points);

//Sequence is important to run 'function'.
function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(10, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// console.log를 function 안이 아니라 외부에서 작성해서 실행되게 하는게 return의 핵심이다.
//function의 외부에서 값을 얻은 뒤에 그 값으로 원하는 것을 할 것이다.
// function 안에서 console.log를 쓰면 그냥 콘솔에 표현만 될 뿐 그 데이터를 이용불가.
//return을 하면 function이 끝난다.

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

const age = parseInt(prompt("How old are you?"));

//function은 내부에서 외부로 실행된다.

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("Wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
// JS는 위에서 아래로 적용되므로 100살 일 경우를 먼저 적어주면 80보다 크다는 조건에 부합하지만 Wow you are wise. 라는 조건문이 적용된다.

const title = document.getElementById("title");

title.innerText = "got you!";
//In .js we can get or change .html elements

const title = document.querySelector(".hello h1");

console.log(title);
//지정한 조건의 element가 여러개라면 첫번째 element만 가져오게 된다. 만약 모두를 가져오고 싶다면 quertSelectorAll을 사용하면 된다.
//다른 get함수는 모두 array를 반환하는 반면에 querySelector는 하나의 element만 반환해주기 때문에 거의 querySelector만을 사용하게 될 것이다.

title.innerText = "Hello";

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
//title, head, body 같은 중요한 것들만 document.body 와 같이 호출할 수 있고 나머지는  querySelector 이용.

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//Getting element from the html, using javascript, adding event listener.
//Executing some functions when those event listeners happened.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
//그냥 classname을 그대로 사용하면 오타가 나도 알 수 없다. 근데 const로 대체하여 사용하면 틀렸을때 console이 알려준다.
//classList를 사용하면 원래 다른 class가 존재하더라도 그걸 바꾸지 않고 작업이 가능하다. Never replace!!!

h1.addEventListener("click", handleTitleClick);

//이 모든 귀찮은 것들을 대체해주는 코드가 toggle이다.
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

//과제
const body = document.body;

function changeColor() {
  if (window.innerWidth < 600) {
    body.classList.remove("green");
    body.classList.remove("ivory");
    body.classList.add("tomato");
  } else if (window.innerWidth > 800) {
    body.classList.remove("green");
    body.classList.remove("tomato");
    body.classList.add("ivory");
  } else {
    body.classList.remove("tomato");
    body.classList.remove("ivory");
    body.classList.add("green");
  }
  if (body.classList.contains("tomato")) {
    body.style.backgroundColor = "tomato";
  } else if (body.classList.contains("ivory")) {
    body.style.backgroundColor = "ivory";
  } else {
    body.style.backgroundColor = "green";
  }
}

window.addEventListener("resize", changeColor);
//window.innerWidth 를 왜 const width = window.innerWidth로 쓰면 작동이 안될까?
//if 문을 어떤건 function안에 넣어야 하고 어떤걸 밖에 써도 작동하는지 잘 모르겠다.
/*2022.2월 8일 const를 function안에서 하면 정상적으로 작동을 할 것이다.
그리고 if문의 경우에 꼭 function안에 넣어야 하는 것이 아니라 위의 경우에 eventListener가 있어서
function을 작동하게 하려다 보니 function자체를 if문으로 쓴 것.*/

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);

setTimeout(sayHello, 5000);
