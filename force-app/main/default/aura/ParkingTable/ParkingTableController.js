({
    getSensors : function(component, event) {
        var action = component.get("c.getListSensors");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.sensors", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }

})