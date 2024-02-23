(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{512:function(t,s,e){"use strict";e.r(s);var n=e(17),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"文档指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档指南"}},[t._v("#")]),t._v(" 文档指南")]),t._v(" "),s("h2",{attrs:{id:"网站介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站介绍"}},[t._v("#")]),t._v(" 网站介绍")]),t._v(" "),s("p",[s("font",{staticStyle:{color:"#FF00BB"}},[t._v("介绍由chatGpt3.5生成")])],1),t._v(" "),s("p",[s("strong",[t._v("数字花园")]),t._v("：记录 "),s("strong",[t._v("Element-UI 和 Echarts")]),t._v(" 的前端开发案例")]),t._v(" "),s("p",[t._v("欢迎来到数字花园！这是一个专注于记录 Element-UI 和 Echarts 的前端开发案例的网站，旨在为前端开发程序员提供一个集中、实用的学习平台。")]),t._v(" "),s("p",[t._v("我们的网站主要关注两个主题：Element-UI 和 Echarts。Element-UI 是一个流行的 Vue.js 组件库，提供丰富的 UI 组件和工具，而 Echarts 是一个强大的数据可视化库，可以帮助开发者创建令人惊叹的图表和图形。")]),t._v(" "),s("p",[t._v("在数字花园，你可以找到大量的使用案例和教程，以帮助你深入了解如何在你的项目中使用 Element-UI 和 Echarts。我们的案例研究将涵盖各种常见的功能和应用场景，从基本的表单和布局到复杂的数据可视化和交互操作。")]),t._v(" "),s("p",[t._v("为了让你更好地理解和掌握这些技术，我们提供了实时交互的代码预览功能。你可以直接复制，调试，并实时查看结果(一些console.log输出需要F12打开控制台)。这将帮助你快速测试和调试你的代码，以确保你理解了每个案例的实现原理和实现效果。")]),t._v(" "),s("p",[t._v("我们的网站使用了 VuePress 来搭建，这意味着我们支持 Markdown 语法，使得撰写和维护文档变得非常简单和高效。你可以轻松地创建和编辑教程和案例研究，使用 Markdown 的强大功能来展示代码块、标题、链接和图片。")]),t._v(" "),s("p",[t._v("对于部署，我们使用了 VuePress 提供的默认方式。这意味着我们可以轻松构建并部署网站，让你可以快速访问我们的内容。")]),t._v(" "),s("p",[t._v("数字花园是一个充满活力的社区，我们欢迎你的加入！你可以从我们的案例中获取灵感，学习最佳实践，并与其他开发者分享你的经验。我们也提供丰富的文档和支持资源，帮助你更好地使用 Element-UI 和 Echarts。")]),t._v(" "),s("p",[t._v("立即访问数字花园，探索 Element-UI 和 Echarts 的奇妙世界！让我们一起开拓前端开发的新境界吧！")]),t._v(" "),s("h2",{attrs:{id:"技术栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),s("p",[s("font",{attrs:{color:"#4c9feb",size:""}},[t._v("该文档基于"),s("strong",[t._v("VuePress v1.x")]),t._v("开发，搭配"),s("strong",[t._v("Element-ui")]),t._v("框架，主要记载关于适配vue v2.x的Element-ui框架和Echarts的解决方案")])],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("前提条件")]),t._v(" "),s("p",[s("strong",[t._v("VuePress v1.x")]),t._v(" 需要 "),s("strong",[t._v("Node.js")]),t._v(" (opens new window)>= 8.6 才能正常运行")])]),t._v(" "),s("h2",{attrs:{id:"文件目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件目录结构"}},[t._v("#")]),t._v(" 文件目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   │   ├── images(非首页静态资源存放)\n│   │   │   ├── index(首页静态资源存放)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.css(重置或设置首页样式)\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的:配置文件)\n│   │   ├── enhanceApp.js (可选的:应用级别的配置)\n│   │   ├── components (组件库)\n│   │   │   ├── Element-fun(功能方案库)\n│   │   │   ├── Element-sty(样式模板库)\n│   │   │   └── Echarts(echarts案例)\n│   │ \n│   ├── README.md(首页)\n│   ├── guide\n│   │   └── README.md(文档指南)\n│   └── config.md\n│\n│   ├── .deploy (发布脚本)\n└── package.json\n")])])]),s("h2",{attrs:{id:"特别补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特别补充"}},[t._v("#")]),t._v(" 特别补充")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("笔者网上查阅资料后发现适用于"),s("strong",[t._v("vue 2x")]),t._v("的"),s("strong",[t._v("Element-ui")]),t._v("只支持在"),s("strong",[t._v("VuePress v1.x")]),t._v("中使用,"),s("strong",[t._v("VuePress v2.x")]),t._v("只支持"),s("strong",[t._v("Element-Plus")]),t._v("，由于部分案例代码过长，为了便于案例展示采用了"),s("a",{attrs:{href:"https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo-container"),s("OutboundLink")],1),t._v("插件的代码块折叠功能。而该插件会导致一些兼容性问题。\n较为明显的问题体现在：")]),t._v(" "),s("ol",[s("li",[t._v("不支持import语法")]),t._v(" "),s("li",[t._v("不能识别style 的 scoped")])]),t._v(" "),s("p",[t._v("为了在此项目中能正常使用代码块插件和支持语法兼容，一些原本在各个官方开发文档中表明的import方法改为使用require代替，为避免误导特此说明。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);