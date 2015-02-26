;(function() {

    var Http = function(options){
        this.response = null;
        this.options = $.extend(this.getDefaults(), options);
        this.call();
    };

    Http.prototype = {

        getDefaults: function()
        {
            return {
                url: "",
                type: "GET",
                data: "",
                dataType: "json"
            }
        },

        call: function()
        {
            this.response = $.ajax({
                type:this.options.type,
                url: this.options.url,
                dataType: this.options.dataType,
                data: this.options.data
            });

            return this;
        },

        error: function(callback)
        {
            this.response.error(callback);
            return this;
        },

        success: function(callback)
        {
            this.response.done(callback);
            return this;
        }

    };

    if (typeof define != 'undefined' && define.hasOwnProperty('amd') && define.amd) { // RequireJS AMD
        define(function(){
            return Http;
        });
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.G4 = typeof G4 != "undefined" ? G4 : {};
        window.G4.Http = Http;
    };

}).call(this);