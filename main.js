canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");
playerX = 10;
playerY = 10;
blockWidth = 30;
blockHeight = 30;
var playerObject = "";
var blockObject = "";
function clear() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
function playerUpdate() {
	fabric.Image.fromURL("sm.png", function(Img){
		playerObject = Img;
		playerObject.scaleToWidth(200);
		playerObject.scaleToHeight(150);
		playerObject.set({
			top:playerY,
			left:playerX
		});
		canvas.add(playerObject);
	});
}
function newImg(get_img) {
	fabric.Image.fromURL(get_img, function(Img){
		blockObject = Img;
		blockObject.scaleToWidth(blockWidth);
		blockObject.scaleToHeight(blockHeight);
		blockObject.set({
			top:playerY,
			left:playerX
		});
		canvas.add(blockObject);
	});
}