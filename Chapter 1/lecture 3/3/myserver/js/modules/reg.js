'use strict'

function RegClass() {
    this.array = [];
    this.regEvent = function(data, fun) {
        this.array.push({data: arguments[0],
                    fun : arguments[1]});
    };
    this.trigger = function(data){
        var res = _.where(this.array, {data: arguments[0]});
        res[0].fun();
    };
    this.delete = function(data){
        var obj = {data: arguments[0]}
        for (var i = 0; i < this.array.length; i++){
            if (this.array[i].data === obj.data){
                this.array.splice(i,1);
            }
        }
    };
}
