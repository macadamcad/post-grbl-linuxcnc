module.exports = [
  {
    "id": "default",
    "name": "LinuxCNC (legacy GRBL/LinuxCNC)",
    "apiVersion": "2",
    "extension": "nc",
    "mime": "text/plain",
    "aliases": [
      "grblLinuxCNC"
    ],
    "profile": {
      "units": "mm",
      "axes": "xyz-indexed-a",
      "arcs": "xy-incremental",
      "helices": true,
      "fullCircles": true,
      "defaultToolChange": "automatic",
      "comment": {
        "prefix": "(",
        "suffix": ")"
      },
      "events": {
        "programStart": [
          {
            "comment": [
              {
                "text": "macadam post — grblLinuxCNC"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G21"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G90"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G17"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G91.1"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G"
              },
              {
                "value": "workOffset",
                "precision": "integer"
              }
            ]
          }
        ],
        "operationStart": [
          {
            "comment": [
              {
                "text": "op: "
              },
              {
                "label": "operationName"
              }
            ]
          }
        ],
        "operationEnd": [],
        "unmappedTool": [
          {
            "comment": [
              {
                "text": "no tool slot mapped — change tool manually"
              }
            ]
          }
        ],
        "spindleCW": [
          {
            "line": [
              {
                "text": "M3 S"
              },
              {
                "value": "rpm",
                "precision": "integer"
              }
            ]
          }
        ],
        "spindleCCW": [
          {
            "line": [
              {
                "text": "M4 S"
              },
              {
                "value": "rpm",
                "precision": "integer"
              }
            ]
          }
        ],
        "spindleStop": [
          {
            "line": [
              {
                "text": "M5"
              }
            ]
          }
        ],
        "coolantOff": [
          {
            "line": [
              {
                "text": "M9"
              }
            ]
          }
        ],
        "coolantFlood": [
          {
            "line": [
              {
                "text": "M8"
              }
            ]
          }
        ],
        "coolantMist": [
          {
            "line": [
              {
                "text": "M7"
              }
            ]
          }
        ],
        "rapid": [
          {
            "line": [
              {
                "text": "G0"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              }
            ]
          }
        ],
        "linear": [
          {
            "line": [
              {
                "text": "G1"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "arcCW": [
          {
            "line": [
              {
                "text": "G2"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "i",
                "precision": "coordinate",
                "prefix": " I"
              },
              {
                "value": "j",
                "precision": "coordinate",
                "prefix": " J"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "arcCCW": [
          {
            "line": [
              {
                "text": "G3"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "i",
                "precision": "coordinate",
                "prefix": " I"
              },
              {
                "value": "j",
                "precision": "coordinate",
                "prefix": " J"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "retractRapid": [
          {
            "line": [
              {
                "text": "G0"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              }
            ]
          }
        ],
        "retractFeed": [
          {
            "line": [
              {
                "text": "G1"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "programEnd": [
          {
            "line": [
              {
                "text": "M2"
              }
            ]
          }
        ],
        "rotaryIndex": [
          {
            "line": [
              {
                "text": "G0 A"
              },
              {
                "value": "angle",
                "precision": "coordinate"
              }
            ]
          }
        ],
        "toolChangeAutomatic": [
          {
            "line": [
              {
                "text": "T"
              },
              {
                "value": "toolSlot",
                "precision": "integer"
              },
              {
                "text": " M6"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G43 H"
              },
              {
                "value": "toolSlot",
                "precision": "integer"
              }
            ]
          }
        ],
        "toolChangeManual": [
          {
            "comment": [
              {
                "text": "MANUAL TOOL CHANGE: "
              },
              {
                "label": "toolName"
              },
              {
                "value": "toolSlot",
                "precision": "integer",
                "prefix": " slot ",
                "optional": true
              },
              {
                "text": " — load tool and verify offsets before resuming"
              }
            ]
          },
          {
            "line": [
              {
                "text": "M0"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "id": "grbl",
    "name": "GRBL 1.1 — manual tool changes",
    "apiVersion": "2",
    "extension": "nc",
    "mime": "text/plain",
    "aliases": [
      "grbl"
    ],
    "profile": {
      "units": "mm",
      "axes": "xyz",
      "arcs": "xy-incremental",
      "helices": true,
      "fullCircles": true,
      "defaultToolChange": "manual",
      "comment": {
        "prefix": "(",
        "suffix": ")"
      },
      "events": {
        "programStart": [
          {
            "comment": [
              {
                "text": "macadam post — grbl"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G21"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G90"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G17"
              }
            ]
          },
          {
            "line": [
              {
                "text": "G"
              },
              {
                "value": "workOffset",
                "precision": "integer"
              }
            ]
          }
        ],
        "operationStart": [
          {
            "comment": [
              {
                "text": "op: "
              },
              {
                "label": "operationName"
              }
            ]
          }
        ],
        "operationEnd": [],
        "unmappedTool": [
          {
            "comment": [
              {
                "text": "no tool slot mapped — change tool manually"
              }
            ]
          }
        ],
        "spindleCW": [
          {
            "line": [
              {
                "text": "M3 S"
              },
              {
                "value": "rpm",
                "precision": "integer"
              }
            ]
          }
        ],
        "spindleCCW": [
          {
            "line": [
              {
                "text": "M4 S"
              },
              {
                "value": "rpm",
                "precision": "integer"
              }
            ]
          }
        ],
        "spindleStop": [
          {
            "line": [
              {
                "text": "M5"
              }
            ]
          }
        ],
        "coolantOff": [
          {
            "line": [
              {
                "text": "M9"
              }
            ]
          }
        ],
        "coolantFlood": [
          {
            "line": [
              {
                "text": "M8"
              }
            ]
          }
        ],
        "coolantMist": [
          {
            "line": [
              {
                "text": "M7"
              }
            ]
          }
        ],
        "rapid": [
          {
            "line": [
              {
                "text": "G0"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              }
            ]
          }
        ],
        "linear": [
          {
            "line": [
              {
                "text": "G1"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "arcCW": [
          {
            "line": [
              {
                "text": "G2"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "i",
                "precision": "coordinate",
                "prefix": " I"
              },
              {
                "value": "j",
                "precision": "coordinate",
                "prefix": " J"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "arcCCW": [
          {
            "line": [
              {
                "text": "G3"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "i",
                "precision": "coordinate",
                "prefix": " I"
              },
              {
                "value": "j",
                "precision": "coordinate",
                "prefix": " J"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "retractRapid": [
          {
            "line": [
              {
                "text": "G0"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              }
            ]
          }
        ],
        "retractFeed": [
          {
            "line": [
              {
                "text": "G1"
              },
              {
                "value": "x",
                "precision": "coordinate",
                "prefix": " X"
              },
              {
                "value": "y",
                "precision": "coordinate",
                "prefix": " Y"
              },
              {
                "value": "z",
                "precision": "coordinate",
                "prefix": " Z"
              },
              {
                "value": "feed",
                "precision": "integer",
                "prefix": " F",
                "optional": true
              }
            ]
          }
        ],
        "programEnd": [
          {
            "line": [
              {
                "text": "M2"
              }
            ]
          }
        ],
        "toolChangeManual": [
          {
            "comment": [
              {
                "text": "MANUAL TOOL CHANGE: "
              },
              {
                "label": "toolName"
              },
              {
                "value": "toolSlot",
                "precision": "integer",
                "prefix": " slot ",
                "optional": true
              },
              {
                "text": " — load tool and verify offsets before resuming"
              }
            ]
          },
          {
            "line": [
              {
                "text": "M0"
              }
            ]
          }
        ]
      }
    }
  }
];
