const passwordBox = document.getElementById("password")
const lenght =12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const specialCharacter="!@#$%^&*"

const allChars = uppercase +lowercase+number+specialCharacter

function createPassword(){
    let password =""
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += specialCharacter[Math.floor(Math.random()*specialCharacter.length)]

    while(lenght>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value = password
    console.log("Hello");
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}