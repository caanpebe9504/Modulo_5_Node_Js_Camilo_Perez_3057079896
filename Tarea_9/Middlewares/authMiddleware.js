const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
   
    if (!authHeader) {
      return res.status(403).json({ message: 'Token no proporcionado' });
    }
  
   
    const token = authHeader.split(' ')[1];
    if (token !== 'mysecrettoken') {
      return res.status(403).json({ message: 'Token inválido' });
    }
  
   
    next();
  };
  
module.exports = authMiddleware;