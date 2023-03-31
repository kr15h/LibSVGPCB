# Lib SVG PCB

SvgPcb as a library. This is just a test at the moment. It does not work yet.

```
my-pcb-library/
├── src/
│   ├── layers.js
│   ├── classes/
│   │   ├── Layer.js
│   │   ├── Pad.js
│   │   ├── PadShape.js
│   │   ├── RectanglePadShape.js
│   │   ├── CirclePadShape.js
│   │   ├── RoundedRectanglePadShape.js
│   │   ├── PolygonPadShape.js
│   │   ├── Shape.js
│   │   ├── Text.js
│   │   └── Graphics.js
│   ├── footprints/
│   │   ├── Resistor.js
│   │   └── index.js
│   ├── utils/
│   │   ├── snap.js
│   │   └── index.js
│   ├── index.js
│   └── constants.js
├── tests/
│   ├── testLayer.js
│   ├── testPad.js
│   ├── testShape.js
│   ├── testText.js
│   ├── testGraphics.js
│   ├── testResistor.js
│   ├── testUtils.js
│   └── testConstants.js
├── dist/
│   └── my-pcb-library.js
├── examples/
│   └── example.html
├── package.json
└── README.md

```