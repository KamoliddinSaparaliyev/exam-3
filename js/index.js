const myModal = new bootstrap.Modal('#staticBackdrop')
const price1 = document.getElementById('price-1')
const price2 = document.getElementById('price-2')
const price3 = document.getElementById('price-3')
const elForm = document.querySelector('#form')
const elFormModal = document.querySelector('#form-modal')
let showJoin = document.getElementById('alert-form')
let showJoinModal = document.getElementById('alert-form-modal')


window.addEventListener('DOMContentLoaded, click', () => {
    myModal.show()
})

price1.addEventListener('click', () => {
    price1.textContent = " "
    price1.innerHTML = `
    <span class="fs-4 ">£71.88  </span><span class="  text-secondary">   per year</span>
    `
});

function priceFn2() {
    price2.textContent = " "
    price2.innerHTML = `
    <span class="fs-4 ">£155.88  </span><span class="  text-secondary">   per year</span>
    `
};

function priceFn3() {
    price3.textContent = " "
    price3.innerHTML = `
    <span class="fs-4 ">£251.88  </span><span class="  text-secondary">   per year</span>
    `
};

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = e.target[0].value;
    if (input) {
        showJoin.classList.remove('d-none')
        setTimeout(() => {
            showJoin.classList.add('d-none')
        }, 4000)
    }
    e.target.reset();
});

elFormModal.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = e.target[0].value;
    if (input) {
        showJoinModal.classList.remove('d-none')
        setTimeout(() => {
            showJoinModal.classList.add('d-none')
        }, 2000)
        setTimeout(() => {
            myModal.hide()
        }, 2000)
    }

    e.target.reset()


})


