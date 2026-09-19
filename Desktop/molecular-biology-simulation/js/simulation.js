// ==========================================
// MOLECULAR BIOLOGY SIMULATION
// ==========================================


// Get practical ID

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
// VARIABLES
// ==========================================

let currentStep = 0;

const totalSteps =
    experiment.procedure.length;


// ==========================================
// ELEMENTS
// ==========================================

const title =
    document.getElementById(
        "simulationTitle"
    );


const description =
    document.getElementById(
        "simulationDescription"
    );


const stepTitle =
    document.getElementById(
        "stepTitle"
    );


const stepInstruction =
    document.getElementById(
        "stepInstruction"
    );


const stepCounter =
    document.getElementById(
        "stepCounter"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const progressFill =
    document.getElementById(
        "progressFill"
    );


const performButton =
    document.getElementById(
        "performStep"
    );


const stepList =
    document.getElementById(
        "stepList"
    );


const equipmentContainer =
    document.getElementById(
        "equipmentContainer"
    );


const simulationObject =
    document.getElementById(
        "simulationObject"
    );


const completionPanel =
    document.getElementById(
        "completionPanel"
    );


// ==========================================
// CHECK PRACTICAL
// ==========================================

if (!experiment) {

    title.textContent =
        "Practical Not Found";

    performButton.disabled =
        true;

}


// ==========================================
// LOAD SIMULATION
// ==========================================

else {

    title.textContent =
        experiment.title;


    description.textContent =
        experiment.description;


    loadEquipment();


    loadSteps();


    showStep();

}


// ==========================================
// EQUIPMENT
// ==========================================

function loadEquipment() {

    equipmentContainer.innerHTML = "";


    experiment.equipment.forEach(
        equipment => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "equipment-item";


            item.innerHTML = `

                <span>

                    🔬

                </span>

                ${equipment}

            `;


            equipmentContainer.appendChild(
                item
            );

        }
    );

}


// ==========================================
// LOAD STEPS
// ==========================================

function loadSteps() {

    stepList.innerHTML = "";


    experiment.procedure.forEach(
        (step, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "simulation-step";


            item.innerHTML = `

                <span>

                    ${index + 1}

                </span>

                <p>

                    ${step}

                </p>

            `;


            stepList.appendChild(
                item
            );

        }
    );

}


// ==========================================
// SHOW CURRENT STEP
// ==========================================

function showStep() {

    if (
        currentStep >= totalSteps
    ) {

        finishSimulation();

        return;

    }


    const step =
        experiment.procedure[
            currentStep
        ];


    stepCounter.textContent =
        `Step ${currentStep + 1} of ${totalSteps}`;


    stepTitle.textContent =
        `Step ${currentStep + 1}`;


    stepInstruction.textContent =
        step;


    const progress =
        Math.round(
            (currentStep / totalSteps)
            * 100
        );


    progressText.textContent =
        `${progress}%`;


    progressFill.style.width =
        `${progress}%`;


    simulationObject.textContent =
        getSimulationIcon(
            currentStep
        );


    updateStepList();

}


// ==========================================
// STEP ICON
// ==========================================

function getSimulationIcon(step) {

    const icons = [

        "🧫",

        "🧪",

        "💧",

        "🔬",

        "⚙️",

        "🧬",

        "⚡",

        "📊"

    ];


    return icons[
        step % icons.length
    ];

}


// ==========================================
// UPDATE STEP LIST
// ==========================================

function updateStepList() {

    const steps =
        document.querySelectorAll(
            ".simulation-step"
        );


    steps.forEach(
        (item, index) => {

            item.classList.remove(
                "active"
            );


            item.classList.remove(
                "completed"
            );


            if (
                index < currentStep
            ) {

                item.classList.add(
                    "completed"
                );

            }


            if (
                index === currentStep
            ) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

}


// ==========================================
// PERFORM STEP
// ==========================================

performButton.addEventListener(
    "click",
    function () {


        currentStep++;


        if (
            currentStep >= totalSteps
        ) {

            finishSimulation();

        }

        else {

            showStep();

        }

    }
);


// ==========================================
// FINISH
// ==========================================

function finishSimulation() {


    progressText.textContent =
        "100%";


    progressFill.style.width =
        "100%";


    completionPanel.classList.remove(
        "hidden"
    );


    performButton.style.display =
        "none";


    simulationObject.textContent =
        "🎉";


    stepTitle.textContent =
        "Practical Completed";


    stepInstruction.textContent =
        "Excellent! You have completed all practical steps.";

}