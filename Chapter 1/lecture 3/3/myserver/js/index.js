'use strict'
    var templ;
    var obj;

    var reg = new RegClass();

    function setObjects(c) {
        obj = JSON.parse(c);
        reg.trigger('here')
    };

    function setTemplate (e)  {
        templ = e;
        reg.trigger('here')
    };


    function c() {
        var count = 0;
        return function () {
            count++;
                if(count === 2) {
                   rendertpl(templ, obj);
                count = 0;
            }
        }
    }

    var check = c();

    reg.regEvent('here', function () {
        check();
    })


    get('http://localhost:3333/entry/', setObjects);
    gettpl('http://127.0.0.1:8080/temp/tpl.html', setTemplate);


    function rendertpl(temp , obj){
        var newtpl = new MyClass(temp, obj);
        var result = '';
        result = newtpl.getTpl();
        document.getElementById("results").innerHTML = result;
        console.log(result);
    }
