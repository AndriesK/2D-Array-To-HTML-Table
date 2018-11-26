import { obj } from "./index";

let objArray = [
]



export function tableify(json: obj[]) {
    let activeKey;
    let iter = 0;
    for (let i = 0; i < json.length; i++) {
        for (const key in json[i]) {
            if (iter < count(json[i]) + 1) {
                objArray.push({ key: json[i][key]});
                iter++;
                break;
            }
            else if (iter === count(json[i]) - 1) {
                iter = 0;
            }
        }
    }
    //console.log(objArray);

    var items = [
        ["Mon", "Tue", "Wed", "Thu", "Fri"],
        //["Name", "Surname", "Initials"],
        ["Science", "Maths", "Science", "Maths", "Arts"],
        ["Social", "History", "English", "Social", "Sports"],
        ["Lunch"],
        ["Science", "Maths", "Science", "Maths"],
        ["Social", "History", "English", "Social"],
    ];
    //console.log(items[0][0]); // 1
    //console.log(items);

    
    /*myTable.innerHTML =
    '<caption>Kloppers Family</caption>' +
    '<colgroup>' +
    '<col span="2">' +
    '<col style="border: 2px solid black">' +
    '</colgroup>' +
    '<thead>' +
    '<tr>' +
        `<th scope="col">${items[0][0]}</th>` +
        `<th scope="col">${items[0][1]}</th>` +
        `<th scope="col">${items[0][2]}</th>` +
    '</tr>'*/

    function getMaxDataLength(data) {
        // ! Data: Array
        let max = 0;
        for (let y = 0; y < data.length; ++y) {
            if (data[y].length > max) {
                max = data[y].length;
            }
        }
        return max;
    }

    function populateTable(jsonData) {
        let skipItter = 0;
        // let happen = false;
        const myTable = document.createElement('table');
        document.querySelector('body').appendChild(myTable);
        const tHead = document.createElement('thead');
        const tBody = document.createElement('tbody');
        let tableRow = document.createElement('tr');
        myTable.appendChild(tHead);
        tHead.appendChild(tableRow);
        myTable.appendChild(tBody);
        let j = 0;
        let output = document.createElement('div');
        let textarea = document.createElement('textarea');
        textarea.style.marginTop = "500px";
        myTable.style.margin = "auto";
        myTable.style.marginTop = "100px";
        output.appendChild(textarea);
        document.querySelector('body').appendChild(output);

        for (let i = 0; i < jsonData.length; ++i) {
            //console.log('I:', i + '; J:', j);
            let tableRowBody = document.createElement('tr');
            while (j < jsonData[i].length) {
                tBody.appendChild(tableRowBody);
                if (i === 0) {
                    // Setup Keys
                    let tableHeader;
                    if (jsonData[i][j].length < 1 || jsonData[i][j] === '&EMPTY&') {
                        tableHeader = document.createElement('td');
                        tableHeader.setAttribute('colspan', 2);
                        tableHeader.textContent = '';
                    }
                    else {
                        tableHeader = document.createElement('th');
                        tableHeader.textContent = jsonData[i][j];
                        tableHeader.setAttribute('scope', 'col');
                    }
                    tableHeader.classList.add('col');
                    tableRow.appendChild(tableHeader);
                }
                // if (/*i === 3  && !happen */ jsonData[i].length < getMaxDataLength(jsonData) ) {
                //     // happen = true;
                //     console.log('HAPPEN', i, j);
                //     let td = document.createElement('td');
                //     td.setAttribute('colspan', `${getMaxDataLength(jsonData)+1 - jsonData[i].length}`);
                //     td.setAttribute('align', 'center');
                //     td.textContent = jsonData[i][j];
                //     tableRowBody.appendChild(td);
                // }
                if (j === 0 && i === 0 && jsonData[0].indexOf('&EMPTY&') > -1) {
                    // rowspan="4" colspan="2" scope="rowgroup"
                    let th1 = document.createElement('th');
                    th1.textContent = '';
                    th1.setAttribute('rowspan', '4');
                    th1.setAttribute('colspan', '2');
                    th1.setAttribute('scope', 'rowgroup');
                    tableRowBody.appendChild(th1);
                }
                else if (jsonData[i][j] === '&EMPTY&')  {
                    skipItter = skipItter + 2;
                    let td = document.createElement('td');
                    td.textContent = '';
                    tableRowBody.appendChild(td);
                }
                else {
                    if (/*i === 3  && !happen */ jsonData[i].length < getMaxDataLength(jsonData) ) {
                        // happen = true;
                        console.log('HAPPEN', i, j);
                        let td = document.createElement('td');
                        td.setAttribute('colspan', `${getMaxDataLength(jsonData)+1 - jsonData[i].length}`);
                        td.setAttribute('align', 'center');
                        td.textContent = jsonData[i][j];
                        tableRowBody.appendChild(td);
                    }
                    else if (i > 0/* && i !== 3*/) {
                        let td = document.createElement('td');
                        td.textContent = jsonData[i][j];
                        tableRowBody.appendChild(td);
                    }
                }
                j = j + 1;
            }
            j = 0;
        }
        textarea.innerHTML = myTable.outerHTML;
    }

populateTable(items);

};

function count(obj) {
    return Object.keys(obj).length;
}

  