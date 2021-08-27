// jshint esversion:6

// console.log(module);


// module.exports.getDate = getDate; 

// different way of creating fuction 
// and we can use shortcut of module.exports to exoports
exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday : "long",
        day : "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-GB",options);
};


module.exports.getDay = getDay;

function getDay() {
    const today = new Date();
    const options = {
        weekday : "long",
    };
    return today.toLocaleDateString("en-GB",options);
}