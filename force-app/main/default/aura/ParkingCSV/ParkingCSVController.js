({
    createRecords: function (component, event, helper) {
        var fileInput = component.find("file").getElement();
        var file = fileInput.files[0];
        alert(file);
        if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            var csv = evt.target.result;
            console.log('@@@ csv file contains'+ csv);
            var result = helper.convertToJSON(component,csv);
            console.log('@@@ result = ' + result);
            console.log('@@@ Result = '+JSON.parse(result));
            helper.createSensor(component,result);
            
        }
        reader.onerror = function (evt) {
            console.log("File reading error!");
        }
    }

    }
    
    
})
