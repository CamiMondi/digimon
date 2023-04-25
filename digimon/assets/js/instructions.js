fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    for (const monito of datos) {
        digidatos(monito);
    }
  });

function digidatos(tarjeta) {
  console.log(tarjeta.name);
  let infoDigi = document.getElementById("digimon-container");
  infoDigi.innerHTML += `
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 " >
<div class="card" style="width: 11rem ; ">
  <img src="${tarjeta.img}" class="card-img-top" alt="personajes">
  <div class="card-body">
    <h5 class="card-title">${tarjeta.name}</h5>
    <p class="card-text">Level ${tarjeta.level}</p>
  </div>
</div>
</div>
 `;
}

