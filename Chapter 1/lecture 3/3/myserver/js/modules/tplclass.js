'use strict'

        function MyClass(str, list) {
            this.str = str;
            this.list = list;

            this.indexs = function(find) {
                var result = [];
                for(var i=0;i<this.str.length; ++i) {
                    if (this.str.substring(i, i + find.length) == find) {
                        result.push(i);
                    }
                }
                return result;
            };


            this.arrayl = this.indexs("{{");
            this.arrayr = this.indexs("}}");

            this.names = function(){
                var result = [];
                for (var i = 0; i < this.arrayl.length; i++){
                    result.push(this.str.substring(this.arrayl[i]+2,this.arrayr[i]));
                }
                return result;
            }

            this.count = function(){
                return (this.list.length - 1);
            };

            this.repeat = function() {
                var arr = [];
                for(var i = 0; i <= this.count();){
                    arr[i++] = this.str;
                }
                return arr;
            };

            this.array = this.repeat();


            this.render = function() {
                for (var i = 0; i < this.list.length; i++){
                    for (var c = 0; c < this.names().length; c++){
                        this.array[i] = this.array[i].replace(this.names()[c], this.list[i][this.names()[c]]);
                    }
                }
                return this.array;
            };

            this.getrender = this.render;

            this.getTpl = function() {
                this.ress = this.getrender().join('');
                this.ress = this.ress.replace(/\{/g, '');
                this.ress = this.ress.replace(/\}/g, '');
                return this.ress;
            };


        }
