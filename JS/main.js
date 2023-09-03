class Home {
  constructor() {

    document.getElementById("homeIcone").addEventListener('click' , ()=>{
      $(".links").animate({ width: "toggle" }, 1000);
    });

    this.homeImage = document.querySelector(".imgTitle");
    this.homeTitle = document.querySelector(".homeTitle");
  }

  

  async homeApi() {
    let apiResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let responce = await apiResponse.json();
    console.log(responce);
    return responce;
  }



}
let home = new Home();