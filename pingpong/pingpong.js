const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const dropdown = document.querySelector('#dropdown');
const btnp1 = document.querySelector('#btnP1increment');
const btnp2 = document.querySelector('#btnP2increment');
const btnpReset = document.querySelector('#btnReset');

const incrementer = (btnA, btnB, scoreSelected) => {
    if (parseInt(btnA.innerHTML) < parseInt(scoreSelected.value)) {
        btnA.innerHTML = parseInt(btnA.innerHTML) + 1;
        if (parseInt(btnA.innerHTML) === parseInt(scoreSelected.value)) {
            btnA.style.color = 'green';
            btnB.style.color = 'red';
            btnp1.disabled = true;
            btnp2.disabled = true;
        }
    }
}

dropdown.addEventListener('change', function () {
    const pointCap = dropdown.value;
})
btnp1.addEventListener('click', function () {
    incrementer(p1score, p2score, dropdown)
})

btnp2.addEventListener('click', function () {
    incrementer(p2score, p1score, dropdown)
})
btnpReset.addEventListener('click', function () {
    p1score.innerHTML = 0;
    p2score.innerHTML = 0;
    p2score.style.color = '';
    p1score.style.color = '';
    dropdown.value = '';
    btnp1.disabled = false;
    btnp2.disabled = false;
})


//normal state:
//code to increment p1score and p2score on event clicks on the buttons to maxNum
//code to set datalist input as max number p1score and p2score can reach
//reset turns both the numbers to 0.

//when something wins:
//code to turn winning score green, losing score red
//code to disable buttons when something wins except reset