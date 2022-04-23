const ul4 = document.getElementById('data_imgs_flex');

var filterName;

document.getElementById('arctic').addEventListener("click", arctiC);
document.getElementById('indian').addEventListener("click", indiaN);
document.getElementById('atlantic').addEventListener("click", atlantiC);
document.getElementById('pacific').addEventListener("click", pacifiC);
document.getElementById('southern').addEventListener("click", southerN);

document.getElementById('dropbtn_ocean').addEventListener("click", selectOcean);
document.getElementById('dropbtn_sea').addEventListener("click", selectOcean);

document.getElementById('arctic_sea').addEventListener("click", arcticSea);
document.getElementById('chukchi').addEventListener("click", chukchI);
document.getElementById('greenland').addEventListener("click", greenlanD);
document.getElementById('laptev').addEventListener("click", lapteV);
document.getElementById('kara').addEventListener("click", karA);
document.getElementById('siberian').addEventListener("click", siberiaN);
document.getElementById('northern').addEventListener("click", northerN);
document.getElementById('atlantic_sea').addEventListener("click", atlanticSea);
document.getElementById('south_atlantic').addEventListener("click", southAtlantic);
document.getElementById('arabian').addEventListener("click", arabiaN);
document.getElementById('bengal').addEventListener("click", bengaL);
document.getElementById('indian_sea').addEventListener("click", indianSea);
document.getElementById('persian').addEventListener("click", persiaN);
document.getElementById('red_sea').addEventListener("click", redSea);
document.getElementById('north_pacific').addEventListener("click", northPacific);
document.getElementById('pacific_sea').addEventListener("click", pacificSea);
document.getElementById('south_pacific').addEventListener("click", southPacific);
document.getElementById('south_sea').addEventListener("click", southSea);


async function getPeople() {
  let response = await fetch('https://api.airtable.com/v0/appQc3QyLz1jdm0pf/Table%201?api_key=keyx1ux3QmBvd8v9p');
  let data = response.json();
  return data;
}

getPeople().then(data => {
  // console.log(data.records);
  makeList(data.records)
  // arcticFilter(data.records)
});

function makeList(records) {
  for(let i = 0; i < records.length; i++) {

    let name = records[i].fields.Name;
    // let dataNumber = records[i].fields.Number;
    let dataCategory = records[i].fields.category;
    let dataLinks = records[i].fields.links;

    let listItem4 = document.createElement('div');


    listItem4.setAttribute("id", "div_parent_wrap");

    let imgZ = document.createElement('img');
    // let listItem1 = document.createElement('div');
    let listItem2 = document.createElement('div');

    listItem4.appendChild(imgZ).className = "data_images";
    listItem4.appendChild(listItem2).innerHTML = name + " – " + dataCategory;
    // listItem4.appendChild(listItem1).innerHTML = dataCategory;

    listItem2.setAttribute("id", "data_sea_display");
    // listItem1.setAttribute("id", "data_ocean_display");
    imgZ.src = dataLinks;

    ul4.appendChild(listItem4);
  }
}


function deleteData() {
  document.getElementById("data_imgs_flex").innerHTML = "";
  console.log("deleted");

}

function categoryFilter(filterName) {

  // console.log("clickety arctic")

  deleteData();

  getPeople().then(data => {
    // console.log(data.records);
    makeListFilter(data.records, filterName)
    // arcticFilter(data.records)
  });


}

function makeListFilter(records, filterName) {

  for(let i = 0; i < records.length; i++) {

    let name = records[i].fields.Name;
    let dataNumber = records[i].fields.Number;
    let dataCategory = records[i].fields.category;
    let dataLinks = records[i].fields.links;

    // console.log(filterName, "button clicked");
    if(dataCategory===filterName) {
      let name = records[i].fields.Name;
      // let dataNumber = records[i].fields.Number;
      let dataCategory = records[i].fields.category;
      let dataLinks = records[i].fields.links;

      let listItem4 = document.createElement('div');


      listItem4.setAttribute("id", "div_parent_wrap");

      let imgZ = document.createElement('img');
      // let listItem1 = document.createElement('div');
      let listItem2 = document.createElement('div');

      listItem4.appendChild(imgZ).className = "data_images";
      listItem4.appendChild(listItem2).innerHTML = name + " – " + dataCategory;
      // listItem4.appendChild(listItem1).innerHTML = dataCategory;

      listItem2.setAttribute("id", "data_sea_display");
      // listItem1.setAttribute("id", "data_ocean_display");
      imgZ.src = dataLinks;

      ul4.appendChild(listItem4);
    }
  }
}

function arctiC () {
  categoryFilter("Arctic Ocean");
  // const butt = document.getElementsByTagName('button');
  // butt[0].style.backgroundColor = "darkgray";
  // document.getElementById('arctic').style.backgroundColor = "red";
}

function indiaN () {
  categoryFilter("Indian");
}

function atlantiC () {
  categoryFilter("Atlantic");
}

function pacifiC () {
  categoryFilter("Pacific");
}

function southerN () {
  categoryFilter("Southern");
}

function selectOcean () {
  deleteData();
  getPeople().then(data => {
    // console.log(data.records);
    makeList(data.records)
    // arcticFilter(data.records)
  });
}

function categoryFilterSea(filterName) {

  // console.log("clickety arctic")

  deleteData();

  getPeople().then(data => {
    // console.log(data.records);
    makeListFilterSea(data.records, filterName)
    // arcticFilter(data.records)
  });


}

function makeListFilterSea(records, filterName) {

  for(let i = 0; i < records.length; i++) {

    let name = records[i].fields.Name;
    let dataNumber = records[i].fields.Number;
    let dataCategory = records[i].fields.category;
    let dataLinks = records[i].fields.links;

    // console.log(filterName, "button clicked");
    if(name===filterName) {
      let name = records[i].fields.Name;
      // let dataNumber = records[i].fields.Number;
      let dataCategory = records[i].fields.category;
      let dataLinks = records[i].fields.links;

      let listItem4 = document.createElement('div');


      listItem4.setAttribute("id", "div_parent_wrap");

      let imgZ = document.createElement('img');
      // let listItem1 = document.createElement('div');
      let listItem2 = document.createElement('div');

      listItem4.appendChild(imgZ).className = "data_images";
      listItem4.appendChild(listItem2).innerHTML = name + " – " + dataCategory;
      // listItem4.appendChild(listItem1).innerHTML = dataCategory;

      listItem2.setAttribute("id", "data_sea_display");
      // listItem1.setAttribute("id", "data_ocean_display");
      imgZ.src = dataLinks;

      ul4.appendChild(listItem4);
    }
  }
}

function arcticSea () {
  categoryFilterSea("The Arctic Sea");
}

function chukchI () {
  categoryFilterSea("The Chukchi Sea");
}

function greenlanD () {
  categoryFilterSea("The Greenland Sea");
}

function karA () {
  categoryFilterSea("The Kara Sea");
}

function lapteV () {
  categoryFilterSea("The Laptev Sea");
}

function siberiaN () {
  categoryFilterSea("The Siberian Sea");
}

function northerN () {
  categoryFilterSea("The Northern Atlantic Sea");
}

function atlanticSea () {
  categoryFilterSea("The Atlantic Sea");
}

function southAtlantic () {
  categoryFilterSea("The Southern Atlantic Sea");
}

function arabiaN () {
  categoryFilterSea("The Arabian Sea");
}

function bengaL () {
  categoryFilterSea("The Bengal Sea");
}

function persiaN () {
  categoryFilterSea("The Persian Sea");
}

function indianSea () {
  categoryFilterSea("The Indian Sea");
}

function redSea () {
  categoryFilterSea("The Red Sea");
}

function northPacific () {
  categoryFilterSea("The Northern Pacific Sea");
}

function pacificSea () {
  categoryFilterSea("The Pacific Sea");
}

function southPacific () {
  categoryFilterSea("The Southern Pacific Sea");
}

function southSea () {
  categoryFilterSea("The Southern Sea");
}
