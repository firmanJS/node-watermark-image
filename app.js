var Jimp = require("jimp");

watermark();

async function watermark() {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  const fontCanvas = await Jimp.create(800, 800);
  const destImage = await Jimp.read('ex.png');

  fontCanvas.print(font, 0, 0, 'CONFIDENTIAL').rotate(30);

  destImage.blit(fontCanvas, 0, 0).writeAsync('test.png');
}