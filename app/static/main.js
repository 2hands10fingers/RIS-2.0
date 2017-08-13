'use strict';
function getChecked(){
  var checkboxes = document.getElementsByClassName("checkbox");
  var checked = [];
    for (var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked){
        checked.push(checkboxes[i]);
        // console.log(checked);
      }
    }
    var urls = [];
    for(var i = 0; i < checked.length; i++){
      // var urls = urls + checked[i].value;
      // urls.push(urls);
      urls.push("'" + checked[i].value + "'" )
      console.log(urls);
    // }
// JSZIP

    var zip = new JSZip();
    var count = 0;
    var zipFilename = "zipFilename.zip";

      urls.forEach(function(url){
      var filename = "filename";
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, function (err, data) {
         if(err) {
            throw err; // or handle the error
         }
         zip.file(filename, data, {binary:true});
         count++;
        //  if (count == urls.length) {
        //    var zipFile = zip.generate({type: "blob"});
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
// var zip = new JSZip();
// var promise = null;
//   if (JSZip.support.uint8array) {
//     promise = zip.generateAsync({type : "uint8array"});
//   } else {
//     promise = zip.generateAsync({type : "string"});
//   }

// download(zip, "test" )
// function downloadNow() {
//   var zip = new JSZip();
//   var folderName = zip.folder("Reddit Images");
//   // var fileCollection = "SOMETHING GOES HERE IDUNNO";
//   var fileCompressed = folderName.file(urls);
//   //  downloading
//     download(fileCompresed, urls, null);
// }


// var zip = new JSZip();
// var count = 0;
// var zipFilename = "zipFilename.zip";
// var urls = [
//  'http://image-url-1',
//  'http://image-url-2',
//  'http://image-url-3'
// ];
//
