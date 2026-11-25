const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let items = document.querySelectorAll(".item")
let prices = document.querySelectorAll(".price")
let table = document.querySelector("table")

let totalprice = 0
let lastrow = document.createElement("tr");
lastrow.innerHTML = `<td> Total Price </td>
                    <td class="total"> ${totalprice} </td>`
table.appendChild(lastrow);



const getSum = () => {
//Add your code here
	totalprice = 0;
	prices.forEach(price =>{
		totalprice += Number(price.textContent)
	})

	document.querySelector(".total").textContent = totalprice

};

getSumBtn.addEventListener("click", getSum);

