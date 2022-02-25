let product = [
    {
        id: 1,
        pName: "Maggi Noodles",
        price: 10,
        category: "Food",
        quantity: 150,
        pic: "https://basketpay.in/wp-content/uploads/2019/06/maggi-2.png"
    },

    {
        id: 2,
        pName: "Cocacola",
        price: 40,
        category: "Drink",
        quantity: 200,
        pic: "https://icon2.cleanpng.com/20171220/ree/coca-cola-bottle-png-image-5a3ac111117330.71397511151379995307157705.jpg"
    },
    
    {
        id: 3,
        pName: "Amul Cheese",
        price: 90,
        category: "Dairy",
        quantity: 30,
        pic: "http://www.untuk.in/wp-content/uploads/2020/06/Amul-Cheese-Slice-100g-copy.png"
    },

    {
        id: 4,
        pName: "Gatorade Energy Drink",
        price: 70,
        category: "Drink",
        quantity: 50,
        pic: "https://p.kindpng.com/picc/s/546-5460600_gatorade-bottle-png-dark-purple-blue-gatorade-transparent.png"
    },

    {
        id: 5,
        pName: "Go Cheese",
        price: 120,
        category: "Dairy",
        quantity: 30,
        pic: "https://www.gocheese.in/wp-content/themes/gocheese/images/go_cheese_slice.png"
    }
]




function displayData(arr){
    
    document.getElementById("data").innerHTML = "";

    arr.forEach((product, index)=>{

        let row = document.createElement("tr");

        let numTD = document.createElement("td");
        numTD.append(index+1);

        let nameTD = document.createElement("td");
        nameTD.append(product.pName);

        let priceTD = document.createElement("td");
        priceTD.append(product.price);

        let categoryTD = document.createElement("td");
        categoryTD.append(product.category);

        let quantityTD = document.createElement("td");
        quantityTD.append(product.quantity);

        let picTD = document.createElement("td");
        let proPic = document.createElement("img");
        proPic.setAttribute("src", product.pic);
        picTD.appendChild(proPic);

        row.appendChild(numTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD);
        row.appendChild(picTD);

        document.getElementById("data").appendChild(row);
    })
}


displayData(product);




let filterStatus = false;

function openFiltersection(){

    if(filterStatus == false){
        document.getElementById("filter-box").style.marginLeft = "0px";
        filterStatus = true;
    }
    else {
        document.getElementById("filter-box").style.marginLeft = "-30%";
        filterStatus = false;
    }

}








let filters = {

    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}


// read value

function setFilters(property, value){
    
    // let quantity = document.getElementById("quantity").value;
    // console.log(quantity);

    // console.log(filters);


    if(value!==""){
        filters[property] = value;

        if(property === "minPrice"){
            document.getElementById("maxPrice").min = Number(value)+1;
            document.getElementById("lowMaxPriceLabel").innerText = Number(value)+1;
        }

    }
    else{
        filters[property] = null;
    }

    console.log(filters);   

}







function filter(){
    
    let filteredData = product;
    

    if(filters.category !== null){
        filteredData = filteredData.filter((pro, index)=>{
            return pro.category.toUpperCase() === filters.category.toUpperCase();
        })        
    }

    if(filters.quantity !== null){
        filteredData = filteredData.filter((pro, index)=>{
            return Number(filters.quantity) >= pro.quantity;
        });
    }

    if(filters.minPrice!==null){
        filteredData = filteredData.filter((pro, index)=>{
            return Number(filters.minPrice) <=  pro.price;
        })
    }

    if(filters.maxPrice !== null){
        filteredData = filteredData.filter((pro, index)=>{
            return Number(filters.maxPrice) >= pro.price;
        })
    }

    // console.log(filteredData);
    displayData(filteredData);
}





// filter function always return a array
// let arr = [34, 45, 65, 12, 45, 67, 84, 12];
// let dat = arr.filter((num, index)=>{
    
//     return num === 12;
    
//  })

//  console.log(dat);


// let arr = [
//     {names:"sumedh", age:23},
//     {names:"samir", age:27},
//     {names:"aditya", age:30},
//     {names:"shubham", age:23}
// ]


// 1st logic
// let dat = arr.filter((ele, index)=>{
//     return ele.age === 27;
// })

// console.log(dat)

// other programming logic
// let data = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i].age === 27)    {
//         data.push(arr[i]);
//     }
// }
// console.log(data)