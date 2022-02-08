import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { brand, photo, name } from '../consts/filling';
import { PeriodicElement } from '../interfaces/table-content';
import { TableDataSource } from './table-data-source';

@Injectable({
  providedIn: 'root'
})
export class TabldeDateMockService implements TableDataSource{
  public photoInitial: string[];
  public nameInitial: string[];
  public brandInitial: string[];

  public photoForTable: string[] = [];
  public nameForTable: string[] = [];

  public numberItemArray: number;
  public arrayForRender: PeriodicElement[];

  public startDate = new Date(2019, 0, 1);
  public endDate = new Date(2021, 11, 31);
  public differentDay =  (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24);

constructor() {

  this.photoInitial = photo;
  this.nameInitial = name;
  this.brandInitial = brand;
  this.arrayForRender = [];
  this.numberItemArray = 200;

}

getNumber(min: number, max: number): number {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  if (min < 0 || max < 0) {
    return 0
  }
  if (min >= max) {
    return 0;
  }
  return Number(randomNumber.toFixed());
};

getElement(arrayInitial:string[]):string {
return arrayInitial[this.getNumber(0, arrayInitial.length - 1)]
}

getDate(): string {

  let randomDayInPeriod = this.getNumber(0, this.differentDay);
  let randomDate = new Date (((this.endDate.getTime() / (1000 * 60 * 60 * 24)) + randomDayInPeriod) * (1000 * 60 * 60 * 24));
  return String(randomDate.getDate()) + '-' + String(randomDate.getMonth()) + '-' + String(randomDate.getFullYear())
}

createElement(): PeriodicElement {
  return {
    selected: false,
    name: this.getElement(this.nameInitial),
    id: this.getNumber(0, 999999),
    photo: this.getElement(this.photoInitial),
    brand: this.getElement(this.brandInitial),
    price: this.getNumber(100, 1000),
    oldPrice: this.getNumber(100, 1000),
    date: this.getDate(),
    availability: Boolean(this.getNumber(0, 1))
  }
    }

  getProducts(): Observable<PeriodicElement[]>{
    return of(Array.from({length: 200}, () => this.createElement()))
  }


}
// {selected: false, name: 'Hydrogen', id: 10079, photo: '/assets/img1.jpeg', brand: 'sumsung', price: 123, oldPrice: 199, date: '12-11-2021', availability: true},


// '/assets/img1.jpeg'



// this.arrayForRender[i].selected = false;
// this.arrayForRender[i].name = this.getElement(this.nameInitial);
// this.arrayForRender[i].id = i;
// this.arrayForRender[i].photo = this.getElement(this.photoInitial);
// this.arrayForRender[i].brand = this.getElement(this.brandInitial);
// this.arrayForRender[i].price = this.getNumber(100, 1000, 0);
// this.arrayForRender[i].oldPrice = this.getNumber(100, 1000, 0);
// this.arrayForRender[i].date = this.getDate();
// this.arrayForRender[i].availability = Boolean(this.getNumber(0, 1, 0));



// Создание элемента 
// createElement(i: number): PeriodicElement {
//   let newElement: PeriodicElement = firstValueElement;
//     newElement.selected = false;
//     newElement.name = this.getElement(this.nameInitial);
//     newElement.id = i;
//     newElement.photo = this.getElement(this.photoInitial);
//     newElement.brand = this.getElement(this.brandInitial);
//     newElement.price = this.getNumber(100, 1000, 0);
//     newElement.oldPrice = this.getNumber(100, 1000, 0);
//     newElement.date = this.getDate();
//     newElement.availability = Boolean(this.getNumber(0, 1, 0));

//   return newElement
// }



// Универсальная функция рандомного числа
// getNumber(min: number, max: number, timeSign: number): number {
//   const randomNumber = min - 5 * Math.pow(10, -1 - timeSign) + Math.random() * (max - min + Math.pow(10, - timeSign));
//   if (min < 0 || max < 0) {
//     return 0
//   }
//   if (min >= max) {
//     return 0;
//   }
//   return Number(randomNumber.toFixed(timeSign));
// };