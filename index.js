let accounts = [
    {
        Email: "obama123@gmail.com",
        Phone: "0123456789",
        Password: "ember123",
        Username: "acc1"
    },
    {
        Email: "phucsang324@gmail.com",
        Phone: "066606666",
        Password: "ember123",
        Username: "acc2"
    },
    {
        Email: "levey@gmail.com",
        Phone: "011046660",
        Password: "ember123",
        Username: "acc3"
    },
]
localStorage.setItem("UserAccounts", JSON.stringify(accounts))

let formSignIn = document.querySelector('form')
formSignIn.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let e = accounts.find(account => account.Email == formSignIn.email.value)
    // console.log(e)
    if (e == undefined){
        document.getElementById("pass").innerHTML += "Incorrect Email or password, please try again"
    }
    else if(formSignIn.password.value == e.Password){
        window.location.href = "https://www.youtube.com"
    } else {
        document.getElementById("pass").innerHTML += "Incorrect Email or password, please try again"
    }
    document.querySelector("form").reset()
})

// console.log (formSignIn.email.value)
// console.log (formSignIn.password.value)