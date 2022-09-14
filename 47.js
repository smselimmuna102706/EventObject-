

// var Inputs = document.querySelector("input[name=name]");
// // console.log(Inputs);

// Inputs.addEventListener("change", changeHandler);

// function changeHandler(e){
// //    console.log(e.target);
//     //   console.log(e.target.value);
     
// }

// var Programs = document.querySelectorAll("input[name=Program]");
// // console.log(Programs);

// Array.from(Programs).map(program =>{
//     program.addEventListener("change",cheakHandler);
// });

// function cheakHandler(e){
     
//     // console.log("checked");

//     if(e.target.checked){
//         console.log("checked")
//     }
// }


var department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change",selectHandler);

function selectHandler(e){
    // console.log("selected");

    // console.log(e.target);
    console.log(e.target.value);
}