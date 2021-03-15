function checkPalindrome(str) {
    str = str.toLowerCase();
    back_index = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-back_index]) {
            return false;
        }

        back_index++;
 
    }

    return true;
}

a = checkPalindrome('Ovo');
console.log(a)