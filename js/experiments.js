// ==========================================
// MOLEBIO PRACTICAL DATA
// ==========================================

const experiments = [

    // ==========================================
    // DNA / RNA EXTRACTION
    // ==========================================

    {
        id: "dna-extraction",

        title: "DNA / RNA Extraction",

        icon: "🧬",

        category: "DNA EXTRACTION",

        difficulty: "Intermediate",

        duration: "20–30 min",

        description:
            "Extraction and purification of DNA or RNA from biological samples using virtual laboratory procedures.",

        aim:
            "To extract and purify DNA or RNA from a biological sample using appropriate laboratory procedures.",

        principle:
            "DNA extraction involves breaking open cells, removing proteins and other contaminants, and recovering purified nucleic acid for downstream molecular biology applications.",

        objectives: [
            "Understand the basic principles of DNA and RNA extraction.",
            "Identify the materials and equipment required for nucleic acid extraction.",
            "Perform the major steps involved in nucleic acid extraction.",
            "Understand the importance of centrifugation and sample handling."
        ],

        equipment: [
            "Microcentrifuge tube",
            "Micropipette",
            "Pipette tips",
            "Microcentrifuge",
            "Vortex mixer",
            "Tube rack"
        ],

        materials: [
            "Biological sample",
            "Lysis buffer",
            "Binding buffer",
            "Wash buffer",
            "Elution buffer",
            "Nuclease-free water"
        ],

        procedure: [
            "Prepare and label the sample tube.",
            "Add the biological sample to the tube.",
            "Add the appropriate lysis solution.",
            "Mix the sample thoroughly.",
            "Centrifuge the sample.",
            "Transfer the required supernatant.",
            "Wash the nucleic acid preparation.",
            "Elute the purified DNA or RNA.",
            "Collect the purified nucleic acid for further analysis."
        ]
    },


    // ==========================================
    // BACTERIAL PCR
    // ==========================================

    {
        id: "bacterial-pcr",

        title: "Bacterial DNA Detection",

        icon: "🦠",

        category: "PCR",

        difficulty: "Advanced",

        duration: "30–40 min",

        description:
            "Detect bacterial DNA using PCR amplification followed by agarose gel electrophoresis.",

        aim:
            "To detect bacterial DNA using polymerase chain reaction (PCR) followed by agarose gel electrophoresis.",

        principle:
            "PCR selectively amplifies a target DNA region through repeated cycles of denaturation, primer annealing, and extension. The amplified DNA can then be visualized using agarose gel electrophoresis.",

        objectives: [
            "Understand the principle of PCR.",
            "Identify the components required for a PCR reaction.",
            "Prepare a bacterial DNA PCR reaction.",
            "Understand PCR amplification cycles.",
            "Analyze PCR products using agarose gel electrophoresis."
        ],

        equipment: [
            "Micropipette",
            "Pipette tips",
            "PCR tubes",
            "PCR thermal cycler",
            "Microcentrifuge",
            "Tube rack"
        ],

        materials: [
            "Bacterial DNA template",
            "Forward primer",
            "Reverse primer",
            "PCR master mix",
            "Nuclease-free water",
            "Agarose gel",
            "DNA loading buffer"
        ],

        procedure: [
            "Prepare and label the PCR tube.",
            "Add the required PCR master mix.",
            "Add the forward and reverse primers.",
            "Add the bacterial DNA template.",
            "Add nuclease-free water.",
            "Mix the PCR reaction carefully.",
            "Place the PCR tube into the thermal cycler.",
            "Run the programmed PCR amplification cycles.",
            "Prepare the agarose gel.",
            "Load the PCR product into the gel.",
            "Run electrophoresis.",
            "Visualize and interpret the DNA bands."
        ]
    },


    // ==========================================
    // FUNGAL PCR
    // ==========================================

    {
        id: "fungal-pcr",

        title: "Fungal DNA Detection",

        icon: "🍄",

        category: "PCR",

        difficulty: "Advanced",

        duration: "30–40 min",

        description:
            "Detect fungal DNA through DNA extraction, PCR amplification and gel electrophoresis.",

        aim:
            "To detect fungal DNA through extraction, PCR amplification, and agarose gel electrophoresis.",

        principle:
            "Fungal DNA is extracted from a biological sample and a target region is amplified using PCR. The resulting PCR product is separated and visualized by agarose gel electrophoresis.",

        objectives: [
            "Understand the principles of fungal DNA extraction.",
            "Understand PCR amplification of fungal DNA.",
            "Identify the components of a fungal PCR reaction.",
            "Perform virtual PCR amplification.",
            "Analyze fungal PCR products using gel electrophoresis."
        ],

        equipment: [
            "Micropipette",
            "Pipette tips",
            "PCR tubes",
            "Microcentrifuge",
            "PCR thermal cycler",
            "Tube rack",
            "Gel electrophoresis apparatus"
        ],

        materials: [
            "Fungal biological sample",
            "DNA extraction buffer",
            "PCR master mix",
            "Forward primer",
            "Reverse primer",
            "Nuclease-free water",
            "Agarose gel",
            "DNA loading buffer"
        ],

        procedure: [
            "Prepare the fungal biological sample.",
            "Add the appropriate extraction solution.",
            "Lyse the fungal cells.",
            "Separate the extracted DNA.",
            "Prepare the PCR reaction mixture.",
            "Add the fungal DNA template.",
            "Place the PCR tube into the thermal cycler.",
            "Run the PCR amplification cycles.",
            "Prepare the agarose gel.",
            "Load the PCR product into the gel.",
            "Run electrophoresis.",
            "Visualize and interpret the fungal DNA bands."
        ]
    }

];