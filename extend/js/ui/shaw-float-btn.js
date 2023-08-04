var isFloatBtnDragging = 0;
class FloatBtnMenu {
  options = {
    // 开关
    enabled: true,
    // 按钮Id
    btnId: "floatBtn",
    containerId: "floatBtnContainer",
  };

  constructor(options) {
    if (options && Object.keys(options).length > 0) {
      this.options = Object.assign(this.options, options);
    }
    this.init();
    this.formHtml = `
    <div class="layui-form layui-form-pane" lay-filter="filter-test-layer" style="margin: 16px;">
      <form class="layui-form" id="configMenu" lay-filter="config-menu-layer" action="">
        <div class="layui-col-xs6 layui-col-md6">
          <div class="layui-form-item">
            <label class="layui-form-label">鼠标爱心</label>
            <div class="layui-input-block">
              <input type="radio" lay-filter="mouseHeart-radio" id="mouseHeart-radio-close" name="mouseHeart" value="0" title="关" checked>
              <input type="radio" lay-filter="mouseHeart-radio" id="mouseHeart-radio-on" name="mouseHeart" value="1" title="开">
            </div>
          </div>
        </div>
        <div class="layui-col-xs6 layui-col-md6">
          <div class="layui-form-item">
            <label class="layui-form-label">鼠标尾巴</label>
            <div class="layui-input-block">
              <input type="radio" lay-filter="mouseTail-radio" id="mouseTail-radio-close" name="mouseTail" value="0" title="关" checked>
              <input type="radio" lay-filter="mouseTail-radio" id="mouseTail-radio-on" name="mouseTail" value="1" title="开">
            </div>
          </div>
        </div>
        <div class="layui-col-xs6 layui-col-md6">
          <div class="layui-form-item">
            <label class="layui-form-label">鼠标烟花</label>
            <div class="layui-input-block">
              <input type="radio" lay-filter="firework-radio" id="firework-radio-close" name="firework" value="0" title="关" checked>
              <input type="radio" lay-filter="firework-radio" id="firework-radio-on" name="firework" value="1" title="开">
            </div>
          </div>
        </div>
        <div class="layui-col-xs6 layui-col-md6">
          <div class="layui-form-item">
             <label class="layui-form-label">看板娘模型</label>
             <div class="layui-input-block">
                <select id="live2dModelSelect" name="live2dModel" lay-verify="required" lay-search >
                  <option value="">直接选择或搜索选择</option>
                  <option value="0" selected>Diana</option>
                  <option value="1">Ava</option>
                  <option value="2">小云</option>
                </select>
              </div>
            </div>
        </div>
        <div class="layui-col-xs6 layui-col-md12">
          <div class="layui-form-item">
            <label class="layui-form-label">看板娘</label>
            <div class="layui-input-block">
              <input type="radio" lay-filter="live2d-radio-filter" name="live2d" value="0" title="隐藏" checked>
              <input type="radio" lay-filter="live2d-radio-filter" name="live2d" value="1" title="显示">
              <input type="radio" lay-filter="live2d-radio-filter" name="live2d" value="2" title="关闭">
            </div>
          </div>
        </div>
        <div class="layui-col-xs6 layui-col-md12">
          <div class="layui-form-item">
            <label class="layui-form-label">主题</label>
            <div class="layui-input-block">
              <input type="radio" name="theme" value="0" title="白天" checked>
              <input type="radio" name="theme" value="1" title="夜间">
              <input type="radio" name="theme" value="2" title="跟随系统">
            </div>
          </div>
        </div>
        <div class="layui-form-item layui-text-center">
          <button type="submit" class="layui-btn" lay-submit lay-filter="save-config">保存</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </form>
  </div>
    `;
  }

  init() {
    if (this.options.enabled) {
      this.createElement();
      this.initFloatBtnEvent();
      this.initMenuInfo();
    }
  }

  createElement() {
    let divTag = document.createElement("div");
    divTag.id = this.options.containerId;
    divTag.classList.add("layui-btn-container");
    divTag.style.cssText =
      "z-index: 999999; position: fixed; bottom: 20px; width: 60px; height: 60px;";
    let imgTag = document.createElement("img");
    imgTag.src = "https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.3/dist/assets/setting.png";
    divTag.appendChild(imgTag);
    document.body.appendChild(divTag);

    // 创建HTML字符串
    let htmlStr = "";
    htmlStr += `
    <div id='ss_menu'>
    <div>
      <i class="fa fa-qq"></i>
    </div>
    <div>
      <i class="fa fa-weibo"></i>
    </div>
    <div>
      <i class="fa fa-weixin"></i>
    </div>
    <div>
      <i class="fa fa-renren"></i>
    </div>
    <div class='menu'>
      <div class='share' id='ss_toggle' data-rot='180'>
        <div class='circle'></div>
        <div class='bar'></div>
      </div>
    </div>
  </div>     
`;
  }

  buttonsClick(e, index) {}

  initMenuInfo() {
    var $ = layui.$;
    var layer = layui.layer;
    var form = layui.form;
    const floatBtn = document.getElementById(this.options.containerId);
    // 绑定鼠标进入事件，显示提示框
    floatBtn.onclick = () => {
      if (isFloatBtnDragging == 1) {
        // 是拖拽事件
        return;
      } else {
        isFloatBtnDragging = 2;
      }
      const layerIndex = layer.open({
        type: 1,
        area: ["650px", "350px"],
        resize: true,
        shadeClose: true,
        title: "组件配置",
        content: this.formHtml,
        success: function () {
          // 对弹层中的表单进行初始化渲染
          form.render();

          // 表单赋值
          // 读取 LocalStorage 中的数据
          const formData = JSON.parse(localStorage.getItem("configMenu"));
          const isExit = formData && Object.keys(formData).length > 0;
          let darkModel = localStorage.getItem("darkModel") || 0;
          const syncSysThemeMode =
            localStorage.getItem("syncSysThemeMode") || 0;
          darkModel = syncSysThemeMode && syncSysThemeMode != 0 ? 2 : darkModel;

          let posterGirl = sessionStorage.getItem("posterGirl") == 0 ? 0 : 1;
          posterGirl = localStorage.getItem("showLive2d") == 0 ? 2 : posterGirl;
          const live2dModel = localStorage.getItem("live2dModel");
          var formVal = null;
          if (formData && Object.keys(formData).length > 0) {
            formVal = form.val("config-menu-layer", {
              mouseHeart: formData.mouseHeart || 0,
              mouseTail: formData.mouseTail || 0,
              firework: formData.firework || 0,
              live2dModel: live2dModel || 0,
              live2d: posterGirl,
              theme: darkModel || 0,
            });
          } else {
            formVal = form.val("config-menu-layer", {
              mouseHeart: 0,
              mouseTail: 0,
              firework: 0,
              live2dModel: live2dModel || 0,
              live2d: posterGirl,
              theme: darkModel || 0,
            });
          }

          // 看板娘模型选择框处理
          if (formVal?.mouseHeart && formVal.mouseHeart == 1) {
            $("#firework-radio-on").prop("disabled", true);
          } else {
            $("#firework-radio-on").prop("disabled", false);
          }
          // 重新渲染
          form.render("select"); // 仅渲染 select 元素
          if (formVal?.firework && formVal.firework == 1) {
            $("#mouseHeart-radio-on").prop("disabled", true);
          } else {
            $("#mouseHeart-radio-on").prop("disabled", false);
          }

          if (formVal?.live2d && formVal.live2d == 1) {
            $("#live2dModelSelect").prop("disabled", false);
          } else {
            $("#live2dModelSelect").prop("disabled", true);
          }
          // 重新渲染
          form.render("radio"); // 仅渲染 radio 元素

          form.on("radio(live2d-radio-filter)", function (data) {
            var elem = data.elem; // 获得 radio 原始 DOM 对象
            var value = elem.value; // 获得 radio 值
            if (value == 1) {
              $("#live2dModelSelect").prop("disabled", false);
            } else {
              $("#live2dModelSelect").prop("disabled", true);
            }
            // 重新渲染
            form.render("select"); // 仅渲染 select 元素
          });

          form.on("radio(mouseHeart-radio)", function (data) {
            var elem = data.elem; // 获得 radio 原始 DOM 对象
            var value = elem.value; // 获得 radio 值
            if (value == 1) {
              $("#firework-radio-on").prop("disabled", true);
              $("#firework-radio-close").prop("checked", true);
            } else {
              $("#firework-radio-on").prop("disabled", false);
            }
            // 重新渲染
            form.render("radio"); // 仅渲染 radio 元素
          });

          form.on("radio(firework-radio)", function (data) {
            var elem = data.elem; // 获得 radio 原始 DOM 对象
            var value = elem.value; // 获得 radio 值
            if (value == 1) {
              $("#mouseHeart-radio-on").prop("disabled", true);
              $("#mouseHeart-radio-close").prop("checked", true);
            } else {
              $("#mouseHeart-radio-on").prop("disabled", false);
            }
            // 重新渲染
            form.render("radio"); // 仅渲染 radio 元素
          });

          // 表单提交事件
          form.on("submit(save-config)", function (data) {
            var field = data.field; // 获取表单字段值
            if (field) {
              localStorage.setItem("configMenu", JSON.stringify(field));
            }

            if (!isExit || formData.mouseHeart != field.mouseHeart) {
              if (field.mouseHeart == 1) {
                window?.ymcEventBus.emit("onMouseHeart");
              } else {
                window?.ymcEventBus.emit("removeMouseHeart");
              }
            }

            if (!isExit || formData.firework != field.firework) {
              if (field.firework == 1) {
                window?.ymcEventBus.emit("onFirework");
              } else {
                window?.ymcEventBus.emit("removeFirework");
              }
            }

            if (!isExit || formData.mouseTail != field.mouseTail) {
              if (field.mouseTail == 1) {
                window?.ymcEventBus.emit("onMouseTail");
              } else {
                window?.ymcEventBus.emit("removeMouseTail");
              }
            }
            if (!isExit || formData.live2d != field.live2d) {
              if (field.live2d == 1) {
                window?.ymcEventBus.emit("onLive2d", field.live2dModel);
              } else if (field.live2d == 0) {
                window?.ymcEventBus.emit("removeLive2d");
              } else if (field.live2d == 2) {
                window?.ymcEventBus.emit("stopLive2d");
              }
            }

            if (
              !isExit ||
              formData.theme != field.theme ||
              (field.theme == 2 && syncSysThemeMode == 1)
            ) {
              if (field.theme == 2) {
                // 跟随系统
                window?.ymcEventBus.emit("syncSysTheme");
              } else {
                window?.ymcEventBus.emit("changeTheme", field.theme);
              }
            }
            if (
              field.live2d == 1 &&
              formData.live2dModel != field.live2dModel &&
              formData.live2d == 1
            ) {
              window?.ymcEventBus.emit("changeLive2dModel", field.live2dModel);
            }

            layer.msg(
              "保存成功",
              {
                icon: 1,
                time: 2000, // 设置 2 秒后自动关闭
              },
              function () {
                // 关闭外部弹出框
                layer.close(layerIndex);
              }
            );
            // layer.alert(
            //   "保存成功",
            //   {
            //     title: "提示",
            //   },
            //   function (index) {
            //     // do something
            //     // …
            //     layer.close(index);
            //     // 关闭外部弹出框
            //     layer.close(layerIndex);
            //   }
            // );
            isFloatBtnDragging = 0;
            return false; // 阻止默认 form 跳转
          });
        },
        end: function () {
          isFloatBtnDragging = 0;
        },
      });
    };
  }

  initFloatBtnEvent() {
    const floatBtn = document.getElementById(this.options.containerId);
    if (!floatBtn) {
      return;
    }

    floatBtn.addEventListener("mousedown", onMouseDown);
    function onMouseDown(e) {
      var location = {
        x: e.clientX - this.offsetLeft,
        y: e.clientY - this.offsetTop,
      };
      isFloatBtnDragging = 0;
      function onMouseMove(e) {
        e.preventDefault();
        if (isFloatBtnDragging != 2) {
          isFloatBtnDragging = 1;
          let left_tmp = e.clientX - location.x;
          if (left_tmp < 0) left_tmp = 0;
          else if (left_tmp >= window.innerWidth - floatBtn.offsetWidth)
            left_tmp = window.innerWidth - floatBtn.offsetWidth;
          floatBtn.style.left = left_tmp + "px";

          floatBtn.style.top = e.clientY - location.y + "px";
          floatBtn.style.bottom = "auto";
        }
      }

      function onMouseUp(e) {
        if (isFloatBtnDragging == 1) {
          // 自动吸附到窗口边缘
          if (
            floatBtn.offsetTop + floatBtn.clientHeight >=
            window.innerHeight
          ) {
            floatBtn.style.top =
              window.innerHeight - floatBtn.clientHeight + "px";
          } else if (floatBtn.offsetTop <= 20) {
            floatBtn.style.top = 10 + "px";
          } else {
            floatBtn.style.top = floatBtn.offsetTop + "px";
          }
        }
        floatBtn.removeEventListener("mousemove", onMouseMove);
        floatBtn.removeEventListener("mouseup", onMouseUp);
      }

      floatBtn.addEventListener("mousemove", onMouseMove);
      floatBtn.addEventListener("mouseup", onMouseUp);
    }

    floatBtn.addEventListener("mouseover", function () {
      floatBtn.style.opacity = 1;
    });

    floatBtn.addEventListener("mouseout", function () {
      floatBtn.style.opacity = 0.75;
    });

    window.addEventListener("resize", function () {
      // 自动吸附到窗口边缘
      floatBtn.style.left = "5px";
      floatBtn.style.bottom = "40px";
    });
  }
}
