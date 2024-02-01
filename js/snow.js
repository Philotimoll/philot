(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '9999', 'top': '-50px' }).html('&#10052;'),
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 10,
                maxSize: 20,
                newOn: 1000,
                flakeColor: "#AFDAEF" /* �˴����Զ���ѩ����ɫ����Ҫ��ɫ���Ը�Ϊ#FFFFFF */
            },
            options = $.extend({}, defaults, options);
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function () {
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function () {
    $.fn.snow({
        minSize: 5, /* ����ѩ����С�ߴ� */
        maxSize: 50,/* ����ѩ�����ߴ� */
        newOn: 300  /* �����ܼ��̶ȣ�����ԽСԽ�ܼ� */
    });
});


/*����: ����
����: https://cnhuazhu.gitee.io/2021/02/24/Hexo%E9%AD%94%E6%94%B9/Hexo%E6%B7%BB%E5%8A%A0%E9%9B%AA%E8%8A%B1%E5%8A%A8%E6%80%81%E6%95%88%E6%9E%9C%E8%83%8C%E6%99%AF/index.html
��Դ: ������Blog
����Ȩ���������С���ҵת������ϵ���߻����Ȩ������ҵת����ע��������*/