# Vehicle Movement on Map - Frontend Developer Intern Assignment

## Overview

This React application simulates a vehicle moving along a predefined route on a Leaflet map.
It displays the vehicle's live position, a growing polyline representing the path, and metadata including current coordinate, timestamp, speed, and elapsed time.

## Project Structure

- `public/dummy-route.json` - Static JSON file containing route coordinate points with timestamps.
- `src/App.js` - Main app handling data fetching, animation controls, and rendering components.
- `src/components/MapView` - Map and marker rendering using Leaflet.
- `src/components/Controls` - Play, pause, and reset controls.
- `src/components/Metadata` - Displays metadata information.
- CSS files for styling each component separately.

## Setup & Running Instructions

1. Clone or copy the project files.

2. Ensure `dummy-route.json` is placed inside the `public` folder at your project root.

3. Install dependencies (React, React Leaflet, Leaflet) if using create-react-app or other starter:

## URL LINKS
1. Published URL: 'https://vehiclemovement.ccbp.tech/'
2. Video recording URL: "https://www.loom.com/share/0877f8a95b354bb4a9ba62d6999f6920"
3. Resume URL: 'file:///C:/Users/balu1/Downloads/balaji%20final%20resume.pdf'


# package.json
{
  "name": "vehicle-movement-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "leaflet": "1.9.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-leaflet": "4.2.1",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.28.5",
    "@babel/preset-env": "^7.28.5",
    "@babel/preset-react": "^7.28.5",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.6.1",
    "eslint": "^8.57.1",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.2",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-prettier": "^4.2.5",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^4.6.2",
    "prettier": "^2.8.8",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
} 


# eslintrc

{
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    },
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/state-in-constructor": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "warn",
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "labelAttributes": [
          "htmlFor"
        ]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/prefer-stateless-function": "off",
    "no-unused-vars": "warn",
    "react/no-unused-state": "warn",
    "react/button-has-type": "warn",
    "react/no-unescaped-entities": "warn"
  }
}

