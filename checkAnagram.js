function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    for (var i = 0; i < str1.length; i++) {
      if (str2.indexOf(str1[i]) < 0) {
        return false;
      }
    }
    

    /*
    //forEach não funciona para Strings
    str1.forEach(letter => {
      if(str2.indexOf(letter) < 0) {
        return false;
      }
    }) */
    
  
    return true;
  }
  
  let r = checkAnagram("larissa", "arissal");
  console.log(r);
  