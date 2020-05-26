function createUredjaj() {
    var ruta = "http://localhost:8080/uredjaj";

    var data = {};
    data.id = document.getElementById("id").value;
    data.tip = document.getElementById("tip").value;
    data.marka = document.getElementById("marka").value;
    data.model = document.getElementById("model").value;
    data.intervencija = document.getElementById("intervencija").value;
    data.kontakt = document.getElementById("kontakt").value;
    data.serviserid = document.getElementById("serviserid").value;

    var json = JSON.stringify(data);

    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            document.getElementById("createuredjaj").innerHTML = httprequest.responseText;
        }
    }
    httprequest.open("POST", ruta, true);
    httprequest.setRequestHeader("Content-type", "application/json");
    httprequest.send(json);
}

function updateUredjaj() {
    var id = document.getElementById("id").value;
    var ruta = "http://localhost:8080/uredjaj/" + id;

    var data = {};
    data.id = document.getElementById("id").value;
    data.tip = document.getElementById("tip").value;
    data.marka = document.getElementById("marka").value;
    data.model = document.getElementById("model").value;
    data.intervencija = document.getElementById("intervencija").value;
    data.kontakt = document.getElementById("kontakt").value;
    data.serviserid = document.getElementById("serviserid").value;

    var json = JSON.stringify(data);

    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            document.getElementById("updateuredjaj").innerHTML = httprequest.responseText;
        }
    }

    httprequest.open("PUT", ruta, true);
    httprequest.setRequestHeader("Content-type", "application/json");
    httprequest.send(json);
}
function getAllUredjaj() {
    var ruta = "http://localhost:8080/uredjaj";
    var httprequest = new XMLHttpRequest();

    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            var odgovori = JSON.parse(httprequest.responseText);
            var pasus = "";
            var naslovTabele = "<tr><th>ID</th><th>Type</th><th>Brand</th><th>Model</th>" +
                "<th>Intervention</th><th>Contact</th><th>Servicer ID</th></tr>";
            odgovori.forEach(function (odgovor) {
                pasus += "<tr><td>" + odgovor.id + "</td>"
                    + "<td>" + odgovor.tip + "</td>"
                    + "<td>" + odgovor.marka + "</td>"
                    + "<td>" + odgovor.model + "</td>"
                    + "<td>" + odgovor.intervencija + "</td>"
                    + "<td>" + odgovor.kontakt + "</td>"
                    + "<td>" + odgovor.serviserid + "</td>"
                    + "<td class='reB'>" + '<i class="fa fa-trash" aria-hidden="true" onclick="deleteUredjaj(this)"></i>' + "</td>"
                    + "</tr>";
            });
            document.getElementById("uredjaj").innerHTML = naslovTabele + pasus;
        }
    }
    httprequest.open("GET", ruta, true);
    httprequest.send();
}
function deleteUredjaj(oButton) {
    var activeRow = oButton.parentNode.parentNode.cells[0].innerHTML;
    var ruta = "http://localhost:8080/uredjaj/" + activeRow;
    var httprequest = new XMLHttpRequest();

    if (confirm("Are you sure?")) {
        httprequest.onreadystatechange = function () {
            if (httprequest.readyState == 4) {
                document.getElementById("deleteUredjaj").innerHTML = httprequest.responseText;
            }
        }
        httprequest.open("DELETE", ruta, true);
        httprequest.send();
    }
}
function createServiser() {
    var ruta = "http://localhost:8080/serviser";

    var data = {};
    data.id = document.getElementById("id").value;
    data.ime = document.getElementById("ime").value;
    data.prezime = document.getElementById("prezime").value;
    data.oblast = document.getElementById("oblast").value;
    data.kontakt = document.getElementById("kontakt").value;

    var json = JSON.stringify(data);

    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            document.getElementById("createserviser").innerHTML = httprequest.responseText;
        }
    }
    httprequest.open("POST", ruta, true);
    httprequest.setRequestHeader("Content-type", "application/json");
    httprequest.send(json);
}

function updateServiser() {
    var id = document.getElementById("id").value;
    var ruta = "http://localhost:8080/serviser/" + id;

    var data = {};
    data.id = document.getElementById("id").value;
    data.ime = document.getElementById("ime").value;
    data.prezime = document.getElementById("prezime").value;
    data.oblast = document.getElementById("oblast").value;
    data.kontakt = document.getElementById("kontakt").value;

    var json = JSON.stringify(data);

    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            document.getElementById("updateserviser").innerHTML = httprequest.responseText;
        }
    }

    httprequest.open("PUT", ruta, true);
    httprequest.setRequestHeader("Content-type", "application/json");
    httprequest.send(json);
}
function getAllServiser() {
    var ruta = "http://localhost:8080/serviser";
    var httprequest = new XMLHttpRequest();

    httprequest.onreadystatechange = function () {
        if (httprequest.readyState == 4) {
            var odgovori = JSON.parse(httprequest.responseText);
            var pasus = "";
            var naslovTabele = "<tr><th>ID</th><th>Name</th><th>Last Name</th><th>Area</th><th>Contact</th></tr>";
            odgovori.forEach(function (odgovor) {
                pasus += "<tr><td>" + odgovor.id + "</td>"
                    + "<td>" + odgovor.ime + "</td>"
                    + "<td>" + odgovor.prezime + "</td>"
                    + "<td>" + odgovor.oblast + "</td>"
                    + "<td>" + odgovor.kontakt + "</td>"
                    + "<td class='reB'>" + '<i class="fa fa-trash" aria-hidden="true" onclick="deleteServiser(this)"></i>' + "</td>"
                    + "</tr>"
            });
            document.getElementById("serviser").innerHTML = naslovTabele + pasus;
        }
    }
    httprequest.open("GET", ruta, true);
    httprequest.send();
}
function deleteServiser(oButton) {
    var activeRow = oButton.parentNode.parentNode.cells[0].innerHTML;
    var ruta = "http://localhost:8080/serviser/" + activeRow;
    var httprequest = new XMLHttpRequest();

    if (confirm("Are you sure?")) {
        httprequest.onreadystatechange = function () {
            if (httprequest.readyState == 4) {
                document.getElementById("deleteServiser").innerHTML = httprequest.responseText;
            }
        }
        httprequest.open("DELETE", ruta, true);
        httprequest.send();
    }
}