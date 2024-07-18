import { createGlobalStyle } from "styled-components";
import SourceSans3 from './Fonts/SourceSans3.ttf'
import RobotoRegular from './Fonts/Roboto-Regular.ttf'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular';
        src: local('Roboto Regular'), local('RobotoRegular'), url(${RobotoRegular});
    }

    @font-face {
        font-family: 'SourceSans3';
        src: local('Source Sans 3'), local('SourceSans3'), url(${SourceSans3});
    }

    :root {
        --font-primary: 'RobotoRegular', sans-serif;
        --font-secondary: 'SourceSans3', sans-serif;
        --color-error: #E53935;
        --color-blue: #2271D1;
        --color-light-blue: #6BD1FF;
        --color-dark-blue: #03122F;
        --color-green: #00C86F;
        --color-yellow: #FFBA05;
        --color-white: #FFFFFF;
        --color-gray: #A5A5A5;
        --color-light-gray: #F5F5F5;
        --color-dark-gray: #262626;
        --color-light-black: #191919;
        --color-black: #000000;
    }

    html {
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
    }
    body {
        margin: 0;
        min-height: 100vh;
        font-family: var(--font-primary);
        background-color: var(--color-light-black);
        color: var(--color-white);
    }
    main {
        display: block;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible; 
    }
    a {
        background-color: transparent;
    }
    abbr[title] {
        border-bottom: none; 
        text-decoration: underline; 
        text-decoration: underline dotted; 
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    samp {
        font-family: monospace, monospace; 
        font-size: 1em; 
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    img {
        border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0; 
    }
    button,
    input { 
        overflow: visible;
    }
    button,
    select { 
        text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    legend {
        box-sizing: border-box; 
        color: inherit; 
        display: table; 
        max-width: 100%; 
        padding: 0; 
        white-space: normal; 
    }
    progress {
        vertical-align: baseline;
    }
    textarea {
        overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; 
        padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield; 
        outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button; 
    font: inherit; 
    }
    details {
        display: block;
    }
    summary {
        display: list-item;
    }
    template {
        display: none;
    }
    [hidden] {
        display: none;
    }
    div {
        box-sizing: border-box;
    }  
`

export default GlobalStyles