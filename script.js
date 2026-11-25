const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let items = document.querySelectorAll(".item")
let prices = document.querySelectorAll(".price")
let table = document.querySelector("table")

let totalprice = 0

const getSum = () => {
//Add your code here
	totalprice = 0;
	prices.forEach(price =>{
		totalprice += Number(price.textContent)
	})


	let lastrow = document.createElement("tr");
	lastrow.innerHTML += `<td> total price </td>
		<td>${totalprice}</td>`
	table.appendChild(lastrow);
};

getSumBtn.addEventListener("click", getSum);

