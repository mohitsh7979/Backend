
async function FetchApi(){

    const api_data = await fetch('http://localhost:3000/data');
    const json_data = await api_data.json();
    console.log(json_data)
}

FetchApi()

