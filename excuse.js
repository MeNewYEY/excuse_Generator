
    document.getElementById('button').addEventListener("click", function() {
        document.getElementById('excuse').innerHTML=generator();
    }
    );


function generator() {
  
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


let whoInd = Math.floor(Math.random() * who.length);
let actionInd = Math.floor(Math.random() * action.length);
let whatInd = Math.floor(Math.random() * what.length);
let whenInd = Math.floor(Math.random() * when.length);

return who[whoInd] + ' ' + action[actionInd] + ' ' + what[whatInd] + '' + when[whenInd];

}