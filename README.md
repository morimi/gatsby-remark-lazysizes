# gatsby-remark-lazysizes

Make img tags transformed by [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) correspond to [lazysizes](https://github.com/aFarkas/lazysizes).  
Added support for GIF animation images duplicated by [gatsby-remark-copy-linked-files](https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/), since [gatsby-remark-lazy-load](https://www.gatsbyjs.com/plugins/gatsby-remark-lazy-load/) only supported images from [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/).  
Also, support for cases where there is more than one image in a paragraph.  

## Install
lazysizes must also be installed.

```
yarn add gatsby-remark-lazysizes lazysizes
```

## How to use

Add lazysizes to gatsby-browser.js

```
import 'lazysizes'

```

```
// gatsby-config.js

plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-lazysizes`],
    },
  },
]
```