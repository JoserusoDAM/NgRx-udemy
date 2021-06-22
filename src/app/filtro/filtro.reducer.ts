import { Action, createReducer, on } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Actions>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
