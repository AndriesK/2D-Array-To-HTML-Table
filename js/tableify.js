System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function tableify(json) {
        for (var i = 0; i < json.length; ++i) {
            if (typeof json[i] === 'object') {
                for (var key in json[i]) {
                    if (json[i].hasOwnProperty(key)) {
                        elementsToTable(key, json[i][key]);
                    }
                }
            }
        }
        function elementsToTable(headers, data) {
            console.log(headers, data);
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            var td = document.createElement('td');
            th.textContent = headers;
            td.textContent = data;
        }
    }
    exports_1("tableify", tableify);
    return {
        setters: [],
        execute: function () {
            ;
        }
    };
});
//# sourceMappingURL=tableify.js.map