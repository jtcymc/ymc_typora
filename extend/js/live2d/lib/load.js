const model_url_prefix = `${cdn_url}/js/live2d/model/`;
const initConfig = {
  mode: "draggable",
  hidden: true,
  content: {
    link: [],
    welcome: ["Hi!"],
    touch: "",
    skin: ["诶，想看看其他团员吗？", "替换后入场文本"],
    custom: [
      { selector: ".comment-form", text: "Content Tooltip" },
      { selector: ".home-social a:last-child", text: "Blog Tooltip" },
      { selector: ".list .postname", type: "read" },
      { selector: ".post-content a, .page-content a, .post a", type: "link" },
    ],
  },
  night: "toggleNightMode()",
  model: [
    model_url_prefix + "Diana/Diana.model3.json",
    model_url_prefix + "Ava/Ava.model3.json",
    model_url_prefix + "小云/小云.model3.json",
  ],
  tips: true,
  onModelLoad: onModelLoad,
  contentStatus: false,
};

var hitokotoIntervalID = null;

var countDown = 0;

function showKeyDownInfo(timeout) {
  const keyDownList = [
    `<tr>
  <td>Ctrl +  alt + shift + Q</td>
  <td>将选中内容添加&#x60;</td>
</tr>`,
    `<tr>
  <td>Ctrl +  alt + shift + T</td>
  <td>选中内容转为tag</td>
</tr>`,
    `<tr>
  <td>Ctrl + alt + shift + R</td>
  <td>选中内容添加font</td>
</tr>`,
    `<tr>
  <td>Ctrl + alt + shift + B</td>
  <td>选中内容添加font blue</td>
</tr>`,
    ` <tr>
  <td>Ctrl + alt + shift + G</td>
  <td>选中内容添加font Green</td>
</tr>`,
    `<tr>
  <td>Ctrl + alt + shift + W</td>
  <td>选中内容添加font rainbow</td>
</tr> `,
  ];

  const randomIndex = Math.floor(Math.random() * keyDownList.length);
  const keyDownStr = "快捷键~:" + keyDownList[randomIndex] + "";
  pio_reference.modules.render(keyDownStr, timeout);
}

function loadDianaModel() {
  if (hitokotoIntervalID) {
    clearInterval(hitokotoIntervalID);
  }
  pio_reference = new Paul_Pio(initConfig);

  pio_alignment = "right";

  // Then apply style
  pio_refresh_style();
  let initTimeout = Math.floor(Math.random() * (60000 - 12000 + 1) + 12000);
  hitokotoIntervalID = setInterval(function () {
    fetch("https://v1.hitokoto.cn/?c=d&c=e&c=f&c=g&c=j&c=k")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var hitokoto = data.hitokoto;
        var from = data.from;
        var from_who = data.from_who;
        let text = `"${hitokoto} \n\t   "`;
        let flag1 = false;
        if (from) {
          text += ` ——《${from}》`;
          flag1 = true;
        }
        if (from_who) {
          text = flag1 ? text + ` by ${from_who}` : text + ` —— by ${from_who}`;
        }
        let displayTime = Math.floor(
          Math.random() * (15000 - 10000 + 1) + 10000
        );
        pio_reference.modules.render(text, displayTime);
        if (countDown <= 1000) {
          // 在 3 秒后执行一个函数
          setTimeout(function () {
            showKeyDownInfo(5000);
            countDown = countDown + 1;
          }, displayTime + 10);
        }
      });
  }, initTimeout);
}

function onModelLoad(model) {
  const container = document.getElementById("pio-container");
  const canvas = document.getElementById("pio");
  const pio_action_tag = document.getElementById("pio-action");
  const modelNmae = model.internalModel.settings.name;
  const coreModel = model.internalModel.coreModel;
  const motionManager = model.internalModel.motionManager;

  if (pio_action_tag) {
    // 2023/05/29 避免切换模型后 按钮偏移的问题
    pio_action_tag.style.removeProperty("left");
    pio_action_tag.style.removeProperty("right");
  }
  let touchList = [
    // {
    //   text: "点击展示文本1",
    //   motion: "Idle",
    // },
    // {
    //   text: "点击展示文本2",
    //   motion: "Idle",
    // },
  ];

  function playAction(action) {
    action?.text && pio_reference.modules.render(action?.text);
    action.motion && pio_reference.model.motion(action.motion);

    if (action.from && action.to) {
      Object.keys(action.from).forEach((id) => {
        const hidePartIndex = coreModel._partIds.indexOf(id);
        if (typeof TweenLite !== "undefined") {
          TweenLite.to(coreModel._partOpacities, 0.6, {
            [hidePartIndex]: action.from[id],
          });
        }
        // coreModel._partOpacities[hidePartIndex] = action.from[id]
      });

      motionManager.once("motionFinish", (data) => {
        Object.keys(action.to).forEach((id) => {
          const hidePartIndex = coreModel._partIds.indexOf(id);
          if (typeof TweenLite !== "undefined") {
            TweenLite.to(coreModel._partOpacities, 0.6, {
              [hidePartIndex]: action.to[id],
            });
          }

          // coreModel._partOpacities[hidePartIndex] = action.to[id]
        });
      });
    }
  }

  canvas.onclick = function () {
    if (motionManager.state.currentGroup !== "Idle") return;
    if (!touchList || touchList.length === 0) {
      const keys = Object.keys(motionManager.definitions);
      touchList = [];
      if (keys.length > 0) {
        keys.map((key) => {
          touchList.push({
            motion: `${key}`,
          });
        });
      }
    }

    const action = pio_reference.modules.rand(touchList);
    playAction(action);
  };
  canvas.style.cssText = "height: 240px !important";
  if (modelNmae === "Diana") {
    container.dataset.model = "Diana";
    initConfig.content.skin[1] = ["我是吃货担当 嘉然 Diana~"];
    playAction({ motion: "Tap抱阿草-左手" });

    touchList = [
      {
        text: "嘉心糖屁用没有",
        motion: "Tap生气 -领结",
      },
      {
        text: "有人急了，但我不说是谁~",
        motion: "Tap= =  左蝴蝶结",
      },
      {
        text: "呜呜...呜呜呜....",
        motion: "Tap哭 -眼角",
      },
      {
        text: "想然然了没有呀~",
        motion: "Tap害羞-中间刘海",
      },
      {
        text: "阿草好软呀~",
        motion: "Tap抱阿草-左手",
      },
      {
        text: "不要再戳啦！好痒！",
        motion: "Tap摇头- 身体",
      },
      {
        text: "嗷呜~~~",
        motion: "Tap耳朵-发卡",
      },
      {
        text: "zzZ。。。",
        motion: "Leave",
      },
      {
        text: "哇！好吃的！",
        motion: "Tap右头发",
      },
    ];
  } else if (modelNmae === "Ava") {
    container.dataset.model = "Ava";
    initConfig.content.skin[1] = ["我是<s>拉胯</s>Gamer担当 向晚 AvA~"];
    playAction({
      motion: "Tap左眼",
      from: {
        Part15: 1,
      },
      to: {
        Part15: 0,
      },
    });

    touchList = [
      {
        text: "水母 水母~ 只是普通的生物",
        motion: "Tap右手",
      },
      {
        text: "可爱的鸽子鸽子~我喜欢你~",
        motion: "Tap胸口项链",
        from: {
          Part12: 1,
        },
        to: {
          Part12: 0,
        },
      },
      {
        text: "好...好兄弟之间喜欢很正常啦",
        motion: "Tap中间刘海",
        from: {
          Part12: 1,
        },
        to: {
          Part12: 0,
        },
      },
      {
        text: "啊啊啊！怎么推流辣",
        motion: "Tap右眼",
        from: {
          Part16: 1,
        },
        to: {
          Part16: 0,
        },
      },
      {
        text: "你怎么老摸我，我的身体是不是可有魅力",
        motion: "Tap嘴",
      },
      {
        text: "AAAAAAAAAAvvvvAAA 向晚！",
        motion: "Tap左眼",
        from: {
          Part15: 1,
        },
        to: {
          Part15: 0,
        },
      },
    ];
    canvas.width = model.width * 1.2;
    const hideParts = [
      "Part5", // 晕
      "neko", // 喵喵拳
      "game", // 左手游戏手柄
      "Part15", // 墨镜
      "Part21", // 右手小臂
      "Part22", // 左手垂下
      "Part", // 双手抱拳
      "Part16", // 惊讶特效
      "Part12", // 小心心
    ];
    const hidePartsIndex = hideParts.map((id) =>
      coreModel._partIds.indexOf(id)
    );
    hidePartsIndex.forEach((idx) => {
      coreModel._partOpacities[idx] = 0;
    });
  } else if (modelNmae === "lafei_4" || modelNmae === "drawing1") {
    container.dataset.model = "lafei_4";
    canvas.style.cssText = "height: 300px !important";
  } else {
    canvas.style.cssText = "height: 400px !important";
  }
}

var pio_reference;
// window.onload = loadDianaModel
