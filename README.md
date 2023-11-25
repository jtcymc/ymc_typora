

### 🎉 Project Remarks
name：ymc_typora   
author：shaw  
language：JavaScript && CSS  
time：2022.03.15 ~ Now  
demo:  https://jtcymc.github.io/ymc_typora/
# ymc_typora
<div align="right"><a title="Chinese" href="./README_CN.md">中文</a> | <a title="Chinese" href="./README.md">English</a></div> 

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/theme-shaw.png" style="zoom:80%;" alt="theme-shaw" />

Based on [typora-dyzj-theme](https://github.com/muggledy/typora-dyzj-theme)  &   [drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme) theme.

## 💻 Installation

### GIT

> If you are in Mainland China, you can download in [Gitee](*https://gitee.com/shawymc/ymc_typora.git*)

Stable branch [recommend]:

```bash
  git clone -b master https://gitee.com/shawymc/ymc_typora.git ymc_typora
```

### Theme
Copy theme files to Typora themes folder:

```text
  {Typora Install Root Directory}\themes
```

### Typora extend
find `{Typora Install Root Directory}\resources\window.html`,search `id="write"` go to `<div id="write" class="ty-before-first-render" contenteditable="false" spellcheck="true" tabindex="-1">` previously added the following codes:
```html
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/js/autoload-shaw-page-component.min.js"></script>
```

## ⚙ Configuration & Use
1. Open or Restart Typora. Click on `Themes` to switch to `shaw-light`.
2. `File` -> `Preferences` -> `Export` ==> `HTML` ==> `Append in <head/>` add :
```html
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/js/autoload-shaw-page-component.min.js"></script>
```



## 🎉 Features
- [x] Toolbar: 
  - [x] BackTop.
  - [x] Jump to bottom.
  - [x] Change light🔆 / dark🌒 theme.
  - [x] Change Live2d model.
  - [x] Show or Hide table of Toc.
- [x] Live2d
- [x] Lazyload images. *. Only Support export `HTML`.
- [x] Lazyload `iframe`. *. Only Support export `HTML`.
- [x] Fasxbox for images. *. Only Support export `HTML`.
- [x] FloatBtn for setting:
  - [x] Mouse click effect `heart`.
  - [x] Mouse click effect `firework`.
  - [x] Mouse trail  effect.
  - [x] Live2d setting. Includes model selection and switch.
  - [x] light🔆 / dark🌒 theme change and sync system theme.
  - [ ] Others......

## demo



 <iframe src="https://jtcymc.github.io/ymc_typora/" style="width:100%;height:700px;border: 1px solid"/>






## 📷 Screenshots

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/shaw-light.png" style="zoom:80%;" alt="shaw-light" />
		<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/shaw-dark.png" style="zoom:80%;" alt="shaw-dark" />
		<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/float-btn.png" style="zoom:100%;border: 1px solid" alt="float-btn" />


## Configuration Docs
### Image caption
#### `Typora` editing page



Currently, images will be automatically numbered, but to correctly display emoticons (the 'alt' attribute values), additional modifications are required to the<u>framework. js<u>source code (under the installation path`Typora/resources/appsrc/window`), Navigate to`<span class='md image md img loaded "+w+" "+b+"><span class='md meta md front md content edit='true '>"+h+"<span>and<span class='md image "+L+" "data src=" "+k+" "+b+"><span class='md meta md front md content edit='true'>"+h+"<span>`(Note that the relevant code may vary depending on the version of Typora), Replace both ends with the following string:
```js
"<span class='CustomImg' alt='"+ F.getAttribute("alt")+"'>" +F.outerHTML+"</span></span>"
```

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/image-20230506123149789.png" style="zoom:80%;" alt="pageInfo" />



#### Export HTML to support emoticons

`Typora` Theme Settings

```css
/* 导出时才会展示，避免因img标签导致的不生效问题 */
#write p:has(img):not(.md-end-block)::after {
  counter-increment: imgNum;
  content: "图" counter(imgNum) " " attr(alt) !important;
  text-align: center;
  width: 100%;
  margin-top: 8px !important;
  font-size: small;
  display: inline-block;
}
```



JS <a href="extend/js/ui/shaw-typora-expend.js"> shaw-typora-expend.js</a>

```javascript
/**
 * 使用JS实现 给所有 <p><img/></p> 中的p添加alt属性，p的alt值来源 img的alt
 * 为了实现导出的图解释
 */

function shaw_img_alt_to_p_label() {
    // 获取所有的 <p><img/></p> 元素
    const paragraphs = document.querySelectorAll('p > img');
    paragraphs.forEach(img => {
        const parent = img.parentElement;
        const alt = img.getAttribute('alt');
        const pAlt = parent.getAttribute('alt');
        if (parent && alt && !pAlt) {
            // 添加 alt 属性到父元素 p 上
            parent.setAttribute('alt', ". " + alt);
        }
    });
}

window.addEventListener('load', function () {
    shaw_img_alt_to_p_label();
});
```
### Exporting HTML supports lazy loading of images and iframes

#### `Typora` section modification

open `{Typora Installation Path}\resources\appsrc\window\frame.js`  to find `async exportAndSaveHTML(e)` in ` var n=await this. exportToHTML (e)` Add the following code later：

```javascript
var regex = /<p[^>]*>\s*<img([^>]+)src=([^>\s]+)(.*?)>\s*<\/p>/gi;
n = n.replace(regex, '<p><img$1data-src=$2$3></p>');
```



Full code：<a href="extend/js/ui/shaw-typora-expend.js"> shaw-typora-expend.js</a>

```javascript
async exportAndSaveHTML(e) {
    var t = await p.showExportDialog("html", e);
    if (t) {
        this.recordLastExport(e, t);
        var n = await this.exportToHTML(e);
        // ===========================添加代码============start===========================
        var regex = /<p[^>]*>\s*<img([^>]+)src=([^>\s]+)(.*?)>\s*<\/p>/gi;
        n = n.replace(regex, '<p><img$1data-src=$2$3></p>');
        //n = n.replace(/<iframe src=/g, "<iframe data-src="); // 2023/07/08 添加iframe懒加载
        var iframeRegx = /(<iframe\s+[^>]*)(\bsrc\s*=\s*["']?([^>"' ]+)\s*["']?)([^>]*>)/g;
        n = n.replace(iframeRegx, `$1 data-src="$3"$4`); // 2023/07/15
        // ===========================添加代码============end===========================
        File.fs.writeFile(t, n, n => {
            n ? (c.showDialog({
                title: m.localize.getString("Error"),
                html: m.localize.getString("Failed to export file to <em>{0}</em>", "Panel").format(a.escape(t)) + "<br/>" + a.escape(n.message),
                backdrop: "static",
                type: "error"
            }), console.sendError(n, "warn")) : w("html", t, e)
        })
    }
}
```



#### Lazy loading code

```javascript
/***
 * 优化Typora导出，图片实现懒加载
 */

async function lazyLoadImg(img) {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {

        const src_tmp = img.getAttribute('data-src');
        // 图片进入可视区域，加载图片
        // 先保存原始的 src，加载后再替换。
        const originalSrc = src_tmp ? src_tmp : "https://hnt-oss.oss-cn-chengdu.aliyuncs.com/js/ui/Not-find-img.png";
        img.onload = () => {
          // 图片加载完成后移除观察器
          intersectionObserver.disconnect();
        };
        img.src = originalSrc;
      }
    },
    { threshold: 0.01 }
  );
  intersectionObserver.observe(img);
}

/**
 * iframe 懒加载
 * @param iframeTag
 */
async function lazyLoadIframe(iframeTag) {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const src_tmp = iframeTag.getAttribute("data-src");
        // 图片进入可视区域，加载图片
        // 先保存原始的 src，加载后再替换。
        iframeTag.onload = () => {
          // 图片加载完成后移除观察器
          intersectionObserver.disconnect();
        };
        iframeTag.src = src_tmp;
      }
    },
    { threshold: 0.01 }
  );
  intersectionObserver.observe(iframeTag);
}

function initLazyLoad() {
  const imgs = document.querySelectorAll("p img[data-src]");
  imgs.forEach((img) => {
    lazyLoadImg(img);
  });
	 // 2023/07/08 添加iframe懒加载 start
  const iframeTags = document.querySelectorAll("iframe[data-src]");
  iframeTags.forEach((tag) => {
    lazyLoadIframe(tag);
  });
  // 2023/07/08 添加iframe懒加载 end
}

window.addEventListener('load', initLazyLoad);
```
