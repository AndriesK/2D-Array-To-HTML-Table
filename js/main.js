System.register(["./tableify"], function (exports_1, context_1) {
    "use strict";
    var tableify_1, json_data;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tableify_1_1) {
                tableify_1 = tableify_1_1;
            }
        ],
        execute: function () {
            json_data = [
                {
                    name: 'andries',
                    surname: 'kloppers'
                },
                {
                    name: 'rhenier',
                    surname: 'kloppers'
                },
                {
                    name: 'pa',
                    surname: 'kloppers'
                },
                {
                    name: 'jaco',
                    surname: 'kloppers'
                },
                {
                    name: 'ma',
                    surname: 'kloppers'
                },
            ];
            tableify_1.tableify(json_data);
        }
    };
});
//# sourceMappingURL=main.js.map