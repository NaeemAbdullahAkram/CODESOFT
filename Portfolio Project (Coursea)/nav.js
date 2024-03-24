var _0x36690d = _0x450e;
(function(_0x5f54ad, _0x354d83) {
    var _0x329bfe = _0x450e
      , _0x37204d = _0x5f54ad();
    while (!![]) {
        try {
            var _0x44e1e6 = -parseInt(_0x329bfe(0x197)) / 0x1 + -parseInt(_0x329bfe(0x182)) / 0x2 + parseInt(_0x329bfe(0x190)) / 0x3 + -parseInt(_0x329bfe(0x18a)) / 0x4 + -parseInt(_0x329bfe(0x191)) / 0x5 * (-parseInt(_0x329bfe(0x19d)) / 0x6) + -parseInt(_0x329bfe(0x196)) / 0x7 + -parseInt(_0x329bfe(0x18d)) / 0x8 * (-parseInt(_0x329bfe(0x186)) / 0x9);
            if (_0x44e1e6 === _0x354d83)
                break;
            else
                _0x37204d['push'](_0x37204d['shift']());
        } catch (_0x3c3559) {
            _0x37204d['push'](_0x37204d['shift']());
        }
    }
}(_0x2fc5, 0x689df),
$(window)['on'](_0x36690d(0x180), fadeScrollReminders),
$(window)[_0x36690d(0x193)](fadeScrollReminders),
$(window)[_0x36690d(0x17c)](fadeScrollReminders),
$(window)['on'](_0x36690d(0x180), updateSectionIndicators),
$(window)[_0x36690d(0x193)](updateSectionIndicators),
$(window)['scroll'](updateSectionIndicators));
function fadeScrollReminders() {
    var _0x234d6c = _0x36690d;
    const _0x6ce35c = 0.8
      , _0x45537b = 0x4;
    var _0x5857e8 = $(document)[_0x234d6c(0x187)]() - ($(window)['innerHeight']() + $(window)[_0x234d6c(0x194)]()) - 0x78;
    _0x5857e8 < $(window)[_0x234d6c(0x18b)]() ? (alpha = _0x5857e8 / $(window)[_0x234d6c(0x18b)](),
    $(_0x234d6c(0x184))[_0x234d6c(0x188)]({
        'opacity': alpha * _0x6ce35c
    })) : $(_0x234d6c(0x184))['css']({
        'opacity': _0x6ce35c
    });
    var _0x1a9d9b = $(window)[_0x234d6c(0x18b)]() / _0x45537b;
    if ($(window)[_0x234d6c(0x194)]() > _0x1a9d9b) {
        alpha = ($(window)[_0x234d6c(0x194)]() - _0x1a9d9b) / _0x1a9d9b;
        if (alpha > 0x1)
            alpha = 0x1;
        $(_0x234d6c(0x192))[_0x234d6c(0x188)]({
            'opacity': alpha * _0x6ce35c
        });
    } else
        $(_0x234d6c(0x192))['css']({
            'opacity': 0x0
        });
}
function _0x450e(_0x3517e9, _0x3da8cb) {
    var _0x2fc532 = _0x2fc5();
    return _0x450e = function(_0x450e5a, _0x534fdf) {
        _0x450e5a = _0x450e5a - 0x17c;
        var _0x58b205 = _0x2fc532[_0x450e5a];
        return _0x58b205;
    }
    ,
    _0x450e(_0x3517e9, _0x3da8cb);
}
function _0x2fc5() {
    var _0x5a0d0b = ['255936IYNnDn', 'innerHeight', '<i\x20class=\x22far\x20fa-star\x22></i>', '16Avpmvu', 'isInViewport', 'html,body', '1466439ybigsm', '325705mpBwFi', '.to-top-navigator', 'resize', 'scrollTop', 'each', '3214540ZhFwlT', '701814gapIPx', 'fast', 'html', 'hide', 'offset', 'bottom-of-document', '78DHtuOO', '.section-visual-boundry', 'scroll', '<i\x20class=\x22fas\x20fa-star\x22></i>', 'tooltip', '-section-indicator', 'load', 'animate', '1671654SuYPQF', 'a[name=\x27', '.scroll-down-navigator', 'top', '5191695TOfJOg', 'height', 'css', 'attr'];
    _0x2fc5 = function() {
        return _0x5a0d0b;
    }
    ;
    return _0x2fc5();
}
$['fn'][_0x36690d(0x18e)] = function() {
    var _0xbf9c1d = _0x36690d
      , _0x4a80df = $(this)[_0xbf9c1d(0x19b)]()[_0xbf9c1d(0x185)]
      , _0x32c68e = _0x4a80df + $(this)['outerHeight']()
      , _0x3ae5ca = $(window)[_0xbf9c1d(0x194)]()
      , _0x9243ee = _0x3ae5ca + $(window)[_0xbf9c1d(0x187)]();
    return _0x32c68e > _0x3ae5ca && _0x4a80df < _0x9243ee;
}
;
function scrollToNextSection() {
    var _0x1e8473 = _0x36690d
      , _0x3d12d3 = ![]
      , _0x466063 = ![];
    $('.section-visual-boundry')[_0x1e8473(0x195)](function() {
        var _0x459d34 = _0x1e8473;
        if (!_0x466063) {
            var _0x64934d = $(this)['attr']('id');
            if ($(this)[_0x459d34(0x18e)]())
                !_0x3d12d3 && (_0x3d12d3 = !![]);
            else {
                if (_0x3d12d3)
                    scrollToAnchor(_0x64934d),
                    _0x466063 = !![];
                else {}
            }
        }
    });
    if (!_0x466063)
        scrollToAnchor(_0x1e8473(0x19c));
}
function scrollToPreviousSection() {
    var _0x20cac5 = _0x36690d
      , _0x1d9d96 = 'top-of-document'
      , _0x9058aa = ![]
      , _0x6375fe = ![];
    $(_0x20cac5(0x19e))[_0x20cac5(0x195)](function() {
        var _0x22465b = _0x20cac5
          , _0x2f3c25 = $(this)[_0x22465b(0x189)]('id');
        !_0x6375fe && (!_0x9058aa ? $(this)['isInViewport']() ? _0x9058aa = !![] : _0x1d9d96 = _0x2f3c25 : (scrollToAnchor(_0x1d9d96),
        _0x6375fe = !![]));
    }),
    !_0x6375fe && scrollToAnchor(_0x1d9d96);
}
function scrollToAnchor(_0x5a05b0) {
    var _0x2895f2 = _0x36690d;
    const _0x251022 = -0x4e;
    var _0x33bbcb = $(_0x2895f2(0x183) + _0x5a05b0 + '\x27]');
    $(_0x2895f2(0x18f))[_0x2895f2(0x181)]({
        'scrollTop': _0x33bbcb[_0x2895f2(0x19b)]()['top'] + _0x251022
    }, _0x2895f2(0x198)),
    toolTipReset();
}
function toolTipReset() {
    var _0x24f2b2 = _0x36690d;
    $('[data-toggle=\x27tooltip\x27]')[_0x24f2b2(0x17e)](_0x24f2b2(0x19a));
}
function updateSectionIndicators() {
    var _0x430e4f = _0x36690d;
    const _0x28eb77 = _0x430e4f(0x17d)
      , _0x570441 = _0x430e4f(0x18c);
    toolTipReset(),
    $('.section-visual-boundry')[_0x430e4f(0x195)](function() {
        var _0x3543d5 = _0x430e4f
          , _0xb9725b = $(this)[_0x3543d5(0x189)]('id');
        $(this)[_0x3543d5(0x18e)]() ? $('#' + _0xb9725b + _0x3543d5(0x17f))[_0x3543d5(0x199)](_0x28eb77) : $('#' + _0xb9725b + '-section-indicator')[_0x3543d5(0x199)](_0x570441);
    });
}
