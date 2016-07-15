'use strict'

        function get(url, succes) {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
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
            xhttp.open('POST', url, true);
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(xhttp.responseText);
                        }
                }
            }
        }

        function deleteO(url, id, success) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(id);
            xhttp.open('DELETE', url, true);
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
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(xhttp.responseText);
                        }
                }
            }
        }
