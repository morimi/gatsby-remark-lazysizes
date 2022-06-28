const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }) => {

  visit(markdownAST, "html", node => {

    if (typeof node.value === 'string' && node.value.indexOf("<img") >= 0) {

      if (node.value.indexOf('.gif') >= 0) { // GIF image
        if (/<img.*class=/.test(node.value)) {
          node.value = node.value.replace(/class="([\w\d-_\s]+)"/g, 'class="$1 lazyload"')
        } else {
          node.value = node.value.replace(
            /src\=/g,
            'class="lazyload" src='
          )
        }
      } else {
        node.value = node.value.replace(
          /gatsby\-resp\-image\-image/g,
          "gatsby-resp-image-image lazyload"
        )
      }
      
      node.value = node.value.replace(/src\=/g, "data-src=")
      node.value = node.value.replace(/srcset\=/g, "data-srcset=")
    }
  })
  
  return markdownAST
}