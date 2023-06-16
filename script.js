// variable declaration...
"use strict";

let btn= document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person= document.querySelector('.person');


const quotes=[{
    quote: "The purpose of our lives is to be happy.",
    person:'Dalai Lama'
},{
    quote:"Life is what happens when you're busy making other plans." ,
    person:'John Lenon'

},
{
    quote: "Get busy living or get busy dying.",
    perosn: 'Stephon King'
},
{
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    perosn:'Abraham Lincoln'
},
{
    quote:"Money and success don’t change people; they merely amplify what is already there.",
    person:'Will Smith'
},
{
    quote:"Never let the fear of striking out keep you from playing the game.",
    person:'Babe Ruth'
},
{
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    person:'Soren Kierkegaard'
},
{
    quote: "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. Eventually  your hard work will pay off.",
    perosn: 'Kevin cart'
},
{
    quote:"Everything negative ,pressure, challenges,is all an opportunity for me to rise." ,
    person:'Kobe Bryant'
}, ];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});
