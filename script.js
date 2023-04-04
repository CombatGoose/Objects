//Lets which will take users' name and age
let takeName = prompt("Please, enter your name")
let takeAge = prompt("Please, enter your age")

//Array with information about user
let usersArr = [
    {
        name: takeName,
        age: takeAge,
        orders: [
            {
                name: "Phone",
                price: 1000,
                count: 2,
            },
            {
                name: "PC",
                price: 5000,
                count: 3,
            },
            {
                name: "PS5",
                price: 4000,
                count: 1,
            }
        ]
    }
]

const getTotalPrice = (usersArr) => {
    let totalPrice = 0
    for (let i = 0; i < usersArr.orders.length; i++) { 
        totalPrice += usersArr.orders[i].price * usersArr.orders[i].count
    }

    return totalPrice
}

const getPriceForAllUsers = (usersArr) => { 
    for (let i = 0; i < usersArr.length; i++){
        if(takeAge < 18) {
            alert("Sorry, you can't buy it because you haven't 18 years old")
        } else {
            alert(`Hello ${takeName}! You can buy it because you have 18 years and more. Total  price: ${getTotalPrice(usersArr[i])} dollars`)
        }
    }
}
getPriceForAllUsers(usersArr)