let query = document.querySelector('.query');
let serchBtn = document.querySelector('.searchBtn');


serchBtn.onclick = function() {
    let url ='https://www.google.com/search?q='+query.value;
    window.open(url, '_self');
}
