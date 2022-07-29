export interface IDocumentObservable<T> {
  type: 'added' | 'removed' | 'modified';
  newIndex: number;
  oldIndex: number;
  data: T;
}
