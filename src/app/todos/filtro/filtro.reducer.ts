import { createReducer, on } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import * as actions from './filtro.actions';

export const initialState: actions.filtrosValidos = 'todos';

const _filtroReducer = createReducer<actions.filtrosValidos, Actions>(
    initialState,
    on( actions.setFiltro, (state: actions.filtrosValidos, { filtro }) => filtro ),
);

export function filtroReducer(state, action) {
    return _filtroReducer(state,action);
}