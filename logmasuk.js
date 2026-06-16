const borangLogMasuk =
document.getElementById("borangLogMasuk");

const keputusan =
document.getElementById("keputusan");

borangLogMasuk.addEventListener("submit", function(e){

    e.preventDefault();

    const emel =
    document.getElementById("emel").value;

    const kataLaluan =
    document.getElementById("kataLaluan").value;

    if(emel === "" || kataLaluan === ""){

        keputusan.innerHTML =
        "Sila lengkapkan maklumat";

        keputusan.style.color="red";

        return;
    }

    keputusan.innerHTML =
    "Log masuk berjaya";

    keputusan.style.color =
    "green";

});