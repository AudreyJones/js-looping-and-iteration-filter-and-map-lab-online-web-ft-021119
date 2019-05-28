// Code your solution here:
function driversWithRevenueOver(drivers,amount) {
    return drivers.filter(function (driver) {
        return driver.revenue > amount;
    })
}

function driverNamesWithRevenueOver(drivers, amount) {
    let correctDrivers = drivers.filter(function (driver) {
        return driver.revenue > amount;
    })
    return correctDrivers.map(function (driver) {
        return driver.name
    })
}

function exactMatch(drivers,obj) {
    return drivers.filter(function(driver) {
        return obj
    })
}