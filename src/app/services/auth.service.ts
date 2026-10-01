import { Injectable, signal } from "@angular/core";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,onAuthStateChanged, User} from "firebase/auth";
import { firebaseApp } from "../firebase";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService{
    // getAuth(...) récupère le "module d'authentification" de ton projet Firebase.
  private auth = getAuth(firebaseApp)
  // Le signal contient l'utilisateur connecté, ou null si personne.
  utilisateur = signal<User |null>(null)

  constructor(){
    onAuthStateChanged(this.auth, (user)=>{
      this.utilisateur.set(user)
    })
  }

  estConnecte(): Observable<boolean>{
    return new Observable<boolean>((observer)=>{
      const desabonner = onAuthStateChanged(this.auth, (user)=>{
        observer.next(user!==null)
        observer.complete()
      })
      return desabonner
    })
  }

  // inscription
  inscription(email: string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  // connexion
  connexion(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  //deconnexion
  deconnexion(){
    return signOut(this.auth)
  }


}
