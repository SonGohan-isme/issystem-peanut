import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { MatDialog } from '@angular/material/dialog';
import { GuidenPaymentComponent } from 'src/app/guiden-payment/guiden-payment.component'
import { PaymentGuideComponent } from 'src/app/customerwebsite/payment-guide/payment-guide.component';
import { PaymentGuide2Component } from 'src/app/customerwebsite/payment-guide2/payment-guide2.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public common: CommonService, private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(GuidenPaymentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }

  openDialog1() {
    const dialogRef1 = this.dialog.open(PaymentGuideComponent);
    dialogRef1.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef2 = this.dialog.open(PaymentGuide2Component);
    dialogRef2.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }

  exit() {
    this.common.deleteCookie('token_customer');
    this.route.navigate(['login-customerweb']);
  }

}

