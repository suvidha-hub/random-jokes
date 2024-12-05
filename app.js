let btn=document.querySelector("button");
let div=document.querySelector(".p");

let url=" https://icanhazdadjoke.com";

btn.addEventListener("click",async()=>{
   let jokes= await getjokes();
   div.innerText=jokes;
})


async function getjokes(){
    try{
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url ,config);
        return res.data.joke;
    }
    catch(e){
        return "not found-error";
    }
}