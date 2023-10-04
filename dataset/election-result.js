const comparison = document.getElementById("comparison") 
const data = [
[
{
Partyname: "Arbeiderpartiet",
Abbreviation: "AP",
Votes2019: "2603",
Votes2023: "2982"
},
{
Partyname: "Fremskrittspartiet",
Abbreviation: "FrP",
Votes2019: "1034",
Votes2023: "1030"
},
{
Partyname: "Høyre",
Abbreviation: "H",
Votes2019: "4141",
Votes2023: "3997"
},
{
Partyname: "Kristelig Folkeparti",
Abbreviation: "KrF",
Votes2019: "478",
Votes2023: "510"
},
{
Partyname: "Miljøpartiet de Grønne",
Abbreviation: "MdG",
Votes2019: "1058",
Votes2023: "530"
},
{
Partyname: "Rødt",
Abbreviation: "R",
Votes2019: "1044",
Votes2023: "802"
},
{
Partyname: "Senterpartiet",
Abbreviation: "Sp",
Votes2019: "2037",
Votes2023: "798"
},
{
Partyname: "Sosialistisk Venstreparti",
Abbreviation: "SV",
Votes2019: "744",
Votes2023: "672"
},
{
Partyname: "Venstre",
Abbreviation: "V",
Votes2019: "393",
Votes2023: "190"
},
{
Partyname: "Pensjonistpartiet",
Abbreviation: "Pp",
Votes2019: "1206",
Votes2023: "1438"
},
{
Partyname: "Industri og Næringspartiet",
Abbreviation: "INP",
Votes2019: "0",
Votes2023: "1290"
},
{
Partyname: "Liberalistene",
Abbreviation: "Lib",
Votes2019: "0",
Votes2023: "51"
},
{
Partyname: "Norgesdemokratene",
Abbreviation: "ND",
Votes2019: "0",
Votes2023: "201"
}
]
]

const labelData = []
data.map((item) => labelData.push(item.Abbreviation))
const votes2019 = []
data.map((item) => votes2019.push(item.Votes2019))
const votes2023 = []
data.map((item) => votes2023.push(item.Votes2023))

new Chart(comparison, {
    type: "bar",
    data: {
        labels: labelData,
        datasets: [
            {
                label: "Votes 2019",
                data: votes2019
            },
            {
                label: "Votes 2023",
                data: votes2023
            }
        ]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
})

//Function to check if element is in  viewport: 
    function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 }
 document.addEventListener('scroll', function () {
    if(isInViewport(document.getElementById("decline"))) {
        document.getElementById("changingBg").style.backgroundImage = "url(https://images.unsplash.com/photo-1606955317161-cb7d261c039a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
    }
    if(isInViewport(document.getElementById("increase")))  {
        document.getElementById("changingBg").style.backgroundImage = "url(https://plus.unsplash.com/premium_photo-1661635988518-bbf686a69d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)" //Background map zoom, kan også blir brukt for å beholde bakgrunnen. Map zoom! 
    }
    if(isInViewport(document.getElementById("comparisonchart")))  {
        document.getElementById("changingBg").style.backgroundImage = "url(https://plus.unsplash.com/premium_photo-1681488254225-ce8a642c9fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)" //Background map zoom, kan også blir brukt for å beholde bakgrunnen. Map zoom! 
    }               
}, {
    passive: true
});