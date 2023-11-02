const btn = document.createElement("button")
btn.innerHTML = "Click!"
btn.classList.add("btn")
document.body.append(btn)
const divModal = document.createElement("div")
divModal.classList.add("modal-box")
const btnModal = document.createElement("button")
btnModal.innerHTML = "Cancel!"
btnModal.classList.add("btnmodal")
const pModal = document.createElement("p")
pModal.innerHTML = "WELCOME!"
pModal.classList.add("pmodal")
divModal.append(pModal)
divModal.append(btnModal)
document.body.append(divModal)
const toggleModal = () => { 
    divModal.classList.toggle("showmodal"); 
    btn.classList.toggle("btnhidden")
}
btn.addEventListener("click", toggleModal);
btnModal.addEventListener("click", toggleModal);