## Notes

## Content Editing

Create a collection on Mongo to store the content of the pages and components

Ex.:

```json
{
  "randomkey": "tananina",
  "pages": [
    {
      "name": "Home",
      "sections": [
        {
          "name": "Hero",
          "sections": [
            {
              "name": "Main Text",
              "title": "Miss Cupcake",
              "content": "lorem ipsum"
            }
          ]
        }
      ]
    }
  ],
  "components": [
    // same thing
  ]
}

```

### About the atomic structure

In atomic design, an atom is a basic building block of a UI that cannot be broken down any further without losing its functionality. An atom is the smallest possible component, such as a button or an input field, and it represents a single element of the UI.

A molecule, on the other hand, is a group of atoms that work together to form a more complex UI element with a specific functionality. A molecule can be thought of as a combination of two or more atoms that work together to perform a specific task, such as a search bar, a navigation menu, or a form input with a label and validation.

In other words, what defines an atom is its simplicity and the fact that it cannot be broken down any further without losing its functionality. What defines a molecule is the fact that it is a combination of atoms that work together to form a more complex UI element with a specific functionality. The number of elements in a molecule is not what defines it as a molecule, but rather the fact that it is a combination of atoms that work together.

In addition, pure HTML element can be considered as an atom if it represents a single, standalone UI element that cannot be broken down any further without losing its functionality.

However, if the pure HTML element is used in combination with other HTML elements to form a more complex UI element with a specific functionality, then it can be considered as part of a molecule.

For example, a simple HTML button element can be considered an atom if it is used as a standalone UI element, while a combination of a button element, an input element, and a label element can be considered a molecule if they work together to form a form input component with a specific functionality.

### Sobre as imagens

Por que usar `picture` pra art direction (srcset, sizes) se o `img` também possui `srcset`?
Se for pra resolver somente esse caso, não precisa. De fato, o `img` seria suficiente.

Porém, se quisermos trabalhar com diferentes formatos de imagem (avif, webp, png, etc.), aí somente com os recursos (atributo `source`) de `picture`. E também, no caso de querermos/precisarmos de media queries adicionais, como para orientação da tela, preferência de tema, etc., podemos, além do `sizes` pra controle de resolução, usar o atributo `media` pra adicionar esses medias extras.

Resumindo, usar `picture` é mais direto do que `img`, pois nos dá mais controle sobre a art direction. Mas também, além de permitir boas otimizações, possui fallback para browsers que não suportam.

> ℹ️ **Nota:** Pra otimizar o carregamento da hero, nós pré carregamos a imagem da hero antes do documento em si ficar pronto - no html, com a tag link e definindo como `rel="preload"`. Dessa forma, quando o documento começar a exibir o conteúdo, a imagem já terá sido carregada antecipadamente.
> 
> Porém, fazendo isso não importa que no `srcset` ou nos `source` a gente tenha definido imagens diferentes pra cada resolução, a imagem pré-carregada é aquela que será exibida. Para resolver esse problema, podemos pré-carregar a imagem apropriada para cada resolução e definir um media query na tag link para que somente a imagem apropriada seja carregada em cada resolução. Ex:

```html
  <link rel="preload" as="image" href="/hero-image-mob.avif" type="image/avif" media="(max-width: 600px)" />
  <link rel="preload" as="image" href="/hero-image-tab.avif" type="image/avif" media="(min-width: 601px)" />
  <link rel="preload" as="image" href="/hero-image-desk.avif" type="image/avif" media="(min-width: 1024px)" />
```
