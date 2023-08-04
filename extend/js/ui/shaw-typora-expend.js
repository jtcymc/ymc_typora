/**
 * 使用JS实现 给所有 <p><img/></p> 中的p添加alt属性，p的alt值来源 img的alt
 * 为了实现导出的图解释
 */

function ymc_img_alt_to_p_label() {
  // 获取所有的 <p><img/></p> 元素
  const paragraphs = document.querySelectorAll("p > img");
  paragraphs.forEach((img) => {
    const parent = img.parentElement;
    const alt = img.getAttribute("alt");
    const pAlt = parent.getAttribute("alt");
    if (parent && alt && !pAlt) {
      if (alt !== "img" && alt !== "image") {
        // 添加 alt 属性到父元素 p 上
        parent.setAttribute("alt", ". " + alt);
      }
    }
  });
}

function keyboradInput(dom, mychars) {
  dom.setAttribute("contenteditable", true);
  const inputEvent = new InputEvent("input", {
    inputType: "insertText",
    data: mychars,
  });
  dom.innerText = ""; // 先清空内容
  dom.dispatchEvent(inputEvent); // 触发输入事件
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
  }
}

function ymc_typora_keydown() {
  document.addEventListener("keydown", function (event) {
    // 按下 Ctrl + ` 键
    if (event.ctrlKey && event.key === "`") {
      const selection = window.getSelection(); // 获取选中的文本
      // 给选中文本添加 code 标签
      const codeWrapper = document.createElement("span");
      codeWrapper.classList.add("md-pair-s");
      codeWrapper.classList.add("md-inline");
      codeWrapper.setAttribute("spellcheck", "false");
      codeWrapper.innerHTML = `<span class="md-meta md-before">\`</span><code>${selection
        .toString()
        .trim()}</code><span class="md-meta md-after">\`</span>`;
      selectionFuc(event, selection, codeWrapper);
    }
    // 按下 Ctrl +shift +  T 键
    else if (
      event.ctrlKey &&
      event.shiftKey &&
      (event.key === "T" || event.key === "t")
    ) {
      const selection = window.getSelection(); // 获取选中的文本
      const range = selection.getRangeAt(0); // 获取包含选中文本的范围对象
      const parentNode = range.commonAncestorContainer.parentNode; // 获取包含选中文本的父节点
      // 给选中文本添加 tag 标签

      const chars = `<span alt='tag' >#${selection.toString().trim()}</span`;
      keyboradInput(parentNode, chars);

      // const codeWrapper = document.createElement("span");
      // codeWrapper.setAttribute("alt", "tag");
      // codeWrapper.innerHTML = `#${selection.toString().trim()}`;

      // selectionFuc(event, selection, codeWrapper);
    }
    // 按下 Ctrl +shift +  R 键
    else if (
      event.ctrlKey &&
      event.shiftKey &&
      event.altKey &&
      (event.key === "R" || event.key === "r")
    ) {
      const selection = window.getSelection(); // 获取选中的文本
      // 给选中文本添加 tag 标签
      const codeWrapper = document.createElement("font");
      codeWrapper.innerHTML = `${selection.toString().trim()}`;

      selectionFuc(event, selection, codeWrapper);
    }
    // 按下 Ctrl +shift +  B 键
    else if (
      event.ctrlKey &&
      event.shiftKey &&
      event.altKey &&
      (event.key === "B" || event.key === "b")
    ) {
      const selection = window.getSelection(); // 获取选中的文本
      // 给选中文本添加 tag 标签
      const codeWrapper = document.createElement("font");
      codeWrapper.setAttribute("title", "blue");
      codeWrapper.innerHTML = `${selection.toString().trim()}`;

      selectionFuc(event, selection, codeWrapper);
    }

    // 按下 Ctrl +shift +  G 键
    else if (
      event.ctrlKey &&
      event.shiftKey &&
      event.altKey &&
      (event.key === "G" || event.key === "g")
    ) {
      const selection = window.getSelection(); // 获取选中的文本
      // 给选中文本添加 tag 标签
      const codeWrapper = document.createElement("font");
      codeWrapper.setAttribute("title", "green");
      codeWrapper.innerHTML = `${selection.toString().trim()}`;

      selectionFuc(event, selection, codeWrapper);
    }
    // 按下 Ctrl +shift +  W 键
    else if (
      event.ctrlKey &&
      event.shiftKey &&
      event.altKey &&
      (event.key === "W" || event.key === "w")
    ) {
      const selection = window.getSelection(); // 获取选中的文本
      // 给选中文本添加 tag 标签
      const codeWrapper = document.createElement("span");
      codeWrapper.setAttribute("alt", "rainbow");
      codeWrapper.innerHTML = `${selection.toString().trim()}`;

      selectionFuc(event, selection, codeWrapper);
    }
  });

  function selectionFuc(event, selection, newNode) {
    event.preventDefault(); // 阻止默认事件，避免打开浏览器控制台
    const range = selection.getRangeAt(0); // 获取选区范围
    range.deleteContents(); // 删除原有选中文本
    range.insertNode(newNode); // 插入新的 code 标签

    // 重新设置选区范围
    const newRange = document.createRange();
    if (
      newNode?.firstChild &&
      newNode?.lastChild &&
      newNode?.firstChild?.nextSibling instanceof Node &&
      newNode?.lastChild?.previousSibling instanceof Node
    ) {
      newRange.setStart(newNode.firstChild.nextSibling, 0);
      newRange.setEnd(
        newNode.lastChild.previousSibling,
        newNode.lastChild.textContent.length
      );
    }

    selection.removeAllRanges();
    selection.addRange(newRange);
  }
}

window.addEventListener("load", function () {
  ymc_img_alt_to_p_label();
  ymc_init_bottom();
  //ymc_typora_keydown();
});
