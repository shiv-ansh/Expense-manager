var balance = 0;
var totalIncome = 0;
var totalExpenditure = 0;

//function to remove any list items
// function removeItem() {
//     var parent = document.getElementById("earnList");
//     var elem = document.querySelectorAll(".earnList > li:last-child")
// }

//function to update the total income
function addIncome(totalIncome) {
    var para = document.getElementById("income");
    para.textContent = "Rs. " + totalIncome;

    var parent = document.getElementById("totalInc");
    parent.appendChild(para);

    document.getElementById("earnDes").value = "";
    document.getElementById("earnAmount").value = "";
}

//function to update the total expenditure
function addExpend(totalExpenditure) {
    var para = document.getElementById("expd");
    para.textContent = "Rs. " + totalExpenditure;

    var parent = document.getElementById("totalExpd");
    parent.appendChild(para);

    document.getElementById("spentDes").value = "";
    document.getElementById("spentAmount").value = "";
}


//function to update the balance amount

function addBalance(balance) {
    var para = document.getElementById("balance");
    para.textContent = "Rs. " + balance;

    var parent = document.getElementById("balanceAmt");
    parent.appendChild(para);
}

//function to add money to the balance amount and show brief description about it in earned section

function addMoney() {

    var eList = document.createElement("li");
    var earnDes = document.getElementById("earnDes").value;
    var earnAmount = document.getElementById("earnAmount").value;

    if (earnDes === "" || earnAmount === "")
        alert("Amount or Description is empty");


    else {
        eList.textContent = earnDes + "   =   " + earnAmount;

        var parent = document.getElementById("earnList");
        parent.appendChild(eList);

        balance += parseInt(earnAmount);
        totalIncome += parseInt(earnAmount);
        console.log(totalIncome);
        //calling addBalance function to update balance
        addBalance(balance);
        addIncome(totalIncome);

    }
}

//function to add money to the balance amount and show brief description about it in earned section
function addSpend() {

    var sList = document.createElement("li");
    var spentDes = document.getElementById("spentDes").value;
    var spentAmount = document.getElementById("spentAmount").value;

    if (spentDes === "" || spentAmount === "")
        alert("Amount or Description is empty");

    else {
        sList.textContent = spentDes + "   =   " + spentAmount;

        var parent = document.getElementById("spentList");
        parent.appendChild(sList);

        balance -= parseInt(spentAmount);
        totalExpenditure += parseInt(spentAmount);
        console.log(totalIncome);

        //calling addBalance function to update balance
        addBalance(balance);
        addExpend(totalExpenditure);
    }

}

//
