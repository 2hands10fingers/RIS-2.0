function getChecked() {
    var checkboxes = document.getElementsByClassName('checkbox');

    var checked = [];
    for (var i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            checked.push(checkboxes[i]);
            console.log(checked); 
        }
    }

    return checked;

    createZips();
}

function createZips() {
    var zipFilename = 'zipFilename.zip';
    var urls = getChecked().map(function (checkbox) {
        return checked.value;
    });

    for(var i = 0; i < checked.length; i++){
        var urls = urls + checked[i].value;
        console.log(urls);
        // JSZIP
        var zip = new JSZip();
        var count = 0;
        var zipFilename = 'zipFilename.zip';
        urls.prototype.forEach(function(url){
            var filename = 'filename';
            // loading a file and add it in a zip file
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if(err) {
                    throw err; // or handle the error
                }
                zip.file(filename, data, {binary:true});
                count++;
                //  if (count == urls.length) {
                    //    var zipFile = zip.generate({type: 'blob'});
                    //    saveAs(zipFile, zipFilename);
                    //  }
                if (count == urls.length) {
                    zip.generateAsync({type:'blob'}).then(function(content) {
                        saveAs(content, zipFilename);
                    });
                }
            });
        });
    }
}
