import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class SliderComponent {

  slideIndex:number;

  constructor(){
    this.slideIndex = 1;
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}

window.addEventListener('load', function () {
  let slider = new SliderComponent()
  window.setInterval(()=>slider.showSlides(),6000);
});
