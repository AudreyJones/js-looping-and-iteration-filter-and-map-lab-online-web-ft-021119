import { join } from "path";

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

function exactMatch(drivers,attr) {
    // let key = (Object.keys(attr)).join("")
    // let value = (Object.values(attr)).join("")
    return drivers.filter(function(driver) { //dynamically use key? Because of 'unknown' attr name?
        if (driver.name === attr.name || driver.revenue === attr.revenue) {
        return driver
        }
    })
}

function exactMatchToList(drivers, attr) {
    let objArray = exactMatch(drivers, attr); //return value is an array containing objects.
    return objArray.map(function (driver) { //returning a new array containing only string names
        return driver.name
    })
}