<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import * as THREE from 'three'
window['THREE'] = THREE
export default {
  
}
</script>
<style lang="scss">
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
    margin: 0;
    padding: 0;
}

body,
button,
input,
select,
textarea {
    font: 13px/1.5 tahoma, arial, \5b8b\4f53;
    -webkit-text-size-adjust: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
}

address,
cite,
dfn,
em,
var {
    font-style: normal;
}

code,
kbd,
pre,
samp {
    font-family: couriernew, courier, monospace;
}

small {
    font-size: 12px;
}

ul,
ol {
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    text-decoration: none;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

legend {
    color: #000;
}

fieldset,
img {
    border: 0;
}

button,
input,
select,
textarea {
    font-size: 100%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>

