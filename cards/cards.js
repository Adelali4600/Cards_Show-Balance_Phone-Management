// ============================================ Cards

// ====================== Selectors
const contianer = document.querySelector('main .container');
let renderCards = () => {
    contianer.innerHTML = '';
    cards.forEach((el, index) => {
        let card = `
            <div class="card" style="width: 18rem">
                <img src="${el.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        contianer.innerHTML += card;
    })
};