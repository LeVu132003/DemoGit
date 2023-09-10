/** JSON (JavaScript Object Notation)
 * 1. JSON là một định dạng dữ liệu (chuỗi)
 * 2. JSON: Number, Boolean, Null, Array, Object
 * Mã hóa (encode), giải mã (decode)
 * Stringnify / Parse
 * Stringnify : Từ JS types -> JSON
 * Parse : Từ JSON ->JS types
 */

// var json= '["JavaScript", "PHP"]';

// var json ='{"name":"Vu Le","age":20}';

var a='"abc"';
console.log(typeof JSON.parse(a));

console.log(JSON.stringify({
    name: 'Vu Le',
    age:'20',
    test : function (){
        console.log(1)
    }
}))