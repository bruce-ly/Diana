/*var $link = document.createElement("link");
 $link.rel = "stylesheet";
 $link.href = "http://www.l-y.win/Diana/Diana.css";
 document.head.appendChild($link);
 var $script = document.createElement("script");
 $script.src = "https://code.jquery.com/jquery-3.2.1.min.js";
 document.body.appendChild($script);*/
window.onload = function () {
    $('body').prepend('<div id="Diana"><div id="message"></div><div id="girl"></div></div>');
    var visitors = typeof(visitor) !== 'undefined' ? visitor : '官人',
        isindexs = typeof(isindex) !== 'undefined' ? isindex : false,
        Tbg, Tscroll, _now, _dianatop = 0, _clicks = 0, _speed = 1000,
        $diana = $('#Diana'), $message = $('#message'), $girl = $('#girl'),
        _ww = $(window).width(), _wh = $(window).height(), _dw = $diana.width(), _dh = $diana.height(),
        _wx = _ww - _dw, _dy = $(document).height() - _dh,
        Amsgs, Aratios = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9],
        onmove = false, ismove = false, isscroll = false,
        _x, _y, __x, __y;

    //右键菜单
    $diana.mousedown(function (e) {
        if (e.which === 3) {
            showMessage('神秘功能：<br><a href="http://www.l-y.win:520">[留言]</a>&nbsp;<a href="http://www.baidu.com">[百度]</a>&nbsp;<a href="http://www.l-y.win">[返回首页]</a>');
        }
    }).bind('contextmenu', function () {
        return false;
    });

    //鼠标在消息上时
    $message.hover(function () {
        $message.stop().fadeIn();
    }, function () {
        $message.stop().fadeOut(_speed * 4);
    });

    //鼠标在上方时
    $girl.hover(function () {
        $girl.stop().fadeTo(400, .4);
        Amsgs = ['我隐身了，你看不到我', '我会隐身哦！嘿嘿！', '别动手动脚的，把手拿开！', '把手拿开，我才出来！'];
        showMessage(Amsgs[Math.floor(Math.random() * Amsgs.length)]);
    }, function () {
        $girl.stop().fadeTo(100, 1);
    });

    //开始
    if (isindexs) { //如果是主页
        _now = (new Date()).getHours();
        if (_now > 0 && _now <= 6) {
            showMessage(visitors + '你是夜猫子呀？还不睡觉，明天起的来么？');
        } else if (_now > 6 && _now <= 11) {
            showMessage(visitors + '早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！');
        } else if (_now > 11 && _now <= 14) {
            showMessage(visitors + '中午了，吃饭了么？不要饿着了，饿死了谁来陪我呀！');
        } else if (_now > 14 && _now <= 18) {
            showMessage(visitors + '下午的时光真难熬！还好有你在！');
        } else {
            showMessage(visitors + '快来逗我玩吧！');
        }
    } else {
        showMessage('欢迎' + visitors + '来到名阳天下');
    }
    $diana.animate({
        top: _wh - _dh - 10,
        left: _ww - _dw - 10
    }, _speed);

    //无聊讲点什么
    setInterval(function () {
        Amsgs = ['播报明日天气<iframe width="140px" height="70px" src="http://i.tianqi.com/index.php?c=code&a=getcode&id=8" frameborder="0" scrolling="no" allowtransparency="true"></iframe>', '来陪我聊天吧！', '好无聊哦，你都不陪我玩！', '…@……!………', '^%#&*!@*(&#)(!)(', '我可爱吧！嘻嘻!~^_^!~~', '谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~', '从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”', '你好呀！' + visitors + '，我叫Diana ^_^'];
        showMessage(Amsgs[Math.floor(Math.random() * Amsgs.length)]);
    }, _speed * 37);

    //无聊动动
    setInterval(function () {
        Amsgs = ['~不得了啦~', '你在时你是一切，你不在时一切是你。', '完了，你也不理我了，我成狗不理了！', '人家有的是背景，而我有的只是背影。', '我又不是人民币，怎么能让人人都喜欢我？', '我不是广场上算卦的，唠不出那么多你爱听的嗑。', '何必太认真，何必太执着。虚妄的追逐，最后徒留伤悲。', '是金子总要发光的，但当满地都是金子的时候，我自己也不知道自己是哪颗了。', '我一个人在这里，一个人在这里反反复复的工作，就像在这里反复的生活。无聊而乏味，唯一改变的是时间的流逝。', '我就是巴黎欧莱雅，你值得拥有！', '世上只有妈妈好,爸爸也不错,嘿嘿'];
        showMessage(Amsgs[Math.floor(Math.random() * Amsgs.length)]);
        $diana.animate({
            top: _wh / 2 * Aratios[Math.floor(Math.random() * Aratios.length)] + $(window).scrollTop() - _dh,
            left: _ww / 2 * Aratios[Math.floor(Math.random() * Aratios.length)] - _dw
        }, _speed * 2);
    }, _speed * 47);

    //滚动条移动
    $(window).scroll(function () {
        clearTimeout(Tscroll);
        Tscroll = setTimeout(function () {
            Amsgs = ['我又来啦，嘻嘻~~', '我追到你啦，没想到吧！', '丢不掉我的，我就是我，不一样的烟火...'];
            showMessage(Amsgs[Math.floor(Math.random() * Amsgs.length)]);
            $diana.animate({
                top: $(window).scrollTop() + _dianatop
            }, _speed);
            isscroll = false;
        }, 200);
        if (!isscroll) {
            isscroll = true;
            _dianatop = $diana.offset().top - $(window).scrollTop();
        }
    });

    //鼠标点击时
    $girl.click(function () {
        if (!ismove) {
            _clicks++;
            if (_clicks > 6) {
                Amsgs = ['你有完没完呀？', '你已经摸我' + _clicks + '次了', '非礼呀！救命！OH，My ladygaga!', '我跑...^%#&*!@*(&#)(!)('];
            } else {
                Amsgs = ['筋斗云！~我飞！', '我跑呀跑呀跑！~~', '别摸我，讨厌，有什么好摸的！', '惹不起你，我还躲不起你么？', '不要摸我了，我会告诉老婆来打你的！', '干嘛动我呀！小心我咬你！', '我哭啦！呜呜~~', '嘿嘿嘿！呵呵呵 ~~', '死变态! 不要脸~'];
            }
            showMessage(Amsgs[Math.floor(Math.random() * Amsgs.length)]);
            $diana.stop().animate({
                top: _wh / 2 * Aratios[Math.floor(Math.random() * Aratios.length)] + $(window).scrollTop() - _dh,
                left: _ww / 2 * Aratios[Math.floor(Math.random() * Aratios.length)] - _dw
            }, _speed / 2);
        } else {
            ismove = false;
        }
    });

    //显示消息函数
    function showMessage(txt) {
        clearTimeout(Tbg);
        Tbg = setTimeout(function () {
            $girl.css('backgroundImage', 'url(http://www.l-y.win/Diana/Diana0.gif)');
        }, _speed * 4);
        $message.stop().html(txt).fadeIn().fadeOut(_speed * 10);
        $girl.css('backgroundImage', 'url(http://www.l-y.win/Diana/Diana1.gif)');
    }

    //拖动
    $diana.on('mousedown touchstart', function (e) {
        onmove = true;
        _x = (e.targetTouches ? e.targetTouches[0].pageX : e.pageX) - parseInt($diana.css('left'));
        _y = (e.targetTouches ? e.targetTouches[0].pageY : e.pageY) - parseInt($diana.css('top'));
    });
    $(document).on('mousemove touchmove', function (e) {
        if (onmove) {
            __x = (e.targetTouches ? e.targetTouches[0].pageX : e.pageX) - _x;
            __y = (e.targetTouches ? e.targetTouches[0].pageY : e.pageY) - _y;
            if (__x >= 140 && __x <= _wx && __y > 0 && __y <= _dy) {
                $diana.css({
                    top: __y,
                    left: __x
                });
                ismove = true;
            }
        }
    }).on('mouseup touchend', function () {
        onmove = false;
    });

    //鼠标在某些元素上方时
    $('h2 a').click(function () {
        showMessage('正在用吃奶的劲加载《<span class="D-span">' + $(this).text() + '</span>》请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span class="D-span">' + $(this).text() + '</span>》这个么？');
    });
    $('#prev-page').mouseover(function () {
        showMessage('要翻到上一页吗?');
    });
    $('#next-page').mouseover(function () {
        showMessage('要翻到下一页吗?');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('去 <span class="D-span">' + $(this).text() + '</span> 逛逛');
    });
    $('.comments').mouseover(function () {
        showMessage('<span class="D-span">' + visitors + '</span> 向评论栏出发吧！');
    });
    $('#submit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#s').mouseover(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('点它可以后退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('点它可以前进哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('点它可以重新载入此页哦！');
    });
    $('#go-home').mouseover(function () {
        showMessage('点它就可以回到首页啦！');
    });
    $('#addfav').mouseover(function () {
        showMessage('点它可以把此页加入书签哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('嘘，从这里可以进入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('点击查看此分类下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('点它可以直接跳到评论列表处.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道吗?点它可以分享本文到' + $(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function () {
        showMessage('点击可以切换到手机版博客版面');
    });

    //评论资料
    $('#author').click(function () {
        showMessage('和我签订契约，成为马猴烧酒吧。');
        $diana.animate({
            top: $('#author').offset().top - 70,
            left: $('#author').offset().left - 170
        }, _speed);
    });
    $('#email').click(function () {
        showMessage('尼酱，留下你的邮箱，不然就是无头像人士了！');
        $diana.animate({
            top: $('#email').offset().top - 70,
            left: $('#email').offset().left - 170
        }, _speed);
    });
    $('#url').click(function () {
        showMessage('快快告诉我你的家在哪里，好让我去参观参观！');
        $diana.animate({
            top: $('#url').offset().top - 70,
            left: $('#url').offset().left - 170
        }, _speed);
    });
    $('#comment').click(function () {
        showMessage('认真填写哦！不然会被认作垃圾评论的！我的乖乖~');
        $diana.animate({
            top: $('#comment').offset().top - 70,
            left: $('#comment').offset().left - 170
        }, _speed);
    });
};