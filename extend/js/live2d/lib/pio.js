/* ----

# Pio Plugin
# By: Dreamer-Paul
# Modify: journey-ad
# Last Update: 2021.5.4

一个支持更换 Live2D 模型的 Typecho 插件。

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

---- */

var Paul_Pio = function (prop) {
  var that = this;
  var firstNumber = parseInt(localStorage.getItem("live2dModel") || "0");
  var current = {
    idol: firstNumber,
    menu: document.querySelector(".pio-container .pio-action"),
    canvas: document.getElementById("pio"),
    body: document.querySelector(".pio-container"),
    root: document.location.protocol + "//" + document.location.hostname + "/",
  };

  // 默认是白天模式
  var darkModel = localStorage.getItem("darkModel") | 0;
  var syncSysThemeMode = localStorage.getItem("syncSysThemeMode") | 0;
  // 获取系统主题
  const sysThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  /**
   * 初始化主题
   * @param {*} elements
   * @param {*} modules
   * @param {*} isInit
   */
  function changeThemeMode(elements, modules, isInit = false) {
    if (!isInit) {
      darkModel = 1 - darkModel;
    }
    if (darkModel == 0) {
      document.documentElement.setAttribute("theme-mode", "light");
    } else if (darkModel == 1) {
      document.documentElement.setAttribute("theme-mode", "dark");
    }
    toggleNightMode(darkModel);
    initThemeRender(elements, darkModel, modules);
    // 存储在cookie中
    localStorage.setItem("darkModel", darkModel);
    localStorage.setItem("syncSysThemeMode", syncSysThemeMode);

    window?.ymcEventBus.emit("changeThemeFloatCallBack", {
      darkModel: darkModel,
      isInit: isInit,
    });
  }
  /**
   *  设置主题Render
   * @param {*} elment
   * @param {*} darkModel
   * @param {*} modules
   */
  function initThemeRender(elment, darkModel, modules) {
    if (darkModel == 1) {
      elment.night.onmouseover = function () {
        modules.render("关闭夜间模式");
      };
    } else if (darkModel == 0) {
      elment.night.onmouseover = function () {
        modules.render("夜间点击这里可以保护眼睛呢");
      };
    }
  }

  /* - 方法 */
  var modules = {
    // 更换模型
    idol: function () {
      current.idol < prop.model.length - 1
        ? current.idol++
        : (current.idol = 0);
      return current.idol;
    },
    // 创建内容
    create: function (tag, prop, id = {}) {
      var e = document.createElement(tag);
      if (prop.class) e.className = prop.class;
      if (id.id) e.id = id.id;
      return e;
    },
    // 随机内容
    rand: function (arr) {
      return arr[Math.floor(Math.random() * arr.length + 1) - 1];
    },
    // 创建对话框方法
    render: function (text, timeout = 3000) {
      if (text.constructor === Array) {
        dialog.innerHTML = modules.rand(text);
      } else if (text.constructor === String) {
        dialog.innerHTML = text;
      } else {
        dialog.innerHTML = "输入内容出现问题了 X_X";
      }

      dialog.classList.add("active");

      clearTimeout(this.t);
      this.t = setTimeout(function () {
        dialog.classList.remove("active");
      }, timeout);
    },
    // 移除方法
    destroy: function () {
      that.initHidden();
    },
    // 是否为移动设备
    isMobile: function () {
      var ua = window.navigator.userAgent.toLowerCase();
      ua = ua.indexOf("mobile") || ua.indexOf("android") || ua.indexOf("ios");

      return window.innerWidth < 500 || ua !== -1;
    },
  };
  this.modules = modules;
  this.destroy = modules.destroy;

  var elements = {
    home: modules.create("span", { class: "pio-home" }),
    skin: modules.create("span", { class: "pio-skin" }),
    night: modules.create("span", { class: "pio-night" }),
    bottom: modules.create("span", { class: "pio-bottom" }),
    close: modules.create("span", { class: "pio-close" }),
    content: modules.create(
      "span",
      { class: "pio-contents-expanded" },
      { id: "my-pio-content" }
    ),
    show: modules.create("div", { class: "pio-show" }),
  };

  var dialog = modules.create("div", { class: "pio-dialog" });
  current.body?.appendChild(dialog);
  current.body?.appendChild(elements.show);

  /* - 提示操作 */
  var action = {
    // 欢迎
    welcome: function () {
      if (
        document.referrer !== "" &&
        document.referrer.indexOf(current.root) === -1
      ) {
        var referrer = document.createElement("a");
        referrer.href = document.referrer;
        prop.content.referer
          ? modules.render(
              prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")
            )
          : modules.render("欢迎来自 “" + referrer.hostname + "” 的朋友！");
      } else if (prop.tips) {
        var text,
          hour = new Date().getHours();

        if (hour > 22 || hour <= 5) {
          text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛";
        } else if (hour > 5 && hour <= 8) {
          text = "早上好！";
        } else if (hour > 8 && hour <= 11) {
          text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
        } else if (hour > 11 && hour <= 14) {
          text = "中午了，工作了一个上午，现在是午餐时间！";
        } else if (hour > 14 && hour <= 17) {
          text = "午后很容易犯困呢，今天的运动目标完成了吗？";
        } else if (hour > 17 && hour <= 19) {
          text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~";
        } else if (hour > 19 && hour <= 21) {
          text = "晚上好，今天过得怎么样？";
        } else if (hour > 21 && hour <= 23) {
          text = "已经这么晚了呀，早点休息吧，晚安~";
        } else {
          text = "奇趣保罗说：这个是无法被触发的吧，哈哈";
        }

        modules.render(text);
      } else {
        modules.render(prop.content.welcome || "欢迎来到本站！");
      }
    },
    // 触摸
    touch: function () {
      current.canvas.onclick = function () {
        modules.render(
          prop.content.touch || [
            "你在干什么？",
            "再摸我就报警了！",
            "HENTAI!",
            "不可以这样欺负我啦！",
          ]
        );
      };
    },
    // 右侧按钮
    buttons: function () {
      // 返回首页
      elements.home.onclick = function () {
        // location.href = current.root;
        const writeDiv = document.getElementById("write"); // 获取 id 为 'write' 的 div 元素
        if (writeDiv) {
          // 检查 writeDiv 是否存在
          writeDiv.scrollIntoView({
            behavior: "smooth", // 使用平滑滚动
          });
        }
      };
      elements.home.onmouseover = function () {
        modules.render(prop.content.home || "点击跳转<code>文章</code>到顶部!");
      };
      current.menu.appendChild(elements.home);
      // 更换模型
      elements.skin.onclick = function () {
        that.model = loadlive2d("pio", prop.model[modules.idol()], (model) => {
          prop.onModelLoad && prop.onModelLoad(model);
          prop.content.skin && prop.content.skin[1]
            ? modules.render(prop.content.skin[1])
            : modules.render("新衣服真漂亮~");
        });
        localStorage.setItem("live2dModel", current.idol);
      };
      elements.skin.onmouseover = function () {
        prop.content.skin && prop.content.skin[0]
          ? modules.render(prop.content.skin[0])
          : modules.render("想看看我的新衣服吗？");
      };
      if (prop.model.length > 1) current.menu.appendChild(elements.skin);

      // 关于我
      // elements.info.onclick = function () {
      //     window.open(prop.content.link || "https://paugram.com/coding/add-poster-girl-with-plugin.html");
      // };
      // elements.info.onmouseover = function () {
      //     modules.render("想了解更多关于我的信息吗？");
      // };
      // current.menu.appendChild(elements.info);

      // 夜间模式
      elements.night.onclick = function () {
        syncSysThemeMode = 0;
        changeThemeMode(elements, modules, false);
        window?.ymcEventBus.emit("removeSyncTheme");
      };

      current.menu.appendChild(elements.night);

      // 跳转到底部
      elements.bottom.onclick = function () {
        // 获取 id 为 'write' 的 div 元素
        let bottom_tag = document.getElementById("my-bottom");
        if (!bottom_tag && typeof ymc_init_bottom === "function") {
          bottom_tag = ymc_init_bottom();
        }
        // 获取 id 为 'write' 的 div 元素
        const writeDiv = document.getElementById("write");
        if (writeDiv && bottom_tag) {
          // const y = bottom_tag.clientHeight + window.pageYOffset; // 计算要滚动的顶部位置
          // window.scrollTo({ top: y, behavior: 'smooth' }); // 滚动到指定位置
          // location.href='#my-bottom'
          bottom_tag.scrollIntoView({
            behavior: "smooth", // 使用平滑滚动

            block: "start",
          });
        }
      };
      elements.bottom.onmouseover = function () {
        modules.render(prop.content.bottom || "点击跳转到底部!");
      };
      current.menu.appendChild(elements.bottom);

      // 目录展开和闭合
      elements.content.onclick = function () {
        window?.ymcEventBus.emit("changeContent");
        modules.render(prop.contentStatus ? "点击收起目录!" : "点击展开目录!");
      };
      elements.content.onmouseover = function () {
        modules.render(prop.contentStatus ? "点击收起目录!" : "点击展开目录!");
      };

      current.menu.appendChild(elements.content);
      // 关闭看板娘
      elements.close.onclick = function () {
        modules.destroy();
      };
      elements.close.onmouseover = function () {
        modules.render(prop.content.close || "QWQ 下次再见吧~");
      };
      current.menu.appendChild(elements.close);
    },
    custom: function () {
      prop.content.custom.forEach(function (t) {
        if (!t.type) t.type = "default";
        var e = document.querySelectorAll(t.selector);

        if (e.length) {
          for (var j = 0; j < e.length; j++) {
            if (t.type === "read") {
              e[j].onmouseover = function () {
                modules.render(
                  "想阅读 %t 吗？".replace(/%t/, "“" + this.innerText + "”")
                );
              };
            } else if (t.type === "link") {
              e[j].onmouseover = function () {
                modules.render(
                  "想了解一下 %t 吗？".replace(/%t/, "“" + this.innerText + "”")
                );
              };
            } else if (t.text) {
              e[j].onmouseover = function () {
                modules.render(t.text);
              };
            }
          }
        }
      });
    },
  };

  /* - 运行 */
  var begin = {
    static: function () {
      current.body?.classList.add("static");
    },
    fixed: function () {
      action.touch();
      action.buttons();
    },
    draggable: function () {
      action.touch();
      action.buttons();

      var body = current.body;
      window.addEventListener("resize", function () {
        // 窗口大小变化后的回调处理
        // body.style.left = (window.innerWidth - body.offsetWidth) + 'px';

        body.style.left =
          document.documentElement.clientWidth - body.offsetWidth + "px";
      });
      body.onmousedown = function (downEvent) {
        var location = {
          x: downEvent.clientX - this.offsetLeft,
          y: downEvent.clientY - this.offsetTop,
        };
        var halfWindowWidth = window.innerWidth / 2;

        function move(moveEvent) {
          body.classList.add("active");
          body.classList.remove("right");
          let left_tmp = moveEvent.clientX - location.x;
          if (left_tmp < 0) left_tmp = 0;
          else if (left_tmp >= window.innerWidth - body.offsetWidth)
            left_tmp = window.innerWidth - body.offsetWidth;
          body.style.left = left_tmp + "px";
          // 判断是否需要将元素偏移位置

          const action_tag = body.getElementsByClassName("pio-action")[0];
          if (action_tag) {
            if (moveEvent.clientX < halfWindowWidth) {
              action_tag.style.right = 0;
              action_tag.style.left = "auto";
            } else {
              action_tag.style.right = "auto";
              action_tag.style.left = 0;
            }
          }
          body.style.top = moveEvent.clientY - location.y + "px";
          body.style.bottom = "auto";

          //   body.style.bottom = "0";
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", function (e) {
          body.classList.remove("active");
          document.removeEventListener("mousemove", move);
          let containerTag = document.getElementById("pio-container");
          if (
            containerTag.offsetTop + containerTag.clientHeight >=
            window.innerHeight
          ) {
            body.style.top =
              window.innerHeight - containerTag.clientHeight + "px";
          } else if (containerTag.offsetTop <= 45) {
            body.style.top = 50 + "px";
          } else {
            body.style.top = containerTag.offsetTop + "px";
          }
        });
      };
    },
  };

  // 运行
  this.init = function (onlyText) {
    if (!(prop.hidden && modules.isMobile())) {
      if (!onlyText) {
        action.welcome();
        that.model = loadlive2d("pio", prop.model[current.idol], (model) => {
          prop.onModelLoad && prop.onModelLoad(model);
        });
      }

      switch (prop.mode) {
        case "static":
          begin.static();
          break;
        case "fixed":
          begin.fixed();
          break;
        case "draggable":
          begin.draggable();
          break;
      }

      if (prop.content.custom) action.custom();

      // 设置透明度
      set_opacity();
      // 增加跟随系统自主切换
      //      sysThemeMedia.addEventListener("change", (e) => { 只生效了一次
    }
  };

  // 隐藏状态
  this.initHidden = function () {
    current.body?.classList.add("hidden");
    dialog.classList.remove("active");
    const formData = JSON.parse(localStorage.getItem("configMenu"));
    if (formData) {
      formData.live2d = 0;
      localStorage.setItem("configMenu", JSON.stringify(formData));
    }

    sessionStorage.setItem("posterGirl", 0);
    if (localStorage.getItem("showLive2d") != 0) {
      localStorage.setItem("showLive2d", 1);
    }
    window?.ymcEventBus.emitGroup("close:live2d");
    // elements.show.onclick = function () {
    //   current.body?.classList.remove("hidden");
    //   sessionStorage.setItem("posterGirl", 1);
    //   that.init();
    // };
  };

  // 目录开/合
  this.contentFun = function () {
    let content_tag = document.getElementById("my-pio-content");
    // 已经展开了，则关闭
    if (prop.contentStatus) {
      const menus = document.querySelectorAll(".outline-item-open");
      for (let i = 0; i < menus.length; i++) {
        menus[i].classList.remove("outline-item-open");
      }
      content_tag && content_tag.classList.remove("pio-contents-closed");
      content_tag && content_tag.classList.toggle("pio-contents-expanded");
      prop.contentStatus = false;
    } else {
      // 获取所有标题元素
      const expanders = document.querySelectorAll(".outline-expander");
      // 遍历所有标题元素，改变其 class，实现展开和收缩
      for (let i = 0; i < expanders.length; i++) {
        if (
          !expanders[i].parentNode.parentNode.classList.contains(
            "outline-item-open"
          )
        ) {
          expanders[i].parentNode.parentNode.classList.toggle(
            "outline-item-open"
          );
        }
      }
      content_tag && content_tag.classList.remove("pio-contents-expanded");
      content_tag && content_tag.classList.toggle("pio-contents-closed");
      prop.contentStatus = true;
    }
  };
  // 跟随系统 切换主题
  if (syncSysThemeMode == 1) {
    syncThemeStart();
  }
  // posterGirl: 0 隐藏; 1 显示； 2: 关闭
  // showLive2d:|1:显示/隐藏|     0: 关闭
  const isShow =
    localStorage.getItem("showLive2d") == 0 ||
    (sessionStorage.getItem("posterGirl") == 0 &&
      sessionStorage.getItem("posterGirl") == 2);
  isShow ? this.initHidden() : this.init();

  // 开启Live2d
  window?.ymcEventBus.on("onLive2d", (index) => {
    current.idol = parseInt(index || "0");
    localStorage.setItem("live2dModel", current.idol);
    current.body?.classList.remove("hidden");
    sessionStorage.setItem("posterGirl", 1);
    localStorage.setItem("showLive2d", 1);
    that.init();
  });

  // 隐藏
  window?.ymcEventBus.on("removeLive2d", () => {
    current.body?.classList.add("hidden");
    dialog.classList.remove("active");
    sessionStorage.setItem("posterGirl", 0);
    localStorage.setItem("showLive2d", 1);
  });

  // 关闭
  window?.ymcEventBus.on("stopLive2d", () => {
    current.body?.classList.add("hidden");
    dialog.classList.remove("active");
    sessionStorage.setItem("posterGirl", 2);
    localStorage.setItem("showLive2d", 0);
  });

  // 更改模型
  window?.ymcEventBus.on("changeLive2dModel", (index) => {
    current.idol = parseInt(index || "0");
    localStorage.setItem("live2dModel", current.idol);
    that.model = loadlive2d("pio", prop.model[current.idol], (model) => {
      prop.onModelLoad && prop.onModelLoad(model);
      prop.content.skin && prop.content.skin[1]
        ? modules.render(prop.content.skin[1])
        : modules.render("新衣服真漂亮~");
    });
  });

  // 此处是为了配合设置
  window?.ymcEventBus.on("syncSysTheme", function () {
    // 跟随系统
    syncSysThemeMode = 1;
    syncThemeStart();
  });
  // 切换主题
  window?.ymcEventBus.on("changeTheme", function (mode) {
    if (mode != undefined) {
      // 不跟随系统
      syncSysThemeMode = 0;
      darkModel = parseInt(mode);
      changeThemeMode(elements, modules, true);
      window?.ymcEventBus.emit("removeSyncTheme");
    }
  });

  window?.ymcEventBus.on("changeContent", this.contentFun);

  // 判断是否是夜间模式
  changeThemeMode(elements, modules, true);

  function syncThemeStart() {
    // 切换时，初始设置
    setTheme();
    sysThemeMedia.onchange = null;
    sysThemeMedia.addEventListener("change", setTheme);

    window?.ymcEventBus.once("removeSyncTheme", () => {
      sysThemeMedia.removeEventListener("change", setTheme);
    });
    function setTheme() {
      if (sysThemeMedia.matches) {
        darkModel = 1;
      } else {
        darkModel = 0;
      }
      changeThemeMode(elements, modules, true);
    }
  }
};

// 请保留版权说明
if (window.console && window.console.log) {
  console.log(
    "%c Pio %c https://paugram.com ",
    "color: #fff; margin: 1em 0; padding: 5px 0; background: #673ab7;",
    "margin: 1em 0; padding: 5px 0; background: #efefef;"
  );
}

function toggleNightMode(darkModel) {
  // const body = document.body; // 获取文档的 body 元素
  // if (!body.classList.contains("dark-mode") && darkModel == 1) {
  //   body.classList.toggle("dark-mode"); // 切换 body 的 class
  // } else if (darkModel == 0) {
  //   body.classList.remove("dark-mode"); // 切换 body 的 class
  // }

  const htmlTag = document.documentElement; // 获取文档的 body 元素
  if (!htmlTag.classList.contains("dark-mode") && darkModel == 1) {
    htmlTag.classList.toggle("dark-mode"); // 切换 body 的 class
  } else if (darkModel == 0) {
    htmlTag.classList.remove("dark-mode"); // 切换 body 的 class
  }
}

function set_opacity() {
  const myDiv = document.getElementById("pio-container");
  myDiv.style.opacity = "0.75";
  myDiv.addEventListener("mouseover", function () {
    myDiv.style.opacity = "1";
  });

  myDiv.addEventListener("mouseout", function () {
    myDiv.style.opacity = "0.75";
  });
}

function nightMode() {
  // 创建一个 style 元素
  var style = document.createElement("style");

  // 设置样式
  style.innerHTML = `
    :root {
        --background-color: #fff;
        --text-color: #333;
      }
      
      body.light-mode {
        background-color: var(--background-color);
        color: var(--text-color);
      }
      
      body.dark-mode {
        background-color: #333;
        color: #fff;
      }
    `;

  // 将 style 元素添加到 head 标签中
  document.head.appendChild(style);
}

function ymc_init_bottom() {
  // 获取 id 为 'write' 的 div 元素
  const writeDiv = document.getElementById("write");
  // 如果 writeDiv 存在，将锚点元素添加到 writeDiv 后面
  if (writeDiv) {
    // 创建一个 <a> 标签并设置其 id 属性为 'my-bottom'
    const anchorTag = document.createElement("div");
    anchorTag.id = "my-bottom";
    // anchorTag.href = '#my-bottom'
    // 在 <div id="write"> 元素后插入锚点
    writeDiv.appendChild(anchorTag);
    return anchorTag;
  }
  return null;
}
