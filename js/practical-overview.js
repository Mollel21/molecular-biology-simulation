// ==========================================
// PRACTICAL OVERVIEW
// ==========================================


// ==========================================
// WAIT FOR PAGE TO LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    // ==========================================
    // GET ID FROM URL
    // ==========================================

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const experimentId =
        urlParams.get("id");


    console.log(
        "URL Practical ID:",
        experimentId
    );


    // ==========================================
    // CHECK EXPERIMENT DATA
    // ==========================================

    if (typeof experiments === "undefined") {

        console.error(
            "ERROR: experiments.js was not loaded."
        );

        showError(
            "Practical data could not be loaded. Please make sure experiments.js is connected correctly."
        );

        return;

    }


    // ==========================================
    // CHECK ID
    // ==========================================

    if (!experimentId) {

        console.error(
            "ERROR: No practical ID found in URL."
        );

        showError(
            "No practical was selected. Please return to the Practicals page and select a practical."
        );

        return;

    }


    // ==========================================
    // FIND SELECTED PRACTICAL
    // ==========================================

    const experiment =
        experiments.find(function (item) {

            return String(item.id) ===
                   String(experimentId);

        });


    console.log(
        "Selected Practical:",
        experiment
    );


    // ==========================================
    // PRACTICAL NOT FOUND
    // ==========================================

    if (!experiment) {

        console.error(
            "Practical not found:",
            experimentId
        );

        showError(
            "The selected practical could not be found."
        );

        document.getElementById(
            "practicalTitle"
        ).textContent =
            "Practical Not Found";

        document.getElementById(
            "practicalDescription"
        ).textContent =
            "The selected practical could not be found.";

        return;

    }


    // ==========================================
    // DISPLAY PRACTICAL HEADER
    // ==========================================

    document.getElementById(
        "practicalIcon"
    ).textContent =
        experiment.icon;


    document.getElementById(
        "practicalCategory"
    ).textContent =
        experiment.category;


    document.getElementById(
        "practicalTitle"
    ).textContent =
        experiment.title;


    document.getElementById(
        "practicalDescription"
    ).textContent =
        experiment.description;


    document.getElementById(
        "practicalDifficulty"
    ).textContent =
        experiment.difficulty;


    document.getElementById(
        "practicalDuration"
    ).textContent =
        `⏱ ${experiment.duration}`;


    // ==========================================
    // AIM
    // ==========================================

    document.getElementById(
        "practicalAim"
    ).textContent =
        experiment.aim;


    // ==========================================
    // PRINCIPLE
    // ==========================================

    document.getElementById(
        "practicalPrinciple"
    ).textContent =
        experiment.principle;


    // ==========================================
    // OBJECTIVES
    // ==========================================

    const objectivesList =
        document.getElementById(
            "objectivesList"
        );


    objectivesList.innerHTML = "";


    if (Array.isArray(experiment.objectives)) {

        experiment.objectives.forEach(
            function (objective) {

                const li =
                    document.createElement("li");


                li.textContent =
                    objective;


                objectivesList.appendChild(li);

            }
        );

    }


    // ==========================================
    // EQUIPMENT
    // ==========================================

    const equipmentList =
        document.getElementById(
            "equipmentList"
        );


    equipmentList.innerHTML = "";


    if (Array.isArray(experiment.equipment)) {

        experiment.equipment.forEach(
            function (equipment) {

                const li =
                    document.createElement("li");


                li.textContent =
                    equipment;


                equipmentList.appendChild(li);

            }
        );

    }


    // ==========================================
    // MATERIALS
    // ==========================================

    const materialsList =
        document.getElementById(
            "materialsList"
        );


    materialsList.innerHTML = "";


    if (Array.isArray(experiment.materials)) {

        experiment.materials.forEach(
            function (material) {

                const li =
                    document.createElement("li");


                li.textContent =
                    material;


                materialsList.appendChild(li);

            }
        );

    }


    // ==========================================
    // PROCEDURE
    // ==========================================

    const procedureList =
        document.getElementById(
            "procedureList"
        );


    procedureList.innerHTML = "";


    if (Array.isArray(experiment.procedure)) {

        experiment.procedure.forEach(
            function (step, index) {


                const stepElement =
                    document.createElement("div");


                stepElement.className =
                    "step";


                stepElement.innerHTML = `

                    <div class="step-number">

                        ${index + 1}

                    </div>


                    <div class="step-content">

                        <strong>
                            Step ${index + 1}
                        </strong>


                        <p>

                            ${step}

                        </p>

                    </div>

                `;


                procedureList.appendChild(
                    stepElement
                );

            }
        );

    }


    // ==========================================
    // START SIMULATION BUTTON
    // ==========================================

    const startButton =
        document.getElementById(
            "startPracticalButton"
        );


    if (startButton) {


        // --------------------------------------
        // SET CORRECT SIMULATION PAGE
        // --------------------------------------

        let simulationPage = "";


        switch (experiment.id) {


            case "dna-extraction":

                simulationPage =
                    "dna-extraction.html";

                break;


            case "bacterial-pcr":

                simulationPage =
                    "bacterial-pcr.html";

                break;


            case "fungal-pcr":

                simulationPage =
                    "fungal-pcr.html";

                break;


            default:

                simulationPage =
                    "experiments.html";

                console.warn(
                    "No simulation page configured for:",
                    experiment.id
                );

                break;

        }


        // --------------------------------------
        // SET BUTTON LINK
        // --------------------------------------

        startButton.href =
            simulationPage;


        // --------------------------------------
        // KEEP ID IN URL
        // --------------------------------------

        startButton.addEventListener(
            "click",
            function () {

                console.log(
                    "Starting simulation:",
                    experiment.id
                );

            }
        );

    }


});



// ==========================================
// ERROR FUNCTION
// ==========================================

function showError(message) {

    const errorMessage =
        document.getElementById(
            "errorMessage"
        );


    if (errorMessage) {

        errorMessage.textContent =
            message;

        errorMessage.style.display =
            "block";

    }

}