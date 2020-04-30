function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jsonObj = JSON.parse(this.responseText);
      var summary = jsonObj.data["unofficial-summary"][0];
      var regionalData = jsonObj.data.regional

      // document.getElementById("demo").innerHTML = totalStr + recoveredStr + activeStr + deathsStr;
      var table = document.getElementById("myTable");
      document.getElementById("myContent").style.padding = "10px 100px 10px 100px";
      for (let i = regionalData.length-1; i>=0 ; i--) {
        const data = regionalData[i];
        var row = table.insertRow(0);
        var stateName = row.insertCell(0);
        var confirmedCases = row.insertCell(1);
        var recoveredCases = row.insertCell(2);
        var totalDeaths = row.insertCell(3);
        stateName.innerHTML = data.loc;
        confirmedCases.innerHTML = data.confirmedCasesIndian;
        recoveredCases.innerHTML = data.discharged;
        totalDeaths.innerHTML = data.deaths;
      }
      var cnfrmElem = document.getElementById("totalConfirmed");
      var rcvrdElem = document.getElementById("totalRecovered");
      var deathsElem = document.getElementById("totalDeaths");
      cnfrmElem.innerHTML = summary.total
      rcvrdElem.innerHTML = summary.recovered
      deathsElem.innerHTML = summary.deaths

    }
  };
  xhttp.open("GET", "https://api.rootnet.in/covid19-in/stats/latest", true);
  xhttp.send();
}
loadDoc();

