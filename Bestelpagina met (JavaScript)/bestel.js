document.addEventListener('DOMContentLoaded', () => {
    // Formulier en elementen ophalen
    let ticketForm = document.getElementById('ticket-form');
    let dankjewel = document.getElementById('dankjewel');
    let totaal = document.getElementById('totaal');
    
    // Event listener voor het verzenden van het formulier
    ticketForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Haal de formuliergegevens op
        let aantalKaarten = parseInt(document.getElementById('aantalkaarten').value);  // Verander naar een getal
        let kortingkaart = document.querySelectorAll('input[name="kortingkaart"]:checked'); // Geselecteerde kortingskaarten
        
        // Controleer of het aantal kaarten is geselecteerd
        if (aantalKaarten > 0) {
            // Bereken de prijs per kaart
            let prijsPerKaart = 15; // Standaard prijs per kaart zonder korting
            if (kortingkaart.length > 0) {
                prijsPerKaart = 10; // Prijs met korting
            }

            // Bereken het totaalbedrag
            let totaalBedrag = prijsPerKaart * aantalKaarten;

            // Verberg het formulier en toon het bedankbericht
            ticketForm.style.display = 'none';
            dankjewel.style.display = 'block';
            dankjewel.textContent = `Bedankt voor uw bestelling, u heeft ${aantalKaarten} kaarten gereserveerd.`;

            // Toon het totaalbedrag
            totaal.style.display = 'block';
            totaal.textContent = `Het totaalbedrag voor uw bestelling is €${totaalBedrag}.`;
        } else {
            alert('Selecteer alstublieft het aantal kaarten.');
        }
    });
});
