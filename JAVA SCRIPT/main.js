document.addEventListener("DOMContentLoaded", function() {
    // Select the BOOK NOW button
    const bookNowButton = document.getElementById('submitBTN');

    // Add event listener for BOOK NOW button click
    bookNowButton.addEventListener('click', function() {
        
        const name = document.getElementById('lastName_hb').value;
        const email = document.getElementById('email_hb').value;
        const hotelType = document.getElementById('hotelType').value;
        const singleRoom = parseInt(document.getElementById('single_room').value)||0;
        const doubleRoom = parseInt(document.getElementById('double_room').value)||0;
        const tripleRoom = parseInt(document.getElementById('triple_room').value)||0;
        const noChild = document.getElementById('no_child').value;
        const noAdults = document.getElementById('no_adults').value;
        const duration = document.getElementById('duration').value;
        const wifiChecked = document.getElementById('wifi').checked;
        const poolChecked = document.getElementById('pool').checked;
        const gardenChecked = document.getElementById('garden').checked;
        const extraBedsChecked = document.getElementById('extraBeds').checked;
        const extraBedsQuantity = document.getElementById('extra_beds').value;
        const promoCode = document.getElementById('promoCode').value;


        let bedCost=(singleRoom*25000+doubleRoom*35000+tripleRoom*40000+noChild*5000)*duration;
        let total;

        if(extraBedsChecked){
               total=bedCost+(8000*extraBedsQuantity);
        }

      
        if(promoCode==='Promo123'){
            total=total-(total*5/100);
        }

        
        let numRooms=singleRoom+doubleRoom+tripleRoom;
        
        
        let bookingInfo = `Name: ${name}\n  `;
        bookingInfo += `Email: ${email}\n   `;
        bookingInfo += `Hotel Type: ${hotelType}\n  `;
        bookingInfo += `Room Type:\n    `;
        bookingInfo += `- Single: ${singleRoom}\n   `;
        bookingInfo += `- Double: ${doubleRoom}\n   `;
        bookingInfo += `- Triple: ${tripleRoom}\n   `;
        bookingInfo += `Number of Children: ${noChild}\n    `;
        bookingInfo += `Number of Adults: ${noAdults}\n `;
        bookingInfo += `Number of Nights: ${duration}\n `;
        bookingInfo += `Extra Requirements:\n   `;
        if (wifiChecked) bookingInfo += "- WIFI\n   ";
        if (poolChecked) bookingInfo += "- Pool view\n  ";
        if (gardenChecked) bookingInfo += "- Garden view\n  ";
        if (extraBedsChecked) bookingInfo += `- Extra beds: ${extraBedsQuantity}\n`;
      
        
        document.getElementById('currentBooking').innerHTML = bookingInfo;
        document.getElementById('costOfCurrentBooking').innerHTML = `Rs.${total}`;
        document.getElementById('overallBooking').innerHTML = `${duration} day booking for ${name}`;
        document.getElementById('overallCost').innerHTML = `Rs.${total}`;
    });


    const hotelFavourites = document.getElementById('toFavourites');
    hotelFavourites.addEventListener('click', function() {

        const name = document.getElementById('lastName_hb').value;
        const email = document.getElementById('email_hb').value;
        const hotelType = document.getElementById('hotelType').value;
        const singleRoom = parseInt(document.getElementById('single_room').value)||0;
        const doubleRoom = parseInt(document.getElementById('double_room').value)||0;
        const tripleRoom = parseInt(document.getElementById('triple_room').value)||0;
        const noChild = document.getElementById('no_child').value;
        const noAdults = document.getElementById('no_adults').value;
        const duration = document.getElementById('duration').value;
        const wifiChecked = document.getElementById('wifi').checked;
        const poolChecked = document.getElementById('pool').checked;
        const gardenChecked = document.getElementById('garden').checked;
        const extraBedsChecked = document.getElementById('extraBeds').checked;
        const extraBedsQuantity = document.getElementById('extra_beds').value;
        const promoCode = document.getElementById('promoCode').value;


        let bedCost=(singleRoom*25000+doubleRoom*35000+tripleRoom*40000+noChild*5000)*duration;
        let total=bedCost;

        if(extraBedsChecked){
               total+=(8000*extraBedsQuantity);
        }

        let discount=0;
        if(promoCode=="Promo123"){
            discount=total*0.05;
        }

        
        let numRooms=singleRoom+doubleRoom+tripleRoom;
        
        // Construct the booking information string
        let bookingInfo = `Name: ${name}\n  `;
        bookingInfo += `Email: ${email}\n   `;
        bookingInfo += `Hotel Type: ${hotelType}\n  `;
        bookingInfo += `Room Type:\n    `;
        bookingInfo += `- Single: ${singleRoom}\n   `;
        bookingInfo += `- Double: ${doubleRoom}\n   `;
        bookingInfo += `- Triple: ${tripleRoom}\n   `;
        bookingInfo += `Number of Children: ${noChild}\n    `;
        bookingInfo += `Number of Adults: ${noAdults}\n `;
        bookingInfo += `Number of Nights: ${duration}\n `;
        bookingInfo += `Extra Requirements:\n   `;
        if (wifiChecked) bookingInfo += "- WIFI\n   ";
        if (poolChecked) bookingInfo += "- Pool view\n  ";
        if (gardenChecked) bookingInfo += "- Garden view\n  ";
        if (extraBedsChecked) bookingInfo += `- Extra beds: ${extraBedsQuantity}\n`;

        let myObj ={
            Name : name,
            Rooms :numRooms,
            Email : email,
            Hotel : hotelType,
            SingleRooms : singleRoom,
            DoubleRooms : doubleRoom,
            TripleRooms : tripleRoom,
            Children : noChild,
            Adults : noAdults,
            Nights : duration,
            ExtraBeds : extraBedsQuantity
        };

        let myObj_serialized=JSON.stringify(myObj);
        localStorage.setItem("myobj",myObj_serialized);

        let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
        alert("Hotel booking added to favourites!");

        
    });

    const checkLoyaltyPoints= document.getElementById('checkLoyaltyPonints');
    checkLoyaltyPoints.addEventListener('click', function() {

        const singleRoom = parseInt(document.getElementById('single_room').value)||0;
        const doubleRoom = parseInt(document.getElementById('double_room').value)||0;
        const tripleRoom = parseInt(document.getElementById('triple_room').value)||0;


        let numberOfRooms = singleRoom+doubleRoom+tripleRoom;
         
        let numPoints=0;
        if(numberOfRooms>3){
            numPoints=numberOfRooms*20;

        }
    

        let myPoints ={
           LoyaltyPoints : numPoints
        };
 

        let myPoints_serialized=JSON.stringify(myPoints);
        localStorage.setItem("myPoints",myPoints_serialized);

        let myPoints_deserialized=JSON.parse(localStorage.getItem("myPoints"));
        alert(`The total loyalty points are ${numPoints}`);

        
    });

    const booking_adven= document.getElementById('currentBookings_adven');
    booking_adven.addEventListener('click', function() {

       /* const advenName = document.getElementById('name_adven').value;
        const advenEmail = document.getElementById('email_adven').value;
        const advenDays = document.getElementById('noDays_adven').value;*/
        const localAdults = parseInt(document.getElementById('div_localadults').value)||0;
        const localChildren = parseInt(document.getElementById('div_localchildren').value)||0;
        const foreignAdults = parseInt(document.getElementById('div_foreignadults').value)||0;
        const foreignChildren= parseInt(document.getElementById('div_foreignchildren').value)||0;
        const adultsChecked = document.getElementById('anGuide_Adults').checked;
        const childrenChecked = document.getElementById('anGuide_children').checked;
       



            
    });
    
});
document.getElementById("bookNow").addEventListener("click", function() {
    var name_adven = document.getElementById("name_adven").value;
    var email_adven = document.getElementById("email_adven").value;
    var noDays = parseInt(document.getElementById("noDays_adven").value)||0;
    var divingLocalAdults = parseInt(document.getElementById("div_localadults").value)||0;
    var divingLocalChildren = parseInt(document.getElementById("div_localchildren").value)||0;
    var divingForeignAdults = parseInt(document.getElementById("div_foreignadults").value)||0;
    var divingForeignChildren = parseInt(document.getElementById("div_foreignchildren").value)||0;
    var guideAdults = document.getElementById("guide").checked ;;
    var guideChildren = document.getElementById("guide_chil").checked ;

    let adven_cost=(divingLocalAdults*5000)+(divingLocalChildren*2000)+(divingForeignAdults*10000)+(divingForeignChildren*5000)*noDays;
        
        let adultGuideCost=1000;
        let childrenGuideCost=500;
        if(guideAdults){
            adven_cost+=adultGuideCost;

        }
        if(guideChildren){
            adven_cost+=childrenGuideCost;

        }
    



    let adven_booking=`Name: ${name_adven} \n,`;
    adven_booking+=`Email: ${email_adven}\n,`;
    adven_booking+=`Number of adys: ${noDays},`;
    adven_booking+=`Diving for local adults: ${divingLocalAdults},`;
    adven_booking+=`Diving for local children: ${divingLocalChildren},`;
    adven_booking+=`Diving for foreign adults: ${divingForeignAdults},`;
    adven_booking+=`Diving for foreign children: ${divingForeignChildren},`;
    if (guideAdults) adven_booking+=`Guide for Adults ,`;
    if (guideChildren) adven_booking+=`Guide for Children `;

    document.getElementById('currentBookings_adven').innerHTML=adven_booking;
    document.getElementById('overallBookings_adven').innerHTML=adven_booking;
    document.getElementById('overallBookingsCost_adven').innerHTML=`Rs. ${adven_cost}`;

});

document.getElementById("bookAdventure").addEventListener("click", function() {
    var name_adven = document.getElementById("name_adven").value;
    var email_adven = document.getElementById("email_adven").value;
    var noDays = parseInt(document.getElementById("noDays_adven").value)||0;
    var divingLocalAdults = parseInt(document.getElementById("div_localadults").value)||0;
    var divingLocalChildren = parseInt(document.getElementById("div_localchildren").value)||0;
    var divingForeignAdults = parseInt(document.getElementById("div_foreignadults").value)||0;
    var divingForeignChildren = parseInt(document.getElementById("div_foreignchildren").value)||0;
    var guideAdults = document.getElementById("guide").checked ;;
    var guideChildren = document.getElementById("guide_chil").checked ;

    let adven_cost=(divingLocalAdults*5000)+(divingLocalChildren*2000)+(divingForeignAdults*10000)+(divingForeignChildren*5000)*noDays;
        
        let adultGuideCost=1000;
        let childrenGuideCost=500;
        if(guideAdults){
            adven_cost+=adultGuideCost;

        }
        if(guideChildren){
            adven_cost+=childrenGuideCost;

        }
    



    let adven_booking=`Name: ${name_adven},\n`;
    adven_booking+=`Email: ${email_adven},\n`;
    adven_booking+=`Number of adys: ${noDays}\n,`;
    adven_booking+=`Diving for local adults: ${divingLocalAdults},\n`;
    adven_booking+=`Diving for local children: ${divingLocalChildren},\n`;
    adven_booking+=`Diving for foreign adults: ${divingForeignAdults},\n`;
    adven_booking+=`Diving for foreign children: ${divingForeignChildren},\n`;
    if (guideAdults) adven_booking+=`Guide for Adults ,\n`;
    if (guideChildren) adven_booking+=`Guide for Children `;

    alert(`${adven_booking} \n The total will be Rs.${adven_cost}\n THANK YOU FOR RESERVING YOUR BOOKING IN OUR HOTEL`);
    
});

document.getElementById("addToFavourites").addEventListener("click", function() {
    var name_adven = document.getElementById("name_adven").value;
    var email_adven = document.getElementById("email_adven").value;
    var noDays = parseInt(document.getElementById("noDays_adven").value)||0;
    var divingLocalAdults = parseInt(document.getElementById("div_localadults").value)||0;
    var divingLocalChildren = parseInt(document.getElementById("div_localchildren").value)||0;
    var divingForeignAdults = parseInt(document.getElementById("div_foreignadults").value)||0;
    var divingForeignChildren = parseInt(document.getElementById("div_foreignchildren").value)||0;
    var guideAdults = document.getElementById("guide").checked||"No" ;
    var guideChildren = document.getElementById("guide_chil").checked||"No" ;

    
    let adven_cost=(divingLocalAdults*5000)+(divingLocalChildren*2000)+(divingForeignAdults*10000)+(divingForeignChildren*5000)*noDays;
        
        let adultGuideCost=1000;
        let childrenGuideCost=500;
        if(guideAdults){
            adven_cost+=adultGuideCost;

        }

        if(guideChildren){
            adven_cost+=childrenGuideCost;

        }

        let advenObj={
            Name: name_adven,
            Email: email_adven,
            Duration: noDays,
            LocalAdults: divingLocalAdults,
            Localchildren: divingLocalChildren,
            ForeignAdults: divingForeignAdults,
            ForeignChildren: divingForeignChildren,
            AdultsGuide: guideAdults,
            ChildrensGuide: guideChildren

        };

        let advenObj_serialized=JSON.stringify(advenObj);
        localStorage.setItem("advenObj",advenObj_serialized);

        let advenObj_deserialized=JSON.parse(localStorage.getItem(advenObj));

        alert("Adventure booking added to favourites!");

    });