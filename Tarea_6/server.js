const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3002;

const productsFilePath = './products.json';

const readProductsFromFile = () => {
  try {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data);
  } catch (err) {
    return []; 
  }
};


const saveProductsToFile = (products) => {
  try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  } catch (err) {
    console.error('Error al guardar el archivo:', err);
  }
};


const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const method = req.method;


  if (parsedUrl.pathname === '/products' && method === 'GET') {
    const products = readProductsFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  }

  else if (parsedUrl.pathname === '/products' && method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const newProduct = JSON.parse(body);
        const products = readProductsFromFile();
        

        newProduct.id = products.length + 1;


        products.push(newProduct);


        saveProductsToFile(products);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newProduct));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error al procesar los datos' }));
      }
    });
  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
  }
});


server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});