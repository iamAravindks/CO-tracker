fetch("https://api.rootnet.in/covid19-in/contacts")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("info").innerHTML += `
              <div class="card-header">
                <h4 class="card-title">Emergency contacts</h4>
                </div>
                <div class="card-body ">
                  <h5 class="card-title">Contact Number :${data.data.contacts.primary.number}</h5>
                    <p class="card-text">Toll Free No. : ${data.data.contacts.primary["number-tollfree"]}</p>
                    <p class="card-text">Email : ${data.data.contacts.primary.email}</p>
                    <p class="card-text">Twitter : ${data.data.contacts.primary.twitter}</p>
                    <p class="card-text">Facebook: ${data.data.contacts.primary.facebook}</p>
                   
                </div>
              `;

    data.data.contacts.regional.map((obj) => {
      document.getElementById("data").innerHTML += `
                    <tr>
                        <td>${obj.loc}</th>
                        <td><a class="nav-link " href="tel:${obj.number}"><i class="fas fa-phone-alt mr-2"></i>${obj.number}</td>
                    </tr>
                `;
    });
  })
  .catch((e) => {
    console.log(e);
  });
