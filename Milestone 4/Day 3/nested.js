function outer(){
    console.log('outer');
    function inner(){
        console.log('inner');
    }
    inner()
}

outer()