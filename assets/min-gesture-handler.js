var adad = 1 ;
console.log("grojklkjdfbnekojgnbnfkekfjgnfmellfgkm");
  AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        window.location = 'https://www.google.com/';
         console.log(markerfond);
          document.getElementById("mat").innerHTML = "Changed text!";
      })
    }
  });
function Nextbut() {
    adad ++;
    if(adad > 10){
        adad = 1;
    }
    if(adad == 1){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset1.glb');
    }
    else if(adad == 2){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset2.glb');
    }
    else if(adad == 3){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset3.glb');
    }
    else if(adad == 4){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset4.glb');
    }
    else if(adad == 5){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset5.glb');
    }
    else if(adad == 6){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset6.glb');
    }
    else if(adad == 7){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset7.glb');
    }
    else if(adad == 8){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset8.glb');
    }
    else if(adad == 9){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset9.glb');
    }
    else if(adad == 10){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset10.glb');
    }
}
function prebut() {
    adad --;
    if(adad < 1){
        adad = 10;
    }
    if(adad == 1){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset1.glb');
    }
    else if(adad == 2){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset2.glb');
    }
    else if(adad == 3){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset3.glb');
    }
    else if(adad == 4){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset4.glb');
    }
    else if(adad == 5){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset5.glb');
    }
    else if(adad == 6){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset6.glb');
    }
    else if(adad == 7){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset7.glb');
    }
    else if(adad == 8){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset8.glb');
    }
    else if(adad == 9){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset9.glb');
    }
    else if(adad == 10){
        document.getElementById("bowser-model").setAttribute('gltf-model', 'assets/asset10.glb');
    }
 
    
}


