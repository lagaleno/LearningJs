let String = {
    stringfy: function(num_repeat) {
        if (num_repeat == 1) return this;
        
        let result = this;
        for(var i = 0; i < num_repeat; i++) {
            result = result + this;
        }

        return result;

    }
}

function stringfy(num_repeat, string) {
    if (num_repeat == 1) return string;
    
    let result = '';
    for(var i = 0; i < num_repeat; i++) {
        result = result + string;
    }

    return result;

}

console.log(stringfy(3, 'hello'))