'use strict'

function sentdata(){
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;
    var obj = {
        "Author": author,
        "Title": title,
        "Text": text
    }

    // var a = document.createElement('div');
    // var b = append.child(a);
    var newdata;

    function setNew(c) {
        newdata = c;
    };
    console.log(obj);
    post('http://localhost:3333/entry/', obj, setNew);

}
