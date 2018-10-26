export function kata2 (obj, def, path) {
  function verify(path){
    let myObjName = 'argObj';
    //const argObj = {...obj}; <--- Así no me dejo correr tests :(
    const argObj = JSON.parse(JSON.stringify(obj));
    const data = eval(`${myObjName}.${path}`);
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