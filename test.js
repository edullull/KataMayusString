const { expect } = require("@jest/globals");
const mayus = require("./mayuString");

test('the find index uppercase', () => { 
    
    expect( mayus.whereUpperCaseChar("")).toEqual([]);
});

test('find index uppercase char', () => { 
    
    expect( mayus.whereUpperCaseChar("K")).toEqual([0]);
});

test('cases lowercase char', () => { 
    
    expect( mayus.whereUpperCaseChar("k")).toEqual([]);
});

test('find older of the two', () => { 
    
    expect( mayus.whereUpperCaseChar("aK")).toEqual([1]);
    expect( mayus.whereUpperCaseChar("Ak")).toEqual([0]);

});

test('find older of the three', () => { 
    
    expect( mayus.whereUpperCaseChar("kaT")).toEqual([2]);

});

test('find older of the four', () => { 
    
    //expect( mayus.whereUpperCaseChar("katA")).toEqual([3]);
    expect( mayus.whereUpperCaseChar("kaTA")).toEqual([2, ]);
    expect( mayus.whereUpperCaseChar("KaTa")).toEqual([0, ]);


});