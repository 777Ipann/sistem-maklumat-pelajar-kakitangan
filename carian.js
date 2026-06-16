const senaraiPelajar =
document.getElementById("senaraiPelajar");

async function paparPelajar(){

    try{

        senaraiPelajar.innerHTML =
        "<h3>Memuatkan data...</h3>";

        const respons =
        await fetch(
        "https://jsonplaceholder.typicode.com/users"
        );

        if(!respons.ok){

            throw new Error(
            "Data gagal diperoleh"
            );
        }

        const dataApi =
        await respons.json();

        const dataTempatan =
        JSON.parse(
            localStorage.getItem("pelajar")
        ) || [];

        const semuaPelajar = [
            ...dataApi,
            ...dataTempatan
        ];

        senaraiPelajar.innerHTML = "";

        semuaPelajar.forEach(function(pelajar){

            senaraiPelajar.innerHTML += `

            <div class="kad-pelajar">

                <h3>
                ${pelajar.name || pelajar.nama}
                </h3>

                <p>
                Username :
                ${pelajar.username || pelajar.username}
                </p>

                <p>
                Email :
                ${pelajar.email || pelajar.emel}
                </p>


            </div>

            `;

        });

    }

    catch(ralat){

        senaraiPelajar.innerHTML = `
            <h3 style="color: red;">Ralat semasa mendapatkan data.</h3>
        `;

        console.log(ralat);

    }

}