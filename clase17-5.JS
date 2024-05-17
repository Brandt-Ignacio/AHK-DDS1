let hoy = new Date();
const juan = {
    nombre: "Juan",
    apellido: "Perez",
    legajo: 23423,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido; 
    },
    saluda: function(nombre){
        console.log("Hola " + nombre + " mi nombre es " + this.nombreCompleto());
    }
};

const pepito = "Pepito";
juan.saluda("pepito");

class Localizacion{
    lat;
    log;
    constructor(log,lat){
        this.log = log;
        this.lat = lat;
    }

    distanciaHasta(otroPunto){
      const difAbsEntreLat = Math.pow(this.lat - otroPunto.lat, 2);
      const difAbsEntreLog = Math.pow(this.log - otroPunto.log, 2);
      return Math.sqrt(difAbsEntreLat + difAbsEntreLog);
    }

    }

class Alumno{
    nombre;
    apellido;
    // Ingresar AAAA/MM/DD
    edad;
    añoNac;
    legajo;
    posicion;
    nota1;
    nota2;
    nombreCompleto(){
        return this.nombre + " " + this.apellido; 
    }
    saludar(){
        console.log("Hola soy " + this.nombreCompleto);
    }
    saludarA(nombrePersona){
        console.log("Buen dia " + nombrePersona + " mi nombre es " + this.nombreCompleto());
    }
    saludarAlumno(nombreAlumno){
        console.log("Buen dia " + nombreAlumno.nombreCompleto() + " mi nombre es " + this.nombreCompleto());
    }
    dameTuEdad(){
       let edad = hoy.getFullYear - this.añoNac.getFullYear;
        if(hoy.getMonth - this.añoNac.getMonth < 0)edad--;
        else if(hoy.getDay - this.añoNac.getDay) edad--;
        return edad;
    }
    decirEdad(){
        console.log("Mi edad es " + this.dameTuEdad());
    }

    vivisCercaDe(otroAlumno){
        let cerca = false;
        if(this.posicion.distanciaHasta(otroAlumno)<20) cerca = true;
        return cerca;
    }

    promedioNotas(){
           let sumaNotas = this.nota1 + this.nota2;
            return sumaNotas/2;
    }
}


const roberto = new Alumno();
roberto.nombre = "Roberto";
roberto.apellido = "Alonso";
roberto.legajo = 34143;
roberto.edad = 18
roberto.añoNac = Date.parse("2005-02-14");
roberto.posicion = new Localizacion(56,23);
roberto.nota1 = 5;
roberto.nota2 = 8;

const maria = new Alumno();
maria.nombre = "Maria";
maria.apellido = "Sadobe";
maria.legajo = 33143;
maria.edad = 20
maria.añoNac = Date.parse("2005-02-14");
maria.posicion = new Localizacion(20,15);
maria.nota1 = 9;
maria.nota2 = 7;

const nadia = new Alumno();
nadia.nombre = "Nadia";
nadia.apellido = "Joshua";
nadia.edad = 23;
nadia.legajo = 34343;
nadia.posicion = new Localizacion(5,13);
nadia.nota1 = 2;
nadia.nota2  = 4;

roberto.saludarA("Nadia");
nadia.saludarA("Roberto");
roberto.saludarAlumno(nadia);
nadia.saludarAlumno(roberto);     
//De cada alumno saber fecha de nacimiento y poder preguntarle cuantos años tiene


class Curso{
    nombre;
    nombreDocente;
    alumnos = [];
    posicion;
    constructor(posicion){
        this.posicion = posicion;
    }
    
    agregarAlumno(unAlumno){
        this.alumnos.push(unAlumno);
    }

    promedioEdadesAlumnos(){
        let sumaDeEdades = 0;
        for(let i = 0;i<this.alumnos.length;i++){
            sumaDeEdades += this.alumnos[i].edad;
        }
        return sumaDeEdades/this.alumnos.length;
    }

    alumnoCercaDeOtro(){
        let unoCerca = false;
        let i = 0;
        let j = 0;
        j = i+1;
        while(!unoCerca && i<(this.alumnos.length-1)){
            while(!unoCerca && j<this.alumnos.length){
                if(this.alumnos[i].vivisCercaDe(this.alumnos[j])) unoCerca = true;
                j++;
            }
            i++;
            
        }
        return unoCerca;
    }

    esCursoJoven(){
        return this.promedioEdadesAlumnos < 22;
    }

    promedioNotasGeneral(){
        let sumaPromedios = 0;
        for(let i = 0;i<this.alumnos.length;i++){
            sumaPromedios += this.alumnos[i].promedioNotas();
        }
        return sumaPromedios/this.alumnos.length;
    }
}

const cursoDeDesarrollo = new Curso(30,35);
cursoDeDesarrollo.nombre = "Desarrollo de Software";
cursoDeDesarrollo.agregarAlumno(roberto);
cursoDeDesarrollo.agregarAlumno(nadia);
cursoDeDesarrollo.agregarAlumno(maria);
console.log(cursoDeDesarrollo.promedioEdadesAlumnos());
console.log(roberto.vivisCercaDe(maria)); 
cursoDeDesarrollo.alumnoCercaDeOtro();
console.log(cursoDeDesarrollo.esCursoJoven());
console.log(cursoDeDesarrollo.promedioNotasGeneral());
