import { Injectable } from "@angular/core";
import  {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot} from '@angular/router'
//import {AuthService} from './auth.service'
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from '../firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private auth = getAuth(firebaseApp);
  private router: Router = inject(Router)

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer)=>{
       const desabonner = onAuthStateChanged(this.auth, (user)=>{
        if(user){
          console.log('Utilisateur authentifié:', user);
          observer.next(true);// si l'utilisateur est authentifié on autorise l'accès
        }else{
          observer.next(false)
          console.log('oups vous êtes pas connecté, nous allons vous rediriger')
          this.router.navigate(['/login']) // redirection vers le login si pas connecter
        }
       })
    })
  }
}
