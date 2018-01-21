# Twitter Api Example

### Prerequisites

```
node js ^8.9x 
npm ^4.6.
mongodb
```

### Installing

Clona el repositoio 

```
git clone https://github.com/LuisToro/twitter-ap.git
```

Instalas las dependencias

```
npm install
```

Ejecuta el proyecto

```
npm start
```

### Documentation

* GET `api/` : Obtienes el mensaje de bienvenida a la API.

Users

* GET `api/users` : Obtienes en formato json todos los tweets almacenados en memoria.

* GET `api/users/:id` : Obtienes en formato json el usuarios correspondiente al :id enviado como parametro.
	* **URL Params**
	`id=[integer]`

* POST `api/users` : Crea un nuevo usuario en base de datos.
	* **Data Params:**
	```json
  status=[Boolean] (default: true)
	firstname=[string] (required) (maxlength: 32)
	lastname=[string] (required) (maxlength: 32)
	email=[string] (required) (maxlength: 64)
	```

	* **Example:**
	```json
	{
		"firstname": "Git",
		"lastname": "Hub",
		"email": "email@github.com"
	}
	 ```

* PUT `api/users/:id` : Edita el usuarios correspondiente al :id enviado como parametro.
	* **URL Params**
	`id=[string]`
  
  * **Data Params:**
	```json
  status=[Boolean]
	firstname=[string]
	lastname=[string]
	email=[string]
	```

	* **Example:**
	```json
	{
		"status": true,
		"firstname": "Git",
		"lastname": "Hub",
    "email": "email@github.com"
	}
	 ```

* DELETE `api/users/:id` : Importante: Se realiza un borrado logico, asignando status=false.
	* **URL Params**
	`id=[string]`


Tweets

* GET `api/tweets` : Obtienes en formato json todos los tweets almacenados en memoria.

* GET `api/tweets/:id` : Obtienes en formato json el tweet correspondiente al :id enviado como parametro.
	* **URL Params**
	`id=[integer]`

* POST `api/tweets` : Crea un nuevo tweet en memoria.
	* **Data Params:**
	```json
	content=[string] (required) 
	author=[string] (required) (ref: 'user') user id
	location=[string] (required) 
	```

	* **Example:**
	```json
	{
		"content": "Introducing new ways to build with GitHub Enterprise 2.12",
		"author": "5a63bc11d560cc3684ce5122",
		"location": "Silicon Valley"
	}
	 ```

* PUT `api/tweets/:id` : Edita el tweet correspondiente al :id enviado como parametro.
	* **URL Params**
	`id=[string]`

	* **Data Params:**
	```json
	content=[string]
	author=[string]
	location=[string]
	```

	* **Example:**
	```json
	{
		"content": "Introducing new ways to build with GitHub Enterprise 900.12",
		"author": "5a63bc11d560cc3684ce5122",
		"location": "Silicon Valley"
	}
	 ```

* DELETE `api/tweets/:id` : Elimina el tweet de la base de datos.
	* **URL Params**
	`id=[string]`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
