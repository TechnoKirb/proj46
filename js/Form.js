class Form {
  constructor(){
    this.input = createInput("").attribute("placeholder",'Who are you')
    this.startering = createButton('Start')
    this.greeting = createElement('h2')
  }
  setElementsPosition() {
    this.input.position(400,200);
    this.startering.position(400,400);
    this.greeting.position(400,300);
  }
  ses() {
    this.input.class("customInput");
    this.startering.class("customButton");
    this.greeting.class("greeting");
  }
  hide() {
    this.greeting.hide();
    this.startering.hide();
    this.input.hide();
  }
  handleMousePressed() {
    this.startering.mousePressed(() => {
      this.input.hide();
      this.startering.hide();
      var message = `
      Hi ${this.input.value()}`
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });
  }
  display() {
    this.setElementsPosition();
    this.ses();
    this.handleMousePressed();
  }
}
