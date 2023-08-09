const initialState = {
    data2: [{contentId:1, title:'day 1', index:0}],
    data3: [{contentId:2, title:'day 2', index:0}],
    data4: [{contentId:3, title:'day 3', index:0}],
    data5: [{contentId:4, title:'day 4', index:0}],
    groupName: "",
    groupDesc: "",
    createdGroup: false,    
    code: "",
    tripCardClicked: false,
}

const dataReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_CODE' :
            return {
                ...state,
                code: action.payload,
            }

        case 'CREATED_GROUP' :
            return {
                ...state,
                createdGroup: action.payload,
            }

        case 'GROUP_NAME' :
            return {
                ...state,
                groupName: action.payload,
            };

        case 'GROUP_DESC' :
            return {
                ...state,
                groupDesc: action.payload,
            }

        case 'UPDATE_DATA2' :
            return {
                ...state,
                data2: action.payload,
            };

        case 'UPDATE_DATA3' :
            return {
                ...state,
                data3: action.payload,
            };

        case 'UPDATE_DATA4' :
            return {
                ...state,
                data4: action.payload,
            };

        case 'UPDATE_DATA5' :
            return {
                ...state,
                data5: action.payload,
            };
        
        default :
            return state;
    }
}

export default dataReducer;