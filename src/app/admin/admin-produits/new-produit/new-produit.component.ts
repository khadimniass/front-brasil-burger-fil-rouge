import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {
  url:string ="http://127.0.0.1:8000/api/";
  imageSrc: string="";
  typeProduit:string = "";

  myForm = new FormGroup({
    nom:new FormControl(''),
    description:new FormControl(''),
    prix:new FormControl(''),
    image:new FormControl(''),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private http: HttpClient,
              private router:Router
              ) { }

  ngOnInit(): void {
    const reader = new FileReader()
  }
  get f(){
    return this.myForm.controls;
  }
  onFileChange(event:any) {
   // console.log(event.target.files)
    if(event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      if(event.target.files[0].type.slice(0,5)!="image"){   // = image/jpeg
        Swal.fire({
          html:'veillez choisir une image',
          icon:"warning",
          timer:2500
        })
        setTimeout(function(){
          window.location.reload();
        }, 2000);
        return ;
      }
      else if(event.target.files[0].type.slice(0,5)=="image") {
        reader.onload = (event: ProgressEvent) => {
          this.myForm.value.image = (<FileReader>event.target).result as string
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }

  choisirProduit(produit:any){
    this.typeProduit = produit.value
  }

  submit() {
    console.log(this.typeProduit)
    if (this.typeProduit=='' || this.typeProduit=='selectionner le produit à insérer'){
      Swal.fire({
        html:'veillez choisir le type de produit à insérer',
        icon:'error',
        timer:2500
      })
      return;
    }
    this.http.post(this.url+this.typeProduit , this.myForm.value)
      .subscribe(res => {
        console.log(res);
        Swal.fire({
          html:this.typeProduit +' ajouté avec success',
          icon:'success'
        })
      })
    this.router.navigateByUrl('');
  }
}
