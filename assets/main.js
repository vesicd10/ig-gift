document.addEventListener('DOMContentLoaded', () => {

    const click = document.querySelector('.click');
    const giftBox = document.querySelector('.gift-box');
    const shadow = document.querySelector('.shadow');
    const container = document.querySelector('.gift-container');
    const gift = document.querySelector('.gift');

    click.addEventListener('click', () => {
        if(click.className === 'click'){
            click.classList.add('active');
            giftBox.classList.add('active');
            shadow.classList.add('active');
            container.classList.add('active');
            gift.classList.add('active');
            gift.classList.remove('inactive');
        }else{
            click.classList.remove('active');
            giftBox.classList.remove('active');
            shadow.classList.remove('active');
            container.classList.remove('active');
            gift.classList.remove('active');
            gift.classList.add('inactive');
        }
    });
});