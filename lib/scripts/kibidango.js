// Description
//   A Hubot script that receives ●(きびだんご)
//
// Configuration:
//   None
//
// Commands:
//   hubot ● - receives ●(きびだんご)
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.respond(/●$/i, function(res) {
    return res.send("流石に" + robot.name + "もいきなり見ず知らずの人の握ったきびだんごには抵抗があります。");
  });
};
