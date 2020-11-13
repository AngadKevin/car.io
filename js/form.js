class Form{
  constructor(){
    this.title = createElement('h1');
    this.input = createInput("Enter your name");
    this.button = createButton("START");
    this.message = createElement('h3');
}
display(){
    this.title.html("car racing.io")
    this.title.position(500,100);
    this.input.position(500,250);
    this.button.position(600,350);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name = this.input.value();
        this.message.html("Hello "+name+" welcome to the game");
        this.message.position(500,200);
    });
}    

}