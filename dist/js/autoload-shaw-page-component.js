var cdn_url = "/dist/";
// oss_js_path 参数建议使用绝对路径
const oss_js_path = `${cdn_url}/js`;
const live2d_url_prefix = `${oss_js_path}/live2d/lib`;
const oss_css_path = `${cdn_url}/css`;

const formMenuData = JSON.parse(localStorage.getItem("configMenu"));

function loadBaseDeps() {
  // load  Layui

  return Promise.all([
    // 引入 layui.css
    loadExternalResource(
      `${cdn_url}/layui-v2.8.4/layui/css`,
      "typora-layui",
      "css",
      false,
      true
    ),
    loadExternalResource(
      `${cdn_url}/layui-v2.8.4/layui`,
      "layui",
      "js",
      false,
      false
    ),
    loadExternalResource(
      `${oss_js_path}/core`,
      "EventEmitter",
      "js",
      false,
      true,
      true
    ).then(() => {
      window.ymcEventBus = new EventEmitter();
    }),

    loadExternalResource(
      `${oss_css_path}/float`,
      "float-btn",
      "css",
      false,
      true
    ),
    // 烟花特效使用
    loadExternalResource(
      `https://unpkg.com/theme-shokax-anime@0.0.4`,
      "anime.shokax",
      "js",
      false
    ),
    loadExternalResource(
      `http://cdn.bootcss.com/font-awesome/4.4.0/css`,
      "font-awesome",
      "css",
      false,
      true
    ),
    loadExternalResource(`${oss_css_path}`, "animate.min", "css", true, false),
  ]).then(() => {
    loadExternalResource(
      `${oss_js_path}/ui`,
      "shaw-float-btn",
      "js",
      false,
      false
    ).then(() => {
      new FloatBtnMenu();
    });
    layui.use(["form", "laydate", "util"], function () {
      //   var layer = layui.layer;
    });
  });
}

function loadLive2D() {
  Promise.all([
    // 设置 script 标签的 src 属性值
    loadExternalResource(
      `${live2d_url_prefix}`,
      "live2dcubismcore",
      "js",
      false,
      true,
      false
    ),
    loadExternalResource(
      `${live2d_url_prefix}`,
      "pixi",
      "js",
      false,
      true,
      false
    ),
  ]).then(() => {
    // 配置选项的具体用法见 README.md

    Promise.all([
      loadExternalResource(
        `${live2d_url_prefix}`,
        "pio_sdk4",
        "js",
        false,
        true,
        true
      ),
      loadExternalResource(
        `${live2d_url_prefix}`,
        "cubism4",
        "js",
        false,
        true,
        false
      ),
      loadExternalResource(
        `${live2d_url_prefix}`,
        "pio",
        "js",
        false,
        true,
        true
      ),
      loadExternalResource(
        `${live2d_url_prefix}`,
        "pio",
        "css",
        false,
        true,
        false
      ),
      loadExternalResource(
        `${live2d_url_prefix}`,
        "load",
        "js",
        false,
        true,
        true
      ),
    ]).then(() => {
      window.addEventListener("load", function () {
        loadDianaModel();
      });
    });
  });
}

function loadCSSComponent() {
  loadExternalResource(
    `${oss_js_path}/ui`,
    "shaw-css-component",
    "js",
    true,
    true
  ).then(() => {
    if (formMenuData && Object.keys(formMenuData).length > 0) {
      if (formMenuData.mouseHeart == 1) {
        mouseHeartInit();
      }
      if (formMenuData.mouseTail == 1) {
        fairyDustCursor();
      }

      if (formMenuData.firework == 1) {
        firework();
      }
      window?.ymcEventBus.on("onMouseHeart", mouseHeartInit);
      window?.ymcEventBus.on("onMouseTail", fairyDustCursor);
      window?.ymcEventBus.on("onFirework", firework);
    }
  });
}

function loadToolComponent() {
  loadExternalResource(
    `${oss_js_path}/ui`,
    "shaw-web-tools",
    "js",
    false,
    true,
    true
  ),
    loadExternalResource(
      `${oss_js_path}/ui`,
      "shaw-typora-expend",
      "js",
      false,
      true,
      true
    );
}

/**
 * 封装异步加载资源的方法
 * @param {string} urlPrefix  文件路径
 * @param {string} fileName  文件名称
 * @param {string} type  css/js
 * @param {boolean} awaysNew  是否添加随机代码，避免缓存
 * @param {boolean} isMini  是否调用压缩的代码
 * @param {boolean} isObfuscate   是否调用混淆的代码
 * @returns
 */
function loadExternalResource(
  urlPrefix,
  fileName,
  type,
  awaysNew = false, // 是否添加随机代码，避免缓存
  isMini = true, // 是否调用压缩的代码
  isObfuscate = false // 是否调用混淆的代码
) {
  return new Promise((resolve, reject) => {
    let tag;

    let url = isMini
      ? `${urlPrefix}/${fileName}.min`
      : `${urlPrefix}/${fileName}`;
    url = isObfuscate ? `${url}.obfuscated.${type}` : `${url}.${type}`;
    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = awaysNew
        ? url + "?v={{" + Math.random().toString(36).substring(7) + " }}"
        : url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = awaysNew
        ? url + "?v={{" + Math.random().toString(36).substring(7) + " }}"
        : url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  loadBaseDeps().then(() => {
    // 在页面初始化时加载Live2D
    loadLive2D();
    loadCSSComponent();
    loadToolComponent();
  });
});
