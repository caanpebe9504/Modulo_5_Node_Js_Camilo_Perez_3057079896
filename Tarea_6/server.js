const http = require("http");
const fs = require("fs");
const port = 3002;

let products = [];
const productsFile = "products.json";

try {
    const data = fs.readFileSync(productsFile, "utf8");
    products = JSON.parse(data);
} catch (error) {
    
    products = [
        { id: 1, name: "Laptop", price: 99.99, category: "Electronics" },
        { id: 2, name: "Chair", price: 49.99, category: "Furniture" },
        { id: 3, name: "Pen", price: 1.99, category: "Stationery" }
    ];
}


const server = http.createServer((req, res) => {
    const { method, url: requestUrl } = req;

    res.setHeader("Content-type", "application/json");

     if (method === "GET" && requestUrl === "/products") {
        res.statusCode = 200;
        res.end(JSON.stringify(products));
    }


    else if (method === "POST" && requestUrl === "/products") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newProduct = JSON.parse(body);

                
                if (!newProduct.name || !newProduct.price || !newProduct.category) {
                    res.statusCode = 400;
                    return res.end(
                        JSON.stringify({ message: "Producto inválido. Faltan propiedades" })
                    );
                }

               
                const newId = products.length ? Math.max(products.map((p) => p.id)) + 1 : 1;
                newProduct.id = newId;

               
                products.push(newProduct);

                
                fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

                res.statusCode = 201;
                res.end(JSON.stringify({ message: "Producto creado con éxito", product: newProduct }));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: "Error al procesar el producto", error: error.message }));
            }
        });
    } else {

        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Endpoint no encontrado" }));
    }
});


server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});