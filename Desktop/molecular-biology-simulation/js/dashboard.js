const practicalGrid =
    document.getElementById("practicalGrid");


function loadPracticals() {

    practicalGrid.innerHTML = "";


    experiments.forEach(experiment => {


        const card =
            document.createElement("div");


        card.className =
            "practical-card";


        card.innerHTML = `

            <div class="practical-icon">

                ${experiment.icon}

            </div>


            <span class="category">

                ${experiment.category}

            </span>


            <h3>

                ${experiment.title}

            </h3>


            <p>

                ${experiment.description}

            </p>


            <div class="practical-meta">

                <span>

                    ${experiment.difficulty}

                </span>


                <span>

                    ⏱ ${experiment.duration}

                </span>

            </div>


            <button
                class="start-practical"
                onclick="openPractical('${experiment.id}')">

                Select Practical →

            </button>

        `;


        practicalGrid.appendChild(card);

    });

}



function showPracticals() {

    document
        .getElementById("practicals")
        .scrollIntoView({

            behavior: "smooth"

        });

}



function openPractical(experimentId) {

    window.location.href =
        `practical-overview.html?id=${experimentId}`;

}



loadPracticals();