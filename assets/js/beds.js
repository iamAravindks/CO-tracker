function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
  .then((res) => res.json())
  .then((data) => {
    data.data.regional.map((obj) => {
      document.getElementById("data").innerHTML += `
                    <tr>
                        <td>${obj.state}</td>
                        <td>${obj.ruralBeds}</td>
                        <td>${obj.urbanBeds}</td>
                        <td>${obj.totalBeds}</td>
                        <td>${obj.totalHospitals}</td>
                        <td>${convert(obj.asOn) || "__"}</td>
                        
                        
                    </tr>
                `;
    });
  })
  .catch((e) => {
    console.log(e);
  });
