export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/GitHub/FoxPirme.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"FoxPrime的博客"} }],
  ["/luogu/c1.html", { loader: () => import(/* webpackChunkName: "luogu_c1.html" */"D:/GitHub/FoxPirme.github.io/docs/.vuepress/.temp/pages/luogu/c1.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/GitHub/FoxPirme.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
