// ==========================================
// PRACTICAL OVERVIEW
// ==========================================


// Get experiment ID from URL

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const experimentId =
    urlParams.get("id");


// Find experiment

const experiment =
    experiments.find(
        item =>
            item.id === experimentId
    );


// ==========================================
// CHECK EXPERIMENT
// ==========================================

if (!experiment) {

    document.getElementById(
        "practicalTitle"
    ).textContent =
        "Practical Not Found";


    document.getElementById(
        "practicalDescription"
    ).textContent =
        "The selected practical could not be found.";

}


// ==========================================
// DISPLAY EXPERIMENT
// ==========================================

else {


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


    // AIM

    document.getElementById(
        "practicalAim"
    ).textContent =
        experiment.aim;


    // PRINCIPLE

    document.getElementById(
        "practicalPrinciple"
    ).textContent =
        experiment.principle;


    // OBJECTIVES

    const objectivesList =
        document.getElementById(
            "objectivesList"
        );


    objectivesList.innerHTML = "";


    experiment.objectives.forEach(
        objective => {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                objective;


            objectivesList.appendChild(li);

        }
    );


    // EQUIPMENT

    const equipmentList =
        document.getElementById(
            "equipmentList"
        );


    equipmentList.innerHTML = "";


    experiment.equipment.forEach(
        equipment => {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                equipment;


            equipmentList.appendChild(li);

        }
    );


    // MATERIALS

    const materialsList =
        document.getElementById(
            "materialsList"
        );


    materialsList.innerHTML = "";


    experiment.materials.forEach(
        material => {

            const li =
                document.createElement(
                    "li"
                );


            li.textContent =
                material;


            materialsList.appendChild(li);

        }
    );


    // PROCEDURE

    const procedureList =
        document.getElementById(
            "procedureList"
        );


    procedureList.innerHTML = "";


    experiment.procedure.forEach(
        (step, index) => {


            const stepElement =
                document.createElement(
                    "div"
                );


            stepElement.className =
                "procedure-step";


            stepElement.innerHTML = `

                <div class="step-number">

                    ${index + 1}

                </div>


                <div class="step-content">

                    <h3>

                        Step ${index + 1}

                    </h3>


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


    // ======================================
    // START SIMULATION
    // ======================================

    document
        .getElementById(
            "startPracticalButton"
        )
        .addEventListener(
            "click",
            function () {

                window.location.href =
                    `simulation.html?id=${experiment.id}`;

            }
        );

}