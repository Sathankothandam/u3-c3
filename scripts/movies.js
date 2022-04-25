// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const wall = localStorage.getItem("amount");
document.getElementById("wallet").innerText = wall;

 
 var set;
 async function inpFunc(){

    try{
        var query = document.getElementById("search").value;
        var res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d507915e&s=${query}`);
        var data =  await res.json();
       var mov = data.Search;
       console.log(mov);
        return mov;
    }
    catch(err){
        console.log("err:", err);
    }
   
}

 function appendData(data){
    document.getElementById("movies").innerHTML=null;
    data.map(function(el){
       
        var box = document.createElement("div");

        var h5 = document.createElement("h5");
         h5.innerText = el.Title;

        var but = document.createElement("button");
        but.innerText = "Book Now";
         but.setAttribute("class","book_now")
        but.addEventListener("click", function(){
            bookFunc(el)
        })

        var img = document.createElement("img");
         img.src = el.Poster;

        box.append(img,h5,but);
        document.getElementById("movies").append(box)

    })

 }

    function bookFunc(el){
      localStorage.setItem("movie",JSON.stringify(el));
      window.location.href="checkout.html";
    }

    async function main(){
     var res = await inpFunc();

     if(res==undefined){
         return false;
     }
     appendData(res)
    }

    function debouncing(func,delay){
       if(set){
           clearTimeout();
       }
       set = setTimeout(function(){
         func()
      },delay)

    }
