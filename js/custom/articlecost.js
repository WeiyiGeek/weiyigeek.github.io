
// var pageid = {
//   "710.html":"https://mp.weixin.qq.com/s/d-n6nG8egr9c2mg7b03IKQ",
//   "703.html":"https://mp.weixin.qq.com/s/pdA3qGYV_k6HmPWC2j0NuA",
//   "699.html":"https://mp.weixin.qq.com/s/4anuwyRs95GMHHNvtMIz8w",
//   "697.html":"https://mp.weixin.qq.com/s/usJbZHe2Cfaurz6snVQyuA",
//   "695.html":"https://mp.weixin.qq.com/s/0LaYhi89ujYQPHuLfwnuiA",
//   "669.html":"https://mp.weixin.qq.com/s/-Gbrtno8MOfqgCdgWxKE0w",
//   "667.html":"https://mp.weixin.qq.com/s/zRg9ePFbVKyLxgy-K2TJHg",
//   "664.html":"https://mp.weixin.qq.com/s/v_kO8o8mWOYc38kot86g6Q",
//   "654.html":"https://mp.weixin.qq.com/s/-ksiNJG6v4q47ez7_H3uYQ",
//   "541.html":"https://mp.weixin.qq.com/s/0EOyR4uEVe7T_4HbSxqK9w",
//   "534.html":"https://mp.weixin.qq.com/s/pNVg2GAntCpE1XBdlbYd9g",
//   "533.html":"https://mp.weixin.qq.com/s/FWmQNinsYZwyeL3c-6x6tw",
// }


// 获取请求的变量
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

// 过滤特殊字符
function filterStr(str)  {  
  var pattern = new RegExp("[`~!@#$^*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");  
  var specialStr = "";  
  for(var i=0;i<str.length;i++) { specialStr += str.substr(i, 1).replace(pattern, ''); }  
  return specialStr;  
} 

// 获取指定key并进行输出
function articleJump(pageid,type,pagehref) {
  console.log(pageid,type,pagehref.length)
  if (type == "cost" && pagehref != undefined ) {
    if ( getQueryVariable("role") != "payment" || getQueryVariable("cost") != btoa(pageid) ) {
      document.getElementsByClassName("body-wrap")[0].textContent="看友，你还没有该文章浏览权限哟！" + "此文章为付费文章，完整原文在微信公众号 【全栈工程师修炼指南】, 即将跳转到该文章链接 [ "+ pagehref + " ] 页面!\n点击【确定】即可跳转,点击【取消】则返回首页。"
      if (pageid != undefined ){
        var cost = confirm("温馨提示:\n此文章为付费文章，完整原文在微信公众号 【全栈工程师修炼指南】, 即将跳转到该文章链接 ["+pagehref+"] 页面!\n点击【确定】即可跳转,点击【取消】则返回首页。")
        if (cost) {window.location.href = pagehref;} else {window.location.href = "/";}
      }
    }
  }  else if ( type == "free" && pagehref.length != 0 ) {
    // if ( getQueryVariable("role") != "free" ) {
      if (pageid != undefined ){
        var cost = confirm("温馨提示:\n此文章首发在微信公众号【全栈工程师修炼指南】, 即将跳转到该文章链接 ["+pagehref+"] 页面!\n点击【确定】即可跳转,点击【取消】则返回。")
        if (cost) {
          window.location.href = pagehref;
        } else { 
          console.log("INFO: 文章权限验证通过,尽情浏览吧,少年!");
          document.getElementsByClassName("body-wrap")[0].style.display = "";
          // window.location.href = window.location.href+"?role=free";
       }
      }
  } else {
    console.log("INFO: 文章权限验证通过,尽情浏览吧,少年!");
    document.getElementsByClassName("body-wrap")[0].style.display = "";
  }
}
