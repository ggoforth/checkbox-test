import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data: Observable<any> = of([
    {
      name: 'App should allow for users to login',
      desc: 'The app should allow for users to login to the application.',
      abbrv: 'L',
      epics: [
        {desc: 'Should provide a login form', hours: 4},
        {desc: 'Should provide a login api endpoint', hours: 6}
      ]
    },

    {
      name: 'The application will allow users to securely log in.',
      desc: 'The web application will provide a login page for users to securely access and edit their profile.',
      abbrv: 'LP',
      epics: [
        {desc: 'The login page form will include an email and a password field.', hours: 4},
        {desc: 'Users will be able to create a new account from the login page.', hours: 6},
        {desc: 'Users will be able to recover or reset their password from the login page.', hours: 2}
      ]
    },
    {
      name: 'The application will allow users to reset their forgotten password.',
      desc: '',
      abbrv: 'RP',
      epics: [
        {desc: 'The reset password form will contain a single field for users to input their email.', hours: 4},
        {desc: 'The application will email a link with instructions on how to reset a password.', hours: 6},
        {desc: 'The reset password link will redirect users to a form with a new password and verify password field', hours: 2}
      ]
    },
    {
      name: 'The application will allow users to reset their forgotten password.',
      desc: 'Providers will be able to purchase subscriptions through the web application. The web application will accept payment in the form of Stripe Connect for all major credit/debit cards.',
      abbrv: 'PP',
      epics: [
        {
          desc: 'Shift3 will leverage Stripe Connect as the third-party payment processing software to provide all credit card processing and PCI Compliance.',
          hours: 3
        },
      ]
    },
  ]);

  constructor() {
  }

  getData() {
    return this.data;
  }

}
