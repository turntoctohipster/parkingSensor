public with sharing class UploadSensorsFromFile {
    @AuraEnabled
    public static string insertSensors(String str)
    {
        String response ='';
        List<Sensor__c> sensorList = new List<Sensor__c>();
        List<tempSensor> data = (List<tempSensor>)JSON.deserialize(str, List<tempSensor>.class);
        for(tempSensor ts: data)
        {
            Sensor__c sens =new  Sensor__c();
            sens.Name=ts.id;
            sens.Base_Station__c=ts.baseStation;
            sens.Status__c=ts.status;
            sens.Sensor_Model__c=ts.model;
            sensorList.add(sens);
        }
        if(sensorList.size() > 0)
        {
            try {
                insert sensorList;
                response = 'SUCCESS';
            }
            catch(Exception ex)
            {
                response = 'ERROR';
            }
        }
        return response;
    }
}
