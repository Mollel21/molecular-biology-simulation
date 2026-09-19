const steps = [

    {
        title: "Prepare the biological sample",

        instruction:
            "Click the Biological Sample to begin."
    },


    {
        title: "Add lysis buffer",

        instruction:
            "Select the Lysis Buffer and then click the Micropipette to transfer it into the sample."
    },


    {
        title: "Mix the sample",

        instruction:
            "Click the Vortex Mixer to mix the sample."
    },


    {
        title: "Incubate the sample",

        instruction:
            "Click the Incubator to incubate the sample at the required temperature."
    },


    {
        title: "Centrifuge the sample",

        instruction:
            "Click the Microcentrifuge to separate cellular components."
    },


    {
        title: "Wash the nucleic acid",

        instruction:
            "Click the Washing Solution to perform the washing stage."
    },


    {
        title: "Elute purified DNA",

        instruction:
            "Click the Elution Solution to obtain purified DNA."
    }

];


let currentStep = 0;

let lysisSelected = false;


const currentStepElement =
    document.getElementById(
        "currentStep"
    );


const instructionText =
    document.getElementById(
        "instructionText"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const sampleStatus =
    document.getElementById(
        "sampleStatus"
    );


const actionButton =
    document.getElementById(
        "actionButton"
    );


const resultPanel =
    document.getElementById(
        "resultPanel"
    );


const equipment =
    document.querySelectorAll(
        ".equipment"
    );


function updateSimulation() {


    const step =
        steps[currentStep];


    if (!step) {

        finishExtraction();

        return;

    }


    currentStepElement.textContent =
        step.title;


    instructionText.textContent =
        step.instruction;


    updateProgress();

    updateStepList();

    configureEquipment();

}


function updateProgress() {

    const percentage =
        Math.round(
            (currentStep / steps.length) * 100
        );


    progressBar.style.width =
        percentage + "%";


    progressText.textContent =
        percentage + "% Complete";

}


function updateStepList() {


    const stepList =
        document.getElementById(
            "stepList"
        );


    stepList.innerHTML = "";


    steps.forEach(
        (step, index) => {


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "simulation-step";


            if (index === currentStep) {

                item.classList.add(
                    "active"
                );

            }


            if (index < currentStep) {

                item.classList.add(
                    "completed"
                );

                item.textContent =
                    "✓ " + step.title;

            } else {

                item.textContent =
                    `${index + 1}. ${step.title}`;

            }


            stepList.appendChild(item);

        }
    );

}


function configureEquipment() {


    equipment.forEach(
        item => {

            item.classList.remove(
                "active"
            );

            item.classList.add(
                "disabled"
            );

        }
    );


    if (currentStep === 0) {

        enableEquipment("sample");

    }


    else if (currentStep === 1) {

        enableEquipment("lysis");

        enableEquipment("pipette");

    }


    else if (currentStep === 2) {

        enableEquipment("vortex");

    }


    else if (currentStep === 3) {

        enableEquipment("incubator");

    }


    else if (currentStep === 4) {

        enableEquipment("centrifuge");

    }


    else if (currentStep === 5) {

        enableEquipment("wash");

    }


    else if (currentStep === 6) {

        enableEquipment("elution");

    }

}


function enableEquipment(id) {


    const element =
        document.getElementById(id);


    if (element) {

        element.classList.remove(
            "disabled"
        );

        element.classList.add(
            "active"
        );

    }

}


function completeStep(id) {


    const element =
        document.getElementById(id);


    if (element) {

        element.classList.remove(
            "active"
        );

        element.classList.remove(
            "disabled"
        );

        element.classList.add(
            "completed"
        );

    }


    currentStep++;


    sampleStatus.textContent =
        "Processing";


    updateSimulation();

}


/* SAMPLE */

document
    .getElementById("sample")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 0) {

                completeStep("sample");

                sampleStatus.textContent =
                    "Sample Prepared";

            }

        }
    );


/* LYSIS */

document
    .getElementById("lysis")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 1) {

                lysisSelected = true;

                instructionText.textContent =
                    "Lysis buffer selected. Now click the Micropipette.";

                document
                    .getElementById("lysis")
                    .classList.add(
                        "completed"
                    );

            }

        }
    );


/* PIPETTE */

document
    .getElementById("pipette")
    .addEventListener(
        "click",
        () => {

            if (
                currentStep === 1 &&
                lysisSelected
            ) {

                completeStep("pipette");

                sampleStatus.textContent =
                    "Lysis Buffer Added";

            }

        }
    );


/* VORTEX */

document
    .getElementById("vortex")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 2) {

                const vortex =
                    document.getElementById(
                        "vortex"
                    );


                vortex.style.transform =
                    "rotate(360deg)";


                vortex.style.transition =
                    "1s";


                setTimeout(
                    () => {

                        vortex.style.transform =
                            "rotate(0deg)";

                        completeStep("vortex");

                        sampleStatus.textContent =
                            "Sample Mixed";

                    },
                    1000
                );

            }

        }
    );


/* INCUBATOR */

document
    .getElementById("incubator")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 3) {

                instructionText.textContent =
                    "Incubating sample...";

                setTimeout(
                    () => {

                        completeStep(
                            "incubator"
                        );

                        sampleStatus.textContent =
                            "Incubation Complete";

                    },
                    1500
                );

            }

        }
    );


/* CENTRIFUGE */

document
    .getElementById("centrifuge")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 4) {

                const centrifuge =
                    document.getElementById(
                        "centrifuge"
                    );


                centrifuge.style.transform =
                    "rotate(360deg)";


                centrifuge.style.transition =
                    "1.5s";


                instructionText.textContent =
                    "Centrifuging sample...";


                setTimeout(
                    () => {

                        centrifuge.style.transform =
                            "rotate(0deg)";


                        completeStep(
                            "centrifuge"
                        );


                        sampleStatus.textContent =
                            "Separation Complete";

                    },
                    1500
                );

            }

        }
    );


/* WASH */

document
    .getElementById("wash")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 5) {

                completeStep("wash");

                sampleStatus.textContent =
                    "Washing Complete";

            }

        }
    );


/* ELUTION */

document
    .getElementById("elution")
    .addEventListener(
        "click",
        () => {

            if (currentStep === 6) {

                completeStep("elution");

                sampleStatus.textContent =
                    "DNA Purified";

            }

        }
    );


function finishExtraction() {

    progressBar.style.width =
        "100%";


    progressText.textContent =
        "100% Complete";


    currentStepElement.textContent =
        "Practical Completed";


    instructionText.textContent =
        "Excellent! You have successfully completed the virtual DNA extraction procedure.";


    sampleStatus.textContent =
        "Completed";


    equipment.forEach(
        item => {

            item.classList.remove(
                "active"
            );

            item.classList.add(
                "disabled"
            );

        }
    );


    resultPanel.classList.add(
        "show"
    );

}


function finishSimulation() {

    alert(
        "DNA Extraction Practical Completed Successfully!"
    );


    window.location.href =
        "student-dashboard.html";

}


updateSimulation();