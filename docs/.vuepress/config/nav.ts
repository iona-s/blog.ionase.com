// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "编程相关",
    items: [
      {
        text: "Python",
        link: "/Catalogue/python/",
      },
      {
        text: "镜像汇总",
        link: "/Catalogue/mirrors/",
      },
    ],
  },
];
