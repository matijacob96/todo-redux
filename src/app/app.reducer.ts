import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filtroReducer } from './todos/filtro/filtro.reducer';
import { filtrosValidos } from './todos/filtro/filtro.actions';


export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer,
}

