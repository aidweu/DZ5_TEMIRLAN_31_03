const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalWasShown = true

}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
modalTrigger.onclick = () => { openModal() }

modalCloseButton.onclick = () => { closeModal() }

modal.onclick = () => {
    if (event.target === modal) closeModal()
}

let modalWasShown = false
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollHeight >= pageHeight * 1 && !modalWasShown) {
        openModal()

    }

})

let showModal = false
//const time = 10
const timeOut = () => {
    if (!showModal) {
        setTimeout(openModal, 10000)
        showModal = true
    }
}
timeOut()


// POST DATA
