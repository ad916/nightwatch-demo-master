exports.command = function(itemName, callback) {
    var self = this;

    this
        .setValue('#search', itemName);

    if( typeof callback === "function"){
        callback.call(self);
    }

    return this;
};