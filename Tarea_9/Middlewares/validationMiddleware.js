const validationMiddleware = (req, res, next) => {
    const { name, age, major } = req.body;
  
    
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ message: 'El nombre es obligatorio y debe ser una cadena de texto válida.' });
    }
  
    
    if (!Number.isInteger(age) || age < 0) {
      return res.status(400).json({ message: 'La edad debe ser un número entero positivo.' });
    }
  
   
    if (!major || typeof major !== 'string' || major.trim() === '') {
      return res.status(400).json({ message: 'La especialidad (major) es obligatoria y debe ser una cadena de texto válida.' });
    }
  
    
    next();
  };
  
  module.exports = validationMiddleware;