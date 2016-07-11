(function() {
    var obj = {};

    obj.each = function each(list, iterator) {
        if (Array.isArray(list)) {
            for (var c = 0; c < list.length; c++) {
                iterator(list[c], c, list);
            }
        } else {
            for (var k in list) {
                iterator(list[k], k, list);
            }
        }
    };

    obj.map = function map(list, iterator) {
        var r = [];
        if (Array.isArray(list)) {
            for (var c = 0; c < list.length; c++) {
                r.push(iterator(list[c], c, list));
            }
        } else {
            for (var k in list) {
                r.push(iterator(list[k], k, list));
            }
        }
        return r;
    };

    obj.find = function find(list, iterator) {
        var r;
        if (Array.isArray(list)) {
            for (var c = 0; c < list.length; c++) {
                if (iterator(list[c])) {
                    r = list[c];
                }
            }
        } else {
            for (var k in list) {
                if (iterator(list[k])) {
                    r = list[k];
                }
            }
        }
        return r;
    };

    obj.filter = function filter(list, iterator){
        var r = [];
        if (Array.isArray(list)) {
            for (var c = 0; c < list.length; c++) {
                if (iterator(list[c])) {
                    r.push(list[c]);
                }
            }
        } else {
            for (var k in list) {
                if (iterator(list[k])) {
                    r.push(list[k]);
                }
            }
        }
        return r;
    };

    obj.contains = function contains(list, value) {
        var bool = false;
        if (Array.isArray(list)) {
            if ((list.indexOf(value) === -1)) {
                bool = false;
            } else {
                bool = true;
            }

        } else {
            for (var key in list) {
                if (list[key] === value) { bool = true;}
            }
        }
        return bool;
    };

    obj.pluck = function pluck(obj , text) {
        var res = [];
        for (var c = 0; c < obj.length; c++) {
            for (var k in obj[c]) {
                if (k === text){
                    res.push(obj[c][k])
                }
            }
        }
        return res;
    };

    obj.values = function values(obj) {
        var res = [];
        for (var k in obj) {
            res.push(obj[k]);
        }
        return res;
    };

    obj.where = function where(obj, properties) {
        var r = [];
        var bool = false;
        for (var c = 0; c < obj.length; c++) {
            for (var k in properties) {
                if (obj[c][k] === properties[k]){
                    bool = true ;
                } else if (obj[c][k] !== properties[k]) {
                    bool = false;
                }
            }
            if (bool) r.push(obj[c]);
        }
        return r;
    };

    obj.findWhere = function findWhere(obj, properties) {
            var r = [];
            for (var c = 0; c < obj.length; c++) {
                var bool = true;
                for (var k in properties) {
                    if (obj[c][k] !== properties[k]) {
                        bool = false;
                    }
                }
                if (bool) {
                    r.push(obj[c]);
                    return r;
                }
            }

        }

    window._ = obj;
})();
