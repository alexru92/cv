function unblur() {
    const data = {
        linkedin: '>a/<iteixa/ni/moc.nideknil>"/iteixa/ni/moc.nideknil//:sptth"=ferh a< >/ "gnp.nideknil/segami"=crs "noci"=ssalc gmi<',
        email: '>a/<moc.kooltuo@drayella> "moc.kooltuo@drayella:otliam"=ferh a< >/ "gnp.liame/segami"=crs "noci"=ssalc gmi<',
        phone: '586 2180 )7151( 94+>/ "gnp.elibom/segami"=crs "noci"=ssalc gmi<'
    };

    const collection = document.querySelectorAll('.blured');
    for (let i = 0; i < collection.length; i++) {
        const elem = collection[i];
        elem.removeEventListener('click', unblur);
        elem.innerHTML = data[elem.dataset.key].split('').reverse().join('');
        elem.classList.remove('blured');
    }
}

function more() {
    const more = document.querySelector('#more');
    more.remove();

    const collection = document.querySelectorAll('.hidden');
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('hidden');
    }
}

const collection = document.querySelectorAll('.blured');
for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', unblur);
}
