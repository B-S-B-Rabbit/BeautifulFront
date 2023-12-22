class Carousel {
    constructor() {
        this.items = document.getElementsByClassName('carousel__item');
        this.start = 0;
        this.end = 3;
        //this.visiblePart = this.items.slice(this.start,this.end);
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
                //this.visiblePart = this.items.slice(--this.start, --this.end);
                console.log(event.target.id, this.modifier);
                this.modifier--;
                --this.end;
                --this.start;
                for (let item of this.items) {
                    item.style.left = `${-33.5 * this.modifier}%`
                }
            }
            else return;
        }
        else if (event.currentTarget.id === 'right_arr') {
            if (this.end < this.items.length) {
                //this.visiblePart = this.items.slice(++this.start, ++this.end);
                this.modifier++;
                for (let item of this.items) {
                    item.style.left = `${-33.5 * this.modifier}%`
                }
                this.items[0].style.overflow = 'visible';
                ++this.end;
                ++this.start;
            }
            else return;
        }
    }
}

let carousel = new Carousel();
carousel.onListeners();
