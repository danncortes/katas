export function kata2 (obj, def, path) {
  function verify(path){
    //const argObj = {...obj}; <--- Así no me dejo correr tests :(
    const argObj = obj;
    const data = eval(`argObj.${path}`);
    if(data){
      return data
    }else{
      return def
    }
  }
  
  if(!arguments[2]){
    return function(path){
      return verify(path)
    }
  }else{
    return verify(path)
  }
}