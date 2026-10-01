import { Component,inject,signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { signInWithEmailAndPassword } from 'firebase/auth';


@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(AuthService)
  private router = inject(Router)
   email = signal<string>('');
   password = signal<string>('');
   errorMessage = signal<string>('')
   isLoading = signal<boolean>(false)


   async onLogin():Promise<void>{
       const userEmail= this.email().trim()
       const userPassword = this.password().trim()
       if(!userEmail || !userPassword){
        this.errorMessage.set('Veuillez remplir tous les champs.');
        return;
       }
       try {
        this.isLoading.set(true);
        this.errorMessage.set('')

        await this.auth.connexion( userEmail, userPassword);
        await this.router.navigate(['/dashboard'])
       } catch (error:any) {
        this.errorMessage.set(this.formatFirebaseError(error.code))
       } finally{
        this.isLoading.set(false)
       }
   }

      private formatFirebaseError(code: string): string {
        switch (code) {
          case 'auth/invalid-credential':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            return 'Email ou mot de passe incorrect.';
          case 'auth/too-many-requests':
            return 'Trop de tentatives échouées. Réessayez plus tard.';
          default:
            return 'Une erreur est survenue lors de la connexion.';
        }
      }






}
