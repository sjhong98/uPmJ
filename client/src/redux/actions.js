export const updateData2 = (item) => {
    return {
        type: 'UPDATE_DATA2',
        payload: item,
    };
};

export const updateData3 = (item) => {
    return {
        type: 'UPDATE_DATA3',
        payload: item,
    };
};

export const updateData4 = (item) => {
    return {
        type: 'UPDATE_DATA4',
        payload: item,
    };
};

export const updateData5 = (item) => {
    return {
        type: 'UPDATE_DATA5',
        payload: item,
    };
};

export const updateGroupName = (item) => {
    return {
        type: 'GROUP_NAME',
        payload: item,
    }
}

export const updateGroupDesc = (item) => {
    return {
        type: 'GROUP_DESC',
        payload: item,
    }
}

export const createdGroup = (item) => {
    return {
        type: 'CREATED_GROUP',
        payload: item,
    }
}

export const setCode = (item) => {
    return {
        type: 'SET_CODE',
        payload: item,
    }
}

export const setTripCardClicked = (item) => {
    return {
        type: 'SET_TRIP_CARD_CLICKED',
        payload: item,
    }
}

export const setGroupMember = (item) => {
    return {
        type: 'SET_GROUP_MEMBER',
        payload: item,
    }
}