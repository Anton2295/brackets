module.exports = function check(str, bracketsConfig) {

  var stack = [];

  for(let i = 0;i < str.length;i++)
  {
    let headStackValue = stack[stack.length-1];
    
    if(isPairOfBreckets(headStackValue,str[i],bracketsConfig))
      stack.pop();
    else
    {
      if(isOpenBreckets(str[i],bracketsConfig) )
        stack.push(str[i]);
      else
        return false;       
    }
    
  }


  if(stack.length == 0)
    return true;
  else
    return false
}

const openBracketIndex = 0;
const closeBracketIndex = 1;

function isOpenBreckets( bracket , bracketsConfig){
  for(let i=0;i< bracketsConfig.length;i++)
  {
    if(bracket == bracketsConfig[i][openBracketIndex])
      return true;
  }
  return false;
}


function isPairOfBreckets( openBracket , closeBracket, bracketsConfig){
  for(let i=0;i< bracketsConfig.length;i++)
  {
    if(openBracket == bracketsConfig[i][openBracketIndex])
      if(closeBracket == bracketsConfig[i][closeBracketIndex])
        return true;
      else
        return false;
  }
  return false;
}