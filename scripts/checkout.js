// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

  var chec = JSON.parse(localStorage.getItem("movie"));


  var box = document.createElement("div");

  var h5 = document.createElement("h5");
   h5.innerText = chec.Title;

   var img = document.createElement("img");
   img.src = chec.Poster;

   box.append(h5,img);
    document.getElementById("movie").append(box);

    var total = localStorage.getItem("amount");
    

    var sum = 0;
    
    document.getElementById("wallet").innerText = total;
    
    function conFunc(){
        var seats = document.getElementById("number_of_seats").value;
       
        if(Number(seats*100)>total){
          alert("Insufficient Balance!");
        }
        else{
           
            sum = Number(total)-Number(seats*100);
             localStorage.setItem("amount",sum);
             alert("Booking Successful!")
            }
       window.location.reload() ;
    }

    

