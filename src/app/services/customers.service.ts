import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  collectionData,
  docData,
} from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Costumer } from '../interfaces/costumer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersRef: CollectionReference<Required<Costumer>>;
  private customers$: Observable<Required<Costumer>[]>;
  constructor(private afs: Firestore) {
    this.customersRef = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Required<Costumer>>;

    this.customers$ = collectionData(this.customersRef, {
      idField: 'id',
    }).pipe(shareReplay(1));
  }
  add(customer: Omit<Costumer, 'id'>) {
    return addDoc(this.customersRef, customer);
  }

  remove(id: Costumer['id']) {
    const docRef = doc(this.customersRef, id);
    return deleteDoc(docRef);
  }

  update({ id, ...customer }: Required<Costumer>) {
    const docRef = doc(this.customersRef, id);
    return updateDoc(docRef, customer);
  }

  getAll() {
    return this.customers$;
  }

  getById(id: string) {
    const docRef = doc(this.customersRef, id);
    return docData(docRef, {
      idField: 'id',
    });
  }
}
