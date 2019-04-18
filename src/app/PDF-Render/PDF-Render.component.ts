import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Customer } from '../_model/Customer';
import { DataService } from '../_service/data.service';

@Component({
  selector: 'app-PDF-Render',
  templateUrl: './PDF-Render.component.html',
  styleUrls: ['./PDF-Render.component.css']
})
export class PDFRenderComponent implements OnInit {

  customer: Customer;
  constructor(private d: DataService) { }

  ngOnInit() {
    this.customer = this.d.retrieveCustomer();
  }

  public captureScreen()
  {
    let data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
  
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
