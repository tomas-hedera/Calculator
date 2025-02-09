$(function () {
        $("#kalkulacka").draggable();

});

let displej = document.getElementById("displej");
let kalkulacka = document.getElementById("kalkulacka");

function vlozCislo(cislo) //vlozeni cisla
{
        
        if(displej.value == "Chyba!!!")
        {
                displej.value = "";
                displej.classList.remove("error");
        }
git
        displej.value += cislo;

}

function vymazCislo() //vymazani cisla
{
        displej.value = "";
}

function vysledek() // výsledek
{
        try {
                displej.value = new Function('return ' + displej.value)();
        }
        catch {
                displej.value = "Chyba!!!";
                displej.classList.add("error");
                setTimeout(() => {
                        displej.classList.remove("error");
                }, 2500)
        }
}

function zavriKalkulacku() {
        $('.kalkulacka').fadeOut(function () {
                $(this).hide();
        });
}