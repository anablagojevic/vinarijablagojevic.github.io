console.log("Prvi JS kod");

//dinamicko ispisivanje menija
let NizHref = ["index.html", "#onama", "#ana", "#pampuri"];
let NizText = ["Pocetna", "O nama", "Autor", "Kontakt"];

let divNavigacija = document.querySelector("#navbarNav");
let divNAvigacija1 = $( "#navbarNAv" );

let IspisNav = "<ul>";
for(let i = 0; i < NizHref.length; i++){
    IspisNav += `<li><a href="${NizHref[i]}">${NizText[i]}</a></li>`;
}
IspisNav += "</ul>";

divNavigacija.innerHTML = IspisNav;

//za pravljenje slajdera
var sIndex = 1;
prikaziSlajdove(sIndex);
//automatsko menjanje slajdera
function prikaziSlajdove(){
    var slajderi = document.getElementsByClassName("slajd");
    for (var i = 0; i < slajderi.length; i++) {
        slajderi[i].style.display = "none";
    }
    sIndex++;
    if (sIndex > slajderi.length){sIndex = 1}
    slajderi[sIndex-1].style.display = "block";
    setTimeout(prikaziSlajdove, 3000);
}

//Za popunjavanje forme kad je onfocus
function Fokus(){
    document.querySelector(".span").textContent = "";
}
function Fokus2(){
    document.querySelector(".span").textContent = "";
}
function Fokus3(){
    document.querySelector(".span").textContent = "";
}
//Za popunjavanje forme kad je onblur, sa uslovom
function Prazno(){
    var unetiSadrzaj1 = document.querySelector("#text1").value;
    console.log(unetiSadrzaj1);
    if(unetiSadrzaj1.length == 0){
        document.querySelector(".span").textContent = "* Niste uneli svoje ime";
    }
}
function Prazno2(){
    var unetiSadrzaj2 = document.querySelector("#text2").value;
    console.log(unetiSadrzaj2);
    if(unetiSadrzaj2.length == 0){
        document.querySelector(".span").textContent = "* Niste uneli svoje prezime";
    }
}
function Prazno3(){
    var unetiSadrzaj3 = document.querySelector("#text3").value;
    console.log(unetiSadrzaj3);
    if(unetiSadrzaj3.length == 0){
        document.querySelector(".span").textContent = "* Niste uneli imejl adresu";
    }
}
function Rezervisano(){
    var r = alert("Uspešno ste rezervisali, hvala Vam!");
}

//ubacivanje slika
var nizSlike = ["images/tanjir.png", "images/riba.png", "images/pasta1.png","images/razno.png", "images/kolac2.png", "images/kolac1.png"];
for(var i = 0; i<nizSlike.length; i++){
    var placeholder = document.querySelector("#card-body" + i);
    var imgTag = document.createElement("img");
    imgTag.setAttribute("class", "c");
    imgTag.src=nizSlike[i];
    placeholder.appendChild(imgTag);
}
//provera unetog mejla
function proveraEmail(){
    console.log('proveraEmail');
    var unetiSadrzaj3 = document.querySelector("#text3").value;
    console.log(unetiSadrzaj3);
    console.log(validanEmail(unetiSadrzaj3));

    if(!validanEmail(unetiSadrzaj3)){
        document.querySelector(".span").textContent = "* losa emaji adresa";
    }
}
//provera mejla
function validanEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
//provera da li je forma popunjena i dal je validan mejl
let form = document.getElementById('forma');
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            Prazno3();  
            event.preventDefault();
            event.stopPropagation();
        }
}, false);

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
//sekcija za autora
var ana = document.getElementById("ana");

var anaDiv = document.createElement("div");
anaDiv.setAttribute("class", "row");

var iDiv = document.createElement("div");
iDiv.setAttribute("class", "col-lg-6 col-sm-12");
iDiv.innerHTML = `<img src="images/ana.jpg" alt = "ana" id = "ana1"/>`;

anaDiv.appendChild(iDiv);

var tDiv = document.createElement("div");
tDiv.setAttribute("class", "col-lg-6 col-sm-12");
tDiv.innerHTML = `<p id="aP">Moje ime je Ana Blagojevic. 
Rodjena sam 2001. godine u Zemunu i trenutno sam studenktinja 
druge godine Visoke ICT škole u Beogradu, na smeru Internet tehnologije, 
modul za Web programiranje. Prethodno sam završila srednju ekonomsku školu u Zemunu. 
Ukoliko želite da saznate nešto više o meni, mom obrazovanju i veštinama 
kojim raspolažem, posetite moj portfolio na linku ispod.</p>
<a href = "https://anablagojevic.github.io/anablagojevicportfolio.github.io/" 
target = "_blank"><button type="button" class="btn btn-light aB">PORTFOLIO</button></a>`;

anaDiv.appendChild(tDiv);

ana.appendChild(anaDiv);

//sekcija za opise vina

//dohvatamo id div-a vina
var vina = document.getElementById("vina");

//ubacujem div card-group, koji cu smestiti u row
var vinaDiv = document.createElement("div");
vinaDiv.setAttribute("class", "card-group mt-5");
vina.appendChild(vinaDiv);
//sad mi treba card border
var vina2Div = document.createElement("div");
vina2Div.setAttribute("class", "card mr-2 border");
vina2Div.innerHTML = `<img src="images/belo.jpg" alt = "belo" class = "card-img-top"/>`;
vinaDiv.appendChild(vina2Div);
//sad mi treba card body a unutar njega - h5 i p tag
var vina3Div = document.createElement("div");
vina3Div.setAttribute("class", "card-body");
vina3Div.innerHTML = `<h5 class="card-title text-center naslov">Bela vina</h5>
<p class="card-text text-center opis">
Bela vina su specifična po tehnologiji izrade. Pravimo ih kako od mešavine različitih
vrsta grožđa, tako i od svake vrste posebno, čisto vino - šardone, kao jedno
od najpoznatijih, traminer, bolgar, afrodita i mnoge druge.
</p>`;
vina2Div.appendChild(vina3Div);

//sad mi treba druga kartica u istom redu

//sad mi treba card border
var vina5Div = document.createElement("div");
vina5Div.setAttribute("class", "card mr-2 border");
vina5Div.innerHTML = `<img src="images/crno.jpg" alt = "crno" class = "card-img-top"/>`;
vinaDiv.appendChild(vina5Div);
//sad mi treba card body a unutar njega - h5 i p tag
var vina6Div = document.createElement("div");
vina6Div.setAttribute("class", "card-body");
vina6Div.innerHTML = `<h5 class="card-title text-center naslov">Crna vina</h5>
<p class="card-text text-center opis">
Proces proizvodnje počinje fermetacijom, a završava presovanjem.
Koriste se specijalne prese, za finija vina se koristi manji pritisak
i obrnuto. Među ostalom, uzgajamo vrste hamburg, prokupac, moldavka, tamnjanika.
</p>`;
vina5Div.appendChild(vina6Div);

//sada mi treba drugi red sa jos dve iste kartice

//sad mi treba jos jedan card-group, koji cu smestiti isto u row
var vina7Div = document.createElement("div");
vina7Div.setAttribute("class", "card-group mt-5");
vina.appendChild(vina7Div);
//sad mi treba card border
var vina8Div = document.createElement("div");
vina8Div.setAttribute("class", "card mr-2 border");
vina8Div.innerHTML = `<img src="images/rose.jpg" class="card-img-top" alt="rose"/>`;
vina7Div.appendChild(vina8Div);
//sad mi treba card body a unutar njega - h5 i p tag
var vina9Div = document.createElement("div");
vina9Div.setAttribute("class", "card-body");
vina9Div.innerHTML = `<h5 class="card-title text-center naslov">Roze vina</h5>
<p class="card-text text-center opis">
    Roze vino je specifična vrsta vina koja sadrži deo boje ljuske grožđa,
    ali nedovoljno da se kvalifikuje kao crno vino. Ovo je možda i
    najstarija poznata vrsta vina. Vrsta grožđa koje mi najčešće koristimo
    je vrsta istog imena, roze.
</p>`;
vina8Div.appendChild(vina9Div);

//sad mi treba druga kartica u istom redu

//sad mi treba card border
var vina10Div = document.createElement("div");
vina10Div.setAttribute("class", "card mr-2 border");
vina10Div.innerHTML = `<img src="images/penusavo.jpg" class="card-img-top" alt="rose"/>`;
vina7Div.appendChild(vina10Div);
//sad mi treba card body a unutar njega - h5 i p tag
var vina11Div = document.createElement("div");
vina11Div.setAttribute("class", "card-body");
vina11Div.innerHTML = `<h5 class="card-title text-center naslov">Penusava vina</h5>
<p class="card-text text-center opis">
    Proizvodi se naknadnim vrenjem vina u boci u kojoj se oslobađa ugljen
    dioksid, što ga i čini penušavim. Najčešće su penušava vina roze ili bela.
    U našoj ponudi možete naći širok izbor i uživati u specifičnom ukusu kvaliteta.
</p>`;
vina10Div.appendChild(vina11Div);

//provera dropdown liste
var lista = document.getElementById("text4");
var izbor = lista.selectedIndex;
function Fokus4(){
    document.querySelector(".span").textContent = "";
}
function Lista(){
    if(izbor != 0){
        var l = lista.options[lista.selectedIndex].text;
        var l2 = lista.options[lista.selectedIndex].value;
        console.log("Text svojstvo ima vrednost: " + l);
        console.log("Value svojstvo ima vrednost: " + l2);
    }
    else{
        document.querySelector(".span").textContent = "* Molimo izaberite broj osoba.";
    }
}
