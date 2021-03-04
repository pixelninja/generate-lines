# Generate Lines

A javascript function that generates a line of elements.

## Usage

For basic usage:    
`generateLines();`

Or add your own options:    
````
let vars = {
  parent: '.element', // defaults to document.body. Can we selector string or element node
  rows: 10,
  gutter: 0,
  className: 'grid-line'
}
generateLines(vars);
````
