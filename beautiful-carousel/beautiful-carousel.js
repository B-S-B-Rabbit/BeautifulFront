class Carousel {
    constructor() {
        this.items = document.getElementsByClassName('carousel__item');
        this.start = 0;
        this.end = 3;
        this.lArr = document.querySelector('#left_arr');
        this.rArr = document.querySelector('#right_arr');
        this.modifier = 0;
    }
    onListeners() {
        this.lArr.addEventListener('click', this.move.bind(this));
        this.rArr.addEventListener('click', this.move.bind(this));
    }
    move(event) {
        if (event.currentTarget.id === 'left_arr') {
            if (this.start > 0) {
                console.log(event.target.id, this.modifier);
                this.modifier--;
                --this.end;
                --this.start;
                this.hideAround();
                for (let item of this.items) {
                    item.style.left = `${-33.5 * this.modifier}%`
                }
            }
            else return;
        }
        else if (event.currentTarget.id === 'right_arr') {
            if (this.end < this.items.length) {
                this.modifier++;
                ++this.end;
                ++this.start;
                this.hideAround()
                for (let item of this.items) {
                    item.style.left = `${-33.5 * this.modifier}%`
                }
            }
            else return;
        }
    }
    hideAround() {
        for (let i = 0; i < this.items.length; i++) {
            if (i >= this.start && i < this.end) { 
                this.items[i].classList.add('is-visible');
                this.items[i].classList.remove('is-hidden');

              }
            else if (window.getComputedStyle(this.items[i]).getPropertyValue('opacity') == "1") {
                this.items[i].classList.add('is-hidden');
                this.items[i].classList.remove('is-visible');
            }
        }
    }
}

let carousel = new Carousel();
carousel.onListeners();
carousel.hideAround();