const chatbotIcon = document.getElementById("chatbot")
const chatbotBox = document.getElementById("chatbot-box")
const closeBox = document.getElementById("close-area")
const closeBtn = document.getElementById("cancel")


chatbotIcon.addEventListener("click", () => {
    chatbotBox.style.display = "block"
    chatbotIcon.style.display = "none"
    closeBox.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    chatbotBox.style.display = "none"
    chatbotIcon.style.display = "flex"
    closeBox.style.display = "none"
})