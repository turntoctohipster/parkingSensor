public with sharing class ParkingTableController {
    @AuraEnabled
    public static List<Sensor__c> getListSensors() {
        List<Sensor__c> listSens = [SELECT  Name,Base_Station__r.Name,Status__c,Sensor_Model__c FROM  Sensor__c];
        return listSens;
    }
}
