class Game {
  constructor() {
    this.playerMoving= false
    this.resetButton = createButton("")
  }
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  start() {
    player = new Player()
    playerCount = player.getCount()
    
    form = new Form()
    form.display()

    bb = createSprite(width/2,3*height/4)
    bb.addImage('blue_bird.jpg',p2_img)
    bb.scale = 0.15

    boi = createSprite(width/2 - 100, 3*height/4)
    boi.addImage('boi.jpg',b1)
    boi.scale = 0.15

    a = createSprite(width/2-50,height/2)
    a.addImage('a_person.jpg',p1_img)
    a.scale = 0.15

    brs = [bb,boi] 

    music = new Group()
  }

  addSprites() {

  }

  handleElements() {
    form.hide();

    this.handleResetButton.position(width/2+230,100)
    }

  play() {
    this.handleElements()
    this.handleResetButton()

    Player.getPlayersInfo()
    
    if (allPlayers !== undefined) {
      var index = 0
      for (var plr in allPlayers){
        index=index+1

        var x = allPlayers[plr].positionX
        var y = allPlayers[plr].positionY

        brs[index-1].position.x = x
        brs[index-1].position.y = y
        if (index === player.index) {
          stroke(10)
          fill('green')
          ellipse(x,y,100,200)
        }
      }
      if (this.playerMoving) {
        player.positionY +=5
        player.update()
      }
      this.handlePlayerControls()
      drawSprites()
    }
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
      });
      window.location.reload();
    });
  }


  handlePlayerControls() {
  }

  gameOver() {
  }

  end() {
    console.log("Game Over");
  }
}
