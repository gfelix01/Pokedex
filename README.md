# Pokedex

Este es un proyecto de Pokedex simple que te permite buscar y ver información sobre Pokémon. Utiliza la API de PokeAPI para obtener los datos de los Pokémon.

## Características

- Buscar Pokémon por nombre.
- Mostrar detalles de un Pokémon, como su nombre, imagen, altura y peso.
- Borrar la información del Pokémon.

  

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre `index.html` en tu navegador.
3. Escribe el nombre de un Pokémon en el campo de búsqueda y haz clic en "Buscar".
4. Se mostrarán los detalles del Pokémon si se encuentra en la base de datos.

## Tecnologías utilizadas

- HTML
- CSS (incluyendo Bootstrap)
- JavaScript

## Contribuciones

¡Siéntete libre de contribuir a este proyecto! Puedes abrir problemas, enviar solicitudes de extracción o sugerir mejoras. Estamos abiertos a colaboración.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Este proyecto fue creado por Gabriel Arturo Felix Paez. Puedes contactarme en gabriel_arturo01@hotmail.com.

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | https://pokeapi.co/api/v2/pokemon/ditto |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

