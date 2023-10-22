import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // Add a property to store the authentication state
   private isAuthenticated: boolean = false;

   // Implement your authentication logic here
   // For example, methods for login, logout, and checking authentication status

   // Update the isAuthenticated property when a user is authenticated
   login() {
     // Your authentication logic here
     // Set this.isAuthenticated to true when the user is authenticated
     this.isAuthenticated = true;
   }
  // Update the isAuthenticated property when a user logs out
  logout() {
    // Your logout logic here
    // Set this.isAuthenticated to false when the user logs out
    this.isAuthenticated = false;
  }

  // Provide a method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

