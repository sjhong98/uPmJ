import action from './actions.js';

const initialState = {
    data2: [],
    data3: [],
    data4: [],
    data5: []
}

const dataReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'UPDATE_DATA2' :
            return {
                data2: action.payload,
            };
        
        default :
            return state;
    }
}

export default dataReducer;