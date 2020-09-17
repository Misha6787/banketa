'use strict';

const openBlocksOffers = () => {
    const   moreSpecialOffers = document.querySelectorAll('.more__offers')[0],
            morePublication = document.querySelectorAll('.more__offers')[1],
            btnSpecialOffers = document.querySelector('.special-offers'),
            btnAllPublications = document.querySelector('.all-publications');
    const anim = moreOffersBlock => {
        let count = 0;
        const addOpacity = () => {
            const animCall = requestAnimationFrame(addOpacity);
            count < 1.1 ? moreOffersBlock.style.opacity = `${count}` : cancelAnimationFrame(animCall);
            count += 0.06;
        };
        addOpacity();
    };
    const openMoreOffers = event => {
        const target = event.target;
        if (target.closest('.special-offers')) {
            moreSpecialOffers.style.display = 'flex';
            anim(moreSpecialOffers);
            btnSpecialOffers.style.display = 'none';
        } else if (target.closest('.all-publications')) { 
            morePublication.style.display = 'block';
            anim(morePublication);
            btnAllPublications.style.display = 'none';
        }
    };
    document.body.addEventListener('click', openMoreOffers);
};

export default openBlocksOffers;
