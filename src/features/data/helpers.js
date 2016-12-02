import store from '../../store';
import * as actions from '../data/actions';

export function updateRecipeName(name) {
  store.dispatch(actions.updateRecipeName(name));
}
