// 页面初始化时执行  鼠标拖动尾随特效
function fairyDustCursor() {
  class Throttle {
    constructor(rate, capacity, fn) {
      this.rate = rate; // 最大处理速率 ms
      this.capacity = capacity; // 桶的容量
      this.water = 0; // 当前水量
      this.lastTime = Date.now(); // 上一次处理时间
      this.timer = null; // 桶处理定时器
      this.fn = fn;
    }

    /**
     * 处理请求
     */
    handle() {
      if (this.water < this.capacity) {
        this.water += 1;
      } else {
        // 如果桶已满，丢弃请求
        return;
      }
      const now = Date.now();
      if (now - this.lastTime >= this.rate) {
        this.lastTime = now;
        clearTimeout(this.timer);
        this.doHandle();
      } else {
        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.lastTime = Date.now();
            this.doHandle();
          }, this.rate - (now - this.lastTime));
        }
      }
    }

    /**
     * 执行实际请求处理
     */
    doHandle() {
      if (this.water > 0) {
        this.fn();
        this.water -= 1;
        this.doHandle();
      } else {
        this.timer = null;
      }
    }
  }

  const possibleColors = ["#D61C59", "#E7D84B", "#1B8798"];
  let width = window.innerWidth;
  let height = window.innerHeight;
  const cursor = { x: width / 2, y: width / 2 };
  const particles = [];
  const throttle = new Throttle(120, 3, addParticleWithRate);
  let isMouseMoving = false;

  function addCursorContainer() {
    const body = document.querySelector("body");
    const span = document.createElement("span");
    span.setAttribute("class", "js-cursor-container");
    span.id = "js-cursor-container";
    body.appendChild(span);
  }

  function init() {
    addCursorContainer();
    bindEvents();
    loop();

    window?.ymcEventBus.once("removeMouseTail", function () {
      // 恢复原始样式
      const cursorContainer = document.getElementById("js-cursor-container");
      if (cursorContainer) {
        cursorContainer.parentNode.removeChild(cursorContainer);
      } // 解绑事件
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("blur", stopAnimation, false);
      window.removeEventListener("mouseout", stopAnimation, false);
    });
  }

  // Bind events that are needed
  function bindEvents() {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("blur", stopAnimation, false);
    window.addEventListener("mouseout", stopAnimation, false);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function stopAnimation() {
    isMouseMoving = false;
  }

  function onMouseMove(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    if (!isMouseMoving) {
      isMouseMoving = true;
    }
    throttle.handle();
  }

  function addParticleWithRate() {
    if (isMouseMoving) {
      addParticle(
        cursor.x,
        cursor.y,
        possibleColors[Math.floor(Math.random() * possibleColors.length)]
      );
    }
  }

  function addParticle(x, y, color) {
    var particle = new Particle();
    particle.init(x, y, color);
    particles.push(particle);
  }

  function updateParticles() {
    particles.forEach((particle, i) => {
      particle.update();
      // if (particle.lifeSpan < 0) {
      //     particle.die();
      //     particles.splice(i, 1);
      // }
    });
  }

  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Particles
   */

  function Particle() {
    this.character = "*";
    this.lifeSpan = randomIntFromInterval(10, 220); //ms
    this.initialStyles = {
      position: "fixed",
      display: "inline-block",
      top: "0px",
      left: "0px",
      pointerEvents: "none",
      "touch-action": "none",
      "z-index": "10000000",
      fontSize: "25px",
      "will-change": "transform",
    };

    // Init, and set properties
    this.init = function (x, y, color) {
      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1,
      };

      this.position = { x: x + 10, y: y + 10 };
      this.initialStyles.color = color;

      this.element = document.createElement("span");
      this.element.innerHTML = this.character;
      applyProperties(this.element, this.initialStyles);
      this.update();
      let tagTmp = document.getElementById("js-cursor-container");
      if (tagTmp) {
        tagTmp?.appendChild(this.element);
        setTimeout(() => this.die(this.element), 3200);
      }
    };

    this.update = function () {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;
      this.element.style.transform =
        "translate3d(" +
        this.position.x +
        "px," +
        this.position.y +
        "px, 0) scale(" +
        this.lifeSpan / 120 +
        ")";
    };

    // this.die = function () {
    //     this.element.parentNode.removeChild(this.element);
    // };
    this.die = function (ele) {
      ele.parentNode.removeChild(ele);
    };
  }

  /**
   * Utils
   */

  // Applies css `properties` to an element.
  function applyProperties(target, properties) {
    for (var key in properties) {
      target.style[key] = properties[key];
    }
  }

  if (!("ontouchstart" in window || navigator.msMaxTouchPoints)) init();
}

// 网页鼠标点击特效（爱心）
function mouseHeartInit() {
  var e = window;
  var t = document;
  var requestId = null;
  function r() {
    for (var e = 0; e < s.length; e++)
      s[e].alpha <= 0
        ? (t.body.removeChild(s[e].el), s.splice(e, 1))
        : ((s[e].y -= 1),
          (s[e].scale += 0.004),
          (s[e].alpha -= 0.013),
          (s[e].el.style.cssText =
            "left:" +
            s[e].x +
            "px;top:" +
            s[e].y +
            "px;opacity:" +
            s[e].alpha +
            ";transform:scale(" +
            s[e].scale +
            "," +
            s[e].scale +
            ") rotate(45deg);background:" +
            s[e].color +
            ";z-index:99999"));
    requestId = requestAnimationFrame(r);
  }

  function n() {
    e.addEventListener("mousedown", downHeart);
    e.addEventListener("touchstart", touchstart, false);
  }

  function downHeart(e) {
    if (e.detail > 1) {
      // 排除双击
      return;
    }
    var t = "function" == typeof e.onclick && e.onclick;
    t && t(), o(e);
  }

  function touchstart(e) {
    e.preventDefault(); // 阻止默认行为
    var time = new Date().getTime();
    if (time - lastTime < 500) {
      // 间隔小于 500ms 判定为双击
      return;
    }
    lastTime = time;
    o(e.touches[0]);
  }

  function removemouseHeart() {
    window.removeEventListener("touchstart", touchstart, false);
    window.removeEventListener("mousedown", downHeart);
    setTimeout(function () {
      cancelAnimationFrame(requestId);
      let elements = document.querySelectorAll("#mouseHeart");
      elements.forEach((el) => {
        el.remove();
      });
    }, 1000);
  }

  function o(e) {
    var a = t.createElement("div");
    a.id = "mouseHeart";
    (a.className = "heart"),
      s.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: c(),
      }),
      t.body.appendChild(a);
  }

  function i(e) {
    var a = t.createElement("style");
    (a.type = "text/css"),
      a.appendChild(t.createTextNode(e)),
      t.getElementsByTagName("head")[0].appendChild(a);
  }

  function c() {
    return (
      "rgb(" +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      ")"
    );
  }
  var s = [],
    lastTime = 0;
  (e.requestAnimationFrame =
    e.requestAnimationFrame ||
    e.webkitRequestAnimationFrame ||
    e.mozRequestAnimationFrame ||
    e.oRequestAnimationFrame ||
    e.msRequestAnimationFrame ||
    function (e) {
      setTimeout(e, 1e3 / 60);
    }),
    i(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    ),
    n(),
    r();

  window?.ymcEventBus.once("removeMouseHeart", function () {
    removemouseHeart();
  });
}

/**
 * 鼠标点击烟花特效
 */
function firework() {
  const canvasEl = document.createElement("canvas");
  canvasEl.id = "firework";
  canvasEl.style.cssText =
    "position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";
  document.body.appendChild(canvasEl);
  const ctx = canvasEl.getContext("2d");
  const numberOfParticules = 30;
  let pointerX = 0;
  let pointerY = 0;
  const colors = [
    "rgba(255,182,185,.9)",
    "rgba(250,227,217,.9)",
    "rgba(187,222,214,.9)",
    "rgba(138,198,209,.9)",
  ];

  function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + "px";
    canvasEl.style.height = window.innerHeight + "px";
    canvasEl.getContext("2d").scale(2, 2);
  }
  function updateCoords(e) {
    pointerX = e.clientX || (e.touches && e.touches[0].clientX);
    pointerY = e.clientY || (e.touches && e.touches[0].clientY);
  }
  function setParticuleDirection(p) {
    const angle = (anime.random(0, 360) * Math.PI) / 180;
    const value = anime.random(50, 180);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    };
  }
  function createParticule(x, y) {
    const p = {
      x,
      y,
      color: undefined,
      radius: undefined,
      endPos: undefined,
      draw() {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      },
    };
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(16, 32);
    p.endPos = setParticuleDirection(p);
    return p;
  }
  function createCircle(x, y) {
    const p = {
      x,
      y,
      color: "#FFF",
      radius: 0.1,
      endPos: undefined,
      alpha: 0.5,
      lineWidth: 6,
      draw() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      },
    };
    return p;
  }
  function renderParticule(targets) {
    for (const target of targets) {
      target.draw();
    }
  }
  function animateParticules(x, y) {
    const circle = createCircle(x, y);
    const particules = [];
    for (let i = 0; i < numberOfParticules; i++) {
      particules.push(createParticule(x, y));
    }
    anime()
      .timeline()
      .add({
        targets: particules,
        duration: anime.random(1200, 1800),
        easing: "easeOutExpo",
        update: renderParticule,
        x: (p) => p.endPos.x,
        y: (p) => p.endPos.y,
        radius: 0.1,
      })
      .add({
        targets: circle,
        duration: anime.random(1200, 1800),
        easing: "easeOutExpo",
        update: renderParticule,
        radius: anime.random(80, 160),
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: "linear",
          duration: anime.random(600, 800),
        },
      })
      .play();
  }
  const render = anime({
    duration: Infinity,
    update() {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    },
  });
  const hasAncestor = (node, name) => {
    name = name.toUpperCase();
    do {
      if (node === null || node === undefined) break;
      if (node.nodeName === name) return true;
    } while ((node = node.parentNode) !== null);
    return false;
  };

  const clickFirework = (e) => {
    if (hasAncestor(e.target, "a")) {
      return;
    }
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  };
  document.addEventListener("click", clickFirework, false);
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);
  /**
   *
   */
  function removemouseFirework() {
    document.body.removeChild(canvasEl);
    window.removeEventListener("resize", setCanvasSize, false);
    document.removeEventListener("click", clickFirework, false);
  }

  window?.ymcEventBus.once("removeFirework", function () {
    removemouseFirework();
  });
}


