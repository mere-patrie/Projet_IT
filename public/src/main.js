$(function() {
    main();
});
function main() {
    // Append scrips in the head
    $("head").append(`<script type="text/javascript" src="https://livejs.com/live.js"></script><style>/*
    ! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com
    */
    
    /*
    1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
    2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
    */
    
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      /* 1 */
      border-width: 0;
      /* 2 */
      border-style: solid;
      /* 2 */
      border-color: #e5e7eb;
      /* 2 */
    }
    
    ::before,
    ::after {
      --tw-content: '';
    }
    
    /*
    1. Use a consistent sensible line-height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    3. Use a more readable tab size.
    4. Use the user's configured `sans` font-family by default.
    5. Use the user's configured `sans` font-feature-settings by default.
    */
    
    html {
      line-height: 1.5;
      /* 1 */
      -webkit-text-size-adjust: 100%;
      /* 2 */
      -moz-tab-size: 4;
      /* 3 */
      -o-tab-size: 4;
         tab-size: 4;
      /* 3 */
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      /* 4 */
      font-feature-settings: normal;
      /* 5 */
    }
    
    /*
    1. Remove the margin in all browsers.
    2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
    */
    
    body {
      margin: 0;
      /* 1 */
      line-height: inherit;
      /* 2 */
    }
    
    /*
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    3. Ensure horizontal rules are visible by default.
    */
    
    hr {
      height: 0;
      /* 1 */
      color: inherit;
      /* 2 */
      border-top-width: 1px;
      /* 3 */
    }
    
    /*
    Add the correct text decoration in Chrome, Edge, and Safari.
    */
    
    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
              text-decoration: underline dotted;
    }
    
    /*
    Remove the default font size and weight for headings.
    */
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    
    /*
    Reset links to optimize for opt-in styling instead of opt-out.
    */
    
    a {
      color: inherit;
      text-decoration: inherit;
    }
    
    /*
    Add the correct font weight in Edge and Safari.
    */
    
    b,
    strong {
      font-weight: bolder;
    }
    
    /*
    1. Use the user's configured `mono` font family by default.
    2. Correct the odd `em` font sizing in all browsers.
    */
    
    code,
    kbd,
    samp,
    pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      /* 1 */
      font-size: 1em;
      /* 2 */
    }
    
    /*
    Add the correct font size in all browsers.
    */
    
    small {
      font-size: 80%;
    }
    
    /*
    Prevent `sub` and `sup` elements from affecting the line height in all browsers.
    */
    
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
    
    /*
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    3. Remove gaps between table borders by default.
    */
    
    table {
      text-indent: 0;
      /* 1 */
      border-color: inherit;
      /* 2 */
      border-collapse: collapse;
      /* 3 */
    }
    
    /*
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    3. Remove default padding in all browsers.
    */
    
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      /* 1 */
      font-size: 100%;
      /* 1 */
      font-weight: inherit;
      /* 1 */
      line-height: inherit;
      /* 1 */
      color: inherit;
      /* 1 */
      margin: 0;
      /* 2 */
      padding: 0;
      /* 3 */
    }
    
    /*
    Remove the inheritance of text transform in Edge and Firefox.
    */
    
    button,
    select {
      text-transform: none;
    }
    
    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Remove default button styles.
    */
    
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
      /* 1 */
      background-color: transparent;
      /* 2 */
      background-image: none;
      /* 2 */
    }
    
    /*
    Use the modern Firefox focus style for all focusable elements.
    */
    
    :-moz-focusring {
      outline: auto;
    }
    
    /*
    Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
    */
    
    :-moz-ui-invalid {
      box-shadow: none;
    }
    
    /*
    Add the correct vertical alignment in Chrome and Firefox.
    */
    
    progress {
      vertical-align: baseline;
    }
    
    /*
    Correct the cursor style of increment and decrement buttons in Safari.
    */
    
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }
    
    /*
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */
    
    [type='search'] {
      -webkit-appearance: textfield;
      /* 1 */
      outline-offset: -2px;
      /* 2 */
    }
    
    /*
    Remove the inner padding in Chrome and Safari on macOS.
    */
    
    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    
    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to `inherit` in Safari.
    */
    
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      /* 1 */
      font: inherit;
      /* 2 */
    }
    
    /*
    Add the correct display in Chrome and Safari.
    */
    
    summary {
      display: list-item;
    }
    
    /*
    Removes the default spacing and border for appropriate elements.
    */
    
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }
    
    fieldset {
      margin: 0;
      padding: 0;
    }
    
    legend {
      padding: 0;
    }
    
    ol,
    ul,
    menu {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    /*
    Prevent resizing textareas horizontally by default.
    */
    
    textarea {
      resize: vertical;
    }
    
    /*
    1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
    2. Set the default placeholder color to the user's configured gray 400 color.
    */
    
    input::-moz-placeholder, textarea::-moz-placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }
    
    input::placeholder,
    textarea::placeholder {
      opacity: 1;
      /* 1 */
      color: #9ca3af;
      /* 2 */
    }
    
    /*
    Set the default cursor for buttons.
    */
    
    button,
    [role="button"] {
      cursor: pointer;
    }
    
    /*
    Make sure disabled buttons don't get the pointer cursor.
    */
    
    :disabled {
      cursor: default;
    }
    
    /*
    1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
       This can trigger a poorly considered lint error in some tools but is included by design.
    */
    
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      /* 1 */
      vertical-align: middle;
      /* 2 */
    }
    
    /*
    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    */
    
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    
    /* Make elements with the HTML hidden attribute stay hidden by default */
    
    [hidden] {
      display: none;
    }
    
    *, ::before, ::after {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x:  ;
      --tw-pan-y:  ;
      --tw-pinch-zoom:  ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal:  ;
      --tw-slashed-zero:  ;
      --tw-numeric-figure:  ;
      --tw-numeric-spacing:  ;
      --tw-numeric-fraction:  ;
      --tw-ring-inset:  ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur:  ;
      --tw-brightness:  ;
      --tw-contrast:  ;
      --tw-grayscale:  ;
      --tw-hue-rotate:  ;
      --tw-invert:  ;
      --tw-saturate:  ;
      --tw-sepia:  ;
      --tw-drop-shadow:  ;
      --tw-backdrop-blur:  ;
      --tw-backdrop-brightness:  ;
      --tw-backdrop-contrast:  ;
      --tw-backdrop-grayscale:  ;
      --tw-backdrop-hue-rotate:  ;
      --tw-backdrop-invert:  ;
      --tw-backdrop-opacity:  ;
      --tw-backdrop-saturate:  ;
      --tw-backdrop-sepia:  ;
    }
    
    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x:  ;
      --tw-pan-y:  ;
      --tw-pinch-zoom:  ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal:  ;
      --tw-slashed-zero:  ;
      --tw-numeric-figure:  ;
      --tw-numeric-spacing:  ;
      --tw-numeric-fraction:  ;
      --tw-ring-inset:  ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur:  ;
      --tw-brightness:  ;
      --tw-contrast:  ;
      --tw-grayscale:  ;
      --tw-hue-rotate:  ;
      --tw-invert:  ;
      --tw-saturate:  ;
      --tw-sepia:  ;
      --tw-drop-shadow:  ;
      --tw-backdrop-blur:  ;
      --tw-backdrop-brightness:  ;
      --tw-backdrop-contrast:  ;
      --tw-backdrop-grayscale:  ;
      --tw-backdrop-hue-rotate:  ;
      --tw-backdrop-invert:  ;
      --tw-backdrop-opacity:  ;
      --tw-backdrop-saturate:  ;
      --tw-backdrop-sepia:  ;
    }
    
    .container {
      width: 100%;
    }
    
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
    
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
    
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
    
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
    
    @media (min-width: 1536px) {
      .container {
        max-width: 1536px;
      }
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    
    .visible {
      visibility: visible;
    }
    
    .fixed {
      position: fixed;
    }
    
    .absolute {
      position: absolute;
    }
    
    .relative {
      position: relative;
    }
    
    .sticky {
      position: sticky;
    }
    
    .inset-0 {
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    
    .inset-y-0 {
      top: 0px;
      bottom: 0px;
    }
    
    .-left-3 {
      left: -0.75rem;
    }
    
    .bottom-10 {
      bottom: 2.5rem;
    }
    
    .left-0 {
      left: 0px;
    }
    
    .left-1 {
      left: 0.25rem;
    }
    
    .left-1\/2 {
      left: 50%;
    }
    
    .left-\[calc\(50\%\+3rem\)\] {
      left: calc(50% + 3rem);
    }
    
    .left-\[calc\(50\%-11rem\)\] {
      left: calc(50% - 11rem);
    }
    
    .right-0 {
      right: 0px;
    }
    
    .right-10 {
      right: 2.5rem;
    }
    
    .top-0 {
      top: 0px;
    }
    
    .top-2 {
      top: 0.5rem;
    }
    
    .top-\[100vh\] {
      top: 100vh;
    }
    
    .top-\[72px\] {
      top: 72px;
    }
    
    .isolate {
      isolation: isolate;
    }
    
    .-z-10 {
      z-index: -10;
    }
    
    .z-10 {
      z-index: 10;
    }
    
    .z-50 {
      z-index: 50;
    }
    
    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    
    .mx-px {
      margin-left: 1px;
      margin-right: 1px;
    }
    
    .my-4 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    
    .mb-1 {
      margin-bottom: 0.25rem;
    }
    
    .mb-10 {
      margin-bottom: 2.5rem;
    }
    
    .mb-2 {
      margin-bottom: 0.5rem;
    }
    
    .mb-4 {
      margin-bottom: 1rem;
    }
    
    .mb-6 {
      margin-bottom: 1.5rem;
    }
    
    .ml-10 {
      margin-left: 2.5rem;
    }
    
    .ml-3 {
      margin-left: 0.75rem;
    }
    
    .ml-4 {
      margin-left: 1rem;
    }
    
    .ml-6 {
      margin-left: 1.5rem;
    }
    
    .mr-1 {
      margin-right: 0.25rem;
    }
    
    .mr-2 {
      margin-right: 0.5rem;
    }
    
    .mt-1 {
      margin-top: 0.25rem;
    }
    
    .mt-10 {
      margin-top: 2.5rem;
    }
    
    .mt-2 {
      margin-top: 0.5rem;
    }
    
    .mt-3 {
      margin-top: 0.75rem;
    }
    
    .mt-4 {
      margin-top: 1rem;
    }
    
    .mt-6 {
      margin-top: 1.5rem;
    }
    
    .block {
      display: block;
    }
    
    .flex {
      display: flex;
    }
    
    .inline-flex {
      display: inline-flex;
    }
    
    .table {
      display: table;
    }
    
    .grid {
      display: grid;
    }
    
    .hidden {
      display: none;
    }
    
    .aspect-\[3\/4\] {
      aspect-ratio: 3/4;
    }
    
    .h-10 {
      height: 2.5rem;
    }
    
    .h-12 {
      height: 3rem;
    }
    
    .h-16 {
      height: 4rem;
    }
    
    .h-3 {
      height: 0.75rem;
    }
    
    .h-5 {
      height: 1.25rem;
    }
    
    .h-6 {
      height: 1.5rem;
    }
    
    .h-7 {
      height: 1.75rem;
    }
    
    .h-8 {
      height: 2rem;
    }
    
    .h-\[21\.1875rem\] {
      height: 21.1875rem;
    }
    
    .h-\[calc\(100\%-2px\)\] {
      height: calc(100% - 2px);
    }
    
    .h-full {
      height: 100%;
    }
    
    .h-screen {
      height: 100vh;
    }
    
    .min-h-full {
      min-height: 100%;
    }
    
    .min-h-screen {
      min-height: 100vh;
    }
    
    .w-0 {
      width: 0px;
    }
    
    .w-10 {
      width: 2.5rem;
    }
    
    .w-11 {
      width: 2.75rem;
    }
    
    .w-12 {
      width: 3rem;
    }
    
    .w-16 {
      width: 4rem;
    }
    
    .w-3 {
      width: 0.75rem;
    }
    
    .w-48 {
      width: 12rem;
    }
    
    .w-5 {
      width: 1.25rem;
    }
    
    .w-6 {
      width: 1.5rem;
    }
    
    .w-60 {
      width: 15rem;
    }
    
    .w-7 {
      width: 1.75rem;
    }
    
    .w-8 {
      width: 2rem;
    }
    
    .w-\[150px\] {
      width: 150px;
    }
    
    .w-auto {
      width: auto;
    }
    
    .w-fit {
      width: -moz-fit-content;
      width: fit-content;
    }
    
    .w-full {
      width: 100%;
    }
    
    .w-max {
      width: -moz-max-content;
      width: max-content;
    }
    
    .w-screen {
      width: 100vw;
    }
    
    .max-w-2xl {
      max-width: 42rem;
    }
    
    .max-w-7xl {
      max-width: 80rem;
    }
    
    .max-w-lg {
      max-width: 32rem;
    }
    
    .max-w-md {
      max-width: 28rem;
    }
    
    .max-w-none {
      max-width: none;
    }
    
    .max-w-xs {
      max-width: 20rem;
    }
    
    .flex-shrink-0 {
      flex-shrink: 0;
    }
    
    .origin-\[0\] {
      transform-origin: 0;
    }
    
    .origin-top-right {
      transform-origin: top right;
    }
    
    .-translate-x-1\/2 {
      --tw-translate-x: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .-translate-y-4 {
      --tw-translate-y: -1rem;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .rotate-\[30deg\] {
      --tw-rotate: 30deg;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .scale-75 {
      --tw-scale-x: .75;
      --tw-scale-y: .75;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .transform {
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .transform-gpu {
      transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    .cursor-pointer {
      cursor: pointer;
    }
    
    .appearance-none {
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    
    .flex-row {
      flex-direction: row;
    }
    
    .flex-col {
      flex-direction: column;
    }
    
    .content-start {
      align-content: flex-start;
    }
    
    .items-start {
      align-items: flex-start;
    }
    
    .items-end {
      align-items: flex-end;
    }
    
    .items-center {
      align-items: center;
    }
    
    .items-baseline {
      align-items: baseline;
    }
    
    .justify-start {
      justify-content: flex-start;
    }
    
    .justify-center {
      justify-content: center;
    }
    
    .justify-between {
      justify-content: space-between;
    }
    
    .gap-1 {
      gap: 0.25rem;
    }
    
    .gap-2 {
      gap: 0.5rem;
    }
    
    .gap-3 {
      gap: 0.75rem;
    }
    
    .gap-x-6 {
      -moz-column-gap: 1.5rem;
           column-gap: 1.5rem;
    }
    
    .space-x-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1rem * var(--tw-space-x-reverse));
      margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }
    
    .space-y-1 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
    }
    
    .overflow-hidden {
      overflow: hidden;
    }
    
    .overflow-y-auto {
      overflow-y: auto;
    }
    
    .whitespace-nowrap {
      white-space: nowrap;
    }
    
    .rounded {
      border-radius: 0.25rem;
    }
    
    .rounded-3xl {
      border-radius: 1.5rem;
    }
    
    .rounded-full {
      border-radius: 9999px;
    }
    
    .rounded-lg {
      border-radius: 0.5rem;
    }
    
    .rounded-md {
      border-radius: 0.375rem;
    }
    
    .rounded-l {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    
    .rounded-r {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
    
    .border {
      border-width: 1px;
    }
    
    .border-0 {
      border-width: 0px;
    }
    
    .border-b {
      border-bottom-width: 1px;
    }
    
    .border-b-2 {
      border-bottom-width: 2px;
    }
    
    .border-l {
      border-left-width: 1px;
    }
    
    .border-r {
      border-right-width: 1px;
    }
    
    .border-t {
      border-top-width: 1px;
    }
    
    .border-emerald-400 {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153 / var(--tw-border-opacity));
    }
    
    .border-gray-200 {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235 / var(--tw-border-opacity));
    }
    
    .border-gray-300 {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219 / var(--tw-border-opacity));
    }
    
    .border-gray-500 {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128 / var(--tw-border-opacity));
    }
    
    .border-gray-700 {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81 / var(--tw-border-opacity));
    }
    
    .border-neutral-300 {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 212 / var(--tw-border-opacity));
    }
    
    .border-red-500 {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68 / var(--tw-border-opacity));
    }
    
    .bg-gray-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    }
    
    .bg-gray-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219 / var(--tw-bg-opacity));
    }
    
    .bg-gray-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    
    .bg-gray-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128 / var(--tw-bg-opacity));
    }
    
    .bg-green-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(220 252 231 / var(--tw-bg-opacity));
    }
    
    .bg-green-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(34 197 94 / var(--tw-bg-opacity));
    }
    
    .bg-indigo-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(224 231 255 / var(--tw-bg-opacity));
    }
    
    .bg-indigo-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229 / var(--tw-bg-opacity));
    }
    
    .bg-neutral-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 245 / var(--tw-bg-opacity));
    }
    
    .bg-neutral-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229 / var(--tw-bg-opacity));
    }
    
    .bg-neutral-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(163 163 163 / var(--tw-bg-opacity));
    }
    
    .bg-red-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226 / var(--tw-bg-opacity));
    }
    
    .bg-red-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38 / var(--tw-bg-opacity));
    }
    
    .bg-transparent {
      background-color: transparent;
    }
    
    .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    
    .bg-opacity-75 {
      --tw-bg-opacity: 0.75;
    }
    
    .fill-emerald-400 {
      fill: #34d399;
    }
    
    .fill-gray-900 {
      fill: #111827;
    }
    
    .fill-indigo-600 {
      fill: #4f46e5;
    }
    
    .fill-neutral-800 {
      fill: #262626;
    }
    
    .fill-red-400 {
      fill: #f87171;
    }
    
    .p-1 {
      padding: 0.25rem;
    }
    
    .p-12 {
      padding: 3rem;
    }
    
    .p-2 {
      padding: 0.5rem;
    }
    
    .p-3 {
      padding: 0.75rem;
    }
    
    .p-4 {
      padding: 1rem;
    }
    
    .px-1 {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    
    .px-2 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    
    .px-2\.5 {
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }
    
    .px-3 {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    
    .px-3\.5 {
      padding-left: 0.875rem;
      padding-right: 0.875rem;
    }
    
    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    .px-5 {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    
    .px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    
    .py-0 {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    
    .py-0\.5 {
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
    }
    
    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
    
    .py-1\.5 {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
    }
    
    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    
    .py-2\.5 {
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
    }
    
    .py-3 {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
    
    .py-32 {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
    
    .py-6 {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    
    .pb-2 {
      padding-bottom: 0.5rem;
    }
    
    .pb-2\.5 {
      padding-bottom: 0.625rem;
    }
    
    .pb-3 {
      padding-bottom: 0.75rem;
    }
    
    .pb-4 {
      padding-bottom: 1rem;
    }
    
    .pl-6 {
      padding-left: 1.5rem;
    }
    
    .pr-12 {
      padding-right: 3rem;
    }
    
    .pt-14 {
      padding-top: 3.5rem;
    }
    
    .pt-2 {
      padding-top: 0.5rem;
    }
    
    .pt-4 {
      padding-top: 1rem;
    }
    
    .pt-5 {
      padding-top: 1.25rem;
    }
    
    .text-left {
      text-align: left;
    }
    
    .text-center {
      text-align: center;
    }
    
    .font-sans {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    
    .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    
    .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
    
    .text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    
    .text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
    
    .text-base {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    
    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    
    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    
    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    
    .font-bold {
      font-weight: 700;
    }
    
    .font-medium {
      font-weight: 500;
    }
    
    .font-normal {
      font-weight: 400;
    }
    
    .font-semibold {
      font-weight: 600;
    }
    
    .leading-6 {
      line-height: 1.5rem;
    }
    
    .leading-8 {
      line-height: 2rem;
    }
    
    .leading-none {
      line-height: 1;
    }
    
    .tracking-tight {
      letter-spacing: -0.025em;
    }
    
    .text-black {
      --tw-text-opacity: 1;
      color: rgb(0 0 0 / var(--tw-text-opacity));
    }
    
    .text-gray-400 {
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
    }
    
    .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
    }
    
    .text-gray-700 {
      --tw-text-opacity: 1;
      color: rgb(55 65 81 / var(--tw-text-opacity));
    }
    
    .text-gray-800 {
      --tw-text-opacity: 1;
      color: rgb(31 41 55 / var(--tw-text-opacity));
    }
    
    .text-gray-900 {
      --tw-text-opacity: 1;
      color: rgb(17 24 39 / var(--tw-text-opacity));
    }
    
    .text-green-600 {
      --tw-text-opacity: 1;
      color: rgb(22 163 74 / var(--tw-text-opacity));
    }
    
    .text-indigo-500 {
      --tw-text-opacity: 1;
      color: rgb(99 102 241 / var(--tw-text-opacity));
    }
    
    .text-indigo-600 {
      --tw-text-opacity: 1;
      color: rgb(79 70 229 / var(--tw-text-opacity));
    }
    
    .text-neutral-100 {
      --tw-text-opacity: 1;
      color: rgb(245 245 245 / var(--tw-text-opacity));
    }
    
    .text-neutral-500 {
      --tw-text-opacity: 1;
      color: rgb(115 115 115 / var(--tw-text-opacity));
    }
    
    .text-neutral-900 {
      --tw-text-opacity: 1;
      color: rgb(23 23 23 / var(--tw-text-opacity));
    }
    
    .text-red-600 {
      --tw-text-opacity: 1;
      color: rgb(220 38 38 / var(--tw-text-opacity));
    }
    
    .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    .no-underline {
      text-decoration-line: none;
    }
    
    .opacity-60 {
      opacity: 0.6;
    }
    
    .shadow {
      --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .shadow-lg {
      --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .shadow-md {
      --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .shadow-sm {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .shadow-xl {
      --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    
    .ring-1 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    
    .ring-inset {
      --tw-ring-inset: inset;
    }
    
    .ring-black {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
    }
    
    .ring-gray-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
    }
    
    .ring-opacity-5 {
      --tw-ring-opacity: 0.05;
    }
    
    .blur-3xl {
      --tw-blur: blur(64px);
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }
    
    .blur-sm {
      --tw-blur: blur(4px);
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }
    
    .filter {
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }
    
    .transition {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .transition-opacity {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .duration-300 {
      transition-duration: 300ms;
    }
    
    .after\:absolute::after {
      content: var(--tw-content);
      position: absolute;
    }
    
    .after\:left-\[2px\]::after {
      content: var(--tw-content);
      left: 2px;
    }
    
    .after\:top-0::after {
      content: var(--tw-content);
      top: 0px;
    }
    
    .after\:top-0\.5::after {
      content: var(--tw-content);
      top: 0.125rem;
    }
    
    .after\:h-5::after {
      content: var(--tw-content);
      height: 1.25rem;
    }
    
    .after\:w-5::after {
      content: var(--tw-content);
      width: 1.25rem;
    }
    
    .after\:rounded-full::after {
      content: var(--tw-content);
      border-radius: 9999px;
    }
    
    .after\:border::after {
      content: var(--tw-content);
      border-width: 1px;
    }
    
    .after\:border-gray-300::after {
      content: var(--tw-content);
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219 / var(--tw-border-opacity));
    }
    
    .after\:bg-white::after {
      content: var(--tw-content);
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
    
    .after\:transition-all::after {
      content: var(--tw-content);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .after\:content-\[\'\'\]::after {
      --tw-content: '';
      content: var(--tw-content);
    }
    
    .invalid\:border-red-500:invalid {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68 / var(--tw-border-opacity));
    }
    
    .hover\:bg-gray-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-gray-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-gray-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-gray-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-green-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(21 128 61 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-indigo-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-indigo-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(67 56 202 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-neutral-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 212 / var(--tw-bg-opacity));
    }
    
    .hover\:bg-red-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68 / var(--tw-bg-opacity));
    }
    
    .hover\:underline:hover {
      text-decoration-line: underline;
    }
    
    .focus\:border-indigo-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(79 70 229 / var(--tw-border-opacity));
    }
    
    .focus\:outline-none:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    
    .focus\:ring-0:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    
    .focus\:ring-2:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    
    .focus\:ring-white:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
    }
    
    .focus\:ring-offset-2:focus {
      --tw-ring-offset-width: 2px;
    }
    
    .focus\:ring-offset-gray-400:focus {
      --tw-ring-offset-color: #9ca3af;
    }
    
    .focus\:ring-offset-gray-800:focus {
      --tw-ring-offset-color: #1f2937;
    }
    
    .focus-visible\:outline:focus-visible {
      outline-style: solid;
    }
    
    .focus-visible\:outline-2:focus-visible {
      outline-width: 2px;
    }
    
    .focus-visible\:outline-offset-2:focus-visible {
      outline-offset: 2px;
    }
    
    .focus-visible\:outline-offset-\[-4px\]:focus-visible {
      outline-offset: -4px;
    }
    
    .focus-visible\:outline-indigo-600:focus-visible {
      outline-color: #4f46e5;
    }
    
    .disabled\:bg-neutral-500:disabled {
      --tw-bg-opacity: 1;
      background-color: rgb(115 115 115 / var(--tw-bg-opacity));
    }
    
    .peer:checked ~ .peer-checked\:bg-indigo-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229 / var(--tw-bg-opacity));
    }
    
    .peer:checked ~ .peer-checked\:after\:translate-x-full::after {
      content: var(--tw-content);
      --tw-translate-x: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:checked ~ .peer-checked\:after\:border-white::after {
      content: var(--tw-content);
      --tw-border-opacity: 1;
      border-color: rgb(255 255 255 / var(--tw-border-opacity));
    }
    
    .peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:top-1\/2 {
      top: 50%;
    }
    
    .peer:placeholder-shown ~ .peer-placeholder-shown\:top-1\/2 {
      top: 50%;
    }
    
    .peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:-translate-y-1\/2 {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:placeholder-shown ~ .peer-placeholder-shown\:-translate-y-1\/2 {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:-moz-placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:placeholder-shown ~ .peer-placeholder-shown\:scale-100 {
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:focus ~ .peer-focus\:top-2 {
      top: 0.5rem;
    }
    
    .peer:focus ~ .peer-focus\:-translate-y-4 {
      --tw-translate-y: -1rem;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:focus ~ .peer-focus\:scale-75 {
      --tw-scale-x: .75;
      --tw-scale-y: .75;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    
    .peer:focus ~ .peer-focus\:px-2 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    
    .peer:focus ~ .peer-focus\:text-indigo-600 {
      --tw-text-opacity: 1;
      color: rgb(79 70 229 / var(--tw-text-opacity));
    }
    
    .peer:focus ~ .peer-focus\:ring-4 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    
    .peer:focus ~ .peer-focus\:ring-indigo-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity));
    }
    
    .dark .dark\:border-gray-300 {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219 / var(--tw-border-opacity));
    }
    
    .dark .dark\:border-gray-500 {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128 / var(--tw-border-opacity));
    }
    
    .dark .dark\:border-gray-600 {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99 / var(--tw-border-opacity));
    }
    
    .dark .dark\:border-gray-700 {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81 / var(--tw-border-opacity));
    }
    
    .dark .dark\:bg-gray-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:bg-gray-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:bg-gray-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:bg-indigo-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(49 46 129 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:bg-neutral-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(64 64 64 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:bg-neutral-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:fill-neutral-100 {
      fill: #f5f5f5;
    }
    
    .dark .dark\:fill-neutral-200 {
      fill: #e5e5e5;
    }
    
    .dark .dark\:text-black {
      --tw-text-opacity: 1;
      color: rgb(0 0 0 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-gray-300 {
      --tw-text-opacity: 1;
      color: rgb(209 213 219 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-gray-400 {
      --tw-text-opacity: 1;
      color: rgb(156 163 175 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-gray-800 {
      --tw-text-opacity: 1;
      color: rgb(31 41 55 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-indigo-300 {
      --tw-text-opacity: 1;
      color: rgb(165 180 252 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-indigo-700 {
      --tw-text-opacity: 1;
      color: rgb(67 56 202 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-neutral-100 {
      --tw-text-opacity: 1;
      color: rgb(245 245 245 / var(--tw-text-opacity));
    }
    
    .dark .dark\:text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    .dark .hover\:dark\:border-gray-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99 / var(--tw-border-opacity));
    }
    
    .dark .dark\:hover\:bg-gray-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:hover\:bg-gray-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81 / var(--tw-bg-opacity));
    }
    
    .dark .dark\:hover\:text-white:hover {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    .dark .dark\:focus\:ring-offset-gray-800:focus {
      --tw-ring-offset-color: #1f2937;
    }
    
    .dark .peer:focus ~ .dark\:peer-focus\:ring-indigo-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 48 163 / var(--tw-ring-opacity));
    }
    
    @media (min-width: 640px) {
      .sm\:left-\[calc\(50\%\+36rem\)\] {
        left: calc(50% + 36rem);
      }
    
      .sm\:left-\[calc\(50\%-30rem\)\] {
        left: calc(50% - 30rem);
      }
    
      .sm\:mx-0 {
        margin-left: 0px;
        margin-right: 0px;
      }
    
      .sm\:my-8 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    
      .sm\:ml-3 {
        margin-left: 0.75rem;
      }
    
      .sm\:ml-4 {
        margin-left: 1rem;
      }
    
      .sm\:mt-0 {
        margin-top: 0px;
      }
    
      .sm\:flex {
        display: flex;
      }
    
      .sm\:h-10 {
        height: 2.5rem;
      }
    
      .sm\:h-\[42\.375rem\] {
        height: 42.375rem;
      }
    
      .sm\:w-10 {
        width: 2.5rem;
      }
    
      .sm\:w-auto {
        width: auto;
      }
    
      .sm\:flex-row-reverse {
        flex-direction: row-reverse;
      }
    
      .sm\:items-start {
        align-items: flex-start;
      }
    
      .sm\:items-center {
        align-items: center;
      }
    
      .sm\:justify-start {
        justify-content: flex-start;
      }
    
      .sm\:p-0 {
        padding: 0px;
      }
    
      .sm\:p-6 {
        padding: 1.5rem;
      }
    
      .sm\:px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    
      .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
    
      .sm\:py-48 {
        padding-top: 12rem;
        padding-bottom: 12rem;
      }
    
      .sm\:py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
    
      .sm\:pb-4 {
        padding-bottom: 1rem;
      }
    
      .sm\:text-left {
        text-align: left;
      }
    }
    
    @media (min-width: 768px) {
      .md\:flex-row {
        flex-direction: row;
      }
    }
    
    @media (min-width: 1024px) {
      .lg\:ml-6 {
        margin-left: 1.5rem;
      }
    
      .lg\:block {
        display: block;
      }
    
      .lg\:hidden {
        display: none;
      }
    
      .lg\:p-4 {
        padding: 1rem;
      }
    
      .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    
      .lg\:py-56 {
        padding-top: 14rem;
        padding-bottom: 14rem;
      }
    }</style><meta name="theme-color" content="#4F46E5"><style>::selection{background-color: #4F46E5;}</style>`);
    
    // Color theme
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
    // Menu
    $(document).click((e) => {if(e.target.closest("#userMenuButton")){$($(".userMenuDropdown")[0]).toggleClass("hidden");}else if(!e.target.closest(".userMenuDropdown")){$($(".userMenuDropdown")[0]).addClass("hidden");} if(e.target.closest("#mobileMenuButton")){$("#mobileMenu").toggleClass("hidden");}else if(!e.target.closest("#mobileMenu")){$("#mobileMenu").addClass("hidden");}});
    if(getCookie("token")){$.post("/auth", {token:getCookie("token")}, (data) => {if(data.status == 200) $(".profilePicture").each(function(){$(this).attr("src", data.data.profilePicture);});});}else $(".profilePicture").each(function(){$(this).attr("src", `${window.location.origin.split(":").slice(0,2).join(":")}/Projet_72h/public/src/defaultProfilePicture.png`);});

    // Get logo and append it to wherever it's needed
    $(".logo").replaceWith(`<img class='h-10 w-10' src='${window.location.origin.split(":").slice(0,2).join(":")}/Projet_72h/public/src/logo.svg'>`);$("head").append(`<link rel="icon" href="${window.location.origin.split(":").slice(0,2).join(":")}/Projet_72h/public/src/favicon.svg" type="image/x-icon">`);
    $("#currentYear").text(new Date().getFullYear());
}

class Notification {
    constructor(title, content, status) {
        $(".notification").remove();
        if(status == "success"){
            $("body").append(`<div class="fixed z-50 bottom-10 right-10 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 flex flex-row gap-1 items-start p-2 rounded-lg notification"><div class="flex flex-col"><div class="flex flex-row items-center content-start"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="fill-emerald-400" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><p class="text-gray-900 dark:text-neutral-100 text-xl">${title}</p></div><p class="text-gray-900 dark:text-neutral-100 text-l">${content}</p></div><button type="button" class="p-1 flex flex-row justify-between items-center focus-visible:outline-offset-[-4px]" onclick="$(this).parent().fadeOut().remove()"><span class="sr-only">Dismiss</span><svg class="h-5 w-5 fill-gray-900 dark:fill-neutral-100 ml-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div>`);
        }else{
            $("body").append(`<div class="fixed z-50 bottom-10 right-10 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 flex flex-row gap-1 items-start p-2 rounded-lg notification"><div class="flex flex-col"><div class="flex flex-row items-center content-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="fill-red-400" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg><p class="text-gray-900 dark:text-neutral-100 text-xl">${title}</p></div><p class="text-gray-900 dark:text-neutral-100 text-l">${content}</p></div><button type="button" class="p-1 flex flex-row justify-between items-center focus-visible:outline-offset-[-4px]" onclick="$(this).parent().fadeOut().remove()"><span class="sr-only">Dismiss</span><svg class="h-5 w-5 fill-gray-900 dark:fill-neutral-100 ml-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div>`);
        }
        setTimeout(()=>{$(".notification").fadeOut(500, function() { $(this).remove(); });}, 3000);
    }
}

class Vibration {
    constructor(vibrationArray){
        this.vibrationArray = vibrationArray;
    }
    vibrate(){
        const isMobile = navigator.userAgentData.mobile;
        if(isMobile) navigator.vibrate(vibrationArray);
    }
}

// new Vibration([200, 50, 200]).vibrate();