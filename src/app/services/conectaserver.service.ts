import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConectaserverService {

  URL="http://localhost:4000/api/bdsolprob";



  constructor(private http:HttpClient) { 
  }
  consultar():Observable<any>{
    let headers = new Headers().set ('Content-Type', 'Application/Json')


    return this.http.get(this.URL);
    
    

}


//get 
getRegistro(){
  return this.http.get(this.URL);
}
//get un Registro
getUnRegistro(id:string){
return this.http.get(this.URL+'/'+id);  
}

//agregar equipo
addRegistro(equipo:modelo){
  return this.http.post(this.URL, equipo);
}

//eliminar
deleteRegistro(id:string){
  return this.http.delete(this.URL+'/'+id);
}

//modificar

editRegistro(id:string, equipo:modelo){
  return this.http.put(this.URL+'/'+id, equipo);
}



}

export interface modelo{
  id_regDatos?: String,
  id_user?: String; 
  Nombre?: String; 
  ApellPat?: String;
  ApellMat?: String; 
  Correo?: String; 
  Edad?: String;
  Numero_Tel?: String; 
  Sexo?: String;
}





export interface modelo{
  Nombre?:String;
  Apellidos?:String;
  Folio_problema?:String;
  Correo?:String;
  Número_telefónico?:String;
  Tipo_de_problema?:String;
  Especifique_problema?:String;
  Status_problema ?:String;
}



export interface regprob{
id_soluprob?:String;
id_Acceso?:String;
Nombre_del_problema?:String;
Tipo_problema?:String;
Fecha?:String;
}




export interface segui{
  Folio_seg?:String;
  id_soluprob?:String;
  Fecha_revision?:String;
  Status_problema?:String;
}

export interface modeloLogin{
  id_Acceso?:String;
  id_regDatos?:String;
  id_rol?:String;
  Usuario?:String;
  

  
}


