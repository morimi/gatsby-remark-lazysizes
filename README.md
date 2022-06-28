# gatsby-remark-lazysizes

[gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)で変換されたimgタグを[lazysizes](https://github.com/aFarkas/lazysizes)対応させる。  
[gatsby-remark-lazy-load](https://www.gatsbyjs.com/plugins/gatsby-remark-lazy-load/)が[gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)の画像にしか対応していなかったので、[gatsby-remark-copy-linked-files](https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/)で複製されたGIFアニメーション画像も処理できるようにした。  
また、画像が段落内に複数ある場合にも対応。  

## Install
lazysizesもインストールする

```
yarn add gatsby-remark-lazysizes lazysizes
```

## How to use

gatsby-browser.jsにlazysizesを追加する

```
import 'lazysizes'

```

```
// In your gatsby-config.js

// add plugin by name only
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-lazysizes`],
    },
  },
]
```