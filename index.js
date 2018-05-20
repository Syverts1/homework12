var alienTable = document.querySelector("#alien-table"); 

//function to add given data.js into an html table
function alienData() {
      
      //create header row
      var alienHeader = document.createElement("thead");
      var alienHeaderRow = document.createElement("tr");
      var alienBody = document.createElement("tbody");
      var alienHeaderData = ["date/time", "city", "state","country","shape","comment"];
      
      alienTable.appendChild(alienHeader);
      alienHeader.appendChild(alienHeaderRow);
      alienTable.appendChild(alienBody);
      //alert (alienHeaderData.length)
      for(var i = 0; i <alienHeaderData.length; i++){

          var alienHeaderItem = document.createElement("th");
          if(i==5){
            alienHeaderItem.setAttribute("style", "width: 35%");}
          alienHeaderItem.innerHTML = alienHeaderData[i];
          alienHeaderRow.appendChild(alienHeaderItem);
          //alert(i);
      }

      //create data in header row
      for(var i = 0; i < dataSet.length; i++){
          var alienRow = document.createElement("tr")
          alienBody.appendChild(alienRow);
          
          //add date-time of sighting
          var alienItemDate = document.createElement("td");
          var alienSighting = dataSet[i];

          alienItemDate.innerHTML = alienSighting.datetime;
          alienRow.appendChild(alienItemDate);
          
          //add city of sighting
          var alienItemCity = document.createElement("td");
          alienItemCity.innerHTML = alienSighting.city;
          alienRow.appendChild(alienItemCity);
          
          //add state of sighting
          var alienItemState = document.createElement("td");
          alienItemState.innerHTML = alienSighting.state;
          alienRow.appendChild(alienItemState);
          
          //add country of sighting
          var alienItemCountry = document.createElement("td");
          alienItemCountry.innerHTML = alienSighting.country;
          alienRow.appendChild(alienItemCountry);

                    
          //add shape of sighting
          var alienItemShape = document.createElement("td");
          alienItemShape.innerHTML = alienSighting.shape;
          alienRow.appendChild(alienItemShape);

                    
          //add comment of sighting
          var alienItemComment = document.createElement("td");
          alienItemComment.innerHTML = alienSighting.comments;
          alienRow.appendChild(alienItemComment);
      }
 }

//run function to create alien data table
alienData();



//filter by date/time
 var $submitBtn = document.querySelector("#searchDateTime");

$submitBtn.addEventListener("click", function(){
    var item = document.querySelector("#searchDateTimeInput").value;
    
    var alienBodyData = alienTable.querySelector("tbody").querySelectorAll("tr");
    for(var i = 0; i <alienBodyData.length; i++){
        var alienRow = alienBodyData[i];
        var dateTime = alienRow.querySelector("td").innerHTML

        if(dateTime.indexOf(item) == -1){
            alienRow.style.display = 'none';
        }
        
    //clear input form item
    document.querySelector("#searchDateTimeInput").value = "";
}});

//clear filters on table
var $clearBtn = document.querySelector("#clearSearch");

$clearBtn.addEventListener("click", function(){

    var alienBodyData = alienTable.querySelector("tbody").querySelectorAll("tr");
    for(var i = 0; i <alienBodyData.length; i++){
        var alienRow = alienBodyData[i];
        
        alienRow.style.display = '';
}});
