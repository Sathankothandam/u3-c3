// Store the wallet amount to your local storage with key "amount"

var tot = localStorage.getItem("amount");
document.getElementById("wallet").innerText = tot;
 var sum = 0
function addfunc(){
    event.preventDefault()
    var amount = document.getElementById("amount").value;
    localStorage.setItem("amount", amount);
    sum = Number(tot)+Number(amount);
    localStorage.setItem("amount",sum);
    window.location.reload();
}