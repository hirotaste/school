import firebase from 'firebase/app';

export interface IFirebaseWhere {
  field: string;
  operator: firebase.firestore.WhereFilterOp;
  value: any;
}
