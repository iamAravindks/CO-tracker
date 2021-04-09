fetch("https://corona.lmao.ninja/v2/countries/India")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("info").innerHTML += `

                <div class="card-header">
                <h4 class="card-title">Latest Highlights about India</h4>
                </div>
                <div class="card-body ">
                  <h5 class="card-title">Total Cases : ${data.cases}</h5>
                    <p class="card-text">Today Cases : ${data.todayCases}</p>
                    <p class="card-text">Recovered : ${data.recovered}</p>
                    <p class="card-text">Today Deaths : ${data.todayDeaths}</p>
                    <p class="card-text">Deaths : ${data.deaths}</p>
                   
                </div>
                <div class="card-footer text-muted">
                    <p> Last Refreshed : ${Date(data.lastRefreshed)} </p>
                    <p> Last Updated : ${Date(data.lastOriginUpdate)} </p>
                </div>


            `;
  })
  .catch((e) => {
    console.log(e);
  });

fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
  .then((res) => res.json())
  .then((data) => {
    data.data.statewise.forEach((obj) => {
      document.getElementById("data").innerHTML += `
                    <tr>
                        <td>${obj.state}</td>
                        <td>${obj.confirmed}</td>
                        <td>${obj.deaths}</td>
                        <td>${obj.recovered}</td>
                    </tr>
                `;
    });
  })
  .catch((e) => {
    console.log(e);
  });
