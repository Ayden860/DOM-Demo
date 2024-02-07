// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById("name").addEventListener("change", function (e) {
      let nameElement = document.getElementById('nameTag');
      nameElement.innerText = e.target.value;
    });

    document.getElementById("type").addEventListener("change", function (e) {
      let infoElement = document.getElementById('info');
      infoElement.innerText = e.target.value;
    });

    // process form Data
    /*document.getElementById("myForm").addEventListener("change", function (e) {
        e.preventDefault();
      
        console.log(e.target);

        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);

        let nameElement = document.getElementById('nameTag');
        let textElement = document.getElementById('info');

        nameElement.innerText = formData.name;
        textElement.innerText = formData.type;
      });
    */
    // Log readiness to console
    console.log("Ready");
});

function processForm(form){

}