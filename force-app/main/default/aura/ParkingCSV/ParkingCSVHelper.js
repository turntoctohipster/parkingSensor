({
    convertToJSON: function (component,csv) {

        var array = []; 
        array =  csv.split('\n');
        array.pop();
        var jsonObj = [];
        var headers = array[0].split(',');
        for(var i = 1; i < array.length; i++) {
            var data = array[i].split(',');
            var obj = {};
            for(var j = 0; j < data.length; j++) {
                obj[headers[j].trim()] = data[j].trim();
            }
            jsonObj.push(obj);
        }
        var json = JSON.stringify(jsonObj);
        return json;  
    },
    
    createSensor : function (component,jsonstr){

    var action = component.get("c.insertSensors");
        action.setParams({
                "str" : jsonstr
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {  
            alert("Sensors Inserted Succesfully"); 
            var childCmp=component.find("ParkingTableComponent");   
            childCmp.getSensorsTable();
                }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        }); 
        
        $A.enqueueAction(action);    
        
}


})
