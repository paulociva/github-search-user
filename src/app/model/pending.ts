import {Observable} from 'rxjs';
import {LoadingStatus} from './loading-status.enum';

export interface Pending<T> {
  data: Observable<T>;
  status: Observable<LoadingStatus>;
}
