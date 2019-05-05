#!/usr/local/bin/node

// Load external library used open and write to files on disk.
const fs = require('fs');

//Load external library used parse delimited files.
var parse = require('/usr/local/lib/node_modules/csv-parse/lib/sync');

//Open file for reading
var fileDataA = fs.readFileSync('vlan.txt','utf8');
recordsA = parse(fileDataA, {delimiter: "\t"} );

recordsA.forEach(function(row) {
        ports = row[3].split(",");
        ports.forEach(function(port){
                iosconfig = `
int g${ port }
switchport
switchport mode access
switchport access vlan ${ row[1] }
no shut \n\n\n `;
                console.log(iosconfig);
        });
});

