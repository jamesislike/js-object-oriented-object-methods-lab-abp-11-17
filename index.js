function BoardMember (name, homeState,training){
  this.name = name
  this.homeState = homeState
  this.training = training
}
  //this.veto = function(){   annonomous function - used for every Object and it is not reccomended


BoardMember.prototype.veto = {
  console.log(`No, I must disagree`)
}

BoardMember.prototype.doCharity = function(){
  returns ``
}

BoardMember.prototype.releasePressStatement = function(){
  returns ``
}
