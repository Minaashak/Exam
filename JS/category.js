class Category{
    constructor(){
        document.getElementById("catli").addEventListener('click',()=>{
            $("#category").removeClass("show");
            $("#start").addClass("show");
            $("#search").addClass("show");
            console.log("HEEEEEEEEEEE");
        });
        // this.apiData = this.data;
        // console.log(this.apiData);
        // this.apiData()
        this.apiData = this.getApi();
        console.log( "ppppppppp" +this.apiData);
        
        this.showData();
    }

    async getApi(){
      let http = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      let response = await http.json();
      // console.log( response);
        let data = response.categories[0];
        console.log(data);
      return data;
    }
    showData(){
        // let mealBox= ``;
        // for(let i = 0 ; i<= 14; i++){
        //     mealBox += `
        //     <div class="meal-info">
        //             <img src="${this.apiData.categories[0].strCategoryThumb[i]}" class="w-100" alt="">
        //         <div class="title">
        //             <div class="inf">
        //                 <h3>${this.data[i].strCategory[i]}</h3>
        //                 <p class="lead">${this.data[i].strCategoryDescription[i]}</p>
        //             </div>
        //         </div>
        //     </div>
        //     `;
        // }
        // document.getElementById("containerC").innerHTML = mealBox;
    }

}
let category = new Category();