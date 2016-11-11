
import { ActionReducer, Action } from '@ngrx/store';

export const GETFORTUNES = 'GETFORTUNES';
export const ADDFORTUNE = 'ADDFORTUNE';


// export interface State {
//   list:Array<any>
// }

// const initialState:State = {
//   list: []
// }



export const fortuneReducer: ActionReducer<any> = (state = [], action: Action) => {
  

  switch (action.type) {
        case GETFORTUNES:
            return state;
        case ADDFORTUNE:

            console.log('state is: ', [...state, action.payload]);
            // state.concat(action.payload);

            return [...state, action.payload];
        default:
            return state;
    }

}
