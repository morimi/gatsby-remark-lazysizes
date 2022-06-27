const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }) => {

  visit(markdownAST, "html", node => {

    if (typeof node.value === 'string' && node.value.indexOf("<img") >= 0) {

      if (node.value.indexOf('.gif') >= 0) { // GIF image
        if (/<img.*class=/.test(node.value)) {
          node.value = node.value.replaceAll(/class="([\w\d-_\s]+)"/g, 'class="$1 lazyload"')
        } else {
          node.value = node.value.replaceAll(
            "src=",
            'class="lazyload" src='
          )
        }
      } else {
        node.value = node.value.replaceAll(
          "gatsby-resp-image-image",
          "gatsby-resp-image-image lazyload"
        )
      }
      
      node.value = node.value.replaceAll("src=", "data-src=")
      node.value = node.value.replaceAll("srcset=", "data-srcset=")
    }
  })
  
  return markdownAST
}