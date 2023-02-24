const input = document.querySelector('input');
const ball = document.querySelector('img');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Tak!','Ciężko powiedzieć...', 'Oczywiście, że tak.', 'Jak najbardziej!', 'Obawiam się, że nie.', 'Sam zdecyduj...', 'Ułożenie gwiazd podpowiada, że odpowiedź brzmi: TAK.', 'Nie!', 'Nie wiem...', 'Nie wiadomo.', 'Może.', 'Nie chcesz znać odpowiedzi...', 'A ktoż by to wiedział.', 'Mhmm...', 'Możesz to wymanifestować...', 'Raczej nie.', 'Być może.', 'Nikt tego nie wie!', 'Ajak.' ];


const shakeBall = () => {

    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000)

}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?'){
        generateAnswer();
        error.textContent = '';
    }else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem "?".';
        answer.textContent = ''
    }else {
        error.textContent = 'Musisz zadać jakieś pytanie.';
        answer.textContent = ''
        
    }
    ball.classList.remove('shake-animation');
}




const generateAnswer = () => {
    const rannum= Math.floor(Math.random()*answersArr.length);

    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[rannum]}`
}

ball.addEventListener('click', shakeBall)
