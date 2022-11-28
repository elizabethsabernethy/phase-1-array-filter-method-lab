// Code your solution here
function findMatching(drivers, passedName){
    return drivers.filter(function(name){
        return name.toLowerCase() === passedName.toLowerCase()
    })
}

function fuzzyMatch(drivers, passedName){
    return drivers.filter(function(name){
        return name.startsWith(passedName);
    })
}

function matchName(drivers, passedName){
return drivers.filter(function(driver){
    return driver.name === passedName;
})
}