function declareWinner(fighter1, fighter2, firstAttacker) {
  
  let outcome1 = Math.ceil (fighter1.health / fighter2.damagePerAttack)
  let outcome2 = Math.ceil (fighter2.health / fighter1.damagePerAttack)
  
  if(outcome1 < outcome2){
    return fighter2.name
  }else if(outcome2 < outcome1){
    return fighter1.name
  }else{
    return firstAttacker
  }
}