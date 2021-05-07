const database = {
    paintColor: [
        { id: 1, type: "Silver", price: 2000.50 },
        { id: 2, type: "Midnight Blue", price: 1800.88 },
        { id: 3, type: "Firebrick Red", price: 2500.55 },
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 3808.00 },
        { id: 2, type: "Charcoal Fabric", price: 2555.00 },
        { id: 3, type: "Black Leather", price: 1800.99 },
    ],
    technology: [
        { id: 1, type: "Basic Package", price: 1000.00 },
        { id: 2, type: "Navigation Package", price: 1200.88 },
        { id: 3, type: "Visibility Package", price: 1400.89 },
        { id: 4, type: "Ultra Package", price: 1688.00 },
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 1500.00 },
        { id: 2, type: "17-inch Pair Radial Black", price: 1688.00 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1700.00 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1750.00 },
    ],
    customOrder: [
        { id: 1, paintColorId: 2, interiorId: 3, technologyId: 4, wheelsId: 4, carTypeId: 1, timestamp: 1509750291},
    ],
    
    orderBuilder: {},
    carType: [
        { id: 1, type: "Car", priceIncrease: 1 },
        { id: 2, type: "SUV", priceIncrease: 1.5 },
        { id: 3, type: "Truck", priceIncrease: 2.25},
    ]
}
export const getCarType = () => {
    return [...database.carType];
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

export const getOrders = () => {
    return [...database.customOrder];
}

// BUILDING ORDER
export const setPaintColor = (id) => {
database.orderBuilder.paintColorId = id;
};
export const setInterior = (id) => {
    database.orderBuilder.interiorId= id;
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id;
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id;
}
export const setCarType = (id) => {
     database.orderBuilder.carTypeId = id;
}

// STORING ORDERS 
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder};
    newOrder.id = [...database.customOrder].pop().id +1;
    newOrder.timestamp = Date.now();
    database.customOrder.push(newOrder);
    database.orderBuilder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
}

