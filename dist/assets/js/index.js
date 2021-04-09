fetch("https://corona.lmao.ninja/v2/all")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)

    document.getElementById("worldhome").innerHTML += `
                <div class="card-body mt-2 mb-2 py-5 ">
                  <h3 class="card-title" style="font-family: 'Acme', sans-serif;">World</h3>
                  <h5 class="card-title">Total Cases : ${data.cases}</h5>
                  <h6 class="card-title">Active Cases : ${data.active}</h6>
                    <p class="card-text">Today Cases : ${data.todayCases}</p>
                    <p class="card-text">Recovered : ${data.recovered}</p>
                    <p class="card-text">Today Deaths : ${data.todayDeaths}</p>
                    <p class="card-text">Deaths : ${data.deaths}</p>
                    <a href="./pages/world.html" class="btn btn-primary">Click here for Detailed Stats</a>
                </div>
            `;
  })
  .catch((e) => {
    console.log(e);
  });

fetch("https://corona.lmao.ninja/v2/countries/India")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)

    document.getElementById("indiahome").innerHTML += `
                <div class="card-body mt-2 mb-2 py-5 ">
                  <h3 class="card-title" style="font-family: 'Acme', sans-serif;">India</h3>
                  <h5 class="card-title">Total Cases : ${data.cases}</h5>
                  <h6 class="card-title">Active Cases : ${data.active}</h6>
                    <p class="card-text">Today Cases : ${data.todayCases}</p>
                    <p class="card-text">Recovered : ${data.recovered}</p>
                    <p class="card-text">Today Deaths : ${data.todayDeaths}</p>
                    <p class="card-text">Deaths : ${data.deaths}</p>
                    <a href="./pages/india.html" class="btn btn-primary">Click here for Detailed Stats</a>
                </div>
            `;
  })
  .catch((e) => {
    console.log(e);
  });
