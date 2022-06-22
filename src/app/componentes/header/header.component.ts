import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,
   public auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
logout(){
 this.auth.logout({returnTo: document.location.origin})
 this.router.navigate(['/home'])  
}
}
