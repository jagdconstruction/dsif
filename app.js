/* DSIF Mobile Web Form - Revision 4.11.26
 * - Two-page DSIF template
 * - Per-question photos appended to PDF (4 per page)
 * - Attached pages (Accident / Incident / Safety Violation) appended to PDF
 * - Signature capture and placement
 * - N/A per category (stamps "Not applicable for today <date>")
 */

const FORM_DEF = {
  "templatePdf": "dsif_template.pdf",
  "projectOptions": [
    "  ",
    "69th St. Transfer Bridge",
    "BA-2024-RE-102-CM Mid-Hudson Bridge",
    "BRX9579 - Boston Road Bridge",
    "BW96 & VN12 - Whitestone Hellman Platforms",
    "C35311 - Dyre Ave. Line",
    "D214898 - TANE22-29 Restani T&M",
    "D264324 - Westchester County Field Metalizing",
    "D264965 - Highway bridge repair W&W",
    "D265046 - Highway bridge repair W&W",
    "D265307 - WO03",
    "D265343 - Bove W&W 2",
    "Devon Bridge",
    "DMB-25-01",
    "FCC 2056",
    "Gold Star Memorial Bridge",
    "Governors Island",
    "Grand Concourse",
    "GW 244.289 Lemoine Ave",
    "GWB Cables",
    "HB1070MD - Macombs Dam Bridge",
    "HBKBQE - NYCDOT Bove",
    "K7279 & K6176 Gordie Howe",
    "Park Avenue",
    "Pulaski 8B",
    "QBB-2017",
    "RK90",
    "RK19-A",
    "Sandy Relief",
    "VN81X",
    "VN-84B - Verrazzano Bridge Ramps Brooklyn",
    "Warehouse"
  ],
  "weatherOptions": [
    "  ",
    "Sunny/Clear",
    "Partly Cloudy",
    "Overcast",
    "Rain",
    "Snow",
    "Fog",
    "Windy"
  ],
  "dayOptions": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "shiftOptions": [
    "Day",
    "Night"
  ],
  "attachedPages": [
    {
      "key": "accident",
      "label": "Accident Report"
    },
    {
      "key": "incident",
      "label": "Incident Report"
    },
    {
      "key": "safety",
      "label": "Safety Violation"
    }
  ],
  "grid": {
    "xYes": 312.972,
    "xNo": 336.972,
    "xComment0": 350.972,
    "xComment1": 596.572
  },
  "headerCoords": {
    "project": {
      "x": 67.0,
      "yCenter": 37.395254135131836
    },
    "reportDate": {
      "x": 82.0,
      "yCenter": 52.635244369506836
    },
    "day": {
      "x": 210.0,
      "yCenter": 52.635244369506836
    },
    "weather": {
      "x": 380.0,
      "yCenter": 51.915212631225586
    },
    "attachedMarks": {
      "accident": {
        "x": 92.73228454589844,
        "yCenter": 68.59553527832031
      },
      "incident": {
        "x": 164.25228881835938,
        "yCenter": 68.59553527832031
      },
      "safety": {
        "x": 235.7686767578125,
        "yCenter": 68.59553527832031
      }
    }
  },
  "categories": [
    {
      "id": "platform",
      "title": "Platform/Scaffold/Engineered Platform & Shield Systems",
      "naLabel": "N/A",
      "items": [
        {
          "id": "platform_1",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 100.184,
          "yBottom": 123.104,
          "question": "Is the platform/scaffold/engineered system fully decked, secured, and free of loose or missing components?",
          "rowHeight": 22.92
        },
        {
          "id": "platform_2",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 123.104,
          "yBottom": 137.144,
          "question": "Is platform deflection (sag) within allowable limits per approved plans?",
          "rowHeight": 14.040000000000006
        },
        {
          "id": "platform_3",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 137.144,
          "yBottom": 160.064,
          "question": "Are all anchors, outriggers, and chokers properly installed, secured, and not overloaded?",
          "rowHeight": 22.919999999999987
        },
        {
          "id": "platform_4",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 160.064,
          "yBottom": 182.984,
          "question": "Are fall protection systems in place, including guardrails or 100% tie-off, with properly rated anchor points (5,000 lbs or engineered) and appropriate lanyards/SRLs in use?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "platform_5",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 182.984,
          "yBottom": 197.024,
          "question": "Are all rigging hoists and braking systems operational?",
          "rowHeight": 14.039999999999992
        },
        {
          "id": "platform_6",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 197.024,
          "yBottom": 211.064,
          "question": "Has a functionality check been completed on all equipment prior to use?",
          "rowHeight": 14.039999999999992
        },
        {
          "id": "platform_7",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 211.064,
          "yBottom": 225.104,
          "question": "Is safe access provided to all platforms/scaffolds/engineered systems?",
          "rowHeight": 14.04000000000002
        },
        {
          "id": "platform_8",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 225.104,
          "yBottom": 239.144,
          "question": "Is the drop zone established and controlled?",
          "rowHeight": 14.039999999999992
        },
        {
          "id": "platform_9",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 239.144,
          "yBottom": 262.064,
          "question": "Are wind and weather conditions verified to be within allowable limits for work?",
          "prompts": [
            {
              "key": "wind",
              "label": "Wind Speed/Direction",
              "x": 445.0586853027344,
              "yCenter": 256.84645080566406
            }
          ],
          "rowHeight": 22.920000000000016
        },
        {
          "id": "platform_10",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 262.064,
          "yBottom": 284.984,
          "question": "Are approved plans for the platform/scaffold/engineered system available on site?",
          "rowHeight": 22.91999999999996
        },
        {
          "id": "platform_11",
          "section": "platform",
          "sectionTitle": "Platform/Scaffold/Engineered Platform & Shield Systems",
          "page": 1,
          "yTop": 284.984,
          "yBottom": 307.904,
          "question": "Has a competent person inspection been completed, and is the system approved for use?",
          "rowHeight": 22.920000000000016
        }
      ]
    },
    {
      "id": "blast",
      "title": "Blast and Paint",
      "naLabel": "N/A",
      "items": [
        {
          "id": "blast_13",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 327.944,
          "yBottom": 341.984,
          "question": "Are blast hoods and required PPE in use and in serviceable condition?",
          "rowHeight": 14.039999999999964
        },
        {
          "id": "blast_14",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 341.984,
          "yBottom": 364.904,
          "question": "Are all hoses, couplings, whip checks, and fittings properly secured and in good condition?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "blast_15",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 364.904,
          "yBottom": 387.824,
          "question": "Are deadman controls installed on all blast hoses and functioning properly?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "blast_16",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 387.824,
          "yBottom": 410.744,
          "question": "Are spray guns equipped with required safety devices (e.g., tip guards/knuckle guards), and are safety locks functional?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "blast_17",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 410.744,
          "yBottom": 433.664,
          "question": "Are required filters (organic vapor and particulate) inspected and within their service life?",
          "rowHeight": 22.91999999999996
        },
        {
          "id": "blast_18",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 433.664,
          "yBottom": 447.704,
          "question": "Are VOC and LEL levels within specified limits?",
          "prompts": [
            {
              "key": "specLimit",
              "label": "Specification Limit",
              "x": 432.45892333984375,
              "yCenter": 442.48643493652344
            }
          ],
          "rowHeight": 14.04000000000002
        },
        {
          "id": "blast_19",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 447.704,
          "yBottom": 470.624,
          "question": "Is the air purifying system identified, and are filter change dates documented?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "blast_20",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 470.624,
          "yBottom": 484.664,
          "question": "Is a CO monitor present, calibrated, and functioning properly?",
          "rowHeight": 14.039999999999964
        },
        {
          "id": "blast_21",
          "section": "blast",
          "sectionTitle": "Blast and Paint",
          "page": 1,
          "yTop": 484.664,
          "yBottom": 507.276,
          "question": "Is all required monitoring equipment within calibration and verified operational (bump tested) prior to use?",
          "rowHeight": 22.612000000000023
        }
      ]
    },
    {
      "id": "decon",
      "title": "Decontamination Area",
      "naLabel": "N/A",
      "items": [
        {
          "id": "decon_23",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 528.247,
          "yBottom": 551.139,
          "question": "Is a decontamination area/trailer present, accessible, and maintained in a clean and functional condition?",
          "rowHeight": 22.892000000000053
        },
        {
          "id": "decon_24",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 551.139,
          "yBottom": 564.937,
          "question": "Are employees utilizing handwashing stations prior to breaks?",
          "rowHeight": 13.798000000000002
        },
        {
          "id": "decon_25",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 564.937,
          "yBottom": 587.857,
          "question": "Does the decontamination trailer have required supplies (soap, water, towels, and clean work clothing)?",
          "rowHeight": 22.91999999999996
        },
        {
          "id": "decon_26",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 587.857,
          "yBottom": 608.857,
          "question": "Are employees exposed above the PEL utilizing shower facilities at the end of the work shift?",
          "rowHeight": 21.0
        },
        {
          "id": "decon_27",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 608.857,
          "yBottom": 631.777,
          "question": "Is contaminated (dirty) clothing handled, stored, and disposed of in accordance with project requirements?",
          "rowHeight": 22.920000000000073
        },
        {
          "id": "decon_28",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 631.777,
          "yBottom": 654.697,
          "question": "Are street clothes stored separately from contaminated work areas (clean side of decontamination area)?",
          "rowHeight": 22.91999999999996
        },
        {
          "id": "decon_29",
          "section": "decon",
          "sectionTitle": "Decontamination Area",
          "page": 1,
          "yTop": 654.697,
          "yBottom": 668.737,
          "question": "Are respirators properly maintained, cleaned, and stored?",
          "rowHeight": 14.039999999999964
        }
      ]
    },
    {
      "id": "waste",
      "title": "Waste Area",
      "naLabel": "N/A",
      "items": [
        {
          "id": "waste_32",
          "section": "waste",
          "sectionTitle": "Waste Area",
          "page": 1,
          "yTop": 692.46,
          "yBottom": 706.855,
          "question": "Is the hazardous waste storage area secure and waste properly stored?",
          "rowHeight": 14.394999999999982
        },
        {
          "id": "waste_33",
          "section": "waste",
          "sectionTitle": "Waste Area",
          "page": 1,
          "yTop": 706.855,
          "yBottom": 720.895,
          "question": "Is wastewater and paint waste properly contained and stored?",
          "rowHeight": 14.039999999999964
        },
        {
          "id": "waste_34",
          "section": "waste",
          "sectionTitle": "Waste Area",
          "page": 1,
          "yTop": 720.895,
          "yBottom": 734.935,
          "question": "Has any hazardous waste exceeded allowable on-site storage time limits?",
          "prompts": [
            {
              "key": "daysAllowed",
              "label": "Specified days allowed",
              "x": 450.0286560058594,
              "yCenter": 729.7175598144531
            }
          ],
          "rowHeight": 14.039999999999964
        },
        {
          "id": "waste_35",
          "section": "waste",
          "sectionTitle": "Waste Area",
          "page": 1,
          "yTop": 734.935,
          "yBottom": 748.975,
          "question": "Was the hazardous waste storage area inspected for cleanliness?",
          "rowHeight": 14.040000000000077
        },
        {
          "id": "waste_36",
          "section": "waste",
          "sectionTitle": "Waste Area",
          "page": 1,
          "yTop": 748.975,
          "yBottom": 763.015,
          "question": "Was any hazardous waste shipped off-site on this date?",
          "rowHeight": 14.039999999999964
        }
      ]
    },
    {
      "id": "work",
      "title": "Work Area",
      "naLabel": "N/A",
      "items": [
        {
          "id": "work_0",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 64.531,
          "yBottom": 87.451,
          "question": "Is the restricted work area properly segregated with required barriers, caution tape, and signage?",
          "rowHeight": 22.919999999999987
        },
        {
          "id": "work_1",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 87.451,
          "yBottom": 110.371,
          "question": "Are employees and authorized personnel within restricted areas utilizing required PPE?",
          "rowHeight": 22.92
        },
        {
          "id": "work_2",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 110.371,
          "yBottom": 133.291,
          "question": "Is the work area free of visible spills or dust accumulation at the end of work inspection?",
          "rowHeight": 22.92
        },
        {
          "id": "work_3",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 133.291,
          "yBottom": 147.331,
          "question": "Are tools tethered where required?",
          "rowHeight": 14.039999999999992
        },
        {
          "id": "work_4",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 147.331,
          "yBottom": 170.251,
          "question": "Are extension cords and electrical tools free of damage (no exposed wires or splices), and are GFCIs in use where required?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "work_5",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 170.251,
          "yBottom": 185.491,
          "question": "Are work area walkways maintained free of debris and tripping hazards?",
          "rowHeight": 15.240000000000009
        },
        {
          "id": "work_6",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 185.491,
          "yBottom": 208.411,
          "question": "Are any pre-existing conditions observed that require documentation? (If yes, document and photograph.)",
          "rowHeight": 22.919999999999987
        },
        {
          "id": "work_7",
          "section": "work",
          "sectionTitle": "Work Area",
          "page": 2,
          "yTop": 208.411,
          "yBottom": 222.451,
          "question": "Are any other trades or operations working near the work area?",
          "rowHeight": 14.039999999999992
        }
      ]
    },
    {
      "id": "life",
      "title": "Life Safety",
      "naLabel": "N/A",
      "items": [
        {
          "id": "life_9",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 246.091,
          "yBottom": 269.011,
          "question": "Is required safety equipment (inside and outside containment) readily available and functional?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "life_10",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 269.011,
          "yBottom": 292.291,
          "question": "Are first aid kits, fire extinguishers, eye wash and emergency equipment present and readily accessible?",
          "rowHeight": 23.279999999999973
        },
        {
          "id": "life_11",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 292.291,
          "yBottom": 311.731,
          "question": "Are all required project plans (e.g., safety/work plans, waste management, rescue plans) available on site and implemented?",
          "rowHeight": 19.439999999999998
        },
        {
          "id": "life_12",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 311.731,
          "yBottom": 334.051,
          "question": "Are independent lifelines and rigging ropes in use, within rated capacity, and in good condition?",
          "rowHeight": 22.319999999999993
        },
        {
          "id": "life_13",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 334.051,
          "yBottom": 348.091,
          "question": "Was a daily toolbox talk conducted with crew attendance?",
          "prompts": [
            {
              "key": "topic",
              "label": "Topic",
              "x": 402.934326171875,
              "yCenter": 342.8669891357422
            }
          ],
          "rowHeight": 14.04000000000002
        },
        {
          "id": "life_14",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 348.091,
          "yBottom": 362.131,
          "question": "Were any incidents or accidents reported on this date?",
          "rowHeight": 14.039999999999964
        },
        {
          "id": "life_15",
          "section": "life",
          "sectionTitle": "Life Safety",
          "page": 2,
          "yTop": 362.131,
          "yBottom": 376.171,
          "question": "Were any verbal safety warnings issued on this date?",
          "rowHeight": 14.04000000000002
        }
      ]
    },
    {
      "id": "testing",
      "title": "Testing",
      "naLabel": "N/A",
      "items": [
        {
          "id": "testing_17",
          "section": "testing",
          "sectionTitle": "Testing",
          "page": 2,
          "yTop": 398.491,
          "yBottom": 421.411,
          "question": "Have all workers received medical clearance to wear a respirator and work with lead when applicable (including blood testing, respirator clearance and fit testing)?",
          "rowHeight": 22.920000000000016
        },
        {
          "id": "testing_18",
          "section": "testing",
          "sectionTitle": "Testing",
          "page": 2,
          "yTop": 421.411,
          "yBottom": 435.451,
          "question": "Have all workers received annual lead training?",
          "rowHeight": 14.04000000000002
        },
        {
          "id": "testing_19",
          "section": "testing",
          "sectionTitle": "Testing",
          "page": 2,
          "yTop": 435.451,
          "yBottom": 450.263,
          "question": "Was any monitoring performed today (e.g., air, wipe, water, soil, waste)?",
          "prompts": [
            {
              "key": "chain",
              "label": "Chain of Custody",
              "x": 487.4205322265625,
              "yCenter": 444.2660369873047
            }
          ],
          "rowHeight": 14.811999999999955
        }
      ]
    },
    {
      "id": "contain",
      "title": "Containment",
      "naLabel": "N/A",
      "items": [
        {
          "id": "contain_21",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 474.817,
          "yBottom": 497.663,
          "question": "Is the containment system intact and functioning in accordance with approved plans (are joints sealed? openings closed? floor covering in place? make-up air inlets and airlock access points operational)?",
          "rowHeight": 22.846000000000004
        },
        {
          "id": "contain_22",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 497.663,
          "yBottom": 520.583,
          "question": "Were dust collectors and vacuum equipment operational throughout blasting activities?",
          "rowHeight": 22.91999999999996
        },
        {
          "id": "contain_23",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 520.583,
          "yBottom": 543.503,
          "question": "Was adequate airflow/venilation maintained throughout blasting operations?",
          "rowHeight": 22.920000000000073
        },
        {
          "id": "contain_24",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 543.503,
          "yBottom": 557.543,
          "question": "Was negative pressure maintained within the containment?",
          "prompts": [
            {
              "key": "visual",
              "label": "Visual/Magnehelic",
              "x": 422.9374084472656,
              "yCenter": 552.6115417480469
            },
            {
              "key": "reading",
              "label": "Reading",
              "x": 543.4357299804688,
              "yCenter": 552.6115417480469
            }
          ],
          "rowHeight": 14.039999999999964
        },
        {
          "id": "contain_25",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 557.543,
          "yBottom": 571.583,
          "question": "Were airflow checks performed as required?",
          "prompts": [
            {
              "key": "method",
              "label": "Method",
              "x": 446.0760803222656,
              "yCenter": 566.6515197753906
            },
            {
              "key": "airflow",
              "label": "Airflow Readings",
              "x": 546.696044921875,
              "yCenter": 566.6515197753906
            }
          ],
          "rowHeight": 14.039999999999964
        },
        {
          "id": "contain_26",
          "section": "contain",
          "sectionTitle": "Containment",
          "page": 2,
          "yTop": 571.583,
          "yBottom": 585.623,
          "question": "Was a final cleanup inspection of the containment performed?",
          "prompts": [
            {
              "key": "cleaned",
              "label": "Containment cleaned per spec",
              "x": 517.5611572265625,
              "yCenter": 578.7278747558594
            }
          ],
          "rowHeight": 14.040000000000077
        }
      ]
    }
  ],
  "visibleEmissions": {
    "page": 2,
    "naCapable": true,
    "rows": [
      {
        "yTop": 600.863,
        "yBottom": 616.103
      },
      {
        "yTop": 616.103,
        "yBottom": 631.343
      }
    ],
    "cols": [
      {
        "key": "location",
        "label": "Locations",
        "x0": 348.972,
        "x1": 456.252
      },
      {
        "key": "time",
        "label": "Time",
        "x0": 456.252,
        "x1": 492.492
      },
      {
        "key": "obsPeriod",
        "label": "Observation Period",
        "x0": 492.492,
        "x1": 539.572
      },
      {
        "key": "emissionTime",
        "label": "Emission Time",
        "x0": 539.572,
        "x1": 598.572
      }
    ]
  },
  "commentsCorrectionsBox": {
    "page": 2,
    "x0": 15.0,
    "x1": 598.5,
    "yTop": 663.0,
    "yBottom": 700.0
  },
  "signatureCoords": {
    "printName": {
      "x": 150.45997619628906,
      "yCenter": 709.3664245605469
    },
    "signatureBox": {
      "x": 350.4884033203125,
      "yTop": 703.5,
      "yBottom": 727.0,
      "xRight": 588.572
    }
  }
};

const STATE = {
  header: {
    project: "",
    projectCustom: "",
    reportDate: "",
    day: "",
    shift: "",
    weather: "",
    weatherCustom: ""
  },
  attached: {
    accident: null,
    incident: null,
    safety: null
  },
  categoryNA: {},
  responses: {}, // itemId -> { answer: "yes"|"no"|"" , comment: "", prompts: {}, photos: [{dataUrl, mime, name}] }
  visible: {
    na: false,
    rows: [
      { location: "", time: "", obsPeriod: "", emissionTime: "" },
      { location: "", time: "", obsPeriod: "", emissionTime: "" }
    ]
  },
  commentsCorrections: "",
  signature: {
    printName: "",
    dataUrl: "" // PNG data URL
  }
};

function $(id) { return document.getElementById(id); }

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

function fmtDateSlashes(iso) {
  if (!iso) return "";
  const [y,m,d] = iso.split("-");
  return `${m}/${d}/${y}`;
}

function fmtDateDotsShort(iso) {
  // MM.DD.YY
  if (!iso) return "";
  const [y,m,d] = iso.split("-");
  return `${m}.${d}.${String(y).slice(-2)}`;
}

function sanitizeFilePart(s) {
  return (s || "")
    .trim()
    .replace(/[^\w.-]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getProjectValue() {
  const sel = STATE.header.project;
  if (sel === "__custom__") return (STATE.header.projectCustom || "").trim();
  return (sel || "").trim();
}

function getWeatherValue() {
  const sel = STATE.header.weather;
  if (sel === "__custom__") return (STATE.header.weatherCustom || "").trim();
  return (sel || "").trim();
}

function getNAStamp() {
  const iso = STATE.header.reportDate || todayISO();
  const dateStr = fmtDateSlashes(iso);
  return `Not applicable for today ${dateStr}`;
}

function ensureItemState(itemId) {
  if (!STATE.responses[itemId]) {
    STATE.responses[itemId] = { answer: "", comment: "", prompts: {}, photos: [] };
  }
  return STATE.responses[itemId];
}

function setHidden(el, hidden) {
  if (!el) return;
  el.classList.toggle("hidden", !!hidden);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k,v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, String(v));
  }
  for (const child of children) {
    if (child === null || child === undefined) continue;
    if (typeof child === "string") node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  }
  return node;
}

async function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed reading file"));
    reader.readAsDataURL(file);
  });
}

function dataUrlToUint8(dataUrl) {
  const parts = dataUrl.split(",");
  const b64 = parts[1] || "";
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function mimeFromDataUrl(dataUrl) {
  const m = /^data:([^;]+);base64,/.exec(dataUrl);
  return m ? m[1] : "application/octet-stream";
}

function getFileExtFromMime(mime) {
  if (mime === "image/png") return "png";
  if (mime === "image/jpeg") return "jpg";
  if (mime === "application/pdf") return "pdf";
  return "bin";
}

function setupHeader() {
  // project
  const projSel = $("projectSelect");
  projSel.innerHTML = "";
  for (const opt of FORM_DEF.projectOptions) {
    projSel.appendChild(el("option", { value: opt, text: opt }));
  }
  const projCustomOpt = el("option", { value: "__custom__", text: "Custom..." });
  projSel.appendChild(projCustomOpt);
  projSel.addEventListener("change", () => {
    STATE.header.project = projSel.value;
    setHidden($("projectCustomRow"), projSel.value !== "__custom__");
  });

  const projectCustomInput = $("projectCustom");
  const syncProjectCustom = () => {
    STATE.header.projectCustom = projectCustomInput.value.trim();
    projCustomOpt.textContent = STATE.header.projectCustom ? STATE.header.projectCustom : "Custom...";
  };
  ["input", "change", "blur"].forEach((evt) => projectCustomInput.addEventListener(evt, syncProjectCustom));

  // date
  const dateEl = $("reportDate");
  dateEl.value = todayISO();
  STATE.header.reportDate = dateEl.value;
  dateEl.addEventListener("change", () => {
    STATE.header.reportDate = dateEl.value;
  });

  // day dropdown
  const daySel = $("daySelect");
  daySel.innerHTML = "";
  daySel.appendChild(el("option", { value: "", text: " " }));
  for (const opt of FORM_DEF.dayOptions) {
    daySel.appendChild(el("option", { value: opt, text: opt }));
  }
  daySel.addEventListener("change", () => {
    STATE.header.day = daySel.value;
  });


  // shift dropdown
  const shSel = $("shiftSelect");
  shSel.innerHTML = "";
  shSel.appendChild(el("option", { value: "", text: " " }));
  for (const opt of FORM_DEF.shiftOptions) {
    shSel.appendChild(el("option", { value: opt, text: opt }));
  }
  shSel.addEventListener("change", () => {
    STATE.header.shift = shSel.value;
  });

  // weather dropdown
  const weSel = $("weatherSelect");
  weSel.innerHTML = "";
  for (const opt of FORM_DEF.weatherOptions) {
    weSel.appendChild(el("option", { value: opt, text: opt }));
  }
  const weCustomOpt = el("option", { value: "__custom__", text: "Custom..." });
    weSel.appendChild(weCustomOpt);
  weSel.addEventListener("change", () => {
    STATE.header.weather = weSel.value;
    setHidden($("weatherCustomRow"), weSel.value !== "__custom__");
  });
  const weatherCustomInput = $("weatherCustom");
  const syncWeatherCustom = () => {
    STATE.header.weatherCustom = weatherCustomInput.value.trim();
    weCustomOpt.textContent = STATE.header.weatherCustom ? STATE.header.weatherCustom : "Custom...";
  };
  ["input", "change", "blur"].forEach((evt) => weatherCustomInput.addEventListener(evt, syncWeatherCustom));

  // attached pages UI
  const ap = $("attachedPages");
  ap.innerHTML = "";
  for (const a of FORM_DEF.attachedPages) {
    const key = a.key;

    const cb = el("input", { type: "checkbox" });
    const fileLabel = el("div", { class: "hint", text: "No file selected" });
    const fileInput = el("input", {
      type: "file",
      accept: ".pdf,image/*",
      class: "hidden"
    });

    cb.addEventListener("change", async () => {
      if (cb.checked) {
        // trigger file chooser
        fileInput.click();
      } else {
        STATE.attached[key] = null;
        fileInput.value = "";
        fileLabel.textContent = "No file selected";
      }
    });

    fileInput.addEventListener("change", () => {
      const f = fileInput.files && fileInput.files[0];
      if (!f) {
        cb.checked = false;
        STATE.attached[key] = null;
        fileLabel.textContent = "No file selected";
        return;
      }
      STATE.attached[key] = f;
      fileLabel.textContent = f.name || "Selected";
      cb.checked = true;
    });

    const row = el("div", { class: "row" }, [
      el("label", { class: "label" }, [
        cb,
        el("span", { style: "margin-left:8px; font-weight:800;" , text: a.label })
      ]),
      el("button", { class: "btn", type: "button", onclick: () => fileInput.click() }, ["Choose File"]),
    ]);

    const wrap = el("div", {}, [row, fileInput, fileLabel]);
    ap.appendChild(wrap);
  }
}

function setupCategories() {
  // init NA flags
  for (const cat of FORM_DEF.categories) {
    if (STATE.categoryNA[cat.id] === undefined) STATE.categoryNA[cat.id] = false;
  }

  const host = $("categories");
  host.innerHTML = "";

  for (const cat of FORM_DEF.categories) {
    const catId = cat.id;

    const naCb = el("input", { type: "checkbox" });
    naCb.checked = !!STATE.categoryNA[catId];

    const toggle = el("div", { class: "toggle", text: "Collapse" });
    const itemsWrap = el("div", { class: "category-items" });

    const header = el("div", { class: "cat-header" }, [
      el("div", { class: "cat-title", text: cat.title }),
      el("div", { class: "cat-actions" }, [
        el("label", { class: "na" }, [naCb, el("span", { text: "N/A" })]),
        toggle
      ])
    ]);

    const card = el("section", { class: "card" }, [
      header,
      itemsWrap
    ]);

    // collapse behavior
    let collapsed = false;
    toggle.addEventListener("click", () => {
      collapsed = !collapsed;
      itemsWrap.style.display = collapsed ? "none" : "";
      toggle.textContent = collapsed ? "Expand" : "Collapse";
    });

    // NA behavior
    naCb.addEventListener("change", () => {
      STATE.categoryNA[catId] = naCb.checked;
      // disable/hide items when NA
      itemsWrap.style.display = naCb.checked ? "none" : (collapsed ? "none" : "");
    });

    // render items
    for (const item of cat.items) {
      const itemState = ensureItemState(item.id);
      const itemEl = renderItem(catId, item, itemState);
      itemsWrap.appendChild(itemEl);
    }

    // initial NA hide
    if (naCb.checked) {
      itemsWrap.style.display = "none";
    }

    host.appendChild(card);
  }
}

function renderItem(catId, item, itemState) {
  const wrap = el("div", { class: "item" });

  const q = el("div", { class: "question", text: item.question });

  // yes/no segmented control
  const seg = el("div", { class: "seg" });
  const btnYes = el("button", { class: "seg-btn", type: "button", text: "Yes" });
  const btnNo = el("button", { class: "seg-btn", type: "button", text: "No" });

  let extraSync = null;

  function syncSeg() {
    btnYes.classList.toggle("active", itemState.answer === "yes");
    btnNo.classList.toggle("active", itemState.answer === "no");
    if (extraSync) extraSync();
  }
  btnYes.addEventListener("click", () => {
    itemState.answer = (itemState.answer === "yes") ? "" : "yes";
    syncSeg();
  });
  btnNo.addEventListener("click", () => {
    itemState.answer = (itemState.answer === "no") ? "" : "no";
    syncSeg();
  });
  syncSeg();
  seg.appendChild(btnYes);
  seg.appendChild(btnNo);

  // prompts or comment
  let inputsBlock = el("div", { class: "subgrid" });

  if (item.id === "contain_24") {
      inputsBlock.classList.add("prompts");

      const howWrap = el("div", { class: "promptRow" });
      howWrap.appendChild(el("div", { class: "plabel", text: "How was negative pressure verified?" }));
      const howSel = el("select", { class: "pinput" });
      howSel.appendChild(el("option", { value: "", text: "" }));
      ["Visually", "Magnehelic", "Both"].forEach((opt) =>
        howSel.appendChild(el("option", { value: opt, text: opt }))
      );
      howSel.value = itemState.prompts.visual || "";
      howSel.addEventListener("change", () => {
        itemState.prompts.visual = howSel.value;
        syncReading();
      });
      howWrap.appendChild(howSel);
      inputsBlock.appendChild(howWrap);

      const readingWrap = el("div", { class: "promptRow" });
      readingWrap.appendChild(el("div", { class: "plabel", text: "Magnehelic reading?" }));
      const readingInp = el("input", { class: "pinput", placeholder: "Reading", inputmode: "decimal" });
      readingInp.value = itemState.prompts.reading || "";
      readingInp.addEventListener("input", () => {
        itemState.prompts.reading = readingInp.value;
      });
      readingWrap.appendChild(readingInp);
      inputsBlock.appendChild(readingWrap);

      const syncReading = () => {
        const how = (howSel.value || "").trim();
        readingWrap.style.display = how === "Magnehelic" || how === "Both" ? "" : "none";
      };
      syncReading();

      // Only required when the main question is answered YES.
      extraSync = () => {
        inputsBlock.style.display = itemState.answer === "yes" ? "" : "none";
      };
      extraSync();
    } else if (item.prompts && item.prompts.length) {
    for (const p of item.prompts) {
  const cleanLabel = String(p.label || "")
    .replace(/\s+/g, " ")
    .trim();

  const inp = el("input", {
    class: "input",
    type: "text",
    placeholder: cleanLabel ? (`Enter ${cleanLabel}`) : "Enter text"
  });
  inp.value = itemState.prompts[p.key] || "";
  inp.addEventListener("input", () => {
    itemState.prompts[p.key] = inp.value;
  });
  inputsBlock.appendChild(el("div", {}, [
    el("div", { class: "hint hint-required", text: cleanLabel ? (`Enter: ${cleanLabel}`) : "Enter required text" }),
    inp
  ]));
}
  } else {
    const ta = el("textarea", {
      class: "input textarea",
      rows: 2,
      placeholder: "Comments"
    });
    ta.value = itemState.comment || "";
    ta.addEventListener("input", () => {
      itemState.comment = ta.value;
    });
    inputsBlock.appendChild(ta);
  }

  // photos
  const photoInput = el("input", {
    type: "file",
    accept: "image/*",
    multiple: "multiple",
    class: "hidden"
  });
  const btnAddPhoto = el("button", { class: "btn", type: "button", text: "Add Photo" });
  const thumbs = el("div", { class: "thumbs" });

  btnAddPhoto.addEventListener("click", () => photoInput.click());

  function renderThumbs() {
    thumbs.innerHTML = "";
    for (let i=0;i<itemState.photos.length;i++) {
      const ph = itemState.photos[i];
      const img = el("img", { class: "thumb", src: ph.dataUrl });
      const rm = el("button", { class: "btn small", type: "button", text: "Remove" });
      rm.addEventListener("click", () => {
        itemState.photos.splice(i,1);
        renderThumbs();
      });
      thumbs.appendChild(el("div", { class: "thumb-wrap" }, [img, rm]));
    }
    if (!itemState.photos.length) {
      thumbs.appendChild(el("div", { class: "hint", text: "No photos attached." }));
    }
  }
  renderThumbs();

  photoInput.addEventListener("change", async () => {
    const files = photoInput.files ? Array.from(photoInput.files) : [];
    if (!files.length) return;
    for (const f of files) {
      try {
        const dataUrl = await readFileAsDataURL(f);
        itemState.photos.push({
          dataUrl,
          mime: f.type || mimeFromDataUrl(dataUrl),
          name: f.name || `photo.${getFileExtFromMime(f.type)}`,
          question: item.question,
          category: catId
        });
      } catch (e) {
        console.error(e);
        alert("Could not read one of the photos.");
      }
    }
    photoInput.value = "";
    renderThumbs();
  });

  wrap.appendChild(q);
  wrap.appendChild(seg);
  wrap.appendChild(inputsBlock);
  wrap.appendChild(el("div", { class: "row" }, [btnAddPhoto, photoInput]));
  wrap.appendChild(thumbs);

  return wrap;
}

function setupVisibleEmissions() {
  const na = $("visibleNA");
  na.checked = !!STATE.visible.na;
  na.addEventListener("change", () => {
    STATE.visible.na = na.checked;
    syncDisabled();
  });

  const map = [
    ["ve_r0_location","location",0],["ve_r0_time","time",0],["ve_r0_obs","obsPeriod",0],["ve_r0_em","emissionTime",0],
    ["ve_r1_location","location",1],["ve_r1_time","time",1],["ve_r1_obs","obsPeriod",1],["ve_r1_em","emissionTime",1],
  ];

  function syncDisabled() {
    const disabled = !!STATE.visible.na;
    for (const [id] of map) {
      const input = $(id);
      if (input) input.disabled = disabled;
    }
  }

  for (const [id,key,row] of map) {
    const input = $(id);
    input.value = STATE.visible.rows[row][key] || "";
    input.addEventListener("input", () => {
      STATE.visible.rows[row][key] = input.value;
    });
  }
  syncDisabled();
}

function setupComments() {
  const ta = $("commentsCorrections");
  ta.value = STATE.commentsCorrections || "";
  ta.addEventListener("input", () => {
    STATE.commentsCorrections = ta.value;
  });
}

let sigPad = null;
function setupSignature() {
  const name = $("printName");
  name.value = STATE.signature.printName || "";
  name.addEventListener("input", () => {
    STATE.signature.printName = name.value;
  });

  const preview = $("sigPreview");
  const empty = $("sigEmpty");

  function syncPreview() {
    if (STATE.signature.dataUrl) {
      preview.src = STATE.signature.dataUrl;
      setHidden(preview, false);
      setHidden(empty, true);
    } else {
      preview.removeAttribute("src");
      setHidden(preview, true);
      setHidden(empty, false);
    }
  }
  syncPreview();

  const modal = $("sigModal");
  const canvas = $("sigCanvas");
  const btnOpen = $("btnSign");
  const btnClear = $("btnClearSig");
  const btnCancel = $("sigCancel");
  const btnSave = $("sigSave");
  const btnClear2 = $("sigClear");

  function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    if (sigPad) sigPad.clear();
  }

  btnOpen.addEventListener("click", () => {
    setHidden(modal, false);
    // signature pad init
    if (!sigPad) {
      sigPad = new SignaturePad(canvas, {
        minWidth: 0.7,
        maxWidth: 2.0
      });
    }
    // resize after visible
    setTimeout(() => {
      resizeCanvas();
      sigPad.clear();
    }, 50);
  });

  btnCancel.addEventListener("click", () => {
    setHidden(modal, true);
  });

  btnClear2.addEventListener("click", () => {
    if (sigPad) sigPad.clear();
  });
  btnClear.addEventListener("click", () => {
    STATE.signature.dataUrl = "";
    syncPreview();
  });

  btnSave.addEventListener("click", () => {
    if (!sigPad || sigPad.isEmpty()) {
      alert("Please sign before saving.");
      return;
    }
    STATE.signature.dataUrl = sigPad.toDataURL("image/png");
    setHidden(modal, true);
    syncPreview();
  });

  // close when clicking backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) setHidden(modal, true);
  });

  window.addEventListener("resize", () => {
    if (!modal.classList.contains("hidden")) {
      resizeCanvas();
    }
  });
}

function bindButtons() {
  for (const btn of document.querySelectorAll('[data-action="reset"]')) {
    btn.addEventListener("click", () => resetForm());
  }
  for (const btn of document.querySelectorAll('[data-action="save"]')) {
    btn.addEventListener("click", () => savePdf());
  }
}

function resetForm() {
  if (!confirm("Clear the entire form?")) return;

  STATE.header.project = "";
  STATE.header.projectCustom = "";
  STATE.header.reportDate = todayISO();
  STATE.header.day = "";
  STATE.header.shift = "";
  STATE.header.weather = "";
  STATE.header.weatherCustom = "";

  STATE.attached.accident = null;
  STATE.attached.incident = null;
  STATE.attached.safety = null;

  for (const k of Object.keys(STATE.categoryNA)) STATE.categoryNA[k] = false;
  STATE.responses = {};

  STATE.visible.na = false;
  STATE.visible.rows = [
    { location:"", time:"", obsPeriod:"", emissionTime:"" },
    { location:"", time:"", obsPeriod:"", emissionTime:"" }
  ];

  STATE.commentsCorrections = "";
  STATE.signature.printName = "";
  STATE.signature.dataUrl = "";

  // re-render everything simple way: reload
  window.location.reload();
}


// DSIF template pages use a CropBox shifted left by ~8.53pt.
// pdf-lib drawText/drawImage coordinates are based on the MediaBox origin, so without this
// shift, all overlay content ends up ~8.53pt too far to the right.
const TEMPLATE_X_SHIFT = -8.5322904586792;
// DSIF template pages also have a CropBox/MediaBox bottom offset of ~8.50pt.
// pdf-lib coordinates appear to be based on unshifted user space, so we need to
// shift Y up by this amount to keep row marks centered vertically.
const TEMPLATE_Y_SHIFT = 8.503940105438232;

// Small calibration nudges (top-based coordinates)
const ROW_BASELINE_NUDGE = 2.0; // move X/text slightly down inside table rows
const SIGNATURE_Y_NUDGE_UP = 3.0; // move signature image up inside signature box

function wrapLineToWidth(line, font, size, maxWidth) {
  // Greedy wrap by words; preserves existing word order.
  const words = String(line || "").split(/\s+/).filter(Boolean);
  const out = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? (cur + " " + w) : w;
    const width = font.widthOfTextAtSize(test, size);
    if (width <= maxWidth || !cur) {
      cur = test;
    } else {
      out.push(cur);
      cur = w;
    }
  }
  if (cur) out.push(cur);
  return out;
}

function wrapParagraph(text, font, size, maxWidth) {
  const paras = String(text || "").split(/\n+/);
  const lines = [];
  for (const para of paras) {
    const trimmed = para.trim();
    if (!trimmed) {
      lines.push("");
      continue;
    }
    lines.push(...wrapLineToWidth(trimmed, font, size, maxWidth));
  }
  return lines;
}

function drawTextTop(page, text, x, yTop, size, font) {
  if (!text) return;
  const y = page.getHeight() - yTop;
  page.drawText(String(text), { x: x + TEMPLATE_X_SHIFT, y: y + TEMPLATE_Y_SHIFT, size, font });
}

function maskRectTop(page, x0, yTop, width, height) {
  const y = page.getHeight() - (yTop + height);
  page.drawRectangle({
    x: x0 + TEMPLATE_X_SHIFT,
    y: y + TEMPLATE_Y_SHIFT,
    width,
    height,
    color: PDFLib.rgb(1, 1, 1),
    borderWidth: 0,
  });
}


function drawX(page, x, yTop) {
  drawTextTop(page, "X", x, yTop, 11, page._fonts?.helv || undefined);
}

function drawCenteredTextTop(page, text, x, yCenterTop, size, font) {
  if (!text) return;
  const y = page.getHeight() - yCenterTop;
  page.drawText(String(text), { x: x + TEMPLATE_X_SHIFT, y: y + TEMPLATE_Y_SHIFT, size, font });
}

function drawWrappedTextInBoxTop(page, text, box, font, size, yNudge=0) {
  if (!text) return;
  const padding = box.padding ?? 2;
  const x = box.x0 + padding + TEMPLATE_X_SHIFT;
  const maxWidth = (box.x1 - box.x0) - padding*2;
  const lineHeight = size + 2;
  const lines = wrapParagraph(String(text), font, size, maxWidth);

  // baseline yTop for first line
  let y = box.yTop + padding + size + (yNudge || 0); // top-based baseline
  const maxY = box.yBottom - padding;

  for (let i=0;i<lines.length;i++) {
    if (y > maxY) break;
    const line = lines[i];
    if (line) {
      page.drawText(line, {
        x,
        y: (page.getHeight() - y) + TEMPLATE_Y_SHIFT,
        size,
        font
      });
    }
    y += lineHeight;
  }
}

async function appendPdf(pdfDoc, file) {
  const bytes = await file.arrayBuffer();
  const src = await PDFLib.PDFDocument.load(bytes);
  const copied = await pdfDoc.copyPages(src, src.getPageIndices());
  for (const p of copied) pdfDoc.addPage(p);
}

async function appendImageAsPage(pdfDoc, file, titleText = "") {
  const dataUrl = await readFileAsDataURL(file);
  const mime = file.type || mimeFromDataUrl(dataUrl);
  const bytes = dataUrlToUint8(dataUrl);

  const page = pdfDoc.addPage([612, 792]);
  const helv = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

  if (titleText) {
    page.drawText(titleText, { x: 24, y: 792-24-14, size: 14, font: helv });
  }

  let img;
  if (mime === "image/png") img = await pdfDoc.embedPng(bytes);
  else img = await pdfDoc.embedJpg(bytes);

  const margin = 24;
  const yTop = titleText ? 24 + 18 : 24;
  const availW = 612 - margin*2;
  const availH = 792 - margin - yTop;

  const dims = img.scale(1);
  const scale = Math.min(availW / dims.width, availH / dims.height);
  const w = dims.width * scale;
  const h = dims.height * scale;

  const x = (612 - w) / 2;
  const y = (792 - yTop) - h;

  page.drawImage(img, { x, y, width: w, height: h });
}

async function addPhotoPages(pdfDoc) {
  // Gather photos
  const photos = [];
  for (const [itemId, st] of Object.entries(STATE.responses)) {
    for (const ph of (st.photos || [])) {
      if (ph.category && STATE.categoryNA[ph.category]) continue;
      photos.push({
        dataUrl: ph.dataUrl,
        mime: ph.mime || mimeFromDataUrl(ph.dataUrl),
        header: ph.question || itemId
      });
    }
  }
  if (!photos.length) return;

  const helv = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const helvBold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

  const pageW = 612, pageH = 792;
  const margin = 24;
  const gap = 16;

  const cellW = (pageW - margin*2 - gap) / 2;
  const cellH = (pageH - margin*2 - gap) / 2;
  const headerH = 28;
  const imgPad = 6;

  for (let i=0;i<photos.length;i+=4) {
    const page = pdfDoc.addPage([pageW, pageH]);

    const batch = photos.slice(i, i+4);
    for (let j=0;j<batch.length;j++) {
      const r = Math.floor(j/2);
      const c = j%2;
      const x0 = margin + c*(cellW + gap);
      const y0 = pageH - margin - (r+1)*cellH - r*gap; // bottom y in PDF coords

      const headerText = batch[j].header || "";
      const headerLines = wrapLineToWidth(headerText, helvBold, 10, cellW);
      const headerLine = headerLines[0] || "";
      page.drawText(headerLine, {
        x: x0,
        y: y0 + cellH - headerH + 10,
        size: 10,
        font: helvBold
      });

      const imgAreaX = x0;
      const imgAreaY = y0;
      const imgAreaW = cellW;
      const imgAreaH = cellH - headerH;

      const bytes = dataUrlToUint8(batch[j].dataUrl);
      let img;
      if ((batch[j].mime || "").includes("png")) img = await pdfDoc.embedPng(bytes);
      else img = await pdfDoc.embedJpg(bytes);

      const dims = img.scale(1);
      const scale = Math.min((imgAreaW - imgPad*2) / dims.width, (imgAreaH - imgPad*2) / dims.height);
      const w = dims.width * scale;
      const h = dims.height * scale;
      const x = imgAreaX + (imgAreaW - w)/2;
      const y = imgAreaY + (imgAreaH - h)/2;

      page.drawImage(img, { x, y, width: w, height: h });
    }
  }
}

async function savePdf() {
  try {
    const bytes = await buildPdf();
    const proj = getProjectValue();
    const d = fmtDateDotsShort(STATE.header.reportDate || todayISO());
    const safeProj = sanitizeFilePart(proj);
    const fileName = `DSIF_${d}${safeProj ? "_" + safeProj : ""}.pdf`;

    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (e) {
    console.error(e);
    alert("Failed to generate PDF. See console for details.");
  }
}

async function buildPdf() {
  const templateBytes = await fetch(FORM_DEF.templatePdf).then(r => r.arrayBuffer());
  const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);

  const helv = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const helvBold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

  const pages = pdfDoc.getPages();
  const p1 = pages[0];
  const p2 = pages[1];

  const naStamp = getNAStamp();

  // Header (page 1)
  const proj = getProjectValue();
  const weather = getWeatherValue();
  const dateSlash = fmtDateSlashes(STATE.header.reportDate);

  drawCenteredTextTop(p1, proj, FORM_DEF.headerCoords.project.x, FORM_DEF.headerCoords.project.yCenter, 12, helv);
  drawCenteredTextTop(p1, dateSlash, FORM_DEF.headerCoords.reportDate.x, FORM_DEF.headerCoords.reportDate.yCenter, 12, helv);
  const dayOut = (STATE.header.day && STATE.header.shift)
    ? `${STATE.header.day} (${STATE.header.shift})`
    : (STATE.header.day || STATE.header.shift || "");
  drawCenteredTextTop(p1, dayOut, FORM_DEF.headerCoords.day.x, FORM_DEF.headerCoords.day.yCenter, 12, helv);
  drawCenteredTextTop(p1, weather, FORM_DEF.headerCoords.weather.x, FORM_DEF.headerCoords.weather.yCenter, 12, helv);

  // Attached pages checkmarks
  for (const a of FORM_DEF.attachedPages) {
    const f = STATE.attached[a.key];
    if (!f) continue;
    const m = FORM_DEF.headerCoords.attachedMarks[a.key];
    if (m) drawCenteredTextTop(p1, "X", m.x, m.yCenter, 12, helvBold);
  }

  // Checklist items
  for (const cat of FORM_DEF.categories) {
    const catNA = !!STATE.categoryNA[cat.id];
    for (const item of cat.items) {
      const page = item.page === 1 ? p1 : p2;
      const rowCenter = (item.yTop + item.yBottom) / 2;

      const st = ensureItemState(item.id);
      const ans = catNA ? "" : (st.answer || "");

      // Yes/No mark
      if (ans === "yes") {
        drawCenteredTextTop(page, "X", FORM_DEF.grid.xYes, rowCenter + ROW_BASELINE_NUDGE, 11, helvBold);
      } else if (ans === "no") {
        drawCenteredTextTop(page, "X", FORM_DEF.grid.xNo, rowCenter + ROW_BASELINE_NUDGE, 11, helvBold);
      }

      // Prompts or comment
      const isContain24 = item.id === "contain_24";
      const isContain25 = item.id === "contain_25";

      if (isContain24) {
        // Clear the template's pre-printed prompt text so our output is clean/legible.
        maskRectTop(
          page,
          FORM_DEF.grid.xComment0 + 1,
          item.yTop + 1,
          (FORM_DEF.grid.xComment1 - FORM_DEF.grid.xComment0) - 2,
          (item.yBottom - item.yTop) - 2
        );

        if (catNA) {
          drawTextTop(page, naStamp, FORM_DEF.grid.xComment0 + 4, rowCenter + ROW_BASELINE_NUDGE, 8, helvBold);
        } else if (ans === "yes") {
          const how = String((st.prompts && st.prompts.visual) || "").trim();
          let phrase = "";
          if (how === "Visually") phrase = "Verified visually";
          else if (how === "Magnehelic") phrase = "Verified by Magnehelic";
          else if (how === "Both") phrase = "Verified visually and by magnehelic";

          if (phrase) {
            drawTextTop(page, phrase, FORM_DEF.grid.xComment0 + 4, rowCenter + ROW_BASELINE_NUDGE, 8, helvBold);
          }

          if (how === "Magnehelic" || how === "Both") {
            const reading = String((st.prompts && st.prompts.reading) || "").trim();
            const readingText = reading ? `Reading: ${reading}` : "Reading:";
            drawTextTop(page, readingText, FORM_DEF.grid.xComment0 + 175, rowCenter + ROW_BASELINE_NUDGE, 8, helvBold);
          }
        }
      } else if (isContain25) {
        // Clear the template's pre-printed prompt text (removes "(e.g., Velometer)"), then redraw labels + values.
        maskRectTop(
          page,
          FORM_DEF.grid.xComment0 + 1,
          item.yTop + 1,
          (FORM_DEF.grid.xComment1 - FORM_DEF.grid.xComment0) - 2,
          (item.yBottom - item.yTop) - 2
        );

        if (catNA) {
          drawTextTop(page, naStamp, FORM_DEF.grid.xComment0 + 4, rowCenter + ROW_BASELINE_NUDGE, 8, helvBold);
        } else {
          const labelSize = 8;
          const valueBaseSize = 8;

          const methodLabel = "Method:";
          const airflowLabel = "Airflow Readings:";

          const xMethodLabel = FORM_DEF.grid.xComment0 + 4;
          const xMethodValue = xMethodLabel + helvBold.widthOfTextAtSize(methodLabel, labelSize) + 4;

          const xAirLabel = FORM_DEF.grid.xComment0 + 135;
          const xAirValue = xAirLabel + helvBold.widthOfTextAtSize(airflowLabel, labelSize) + 4;

          drawTextTop(page, methodLabel, xMethodLabel, rowCenter + ROW_BASELINE_NUDGE, labelSize, helvBold);
          drawTextTop(page, airflowLabel, xAirLabel, rowCenter + ROW_BASELINE_NUDGE, labelSize, helvBold);

          const methodVal = String((st.prompts && st.prompts.method) || "").trim();
          const airflowVal = String((st.prompts && st.prompts.airflow) || "").trim();

          const maxMethodW = (xAirLabel - 6) - xMethodValue;
          const maxAirW = (FORM_DEF.grid.xComment1 - 4) - xAirValue;

          const fitText = (font, value, maxW, baseSize) => {
            if (!value) return { text: "", size: baseSize };
            let s = baseSize;
            while (s > 6 && font.widthOfTextAtSize(value, s) > maxW) s -= 0.5;
            // If still too wide, hard-truncate with ellipsis
            if (font.widthOfTextAtSize(value, s) <= maxW) return { text: value, size: s };
            let truncated = value;
            while (truncated.length > 0 && font.widthOfTextAtSize(truncated + "…", s) > maxW) truncated = truncated.slice(0, -1);
            return { text: truncated ? truncated + "…" : "", size: s };
          };

          const mFit = fitText(helv, methodVal, maxMethodW, valueBaseSize);
          const aFit = fitText(helv, airflowVal, maxAirW, valueBaseSize);

          if (mFit.text) drawTextTop(page, mFit.text, xMethodValue, rowCenter + ROW_BASELINE_NUDGE, mFit.size, helv);
          if (aFit.text) drawTextTop(page, aFit.text, xAirValue, rowCenter + ROW_BASELINE_NUDGE, aFit.size, helv);
        }
      } else if (item.prompts && item.prompts.length) {
        for (let i=0;i<item.prompts.length;i++) {
          const p = item.prompts[i];
          const val = catNA ? naStamp : (st.prompts[p.key] || "");
          if (val) {
            drawCenteredTextTop(page, val, p.x, p.yCenter + ROW_BASELINE_NUDGE, 9, helv);
          }
        }
      } else {
        const comment = catNA ? naStamp : (st.comment || "");
        if (comment) {
          drawWrappedTextInBoxTop(page, comment, {
            x0: FORM_DEF.grid.xComment0,
            x1: FORM_DEF.grid.xComment1,
            yTop: item.yTop,
            yBottom: item.yBottom,
            padding: 2
          }, helv, 8, ROW_BASELINE_NUDGE);
        }
      }
    }
  }

  // Visible emissions table (page 2)
  const ve = FORM_DEF.visibleEmissions;
  const veNA = !!STATE.visible.na;
  for (let r=0;r<ve.rows.length;r++) {
    const rowBox = ve.rows[r];
    const rowState = STATE.visible.rows[r] || {};

    for (const col of ve.cols) {
      let val = (rowState[col.key] || "").trim();
      if (veNA && col.key === "location" && r === 0) {
        val = naStamp;
      }
      if (veNA && col.key === "location" && r === 1) {
        val = ""; // keep only first line
      }
      if (!val) continue;

      // single-line fit
      const maxW = (col.x1 - col.x0) - 4;
      let out = val;
      while (out.length > 0 && helv.widthOfTextAtSize(out, 9) > maxW) {
        out = out.slice(0, -1);
      }
      drawTextTop(p2, out, col.x0 + 2, rowBox.yTop + 10, 9, helv);
    }
  }

  // Comments / Corrections (page 2)
  if (STATE.commentsCorrections && STATE.commentsCorrections.trim()) {
    drawWrappedTextInBoxTop(p2, STATE.commentsCorrections.trim(), {
      x0: FORM_DEF.commentsCorrectionsBox.x0,
      x1: FORM_DEF.commentsCorrectionsBox.x1,
      yTop: FORM_DEF.commentsCorrectionsBox.yTop,
      yBottom: FORM_DEF.commentsCorrectionsBox.yBottom,
      padding: 2
    }, helv, 9);
  }

  // Print Name (page 2)
  if (STATE.signature.printName && STATE.signature.printName.trim()) {
    drawCenteredTextTop(p2, STATE.signature.printName.trim(),
      FORM_DEF.signatureCoords.printName.x,
      FORM_DEF.signatureCoords.printName.yCenter,
      10,
      helv
    );
  }

  // Signature image (page 2)
  if (STATE.signature.dataUrl) {
    const sigBytes = dataUrlToUint8(STATE.signature.dataUrl);
    const sigImg = await pdfDoc.embedPng(sigBytes);

    const box = FORM_DEF.signatureCoords.signatureBox;
    const boxW = (box.xRight - box.x);
    const boxH = (box.yBottom - box.yTop);
    const dims = sigImg.scale(1);
    const scale = Math.min(boxW / dims.width, boxH / dims.height);
    const w = dims.width * scale;
    const h = dims.height * scale;

    const x = box.x + (boxW - w)/2;
    // PDF coords from bottom:
    const yTopBased = box.yTop + (boxH - h)/2 - SIGNATURE_Y_NUDGE_UP;
    const y = p2.getHeight() - yTopBased - h;

    p2.drawImage(sigImg, { x: x + TEMPLATE_X_SHIFT, y: y + TEMPLATE_Y_SHIFT, width: w, height: h });
  }

  // Append attached pages
  for (const a of FORM_DEF.attachedPages) {
    const f = STATE.attached[a.key];
    if (!f) continue;
    const isPdf = (f.type === "application/pdf") || (String(f.name||"").toLowerCase().endsWith(".pdf"));
    if (isPdf) {
      await appendPdf(pdfDoc, f);
    } else {
      await appendImageAsPage(pdfDoc, f, a.label);
    }
  }

  // Append photo pages (4 per page)
  await addPhotoPages(pdfDoc);

  return await pdfDoc.save();
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupCategories();
  setupVisibleEmissions();
  setupComments();
  setupSignature();
  bindButtons();
});
