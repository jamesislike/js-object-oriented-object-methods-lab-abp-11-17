function BoardMember (name, homeState,training){
  this.name = name
  this.homeState = homeState
  this.training = training
}
  //this.veto = function(){   annonomous function - used for every obmect and it is not reccomended


BoardMember.prototype.veto = function(){
  returns `No, I must disagree`
}

BoardMember.prototype.doCharity = function(){
  returns ``
}

BoardMember.prototype.releasePressStatement = function(){
  returns ``
}
