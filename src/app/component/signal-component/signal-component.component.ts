import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  templateUrl: './signal-component.component.html',
  styleUrls: ['./signal-component.component.css'],
})
export class SignalComponentComponent {
  firstName: string = 'Mohd';
  lastName: string = 'Asif';

  s_firstName = signal('Haniya');
  s_lastName = signal('Asif');
  quantity = signal<number>(5)
  fullName = this.firstName + ' ' + this.lastName;
  s_fullName = computed(() => this.s_firstName() + ' ' + this.s_lastName());
  doubleCounter = computed(() => this.quantity()*2);
  changeFirstName(fname: any) {
    this.firstName = fname;
  }
  changeLastName(lname: any) {
    this.lastName = lname;
  }
  s_changeFirstName(fname: any) {
    debugger;
    this.s_firstName.set(fname);
  }
  s_changeLastName(lname: any) {
    this.s_lastName.set(lname);
  }
  increaseValue(){
    this.quantity.update((q => q+1));
  }
  decreaseValue(){
    this.quantity.update((q => q-1));
  }
}
