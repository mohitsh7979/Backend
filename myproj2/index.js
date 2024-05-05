let data = fetch('http://localhost:3000/data');
data.then((response)=>{
   response.json().then((data)=>{
        data.map((item)=>{
           console.log(item.id,item.name,item.city)
        })
   })
})