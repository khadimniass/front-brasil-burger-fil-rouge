import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createImage(event:any) {
    let img = document.createElement('img');
    img.className="img-account-profile rounded-circle mb-2";
    img.src = URL.createObjectURL(event.target.files[0])
    // @ts-ignore
    document.getElementById('placeImage').append(img)
    // placer l'élément dans un div
  }
}
