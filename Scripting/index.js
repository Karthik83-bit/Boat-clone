const puppeteer=require('puppeteer')
const fs=require("fs")

const fetch=async()=>{
    const browser=await puppeteer.launch({
        headless:true,
    })
    const page=await browser.newPage();
    const res=await page.goto("https://www.boat-lifestyle.com/collections/limited-edition")
    

    const result=await page.evaluate(()=>{
        let arr=[];
        var products =document.querySelectorAll(".product-item-meta")
        var productsImg=document.querySelectorAll(".product-item__primary-image")
        products.forEach((item,ind)=>{
            
            arr.push({name:item.children[0].textContent,img:productsImg[ind].getAttribute("src"),rating:item.children[1].querySelector(".rating__stars").textContent.split(" ")[2].split("\n")[0],salePrice:item.children[2].querySelector(".product-card-price").textContent.split("\n")[1].trim(),orgPrice:item.querySelector('.price--compare').textContent.split("\n")[1].trim()})
            
        })
        return arr
    })

    console.log(result)
    const text = result.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.appendFileSync("data.txt",text,'utf-8')

    // arr.forEach(item=>{
    //     console.log(item)
    // })
    await browser.close()
}
export default fetch();