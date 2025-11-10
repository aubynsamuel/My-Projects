let pLength
let characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+?/ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const pLengthField = document.getElementById("passwordLength")
const generateBtn = document.getElementById("generate")
const passwordDisplay = document.getElementById("password")
const copyBtn = document.getElementById("copy")

const generatePassword = () => {
    let password = ""
    for (let i = 0; i < pLength; i++) {
        const index = Math.floor(Math.random() * (characters.length))
        password += characters.charAt(index)
    }
    return password
}

generateBtn.onclick = () => {
    if (pLengthField.value == "") {
        alert("Enter your preferred password length to generate password")
        generateBtn.innerText = "Generate"
    } else {
        generateBtn.innerText = "Regenerate"
    }

    pLength = pLengthField.value
    passwordDisplay.innerText = `Password: ${generatePassword()}`
}

copyBtn.onclick = () => {
    const copyText = passwordDisplay.innerText
    const textarea = document.createElement("textarea")
    textarea.value = copyText.replace("Password: ", "")
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
    alert("Password Copied: " + copyText)
}




