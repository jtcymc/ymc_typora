

### 🎉 Project Remarks
name：ymc_typora   
author：shaw  
language：JavaScript && CSS  
time：2022.03.15 ~ Now  
demo:  https://jtcymc.github.io/ymc_typora/
# ymc_typora
<div align="right"><a title="Chinese" href="./README_CN.md">中文</a> | <a title="Chinese" href="./README.md">English</a></div> 

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/theme-shaw.png" style="zoom:80%;" alt="theme-shaw" />

Based on [drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme)  &   [drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme)theme.

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
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/js/autoload-shaw-page-component.min.js"></script>
```

## ⚙ Configuration & Use
1. Open or Restart Typora. Click on `Themes` to switch to `shaw-light`.
2. `File` -> `Preferences` -> `Export` ==> `HTML` ==> `Append in <head/>` add :
```html
  <script src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/js/autoload-shaw-page-component.min.js"></script>
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

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/shaw-light.png" style="zoom:80%;" alt="shaw-light" />
		<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/shaw-dark.png" style="zoom:80%;" alt="shaw-dark" />
		<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/float-btn.png" style="zoom:100%;border: 1px solid" alt="float-btn" />
