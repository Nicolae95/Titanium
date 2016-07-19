'use strict'
    var templ;
    var obj;
    var editTemp;
    var editobj;
    var result = '';

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
        result = newtpl.getTpl();
        document.getElementById("results").innerHTML = result;

        var editelements = document.querySelectorAll(".editel");
        var elems = [];
        for(var j=0; j < editelements.length; j++){
            editelements[j].addEventListener("click", function(e)
            {
                 editdatas(e.target.dataset.id)
            });
        }

    }



        function editdatas(id){
            var regs = new RegClass();

            function setObjects(c) {
                editobj = JSON.parse(c);
                regs.trigger('here edit')
            };

            function setEditTemplate (e)  {
                editTemp = e;
                regs.trigger('here edit')
            };

            function forcheck() {
                var count = 0;
                return function () {
                    count++;
                        if(count === 2) {
                           renderEditTpl(editTemp, editobj);
                        count = 0;
                    }
                }
            }

            var checkedit = forcheck();

            regs.regEvent('here edit', function () {
                checkedit();
            })

            get('http://localhost:3333/entry/'+ id, setObjects);
            gettpl('http://127.0.0.1:8080/temp/tpledit.html', setEditTemplate);

            function renderEditTpl(editTemp , editobj){
                var edittpl = new MyClass(editTemp, [editobj]);
                var editresult = '';
                editresult = edittpl.getTpl();
                document.getElementById("results").innerHTML = editresult;

                var editelements = document.querySelector(".edits");
                editelements.addEventListener("click", function(e)
                {
                    editdata(e.target.dataset.id);
                });

            }
        }

         function editdata(id){
            var author = document.getElementById("author").value;
            var title = document.getElementById("title").value;
            var text = document.getElementById("text").value;

            var obj = {
                "EntryId": id,
                "Author": author,
                "Title": title,
                "Text": text,
            }

            var updatedata;

            function updateNew(c) {
                updatedata = c;
            };
            console.log(obj);
            update('http://localhost:3333/entry/', obj, updateNew);
            refreshdata()
        }

        function refreshdata(){
            get('http://localhost:3333/entry/', setObjects);
            gettpl('http://127.0.0.1:8080/temp/tpl.html', setTemplate);

            function rendertpl(temp , obj){
                var newt = new MyClass(temp, obj);
                result = newt.getTpl();
                document.getElementById("results").innerHTML = result;

                var editelements = document.querySelectorAll(".editel");
                var elems = [];
                for(var j=0; j < editelements.length; j++){
                    editelements[j].addEventListener("click", function(e)
                    {
                         editdatas(e.target.dataset.id)
                    });
                }

            }
        }
