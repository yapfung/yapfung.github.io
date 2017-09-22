var student = {
    name: "Ken",
    age: 20,
    marks: [80, 89, 91, , 99, 100],
    avg: 0,
    young: false,
    welcome_function: function(){
        console.log("Welcome~");
    },
    bim: {
        height: 200,
        weight: 70
    }
};

var sum = 0;
for (var mark in student.marks) {
        sum =+ mark;
    }
var avg = sum/student.marks.length;
var student.avg = avg;