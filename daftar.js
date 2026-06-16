const borang =
document.getElementById("borangDaftar");

const mesej =
document.getElementById("mesej");

borang.addEventListener("submit", function(e){

    e.preventDefault();

    const nama =
    document.getElementById("nama").value;

    const username =
    document.getElementById("username").value;

    const emel =
    document.getElementById("emel").value;

    if(nama.trim()===""){
        mesej.innerHTML="Nama perlu diisi";
        mesej.style.color="red";
        return;
    }

    if(username.trim()===""){
        mesej.innerHTML="Username perlu diisi";
        mesej.style.color="red";
        return;
    }

    if(emel.trim()===""){
        mesej.innerHTML="Email perlu diisi";
        mesej.style.color="red";
        return;
    }

    // Simpan data pelajar
    const pelajar = {
        nama: nama,
        username: username,
        emel: emel,
    };

    let senaraiPelajar =
    JSON.parse(
        localStorage.getItem("pelajar")
    ) || [];

    senaraiPelajar.push(pelajar);

    localStorage.setItem(
        "pelajar",
        JSON.stringify(senaraiPelajar)
    );

    mesej.innerHTML =
    "Pendaftaran berjaya";

    mesej.style.color =
    "green";

    borang.reset();

});