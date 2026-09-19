// ==========================================
// MOLEBIO PRACTICAL LIBRARY
// ==========================================


// Wait until HTML has completely loaded

document.addEventListener("DOMContentLoaded", function () {


    // Get practical grid

    const practicalGrid =
        document.getElementById("practicalGrid");


    // Check if grid exists

    if (!practicalGrid) {

        console.error(
            "practicalGrid was not found."
        );

        return;

    }


    // Check if experiments data exists

    if (
        typeof experiments === "undefined"
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
            "experiments.js data file was not loaded."
        );

        return;

    }



    // ==========================================
    // DISPLAY PRACTICALS
    // ==========================================

    practicalGrid.innerHTML = "";


    experiments.forEach(
        function (experiment) {


            // Create card

            const card =
                document.createElement("article");


            card.className =
                "practical-card";


            // Card content

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
                        class="start-practical"
                        data-id="${experiment.id}">

                        View Practical

                        <span>
                            →
                        </span>

                    </button>

                </div>

            `;


            // Add card to page

            practicalGrid.appendChild(card);

        }
    );



    // ==========================================
    // BUTTON EVENTS
    // ==========================================

    const buttons =
        document.querySelectorAll(
            ".start-practical"
        );


    buttons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    const experimentId =
                        this.getAttribute(
                            "data-id"
                        );


                    // Open practical overview

                    window.location.href =
                        `practical-overview.html?id=${experimentId}`;

                }
            );

        }
    );


});