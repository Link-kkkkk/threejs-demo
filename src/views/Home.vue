<template>
  <div id="home"></div>
</template>

<script>
import * as THREE from 'three'

function installThreeJs () {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.getElementById('home').appendChild( renderer.domElement )
}

export default {
  name: 'home',
  mounted () {
    installThreeJs()
  },
  methods: {

  }
}
</script>
