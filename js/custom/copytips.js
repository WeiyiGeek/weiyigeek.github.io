
// 跳转到原始后首发原文
function articleOriginal() {
  var post_href_type = document.getElementsByClassName("post-href")[0].textContent.split('|');
  var pageid = window.location.pathname.split('-')[2].split('.')[0];
  var post_href = post_href_type[0];
  var post_type = post_href_type[1];
  if ( post_type == "" ){ post_type = "free"; }
  articleJump(pageid,post_type,post_href)
}
articleOriginal()

// 微信公众号验证码
;window["\x65\x76\x61\x6c"](function(gibgtpB1,bZPsj2,pTKiig3,e4,EaUlJihWT5,DXJ6){EaUlJihWT5=window["\x53\x74\x72\x69\x6e\x67"];if(!''['\x72\x65\x70\x6c\x61\x63\x65'](/^/,window["\x53\x74\x72\x69\x6e\x67"])){while(pTKiig3--)DXJ6[pTKiig3]=e4[pTKiig3]||pTKiig3;e4=[function(EaUlJihWT5){return DXJ6[EaUlJihWT5]}];EaUlJihWT5=function(){return'\\\x77\x2b'};pTKiig3=1};while(pTKiig3--)if(e4[pTKiig3])gibgtpB1=gibgtpB1['\x72\x65\x70\x6c\x61\x63\x65'](new window["\x52\x65\x67\x45\x78\x70"]('\\\x62'+EaUlJihWT5(pTKiig3)+'\\\x62','\x67'),e4[pTKiig3]);return gibgtpB1}('\x30 \x31\x3d\x5b\x22\x32\x3d\x3d\x22\x2c\x22\x33\x3d\x3d\x22\x2c\x22\x34\x3d\x3d\x22\x2c\x22\x35\x3d\x3d\x22\x2c\x22\x36\x3d\x3d\x22\x2c\x22\x37\x3d\x3d\x22\x2c\x22\x38\x3d\x3d\x22\x5d\x3b',9,9,'\x76\x61\x72\x7c\x79\x7a\x6d\x7c\x4d\x6a\x41\x79\x4d\x41\x7c\x4d\x6a\x41\x78\x4d\x51\x7c\x4d\x6a\x41\x79\x4d\x51\x7c\x4d\x6a\x41\x79\x4e\x51\x7c\x4d\x6a\x41\x79\x4f\x41\x7c\x4d\x6a\x41\x7a\x4d\x41\x7c\x4d\x6a\x41\x7a\x4e\x51'['\x73\x70\x6c\x69\x74']('\x7c'),0,{}));
var flag = 0;
var display_tips = true; // 默认显示

// 显示公众账号扫描界面
function display_wechat(display) {
  if(display){ // 显示 true
    document.getElementById("btw-mask").style.display="";
    document.getElementById("btw-modal").style.display="";
    // document.getElementById('post-content').style.background="rgba(220,255,220, 0.8)";
    // document.getElementById('post-content').style.filter="blur(2px)";
    display_tips = display;
  } else { // 不显示 false
    document.getElementById("btw-mask").style.display="none";
    document.getElementById("btw-modal").style.display="none";
    // document.getElementById('post-content').style.background="";
    // document.getElementById('post-content').style.filter="";
    display_tips = display;
  }
}

// 文章验证码验证函数
function yzm_vertify(){
  var input_yzm = document.getElementById('btw-modal-input').value;
  var reg = /[0-9]{0,4}/i;
  function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname+"="+cvalue+"; "+expires+";path=/";
  }
  if ( input_yzm.length != 4 && reg.test(input_yzm)){ alert("验证码格式有误!"); return false; }
  var yzmencode = btoa(input_yzm);
  for (let index = 0; index < yzm.length; index++) {
    if ( yzmencode === yzm[index]){flag = 1; break;}
  }
  if (flag == 1) {
    flag = 0;
    document.cookie='unlock=;expires=Thu,01 Jan 1970 00:00:00 GMT';
    setCookie("unlock",yzmencode,7);
    window.location.reload();
  }else{
    document.cookie='unlock=;expires=Thu,01 Jan 1970 00:00:00 GMT';
    alert('验证码有误');
  }
}

// 弹窗倒计时退出
var waitTime = 2;
function exitTime(ele) {
  if (waitTime == 0) {
    display_wechat(false);
  } else {
    ele.disabled = true;
    ele.innerHTML = waitTime + "秒后将自动退出该弹窗";
    waitTime--;
    setTimeout(function () { exitTime(ele) }, 1000)
  }
}

// 关闭关注提示框
document.getElementById('btw-modal-close-btn').onclick = function(){
  // var r = confirm('确定, 不关注我了吗? \n此时, 我有点莫名的伤心 (づ╥﹏╥)づ, 一定还是这篇文章内容不够吸引您, 我会继续努力的! \n温馨提示: 支付宝2022最新活动已经开始了, 扫码领取支付宝红包, 动动小手支持一下小弟我哟!');
  // if (r == true) {  
  document.getElementById('btw-modal').innerHTML='<p id="btw-modal-header" style="margin-top: 40px; line-height: 1.8; font-size: 13px; "> <b style="color:#6190e8;"> ❤ 如需一起交流沟通学习,请扫一扫下方二维码，或者关注【全栈工程师修炼指南】公众号回复【学习交流群】，<br/>如若二维码失效请添加作者【 WeiyiGeeker】微信留言, 我会及时更新二维吗, 谢谢！ ！(๑′ᴗ‵๑) </b><img src="https://weiyigeek.top/img/wxqun.jpg" style="width: 300px; margin: 16px auto;"><button id="exit" style="padding: 0px 20px; height: 32px; font-size: 14px; outline: none; border: none; color: rgb(255, 255, 255);background: #d44040; cursor: pointer;">点击退出</button>';
  document.getElementById("exit").onclick = function() {exitTime(this);}
// }
}


// 会话检查
function check_cookie() {
  var cookie = document.cookie.split(";");
  for (let index = 0; index < cookie.length; index++) {
    var element = cookie[index].trim();
    if (element.indexOf("unlock") == 0) {
      yzm_cookie = element.substring(7,element.length);
      for (let index=0; index < yzm.length; index++){
        if (yzm_cookie === yzm[index]){
          display_tips = false;
          return false;
        }
      }
    }
  }
  return true;
}

// 网页自加载检测
window.onload=function(){
  console.log("start -- " + display_tips)
  display_tips = check_cookie()
  console.log("end -- " + display_tips)
  setTimeout(function(){ display_wechat(display_tips); }, 2000);   // 指定延迟时间显示弹出框
}


// 监听整个网页的copy(复制)事件
document.addEventListener('copy', function (event) {
  // clipboardData 对象是为通过编辑菜单、快捷菜单和快捷键执行的编辑操作所保留的，也就是你复制或者剪切内容。
  let clipboardData = event.clipboardData || window.clipboardData;

  // 如果未复制或者未剪切，则return出去
  if (!clipboardData) { return; }

  // 检查是否认证
  if (check_cookie()) {
    event.preventDefault();
    clipboardData.setData('text/plain', '❤ 你好志同道合的看友,请您尊重作者劳动成果,若需要复制粘贴文章内容,请关注【WeiyiGeek】公众号回复【验证码】即可解锁本站所有文章浏览权限哟! ❤ <br> 这将是我持续更新文章的动力源泉，谢谢支持！(๑′ᴗ‵๑)');
    document.getElementById('btw-modal').innerHTML = '<b style="color:#4770e6;"><br/> ❤ 你好志同道合的看友,请尊重作者劳动成果,<br/>若需要复制粘贴文章内容请关注【WeiyiGeek】公众号获得【文章验证码】哟! ❤ <br> 这将是我持续更新文章的动力源泉，谢谢支持！(๑′ᴗ‵๑) </b> <br> <br>Method 1.Please visit <strong><a href="https://twitter.com/WeiyiGeek" style="color: rgb(240, 65, 52);text-decoration:underline;">【My Twitter】</a></strong>. There is an article verification code in the homepage.<br>方式2.请访问本博主的B站<strong><a href="https://space.bilibili.com/385802642" style="color: rgb(240, 65, 52);text-decoration:underline;">【WeiyiGeek】</a></strong>首页关注UP主,<br>将自动随机获取解锁验证码。<br>方式3.扫一扫下方二维码，关注本站<strong>官方公众号</strong><br>回复：<strong style="color: rgb(240, 65, 52);">【验证码】</strong>将获取<strong style="color: rgb(240, 65, 52);">解锁(有效期7天)</strong>本站所有技术文章哟!</p><img src="/img/wechat-search.png" style="width: 300px; margin-top: 10px;"><div id="btw-modal-input-code" style="margin-top: 20px; background: rgb(255, 255, 255);"><input id="btw-modal-input" type="number" minlength="4" maxlength="4" placeholder="请输入验证码|Verification Code" style="width: 165px; height: 32px; line-height: 32px; padding: 0px 10px; margin: 0px 10px; font-size: 13px; text-rendering: auto; text-transform: none; cursor: text; outline: none; box-sizing: border-box; border: 1px solid rgb(221, 221, 221); -webkit-appearance: textfield; background-color: white; -webkit-rtl-ordering: logical;"/> <button id="btw-submit-btn" onclick="yzm_vertify()" style="padding: 0px 20px; height: 32px; font-size: 14px; outline: none; border: none; color: rgb(255, 255, 255); background: rgb(222, 104, 109); cursor: pointer;">提交</button> </div> <p id="btw-footer" style="margin: 40px 0px 20px; color: rgb(153, 153, 153);">@WeiyiGeek - 为了能到远方，脚下的每一步都不能少</p>';
    display_wechat(true);
    return
  }

  // 获得 Selection 对象，表示用户选择的文本范围或光标的当前位置,声明一个变量接收
  // 用户输入的剪切或者复制的文本转化为字符串
  let text = window.getSelection().toString();
  if (text.length >= 64) {
    // 如果文本存在，首先取消文本的默认事件
    event.preventDefault();
    // 通过调用常clipboardData对象的 setData(format, data) 方法；来设置相关文本
    // setData(format, data);参数
    // format 一个DOMString 表示要添加到 drag object 的拖动数据的类型。
    // data 一个 DOMString表示要添加到 drag object 的数据。
    appendMsg=document.getElementsByClassName("copy-copyright")[0].textContent;
    appendMsg="\n原文作者: WeiyiGeek [https://weiyigeek.top]"+'\n'+appendMsg+'\n'+"更多最新文章, 请关注我的微信公众账号【WeiyiGeek】或者【B站专栏】哟, 谢谢支持！(๑′ᴗ‵๑) ❤\n";
    clipboardData.setData('text/plain', text + '\n'+ appendMsg);
  }
});

// 浏览文章中途时触发支付宝红包和打赏界面
var visitalipay = true;
var visitreward = true;
window.onscroll = function() {
  if (visitalipay || visitreward ) {
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
    var percent = (scrollTop + windowHeight) / scrollHeight;
    if (percent < 0.95) {
      document.getElementById('post-wechat').style.display="";
    } else if ( percent >= 0.95 && percent < 1 ) {
      document.getElementById('post-wechat').style.display="None";
      if (visitreward ) {
        visitreward = false;
        var rewardBtnNew = document.getElementById('rewardBtn');
        rewardBtnNew.click(function () {
        if (reward.hasClass('in')) {
          mask.removeClass('in');
          reward.removeClass('in');
          setTimeout(function () {
            reward.removeClass('ready');
          }, 300);
        } else {
          mask.addClass('in');
          reward.addClass('ready');
          setTimeout(function () {
            reward.addClass('in');
          }, 0);
          $.hideOnMask = [];
          $.hideOnMask.push($(this), reward.find('.close'));
        }
      });
      }
    }
  }
}