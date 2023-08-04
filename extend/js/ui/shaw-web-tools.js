/***
 * 优化Typora导出，图片实现懒加载
 */

async function lazyLoadImg(img) {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const src_tmp = img.getAttribute("data-src");
        // 图片进入可视区域，加载图片
        // 先保存原始的 src，加载后再替换。
        const originalSrc = src_tmp
          ? src_tmp
          : `${cdn_url}/js/ui/Not-find-img.png`;
        img.onload = () => {
          // 图片加载完成后移除观察器
          intersectionObserver.disconnect();
        };
        img.src = originalSrc;
        // 给img元素绑定onclick事件，调用showImage函数
        // img.onclick = function () {
        //   typoraShowBigImg(this.src);
        // };
      }
    },
    { threshold: 0.01 }
  );
  intersectionObserver.observe(img);

  imgWarp(img);
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

  const iframeTags = document.querySelectorAll("iframe[data-src]");
  iframeTags.forEach((tag) => {
    lazyLoadIframe(tag);
  });
}

window.addEventListener("load", function () {
  // initBigImage();
  initLazyLoad();
  initFancybox().then(() => {
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      Thumbs: {
        showOnStart: false,
      },
      Images: {
        Panzoom: {
          maxScale: 4,
        },
      },
      Carousel: {
        transition: "slide",
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
          ],
          right: ["slideshow", "fullscreen", "download", "thumbs", "close"],
        },
      },
    });
  });
});

function initBigImage() {
  // 创建外层div元素，设置样式和id
  const outerdiv = document.createElement("div");
  outerdiv.setAttribute(
    "style",
    `
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 66;
  width: 100%;
  height: 100%;
  display: none;
`
  );
  outerdiv.setAttribute("id", "outerdivBigImg");

  // 创建内层div元素，设置样式和id
  const innerdiv = document.createElement("div");
  innerdiv.setAttribute("style", "position: absolute;");
  innerdiv.setAttribute("id", "innerdivBigImg");

  // 创建图片元素，设置样式和id
  const bigimg = document.createElement("img");
  bigimg.setAttribute("style", "border: 5px solid #fff;");
  bigimg.setAttribute("id", "big-image");
  bigimg.setAttribute("src", "");

  // 将内层div和图片元素添加到外层div中
  innerdiv.appendChild(bigimg);
  outerdiv.appendChild(innerdiv);

  // 将外层div添加到body中
  document.body.appendChild(outerdiv);
}

// 点击图片后放大
function typoraShowBigImg(imgSrc) {
  var bigImage = document.getElementById("big-image");
  bigImage.setAttribute("src", imgSrc);

  var imgObj = new Image();
  imgObj.src = imgSrc;
  imgObj.addEventListener("load", function () {
    var windowW = window.innerWidth;
    var windowH = window.innerHeight;
    var realWidth = imgObj.width;
    var realHeight = imgObj.height;
    var imgWidth, imgHeight;
    var scale = 0.8;

    if (realHeight > windowH * scale) {
      imgHeight = windowH * scale;
      imgWidth = (imgHeight / realHeight) * realWidth;
      if (imgWidth > windowW * scale) {
        imgWidth = windowW * scale;
      }
    } else if (realWidth > windowW * scale) {
      imgWidth = windowW * scale;
      imgHeight = (imgWidth / realWidth) * realHeight;
    } else {
      imgWidth = realWidth;
      imgHeight = realHeight;
    }

    bigImage.style.width = imgWidth + "px";

    var w = (windowW - imgWidth) / 2;
    var h = (windowH - imgHeight) / 2;
    var innerDiv = document.getElementById("innerdivBigImg");
    innerDiv.style.top = h + "px";
    innerDiv.style.left = w + "px";
    var outerDiv = document.getElementById("outerdivBigImg");
    outerDiv.style.display = "block";
    // 监听鼠标滚轮事件，实现放大或缩小图片
    var scaleLevel = 0;
    var zoomFactor = 0.05;
    bigImage.addEventListener("wheel", function (e) {
      e.preventDefault();

      // 获取当前鼠标滚轮的滚动值
      var delta = e.deltaY || e.detail || e.wheelDelta;

      // 根据滚动值确定图片是否放大或缩小
      if (delta < 0 && scaleLevel < 10) {
        scaleLevel++;
        imgWidth += imgWidth * zoomFactor;
        imgHeight += imgHeight * zoomFactor;
      } else if (delta > 0 && scaleLevel > -10) {
        scaleLevel--;
        imgWidth -= imgWidth * zoomFactor;
        imgHeight -= imgHeight * zoomFactor;
      }

      bigImage.style.width = imgWidth + "px";
      innerDiv.style.top = (windowH - imgHeight) / 2 + "px";
      innerDiv.style.left = (windowW - imgWidth) / 2 + "px";
    });
    // 监听鼠标点击事件，实现图片的拖拽
    var isDragging = false;
    var startX, startY;
    innerDiv.addEventListener("mousedown", function (e) {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX - parseInt(innerDiv.style.left);
      startY = e.clientY - parseInt(innerDiv.style.top);
    });
    innerDiv.addEventListener("mousemove", function (e) {
      e.preventDefault();
      if (isDragging) {
        innerDiv.style.left = e.clientX - startX + "px";
        innerDiv.style.top = e.clientY - startY + "px";
      }
    });
    innerDiv.addEventListener("mouseup", function (e) {
      e.preventDefault();
      isDragging = false;
    });
  });

  var outerDiv = document.getElementById("outerdivBigImg");
  outerDiv.addEventListener("click", function (e) {
    // 只有在点击外层div元素时才关闭弹出层
    if (e.target.id === "outerdivBigImg") {
      outerDiv.style.display = "none";
    }
  });
}

function imgWarp(element) {
  if (element.parentNode.tagName !== "A") {
    // @ts-ignore
    const dataSrc =
      element.dataset["data-src"] || element.dataset["src"] || element.src;
    // @ts-ignore
    const dataCaption = element.title || element.alt || "";
    wrap(element, "a", {
      href: dataSrc,
      "data-fancybox": "gallery",
      "data-caption": dataCaption,
      "data-thumb": dataSrc,
    });
  }

  /**
   * @param {*} selector
   * @param {*} eleType the type of create element
   * @param {*} options object key: value
   */
  function wrap(selector, eleType, options) {
    const createEle = document.createElement(eleType);
    for (const [key, value] of Object.entries(options)) {
      createEle.setAttribute(key, value);
    }
    selector.parentNode.insertBefore(createEle, selector);
    createEle.appendChild(selector);
  }
}

/**
 * 加载fancybox
 */

function initFancybox() {
  return Promise.all([
    loadExternalResource(
      `https://unpkg.com/@fancyapps/ui@5.0.20/dist/fancybox`,
      "fancybox.umd",
      "js",
      false,
      false
    ),
    loadExternalResource(
      `https://unpkg.com/@fancyapps/ui@5.0.20/dist/fancybox`,
      "fancybox",
      "css",
      false,
      false
    ),
  ]);
}
