const database = {
    paintColor: [

    ],
    interior: [

    ],
    technology: [

    ],
    wheels: [

    ],
    customOrder: [

    ],
    
    orderBuilder: {},
}

export const getPaintColor = () => {
    return [...database.paintColor];
}

export const getInterior = () => {
    return [...database.interior];
}

export const getTechnology = () => {
    return [...database.technology];
}

export const getWheels = () => {
    return [...database.wheels];
}

// BUILDING ORDER
export const setPaintColor = (id) => {
database.orderBuilder.paintColorId = id;
};
export const setInterior = (id) => {
    database.orderBuilder.interiorId= id;
}
export const setTechology = (id) => {
    database.orderBuilder.technologyId = id;
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id;
}

// STORING ORDERS 
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder};
    newOrder.id = [...database.customOrder].pop().id +1;
    newOrder.timestamp = Date.now();
    database.orderBuilder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
}

