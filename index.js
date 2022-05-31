

//  shortest solution return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

//function getMiddle([...s])
//{
// if (s.length%2==0) {
//   return `${s[s.length/2-1]}${s[s.length/2]}`
// } else if (s.length != 0) {
//    return s[s.length/2-0.5]
// }
//}
//

// getMiddle("testt")

//----------------------------------------------------------
//function removeEveryOther(arr){
//  return arr.map((e)=>e).filter((e,i)=>{return(i%2==0)?e:""
//    })}
//
//const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));
//removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//---------------------------------------------------------
// const arrC = [1,2,2]

// let arrCref = arrC

// //arrC.push(arrCref)
// let arrL = [4,5,6]
// var arrV = [7,8,9]

// arrC.concat(arrL)

// console.log(arrC)

// arrC.push(arrCref)
// //console.log(arrL)
// //console.log(arrV)

// function removeSmallest(numbers = []) {
//   let max = Math.max(...numbers)
//   //console.log( numbers)
//   var val = 0
//   for(let i = 0; i < numbers.length; i++ ){
//       val = i 
//       //console.log(val)  
//       if (numbers[i]==max) {
//         //console.log(val) 
//         break
//       }
//   }
//   let final = numbers.splice(val,1) // splice - zwraca wyciętą zmienną, parametry to index i liczba wyciętych miejsc po indeksie
//     console.log(final)
//     console.log(numbers)
//   }

//splice() - mutuje tablice, kasuje wybrany indeks
//removeSmallest([5,3,2,10,1,40])

// function highAndLow(numbers){
//   let value = numbers.split(' ').sort((a,b)=> a-b)
//   console.log(value[0])
//   return console.log(value[value.length-1]+" " + value[0])
// }

// highAndLow("1 2 -3 4 5")


// let arr1 = [1,2,3,4,5]
// let arr2 = [6,"azor"]
// let arr3 = [...arr1,...arr2,"burek"]

// let txt1 = "Ala ma kota"
// let txt2 = "1684722240245"

// txt1.split("").forEach(function(el) {
//   console.log(el);
// });

//[...txt1].forEach(function(el) {
//  console.log(el);
//});

// let tabTxt2= [...txt2].forEach((el)=>{
//   console.log((+el <5) ? el="0" : el = "1")

// })
//for(i=0;i<tabTxt2.length;i++){
//  (+tabTxt2[i]<5) ? tabTxt2[i] = "0" : tabTxt2[i] = "1" 
//}

//console.log(txt2)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// arr3.push(arr2)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// arr1.splice(1,2,7,7) // nr ideksu,ile miejsc ma byc skasowanych, jakie cyfry

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// function fakeBin(x){
//  let value = [...x]
//  let value2 = value.map(el=>{ 
//    if(el<=5){
//     el=0
//    }else{
//      el=1
//    }
//   return parseInt(el)
//  })
//  console.log(value)
//  console.log(value2)
// }

// fakeBin('45385593107843568')









// () => {} zwraca prawda 
// "" równe 0 
// false równe 0

// const btn = document.querySelector('.btn');
// const hide = btn.closest(".container");

// btn.addEventListener("click",function(){
//     // const hide = btn.closest(".container");
//     console.log(hide)
//     hide.setAttribute("style", "display:none");
// })


// const boxes = document.querySelectorAll(".box")

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle("color", entry.isIntersecting) 
//         if (entry.isIntersecting) observer.unobserve(entry.target) // element animate only one time
//     })
// }, 
// {
//     threshold: 0.5 // when it should be animated 
//     // rootMargin:"-/+XXXpx" --> margin of the viewport 
//     // root: --> set the root, by default is viewport 
// }
// )

// boxes.forEach(card => {
//     observer.observe(card)
// })