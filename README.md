# **Aplicación para conocer gente.**

>**Descripción**:

El proyecto se fundamentaría en desarollar una aplicación que permita a los usuarios aumentar su círculo de contactos y entablar amistad con personas nuevas con sus mismos intereses.

Hoy en día con aplicaciones como _Facebook_, _Instagram_ las personas estan más conectadas, eso es cierto. Sin embargo no se tratan de circulos cercanos, ya que, son vinculos muy superficiales y carecen de intereses comunes. 

>**Necesidad que soluciona**:

Lo que presento aqui (o por lo menos, esa es la idea) es una aplicación para desarrollar relaciones sociales más cercanas. Personas afines con las que tener una relación de amsitad.

>**Producto mínimo viable**:

La aplicación contará con el perfil del usuario detallando sus datos personales como: el nombre, la localidad, los intereses del usuario y la edad. 
* Tendra un menú de busqueda por intereses y/o localiad para buscar a personas afines.
* Se dispondrá de un apartado para modificar el perfil.
* Tendrá a disposición de los usuarios un chat individual para poder comunicarse entre usuarios.

 ***Grupos***:

    Los grupos entran dentro de la idea principal, pero es posible que se queden fuera del PMV si no queda tiempo. Por lo que los pondre en un apartado a parte para que queden para el final. Si no da tiempo se podrian implementar en la siguiente version de la aplicación.

## Modelo de datos:

Para la primera versión de la aplicación no se tendran en cuenta los grupos. Debido al poco tiempo disponible. Por lo que el modelo de datos sería algo asi:

```javascript
class user = {
    this.Name_Profile = Name_Profile,
    this.Name = Name,
    this.Password = Password,
    this.Location = Location,
    this.Interests: = [Interests],
    this.Age = Age,
    this.Description = Description,
    this.Photos = [Photos]
  //this.LinkToRRSS = LinkToRRSS Optional
}
class message = {
    this.Time = Time,
    this.EmisorUser = EmisorUser,
    this.ReceptorUser = ReceptorUser,
    this.Content = Content //This content can be strings or pics.
}
class intereses = {
    this.Descripcion = Desciption
}
```