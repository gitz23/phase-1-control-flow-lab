function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result 
  if (someValue <= 400){
    return 'This one is on me!';
  }else if (someValue > 2000 && someValue < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else(someValue > 2500)
    return 'No can do.'
}

function ternaryCheckCity(cityName){
  return cityName === "NYC"? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipService){
  // Write your code here!
  switch(tipService){
    case 'generous':
     return 'Thank you so much.'
     
     case 'not as generous':
      return 'Thank you.'
    
    case 'thanks for everything':
    return 'Bye.'
  }
}