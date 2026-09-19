// ==========================================
// MOLEBIO PRACTICAL LIBRARY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const practicalGrid =
        document.getElementById("practicalGrid");


    // ==========================================
    // CHECK GRID
    // ==========================================

    if (!practicalGrid) {

        console.error(
            "ERROR: practicalGrid was not found."
        );

        return;
    }


    // ==========================================
    // CHECK EXPERIMENT DATA
    // ==========================================

    if (
        typeof experiments === "undefined" ||
        !Array.isArray(experiments)
    ) {

        practicalGrid.innerHTML = `
            <div class="error-message">

                <h2>
                    Unable to load practicals
                </h2>

                <p>
                    The practical data could not be loaded.
                </p>

            </div>
        `;

        console.error(
            "ERROR: experiments.js was not loaded."
        );

        return;
    }


    // ==========================================
    // CLEAR GRID
    // ==========================================

    practicalGrid.innerHTML = "";


    // ==========================================
    // CREATE PRACTICAL CARDS
    // ==========================================

    experiments.forEach(function (experiment) {

        const card =
            document.createElement("article");


        card.className =
            "practical-card";


        card.innerHTML = `

            <div class="practical-card-top">

                <div class="practical-icon">

                    ${experiment.icon}

                </div>


                <span class="difficulty">

                    ${experiment.difficulty}

                </span>

            </div>


            <div class="practical-card-content">

                <p class="practical-category">

                    ${experiment.category}

                </p>


                <h3>

                    ${experiment.title}

                </h3>


                <p class="practical-description">

                    ${experiment.description}

                </p>


                <div class="practical-meta">

                    <span>

                        ⏱ ${experiment.duration}

                    </span>


                    <span>

                        🧪 Virtual Lab

                    </span>

                </div>

            </div>


            <div class="practical-card-footer">

                <button
                    type="button"
                    class="start-practical"
                    data-id="${experiment.id}">

                    View Practical

                    <span>
                        →
                    </span>

                </button>

            </div>

        `;


        practicalGrid.appendChild(card);

    });


    // ==========================================
    // BUTTON EVENTS
    // ==========================================

    const buttons =
        document.querySelectorAll(
            ".start-practical"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const experimentId =
                    this.dataset.id;


                console.log(
                    "Opening practical:",
                    experimentId
                );


                // ==================================
                // OPEN CORRECT PRACTICAL
                // ==================================

                window.location.href =
                    "practical-overview.html?id=" +
                    encodeURIComponent(
                        experimentId
                    );

            }
        );

    });

});