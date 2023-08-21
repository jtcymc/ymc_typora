<div align="right"><a title="Chinese" href="./README_CN.md">中文</a> | <a title="Chinese" href="./README.md">English</a></div>

### 🎉 项目备注
项目：ymc_typora   
作者：shaw  
语言：JavaScript && CSS  
时间：2022.03.15 ~ 至今  
案例:  https://jtcymc.github.io/ymc_typora/
# ymc_typora

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/theme-shaw.png" style="zoom:80%;" alt="theme-shaw" />


基于 [drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme) 和 [drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme) 主题。


## 💻 安装


### GIT


> 如果您位于中国大陆，可以从 [Gitee](*https://gitee.com/shawymc/ymc_typora.git*) 下载


主要分支 [推荐]:


```bash
  git clone -b master https://gitee.com/shawymc/ymc_typora.git ymc_typora
```


### 主题
将主题文件复制到 Typora 主题文件夹中：


```text
  {Typora 安装根目录}\themes
```


### Typora 扩展
找到 `{Typora 安装根目录}\resources\window.html` ，搜索 `id="write"` 并进入 `<div id="write" class="ty-before-first-render" contenteditable="false" spellcheck="true" tabindex="-1">` ，之前添加以下代码：
```html
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/js/autoload-shaw-page-component.min.js"></script>
```


## ⚙ 配置与使用
1. 打开或重新启动 Typora。单击 `Themes` 切换到 `shaw-light`
2. 在 `文件` -> `偏好设置` -> `导出` ==> `HTML` ==> `在<head/>中添加`：
```html
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/js/autoload-shaw-page-component.min.js"></script>
```



## 🎉 特点
- [x] 工具栏：
    - [x] 返回顶部。
    - [x] 跳转到底部。
    - [x] 切换浅色🔆 / 深色🌒主题。
    - [x] 更改 Live2d 模型。
    - [x] 展开或收起目录。
- [x] Live2d
- [x] 图像懒加载。*. 仅支持导出`HTML`。
- [x] `iframe`懒加载。*. 仅支持导出`HTML`。
- [x] 图像使用 Fasxbox。*. 仅支持导出`HTML`。
- [x] 悬浮按钮设置：
    - [x] 鼠标点击效果 `heart`。
    - [x] 鼠标点击效果 `firework`。
    - [x] 鼠标拖尾特效。
    - [x] Live2d 设置。包括模型选择和开关。
    - [x] 浅色🔆 / 深色🌒主题更改和同步系统主题。
- [x] 其他......

## demo



 <iframe src="https://jtcymc.github.io/ymc_typora/" style="width:100%;height:700px;border: 1px solid"/>



## 📷 屏幕截图

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/shaw-light.png" style="zoom:80%;" alt="shaw-light" />





​			<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/shaw-dark.png" style="zoom:80%;" alt="shaw-dark" />


​			<img src="images/README_CN/float-btn.png" style="zoom:100%;border: 1px solid" alt="float-btn" />



## 配置教程
### 图释
#### Typora编辑页有效



目前会对图片自动编号，但要正确显示图释（`alt`属性值），还需额外修改<u>frame.js</u>源码（在安装路径<span alt="str">Typora/resources/appsrc/window</span>下），分别定位到`class='md-image md-img-loaded"+w+"' "+b+"><span class='md-meta md-before md-content' contenteditable='true'>"+h+"</span>"+`以及`contenteditable='false' class='md-image"+L+"' data-src='"+k+"' "+b+"><span class='md-meta md-before md-content' contenteditable='true'>"+h+"</span>"+`处（注意Typora版本不同，相关代码可能有所区别），将两处末尾都后面替换为以下字符串即可：

```js
"<span class='CustomImg' alt='"+ F.getAttribute("alt")+"'>" +F.outerHTML+"</span></span>"
```

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@latest/docs/imgs/image-20230429153541789.png" style="zoom:80%;" alt="pageInfo" />



#### 导出html支持图释

typora主题设置

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
### 导出html支持图片和iframe懒加载

#### typora 部分修改

找到`{typora安装路径}\resources\appsrc\window\frame.js`   搜索`async exportAndSaveHTML(e)` 在  `var n = await this.exportToHTML(e);` 后面添加 如下代码：

```javascript
var regex = /<p[^>]*>\s*<img([^>]+)src=([^>\s]+)(.*?)>\s*<\/p>/gi;
n = n.replace(regex, '<p><img$1data-src=$2$3></p>');
```



完整代码：<a href="extend/js/ui/shaw-typora-expend.js"> shaw-typora-expend.js</a>

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



#### 懒加载代码

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

