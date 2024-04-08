import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lp/",
  ignoreDeadLinks: true,
  title: "芦笋录屏",
  description:
    "芦笋录屏，极简视频录制工具。同时录制人像和屏幕，美颜、虚拟头像等让视频信息更生动；支持视频一键分享，在线剪辑等。",
  lang: "zh-Hans",
  head: [
    ["link", { rel: "icon", href: "/lp/favicon.ico" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?592ba55993f3df6afcc69f8088276562";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: [2, 3],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    nav: [
      { text: "芦笋提词器", link: "https://tcq.lusun.com" },
      { text: "关于我们", link: "https://lusun.com/about" },
    ],
    sidebar: [
      {
        text: "基础教程",
        collapsed: false,
        items: [
          { text: "电脑端芦笋录屏攻略", link: "/basic/pc" },
          { text: "手机端芦笋录屏攻略", link: "/basic/phone" },
          { text: "🌟会员特权", link: "/basic/vip" },
        ],
      },
      {
        text: "进阶教程",
        collapsed: false,
        items: [
          { text: "用芦笋制作“基础教育精品课”", link: "/advanced/jingpinke" },
          { text: "添加视频封面", link: "/advanced/cover" },
          { text: "两种人像抠图方式", link: "/advanced/koutu" },
        ],
      },
      { text: "常见问题", link: "/faq" },
      { text: "联系我们", link: "/contact" },
    ],
  },
});
