# 一级标题

[TOC]

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

标题样式来自[drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme)[^1]



**提示块：**

> 提示块标签
>
> > 嵌套提示块

**其他型号提示块：**

> <span alt='waring'>警告</span>

> <span alt='alert'>提醒</span>

> <span alt='explain'>说明</span>

> <span alt='idea'>想法</span>

> <span alt='other'>其他</span>

**列表：**

- 无序列表1

- 无序列表2

1. 有序列表1[^2]
2. 有序列表2

==文本高亮==，__加粗__，*斜体*，==***斜体高亮加粗***==，~~删除线~~，<u>下划线</u>。`<font>`标签：<font>红色小标签</font>，可以通过设置`background-color`属性控制背景色，如：<font style="background-color:#8bc34a">绿色小标签</font>,<font title="blue">蓝色小标签</font>、<font title="yellow">黄色小标签</font>、<font title="gray">灰色小标签</font>。一些强调型格式：<span alt="underline">下划线</span>、<span alt="emp">着重号</span>、<span alt="wavy">波浪线</span>。



Obsidian：标签支持，<font title="yellow">导出文件自动隐藏</font>

<span alt='tag'>#标签</span>

> <span alt='explain'>ps:</span>
>
> 搭配`copyQ `实现自动拼接相关样式，<font>好用</font>
>
> ```ini
> [Command]
> Name=Typora-\x6807\x7b7e
> Command="
>     copyq:
>      /*window*/ copy()
>     sleep(1);
>     var text = str(clipboard())
> 
>     sleep(1);
>     var tagStr = \"<span alt='tag'>#\"+text+\"</span>\"
>     copy(mimeText,tagStr,mimeHtml,tagStr);
>     afterMilliseconds(1,paste());
>     "
> IsGlobalShortcut=true
> Icon=\xf15b
> GlobalShortcut=ctrl+alt+shift+t
> ```
>
> 



表格： <font title="gray">支持表格自动编号</font>

| 表头1 | 表头2 | 表头3 |
| :---- | :---: | ----: |
| YY    | 花花  |  萌兰 |
|       |       |       |
|       |       |       |
|       |       |       |

图片：<font title="blue">图片自动编号及图释</font>

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/shaw-light.png" style="zoom: 67%;" alt="图片自动编号及图释" />

<img src="https://cdn.jsdelivr.net/gh/jtcymc/ymc_typora@0.0.4/docs/imgs/shaw-dark.png" style="zoom: 67%;" alt="黑夜主题" />



折叠标签[^2]

<details>
    <summary>折叠标签</summary>
    青青子衿，悠悠我心
</details>



时间轴（Volantis）：[^2]

<div alt="timeline">
    <div alt="timenode">
        <div alt="meta">2022.9 ~ 2023.6 <a href="#">Xxx</a></div>
        <div alt="body">
            <font>一个人如果走在了时代的前面，他身后的时代会把他抛弃。</font>
        </div>
    </div>
    <div alt="timenode">
        <div alt="meta">19xx.xx ~ 2xxx.xx <a href="#">Axxx</a></div>
        <div alt="body">
            <span alt='tag'>从来处来，望尽岁月如歌，莫忘来时之路。</span>
        </div>
    </div>
</div>



任务列表：

- [ ] 未完成任务1
- [ ] 未完成任务2
- [x] 已完成任务1
- [x] 已完成任务2

[^1]:[drake-juejin](https://github.com/liangjingkanji/DrakeTyporaTheme)
[^2]:[muggledy/typora-dyzj-theme: Typora主题css样式 (github.com)](https://github.com/muggledy/typora-dyzj-theme/tree/master)

