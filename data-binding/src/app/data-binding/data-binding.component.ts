import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  urlImagem = 'https://abrilviagemeturismo.files.wordpress.com/2017/12/istock-842960000.jpg?quality=70&strip=info&w=768&h=512&crop=1';
  curtir2 = true;


  getValor() {

    return 2;
  }

  getCurtirCurso() {

    return true;
  }


  constructor() { }

  ngOnInit() {
  }

}
