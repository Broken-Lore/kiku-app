<template>
  <div class="kitchen-img">
    <svg
      width="970"
      height="610"
      viewBox="0 0 970 610"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="970"
        height="610"
        fill="url(#pattern0)"
      />
      <path id="cat"
        d="M345 480L342 479L340 480V483.5V493.5L339 496L337 498.5V501.5V506L334.5 508L333 512L330 515.5L324.5 518.5L318 523L312.5 528L308.5 534L307 540.5V546.5V551V555H298.5H291.5L287 557L280.5 559.5L278.5 562.5L282 565L287 564.5L293 562.5L298.5 564.5L307 565L312.5 564.5L316.5 566H320.5H333L334.5 564.5H339L342 562.5V564.5L344.5 566L348 565L351.5 562.5H357.5V564.5H361.5L363.5 562.5V551V542.5L366 532.5V518.5V510.5V506L367.5 504.5V498.5L366 493.5V491.5L367.5 486L366 483.5H363.5L357.5 488.5L349.5 486L347 483.5L345 480Z"
        stroke="black"
      />
      <path id="clock"
          d="M318.5 204.5L319 208C327.167 217.5 343.6 236.7 344 237.5C344.4 238.3 366.5 232.833 377.5 230L394 210C393.667 200.333 392.9 180.8 392.5 180C392.1 179.2 368 167 356 161L321 180.5L318.5 204.5Z" stroke="black"/>

      <path id="kettle"
        d="M429 311L431 305L436 300.5L442.5 299H449.5L455 300L460.5 303L463.5 306L464.5 310L465 319L460.5 316L456 314.5H452.5L449 314V312.5L451 311.5V308.5L447 307H444L442.5 308.5L441.5 311L443 312.5V314.5L436 315.5L431 317.5L427.5 319V311.5L428.5 310.5M429 300.5L432.5 298L437 296L442.5 295H448.5L454.5 296L460.5 298L463.5 300.5L465.5 303L467.5 305L468.5 308.5V312.5V321.5L471 326L472.5 327L475 325L476.5 321.5L477.5 318.5L479.5 316L482.5 314.5L485 317.5L482.5 320L480.5 323L479.5 328.5L479 331.5L476.5 334.5L475 337.5L473 338V346.5L468.5 350L458.5 352L445.5 353H434.5L427.5 352L423 350L419.5 347.5V342V335.5L420.5 328.5L422.5 324.5L424 321.5V316V311L425 306L429 300.5Z"
        stroke="black"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0"
            transform="scale(0.00103093 0.00163934)"
          />
        </pattern>
        <image id="image0" width="970" height="610" />
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.kitchen-img {
  background-image: url(../assets/img/kitchen.png);
  background-size: cover;
  filter: brightness(50%);
}
/* .kitchen-img:after {
  content: "";
  display: block;
  /* //padding-bottom: 100%; */
.kitchen-img svg {
  cursor: pointer;
  height: 100%;
  width: 100%;
  top: 4px;
}

.kitchen-img svg path {
  fill: transparent;
  stroke: transparent;
  cursor: pointer;
}

.kitchen-img svg path:hover {
  filter: brightness(100%);
  fill: red;
}

.kitchen-img svg kettle:hover {
  fill: blue;
}

svg {
  display: block;
}
</style>