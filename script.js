const yes_button = document.getElementById('btn_yes');
const no_button = document.getElementById('btn_no');

const nextContent = () => {
    const prevPage = document.querySelector('.page_one');
    const nextPage = document.querySelector('.page_two');

    prevPage.style.display = "none";
    nextPage.style.display = "block";
};

const biggerSizeButton = () => {
    setNewPosition();

    const currentSize = yes_button.getBoundingClientRect();
    
    if(currentSize.width < 250)
    {
        yes_button.style.width = (25 + currentSize.width) + "px";
        yes_button.style.height = (25 + currentSize.height) + "px";
    }
    else
        no_button.style.display = "none";
}

const setNewPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const position_top = getRandomPosition(screenHeight);
    const position_left = getRandomPosition(screenWidth);

    no_button.style.position = "absolute";
    no_button.style.top = position_top + "px";
    no_button.style.left = position_left + "px";
};

const getRandomPosition = (max) => {
    return Math.floor(Math.random() * max) + 1;
};

yes_button.addEventListener('click', nextContent);
no_button.addEventListener('click', biggerSizeButton);
no_button.addEventListener('mouseover', setNewPosition);