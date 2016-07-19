'use strict'

        function get(url, succes) {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    if (xhttp.status === 200) {
                        succes(xhttp.responseText);
                        //console.log(succes(xhttp.responseText));
                        }
                }

            };
        }


        function gettpl(url, succes) {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    if (xhttp.status === 200) {
                        succes(xhttp.responseText);
                        }
                }
            }
        }

        function post(url, app, success) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(app);
            console.log(json);
            xhttp.open('POST', url, true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(xhttp.responseText);
                    } else {
                        console.log(xhttp.responseText);
                    }
                }
            }
        }

        function deleteO(url, id, success) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(id);
            xhttp.open('DELETE', url, true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(xhttp.responseText);
                        }
                }
            }
        }

        function update(url, id, success) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(id);
            xhttp.open('PUT', url, true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(xhttp.responseText);
                        }
                }
            }
        }
