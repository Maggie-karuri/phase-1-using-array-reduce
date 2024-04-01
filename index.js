const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate totalBatteries by summing up all the battery counts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries);  
