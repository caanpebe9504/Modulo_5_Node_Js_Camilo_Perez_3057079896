const http = require("http")
const fs = require("fs")
const url = require("url")

let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const server = http.createServer((req, res) =>{
    
    const parsedUrl = url.parse(req.url, true)

    res.setHeader("Content-type", "application/json")

    if(parsedUrl.pathname === "/products" && req.method === "GET"){
        res.statusCode = 200
        res.end(JSON.stringify(products))
    } else if (parsedUrl.pathname === "/products" && req.method === "POST"){
        let body = " "

        req.on("data", chunk => {
            body += chunk
        })
        
        req.on("end", () =>{
            const newProduct = JSON.parse(body)

            newProduct.id = products.length + 1
            products.push(newProduct)
            fs.writeFile("./products.json", JSON.stringify(products, null, 2), (err) =>{
                if(err){
                    res.statusCode = 500
                    res.end(JSON.stringify({message: "Error al crear el producto."}))
                    return
                }
                res.statuscode = 201
                res.end(JSON.stringify(newProduct))
            })
        })
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({message: "Endpoint no encontrado"}))
    }
})

server.listen(3002, () =>{
    console.log("Servidor corriendo en https://localhost:3002")
})