var calcFrom=document.querySelector(".calc");

calcFrom.onsubmit=function (e)
{
    e.preventDefault();
var elements=e.target.elements
var amount=elements["amount"].value;
var currancy=elements["excahnge"].value;

var dollarToShekel = 3.73;
var dinarToShekel = 5.27;

var resulte;
var symbol;

switch(currancy)
{
    case "dollar":
       resulte = amount /dollarToShekel;
       symbol="$";
       break;
    case "dinar" :
        resulte=amount/dinarToShekel;
        symbol="🇯🇴";
        break;
    case "shekel":
    resulte=amount;
    symbol="₪";
}
if(currancy=="dollar"||currancy=="dinar"){
document.querySelector('.resulte').innerText = 'Converted amount from shekel to   '+`${currancy}`+" " + resulte.toFixed(2) + " "+symbol ;
}
else 
{document.querySelector('.resulte').innerText = 'Converted amount from shekel to   '+`${currancy}`+" " + resulte + " "+symbol ;
}

}