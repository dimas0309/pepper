const qty = document.querySelectorAll('#quantity');
const table = document.querySelector('.table');
const trlen = table.children[1].children.length;

const showAmount = () => {
    for (let i = 0; i < qty.length; i++){

        qty[i].addEventListener('change', () => {
            const price = qty[i].parentNode.parentNode
                                .children[2].children[0];
            const amount = qty[i].nextElementSibling;
            
            amount.value = price.value*qty[i].value;   
        })
    }
}

showAmount();

let sum = 0;

for (let i = 0; i < trlen; i++){
    const amount = table.children[1].children[i]
                        .children[3].innerText;

    sum += parseInt(amount);                    
}

table.children[2].children[0].children[3]
    .children[0].value = sum;



























 



