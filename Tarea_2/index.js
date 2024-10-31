import Chance from "chance";
    
    const chance = new Chance();
    
    // Generar datos aleatorios
    const nombre = chance.name();
    const correo = chance.email();
    const fechaNacimiento = chance.birthday();
    const telefono = chance.phone();
    const avatar = chance.avatar()
    const natural = chance.natural()
    const letter = chance.letter()
    const birthday = chance.birthday()

    // Imprimir los datos aleatorios generados
    console.log("Datos aleatorios generados:");
    console.log("Nombre:", nombre);
    console.log("Correo electrónico:", correo);
    console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
    console.log("Teléfono:", telefono);
    console.log("Avatar:", avatar);
    console.log("Natural:", natural);
    console.log("Letter:", letter);
    console.log("Birthday:", birthday);