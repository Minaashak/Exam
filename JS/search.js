// class Search{
//   constructor(){

//     document.getElementById("searchli").addEventListener("click", () => {
//       $("#search").removeClass("show");
//       console.log("Hello");
//     });
//     // this.searchShowData();

//     this.searchShowData();

//     console.log("heyyyyy");
//     this.fullNameApi();
//   }

//   async fullNameApi(){
//     let fullHttp = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
//     );
//     let response = await fullHttp.json();
//       console.log(response.meals[0].strMeal);
//     let fullData = response.meals[0].strMeal;
//     console.log(fullData);
//     return 
//   }

//   searchShowData(){
//     this.full = document.getElementById("fullName");
//     console.log(this.full.value);
//   }

//   // searchShowData(){
//   //   // this.full.addEventListener('input',()=>{
//   //   //     console.log(this.full.value);
//   //   // })
//   //   console.log(this.full);
//   // }

// }
// let search = new Search();