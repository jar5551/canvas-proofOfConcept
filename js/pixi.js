var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture = PIXI.Texture.fromImage('assets/bunny.png');

// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);
bunny.interactive = true;
// center the sprite's anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite to the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

bunny
    .on('mousedown', onBunnyDown)
    .on('mouseover', onBunnyOver)
    .on('mouseout', onButtonOut)
    .on('touchstart', onBunnyDown)
;

stage.addChild(bunny);

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}

function onBunnyDown() {
    console.log('bunny');

    bunny.scale.set(5);
}

function onBunnyOver() {
    $('html,body').css('cursor', 'pointer');
}

function onButtonOut() {
    $('html,body').css('cursor', 'auto');
    bunny.scale.set(1);
}
