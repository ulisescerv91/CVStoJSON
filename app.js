const CSVToJSON = require('csvtojson');
const JSONToCSV = require('json2csv')
const FileSystem = require('fs')

let dataJSON = []
CSVToJSON().fromFile('./source.csv')
    .then(source => {
        source.map(item =>{
            dataJSON.push({
                ntuser:item.ID.trim(),
                download:false
            })
        })
    })
    .then( () =>{
        var dictstring = JSON.stringify(dataJSON);
        FileSystem.writeFile("ntuser.json", dictstring, (err,result)=>{
            if(err) console.log('error', err);
        });
    })