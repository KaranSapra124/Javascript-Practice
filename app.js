// Javascript -> Async Await , Promises

// Promises stages -> Fulfilled ✔ , Rejected ☠ , Pending 🔃

// let num = 10;
// const p1 = new Promise((res, rej) => {
//   if (num % 2 == 0) {
//     res("I am RESOLVED");
//   } else {
//     rej("I am REJECTED");
//   }
// });

// p1.then((data) => {
//   console.log(data);
// }).catch((data) => {
//   console.log(data);
// });

// Use Cases Of Promises :-
// API CALLING , HEAVY TASK HANDLING , BACKEND INTEGRATION

// CLIENT -> WAITER -> COUNTER (APPROVE) -> CHEF //MIDDLEWARE
// CHEF -> WAITER -> CLIENT
// CASE 1 FINISHED
// CLIENT -> WAITER -> CHEF
// CHEF -> WAITER -> CLIENT
// CASE 2 FINISHED

// 'https://dummyjson.com/quotes'

const quotesDiv = document.getElementById("quotes");
const fetchQuotes = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const { quotes } = data;
      displayQuotes(quotes); //CallBack Function
    });
};
fetchQuotes("https://dummyjson.com/quotes");

const displayQuotes = (arr) => {
  arr.map((elem) => {
    return (quotesDiv.innerHTML += `<div class="shadow-xl p-5 max-w-80 m-2 hover:scale-105 duration-500" >
           <h1 class="text-xl font-bold text-gray-900 mb-2">${elem.quote}</h1>
    <p class="text-lg text-gray-700">-${elem.author}</p>
        </div>`);
  });
};
