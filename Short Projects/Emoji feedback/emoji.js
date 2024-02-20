
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container")


let selectedfeedback = "";


selectedfeedback = event.target.innerText || event.target.parentNode.innerText;

btnEl.addEventListener("click", ()=>{
    if(selectedfeedback !== ""){
        containerEl.innerHTML = `
        <strong>Thank you</strong>
        <br>
        <strong>Feedback: ${selectedfeedback}</strong>
        <p>Thank you for your feedback it ill help us.....</p>
        `
    }
})
