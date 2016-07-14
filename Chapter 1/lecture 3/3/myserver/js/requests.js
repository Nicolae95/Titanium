'use strict'



        function get(url, succes, error) {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    if (xhttp.status === 200) {
                        succes(xhttp.responseText);
                        } else {
                        error();
                    }
                }

            };
        }

        function gett(url) {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.send();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4) {
                    if (xhttp.status === 200) {
                        return JSON.stringify(xhttp.responseText);
                        } else {
                        return alert('Error')
                    }
                }
            }
        }

        function post(url, app) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(app);
            xhttp.open('POST', url, true);
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        return JSON.parse(xhttp.responseText);
                        } else {
                        return alert('Error')
                    }
                }
            }
        }

        function deleteO(url, id, success, error) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(id);
            xhttp.open('DELETE', url, true);
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success();
                        } else {
                        error();
                    }
                }
            }
            return JSON.parse(xhttp.responseText);
        }

        function update(url, id, success, error) {
            var xhttp = new XMLHttpRequest();
            var json = JSON.stringify(id);
            xhttp.open('PUT', url, true);
            xhttp.send(json);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success();
                        } else {
                        error();
                    }
                }
            }
            return JSON.parse(xhttp.responseText);
        }
