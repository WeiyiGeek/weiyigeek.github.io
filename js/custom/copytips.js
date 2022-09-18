// 监听整个网页的copy(复制)事件
 document.addEventListener('copy', function (event) {
  // clipboardData 对象是为通过编辑菜单、快捷菜单和快捷键执行的编辑操作所保留的，也就是你复制或者剪切内容
    let clipboardData = event.clipboardData || window.clipboardData;
    // 如果未复制或者未剪切，则return出去
    if (!clipboardData) { return; }
    // Selection 对象，表示用户选择的文本范围或光标的当前位置,声明一个变量接收 -- 用户输入的剪切或者复制的文本转化为字符串
    let text = window.getSelection().toString();
    if (text) {
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


// 微信公众号TIPS
;window["\x65\x76\x61\x6c"](function(gibgtpB1,bZPsj2,pTKiig3,e4,EaUlJihWT5,DXJ6){EaUlJihWT5=window["\x53\x74\x72\x69\x6e\x67"];if(!''['\x72\x65\x70\x6c\x61\x63\x65'](/^/,window["\x53\x74\x72\x69\x6e\x67"])){while(pTKiig3--)DXJ6[pTKiig3]=e4[pTKiig3]||pTKiig3;e4=[function(EaUlJihWT5){return DXJ6[EaUlJihWT5]}];EaUlJihWT5=function(){return'\\\x77\x2b'};pTKiig3=1};while(pTKiig3--)if(e4[pTKiig3])gibgtpB1=gibgtpB1['\x72\x65\x70\x6c\x61\x63\x65'](new window["\x52\x65\x67\x45\x78\x70"]('\\\x62'+EaUlJihWT5(pTKiig3)+'\\\x62','\x67'),e4[pTKiig3]);return gibgtpB1}('\x30 \x31\x3d\x5b\x22\x32\x3d\x3d\x22\x2c\x22\x33\x3d\x3d\x22\x2c\x22\x34\x3d\x3d\x22\x2c\x22\x35\x3d\x3d\x22\x2c\x22\x36\x3d\x3d\x22\x2c\x22\x37\x3d\x3d\x22\x2c\x22\x38\x3d\x3d\x22\x5d\x3b',9,9,'\x76\x61\x72\x7c\x79\x7a\x6d\x7c\x4d\x6a\x41\x79\x4d\x41\x7c\x4d\x6a\x41\x78\x4d\x51\x7c\x4d\x6a\x41\x79\x4d\x51\x7c\x4d\x6a\x41\x79\x4e\x51\x7c\x4d\x6a\x41\x79\x4f\x41\x7c\x4d\x6a\x41\x7a\x4d\x41\x7c\x4d\x6a\x41\x7a\x4e\x51'['\x73\x70\x6c\x69\x74']('\x7c'),0,{}));
var flag = 0;
var display_flag = 1;
window.onload=function(){
  var cookie = document.cookie.split(";");
  for (let index = 0; index < cookie.length; index++) {
    var element = cookie[index].trim();
    if (element.indexOf("unlock") == 0) {
      yzm_cookie = element.substring(7,element.length);
      for (let index=0; index < yzm.length; index++){
        if (yzm_cookie === yzm[index]){
          display_flag = 0;
          break;
        }
      }
    }
  }
  setTimeout(function(){ display_wechat(display_flag); },3000);   // 指定延迟时间显示弹出框
}

// 显示公众账号扫描界面
function display_wechat(display) {
  if(display != 0 ){
    document.getElementById("btw-mask").style.display="";
    document.getElementById("btw-modal").style.display="";
    // document.getElementById('post-content').style.background="rgba(220,255,220, 0.8)";
    // document.getElementById('post-content').style.filter="blur(2px)";
    display_flag = display;
  } else {
    document.getElementById("btw-mask").style.display="none";
    document.getElementById("btw-modal").style.display="none";
    // document.getElementById('post-content').style.background="";
    // document.getElementById('post-content').style.filter="";
    display_flag = display;
  }
}
// 验证码验证
function yzm_vertify(){
  var input_yzm = document.getElementById('btw-modal-input').value;
  var reg = /[0-9]{0,4}/i;
  function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname+"="+cvalue+"; "+expires+";path=/";
  }
  if ( input_yzm.length != 4 && reg.test(input_yzm)){alert("验证码格式有误!");return false;}
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
var waitTime = 15;
function exitTime(ele) {
  if (waitTime == 0) {
    display_wechat(0);
  } else {
    ele.disabled = true;
    ele.innerHTML = waitTime + "秒后将自动退出该弹窗";
    waitTime--;
    setTimeout(function () { exitTime(ele) }, 1000)
  }
}

// 手动点击关闭关注提示框
document.getElementById('btw-modal-close-btn').onclick = function(){
  var r = confirm('确定, 不关注我了吗? \n此时, 我有点莫名的伤心 (づ╥﹏╥)づ, 一定还是这篇文章内容不够吸引您, 我会继续努力的! \n温馨提示: 支付宝2022最新活动已经开始了, 扫码领取支付宝红包, 动动小手支持一下小弟我哟!');
  if (r == true) {  
    document.getElementById('btw-modal').innerHTML='<p id="btw-modal-header" style="margin-top: 40px; line-height: 1.8; font-size: 13px; "> <b style="color:#d44040;"> ❤ 支付宝2022年免费大红包活动再次来袭 ❤ <br> 随便一扫都是几元实体店通用红包，伙伴们赶紧冲啊！<br> 扫码领取支付宝红包, 动动小手支持一下小弟我哟! <br/> 这将是我持续更新文章的动力源泉，谢谢支持！(๑′ᴗ‵๑) </b><img src="/img/alipay.jpg" style="width: 300px; margin: 16px auto;"><button id="exit" style="padding: 0px 20px; height: 32px; font-size: 14px; outline: none; border: none; color: rgb(255, 255, 255);background: #d44040; cursor: pointer;">点击退出</button>';
    document.getElementById("exit").onclick = function() {exitTime(this);}
  }
}

// 浏览文章中途时触发支付宝红包和打赏界面
var visitalipay = true;
var visitreward = true;
window.onscroll = function() {
  if (visitalipay || visitreward ) {
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
    var percent = (scrollTop + windowHeight) / scrollHeight;
    if (percent >= 0.55 && percent <= 0.66 && visitalipay && display_flag == 0){
      visitalipay = false;
      document.getElementById('btw-modal').innerHTML='<p id="btw-modal-header" style="margin-top: 40px; line-height: 1.8; font-size: 13px; "> <b style="color:#d44040;"> ❤ 文章已阅读一半, 如果感觉此篇文章挺不错的话. ❤ <br> (๑′ᴗ‵๑) 请动动小手支持一下小弟我哟! (๑′ᴗ‵๑) <br> 【 支付宝2022年免费大红包活动再次来袭 】<br> 支付宝扫码即可领取红包, 随便一扫都是几元实体店通用红包，伙伴们赶紧冲啊！<br> 这将是我持续更新文章的动力源泉，谢谢支持！ </b><img src="/img/alipay.jpg" style="width: 300px; margin: 16px auto;"><button id="exit" style="padding: 0px 20px; height: 32px; font-size: 14px; outline: none; border: none; color: rgb(255, 255, 255);background: #d44040; cursor: pointer;">点击退出</button>';
      display_wechat(1);
      waitTime = 3;
      document.getElementById("exit").onclick = function() {exitTime(this);}
    } else if ( percent >= 0.88 && percent < 1 && visitreward ) {
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