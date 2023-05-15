


const body = document.body
const btnTheme = document.querySelector(".btn__change-theme")
const th_row = document.querySelector(".head-row")
const b_row = document.querySelector(".table__body")
const body_row = document.querySelectorAll(".body-row ")
const td_row = document.querySelectorAll(".table-column__item ")


let v = false;

btnTheme.addEventListener("click", function(e) {
    console.log(1111)
    toggle(body, "dark");
    toggle(btnTheme, "dark");
    toggle(b_row, "dark");
    [...th_row.children].map(item => toggle(item, "dark"));
    [...body_row].map(item => toggle(item, "dark"));
    [...td_row].map(item => toggle(item, "dark"));
    
    deleteElement(findOneElement("canvas"))
    if (v) {
        v = false
        init(0x000000)
        
    } else {
        v = true
        init(0xffffff)
    }

})

function findOneElement(selector) {
    return document.querySelector(selector)
}

function deleteElement(element) {
    element.remove()
}

function toggle(element, selector) {
    element.classList.toggle(selector)
}



//=======================================================================
var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();
  function init(colorTheme = 0x000000) {
    
    camera = new THREE.PerspectiveCamera( 75, 600 / 300, 2, 1000 );
    camera.position.z = 400;

    scene = new THREE.Scene();

    geometry = new THREE.IcosahedronGeometry( 100, 1 );
    material = new THREE.MeshBasicMaterial( { color: colorTheme, wireframe: true, wireframeLinewidth: 1 } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( 600, 300 );

    document.querySelector(".three_model").appendChild( renderer.domElement );

}


function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}