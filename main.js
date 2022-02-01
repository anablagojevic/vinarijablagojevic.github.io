console.log("Prvi JS kod");

//dinamicko ispisivanje menija
let NizHref = ["index.html", "#onama", "#ana", "#pampuri"];
let NizText = ["Pocetna", "O nama", "Autor", "Kontakt"];

let divNavigacija = document.querySelector("#navbarNav");
let divNAvigacija1 = $( "#navbarNAv" );

let IspisNav = '<ul class="navbar-nav ml-auto">';
for(let i = 0; i < NizHref.length; i++){
    IspisNav += `<li class="nav-item"><a class="nav-link text-right" href="${NizHref[i]}">${NizText[i]}</a></li>`;
}
IspisNav += '</ul>';
divNavigacija.innerHTML = IspisNav;


//plugin za slajder
$(document).ready(function() {
    $(".rslides").responsiveSlides();
});



//dinamicki unet sadrzaj kartica za vine i opise
let nizSlikeKartice = ["images/belo.jpg", "images/crno.jpg", "images/rose.jpg", "images/penusavo.jpg"];
let nizSlikeKarticeAlt = ["beloVino", "crnoVino", "roseVino", "penusavoVino"];
let nizNaslovi = ["Bela vina", "Crna vina", "Roze vina", "Penusava vina"];
let nizOpis = ["Bela vina su specifična po tehnologiji izrade. Pravimo ih kako od mešavine različitih vrsta grožđa, tako i od svake vrste posebno, čisto vino - šardone, kao jedno od najpoznatijih, traminer, bolgar, afrodita i mnoge druge.",
"Proces proizvodnje počinje fermetacijom, a završava presovanjem. Koriste se specijalne prese, za finija vina se koristi manji pritisak i obrnuto. Među ostalom, uzgajamo vrste hamburg, prokupac, moldavka, tamnjanika.", 
"Roze vino je specifična vrsta vina koja sadrži deo boje ljuske grožđa, ali nedovoljno da se kvalifikuje kao crno vino. Ovo je možda i najstarija poznata vrsta vina. Vrsta grožđa koje mi najčešće koristimo je vrsta istog imena, roze.",
"Proizvodi se naknadnim vrenjem vina u boci u kojoj se oslobađa ugljen dioksid, što ga i čini penušavim. Najčešće su penušava vina roze ili bela. U našoj ponudi možete naći širok izbor i uživati u specifičnom ukusu kvaliteta."];

for(var i = 0; i < nizSlikeKartice.length; i++){

    var divVina = document.getElementById("vina1");

    var cg = document.createElement("div");
    cg.setAttribute("class", "col-12 col-lg-6 mb-3");

    var cgb = document.createElement("div");
    cgb.setAttribute("class", "card border ns");

    cgb.innerHTML = `<img src="${nizSlikeKartice[i]}" class="card-img-top" alt="${nizSlikeKarticeAlt[i]}"/>
                     <h5 class="card-title my-3 text-center naslov">${nizNaslovi[i]}</h5>
                     <p class="card-text m-2 text-center opis">${nizOpis[i]}</p>`;

    cg.appendChild(cgb);
    divVina.appendChild(cg);

}


//ubacivanje slika
var nizSlike = ["images/tanjir.png", "images/riba.png", "images/pasta1.png","images/razno.png", "images/kolac2.png", "images/kolac1.png"];
var nizSlikeAlt = ["tanjir", "riba", "pasta", "razno", "kolac2", "kolac1"];
for(var i = 0; i < nizSlike.length; i++){
    var divK = document.getElementById("kartice");
    var slikeH = document.createElement("div");
    slikeH.setAttribute("class", "m-2 c1");

    var imgTag1 = document.createElement("img");
    imgTag1.setAttribute("class", "c");
    imgTag1.src=nizSlike[i];
    imgTag1.alt=nizSlikeAlt[i];
    slikeH.appendChild(imgTag1);

    divK.appendChild(slikeH);
}


//dinamicki unos slika u div sa karticama za vina i njihovih cena
let NizHref2 = ["images/belof.jpg", "images/crnof.jpg", "images/rozef.jpeg","images/penusavof.jpg", "images/belof2.jpg", "images/crnof3.jpg", "images/rozef2.jpg", "images/penusavof2.jpg", "images/belof3.jpg", "images/crnof2.jpg", "images/rozef3.jpg", "images/penusavof3.gif"];
let NizAlt2 = ["belo1", "crno1", "roze1","penusavo1", "belo2", "crno2", "roze2", "penusavo2", "belo3", "crno3", "roze3", "penusavo3"];
let NizCene = ["3990,99din", "2590,50din", "2780,90din", "4290,90din", "4190,99din", "3690,50din", "4980,90din", "5200,90din", "7490,99din", "8590,50din", "6780,90din", "10590,90din"];
for(var i = 0; i < NizHref2.length; i++){
    
    var placeholder2 = document.querySelector("#card" + i);

    var imgTag2 = document.createElement("img");
    imgTag2.setAttribute("class", "card-img-top mt-1");
    imgTag2.src=NizHref2[i];
    imgTag2.alt=NizAlt2[i];
    placeholder2.appendChild(imgTag2);

    var placeholder3 = document.querySelector("#h" + i);
    placeholder3.innerHTML = `<h5 class="card-title kc">${NizCene[i]}</h5>`;
    placeholder2.appendChild(placeholder3);

}


//jquery za prikazivanje dodatnog sadrzaja na klik
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


//kreiranje liste za dane u mesecu
for(let i = 1; i < 32; i++){
    var datum = document.getElementById("lista2");
    var optionTag1 = document.createElement("option");
    optionTag1.setAttribute("value", `${i}`);
    optionTag1.innerHTML = `${i}`;
    datum.appendChild(optionTag1);
}
//kreiranje liste za nazive meseca
let nizMesec = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
for(let i = 0; i < nizMesec.length; i++){
    var mesec = document.getElementById("lista3");
    var optionTag2 = document.createElement("option");
    optionTag2.setAttribute("value", `${nizMesec[i]}`);
    optionTag2.innerHTML = `${nizMesec[i]}`;
    mesec.appendChild(optionTag2);
}
//kreiranje liste za vreme moguceg dolaska
let nizVreme = ["10.00h", "12.00h", "14.00h", "16.00h", "18.00h"];
for(let i = 0; i < nizVreme.length; i++){
    var vreme = document.getElementById("lista4");
    var optionTag3 = document.createElement("option");
    optionTag3.setAttribute("value", `${nizVreme[i]}`);
    optionTag3.innerHTML = `${nizVreme[i]}`;
    vreme.appendChild(optionTag3);
}


["lista", "lista2", "lista3", "lista4"].forEach(id => {
    document.querySelector("#btnRezervisite").addEventListener("click", function () {
        proveraForme(id)
    });
});
function proveraForme(id){

    var brojGresaka = 0;

    //provera ddl liste
    let dd1 = document.getElementById(id);

    if (dd1.options.selectedIndex == 0) {
        dd1.nextElementSibling.classList.add("prikaz");
        brojGresaka++;
    }
    else {
        dd1.nextElementSibling.classList.remove("prikaz");
    }

    //provera polja za ime i prezime
    var poljeImePrezime = document.querySelector("#imePrezime");
    var reImePrezime=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/;

    if((!reImePrezime.test(poljeImePrezime.value)) || (poljeImePrezime.value.length == 0)){
        poljeImePrezime.nextElementSibling.classList.add("prikaz");
        brojGresaka++;
    }
    else{
        poljeImePrezime.nextElementSibling.classList.remove("prikaz");
    }

    //provera unetog mejla
    var poljeMejl = document.querySelector("#mejl");
    var reMejl = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(!reMejl.test(poljeMejl.value)){
        poljeMejl.nextElementSibling.classList.add("prikaz");
        brojGresaka++;
    }
    else{
        poljeMejl.nextElementSibling.classList.remove("prikaz");
    }


    //provera radio buttona
    var taster = document.getElementsByName("inlineRadioOptions");
    var tasteriValue = "";
    for(let i = 0; i < taster.length; i++){
        if(taster[i].checked){
            tasteriValue = taster[i].value;
            break;
        }
    }
    var spanRB = document.getElementById("rb");
    if(tasteriValue == ""){
        spanRB.nextElementSibling.classList.add("prikaz");
        brojGresaka++;
    }
    else{
        spanRB.nextElementSibling.classList.remove("prikaz");
    }


    //provera broja gresaka
    if(brojGresaka == 0){
        document.getElementById("spanR").textContent = "Hvala Vam, uspešno ste rezervisali!";
    }
    else{
        document.getElementById("spanR").textContent = "Molimo popunite sva polja";
    }
}

//ogranicenje tekstualnog polja
$(document).ready(function(){
    $('textarea[maxlength]').keyup(function(){
        var max = parseInt($(this).attr('maxlength'));
        if($(this).val().length > max){
            $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
        }
    });
});


