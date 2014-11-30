# Description
#   A Hubot script that receives ●(きびだんご)
#
# Configuration:
#   None
#
# Commands:
#   hubot ● - receives ●(きびだんご)
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.respond /●$/i, (res) ->
    res.send "流石に#{robot.name}もいきなり見ず知らずの人の握ったきびだんごには抵抗があります。"
