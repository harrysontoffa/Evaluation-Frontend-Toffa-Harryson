import { Component,inject,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink  } from '@angular/router';
//import { createUserWithEmailAndPassword } from 'firebase/auth';



@Component({
  imports: [FormsModule,RouterLink],
  selector: 'app-sign-in',
  styleUrl: './sign-in.css',
  templateUrl: './sign-in.html',
})
export class SignIn {
  private auth = inject(AuthService)
  private router = inject(Router)
   email = signal<string>('');
   password = signal<string>('');
   confPassword = signal<string>('')
   errorMessage = signal<string>('')
   isLoading = signal<boolean>(false)

   async signIn():Promise<void>{
    const userEmail = this.email().trim()
    const userPassword = this.password().trim()
    const userConfPassword = this.confPassword().trim()
    if(!userEmail || !userConfPassword){
      this.errorMessage.set("Veuillez rempplir tous les champs")
      return
    }
    else if (userConfPassword!==userPassword){
      this.errorMessage.set('les deux mots de passe doivent etre identique')
      return
    }
    try {
      this.isLoading.set(true)
      this.errorMessage.set('')
      await this.auth.inscription(userEmail, userPassword);
      await this.router.navigate(['/dashboard'])

    } catch (error:any) {
      this.errorMessage.set(this.formatFirebaseError(error.code))

    } finally{
      this.isLoading.set(false)
    }


   }

   private formatFirebaseError(code: string): string {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Un compte existe déjà avec cette adresse email.';
    case 'auth/invalid-email':
      return "L'adresse email n'est pas valide.";
    case 'auth/weak-password':
      return 'Le mot de passe est trop faible (6 caractères minimum).';
    case 'auth/operation-not-allowed':
      return "L'inscription par email n'est pas activée.";
    case 'auth/network-request-failed':
      return 'Problème de connexion réseau. Vérifiez votre connexion internet.';
    case 'auth/too-many-requests':
      return 'Trop de tentatives. Réessayez plus tard.';
    default:
      return "Une erreur est survenue lors de l'inscription.";
  }
}

}
