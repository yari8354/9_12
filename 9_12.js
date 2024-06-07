// TODO: отрефачить, чтобы либа для cookies грузилась в head, а отсюда удалить

/*
* jQuery Cookie
*/
;

(function ($, document) {
  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  $.cookie = function (key, value, options) {
    // key and at least value given, set cookie...
    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
      options = $.extend({}, $.cookie.defaults, options);

      if (value == null) {
        options.expires = -1;
      }

      if (typeof options.expires === 'number') {
        var days = options.expires,
            t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = String(value);
      return document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
    } // key and possibly options given, get cookie...


    options = value || $.cookie.defaults || {};
    var decode = options.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');

    for (var i = 0, parts; parts = cookies[i] && cookies[i].split('='); i++) {
      if (decode(parts.shift()) === key) {
        return decode(parts.join('='));
      }
    }

    return null;
  };

  $.cookie.defaults = {};
})(jQuery, document);

var months_localized = {
  'ru': ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  'bg': ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  'nl': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  'pt': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  'de': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  'tr': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  'it': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  'hu': ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
  'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'id': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  'ms': ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  'hi': ['जनवर', 'फरबर', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  'ro': ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  'pl': ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
  'sr': ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  'cs': ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
  'sk': ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
  'el': ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  'th': ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  'vi': ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Bốn', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám'],
  'fil': ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  'ar': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  'ur': ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  'nb': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nn': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'no': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nb_NO': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'km': ['មករា', 'កុម្ភៈ', 'មិនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', '‘វិច្ឆិកា', 'ធ្នូ'],
  'zh': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var days_localized = {
  'ru': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  'fr': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  'bg': ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
  'nl': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  'pt': ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'],
  'de': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  'tr': ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  'it': ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
  'hu': ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
  'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'hi': ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
  'ms': ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  'id': ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  'es': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  'ro': ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  'pl': ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  'sr': ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
  'cs': ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  'sk': ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
  'el': ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
  'th': ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  'vi': ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
  'ar': ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'],
  'fil': ['Linggo', 'Lunes', 'Martes', 'Miyerkoles', 'Huebes', 'Biyernes', 'Sabado'],
  'ur': ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  'nb': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nn': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'no': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nb_NO': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'km': ['អាទិត្យ', 'ច័ន្ធ', 'អង្គារ៍', 'ពុធ', 'ព្រហស្បិ៍', 'សុក្រ', 'សៅរ៍'],
  'zh': ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};

var AdcLandDate = function AdcLandDate(_ref) {
  var shift = _ref.shift,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'dtime_nums' : _ref$mode,
      _ref$old = _ref.old,
      old = _ref$old === void 0 ? true : _ref$old,
      _ref$euFormat = _ref.euFormat,
      euFormat = _ref$euFormat === void 0 ? 1 : _ref$euFormat,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index;
  this._mode = mode; // для rdate 0, чтобы не указывать сдвиг на каждом элементе

  this._shift = ~['rdate'].indexOf(mode) || isNaN(+shift) || !shift ? 0 : +shift;
  this._oldMethod = old;
  this._euFormat = !!+euFormat;
  this._indexOfCollection = index;

  this._compileDate(this._shift);
};

AdcLandDate.prototype._compileDate = function (shift) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  this._day = date;

  this._day.setDate(this._day.getDate() + (isNaN(+shift) ? 0 : shift) + (this._oldMethod && this._mode !== 'dtimes' ? 1 : 0));
};

AdcLandDate.prototype._getLocalizedEntity = getLocalizedEntity;

AdcLandDate.prototype._formatNum = function (num) {
  return ('0' + num).slice(-2);
};

AdcLandDate.prototype.getDate = function () {
  var _this = this;

  var modes = {
    'dtime_nums': function dtime_nums() {
      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'dtime': function dtime() {
      return {
        weekDay: _this._getLocalizedEntity(_this._day, 'day'),
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month'),
        year: _this._day.getFullYear()
      };
    },
    'dtimes': function dtimes() {
      return {
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month')
      };
    },
    'ryear': function ryear() {
      return {
        year: _this._day.getFullYear()
      };
    },
    'rstart': function rstart() {
      _this._compileDate(_this._shift, new Date(parseInt($.cookie('randDate'))));

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'rdate': function rdate(x) {
      var z = x >= 16 ? 16 : x;
      var savedDate = new Date(parseInt($.cookie('randDate')));
      var nextDate = new Date(savedDate.getTime() + z * (12 + z) * (60 + x) * 60 * (1000 + x));
      if (x >= 31) nextDate = new Date(savedDate.getTime() + 2494600000 + x * 150000);

      _this._compileDate(_this._shift, nextDate);

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear(),
        hours: _this._formatNum(_this._day.getHours()),
        minutes: _this._formatNum(_this._day.getMinutes()),
        seconds: _this._formatNum(_this._day.getSeconds())
      };
    }
  };
  return modes[this._mode](this._indexOfCollection);
};

AdcLandDate.prototype.toString = function () {
  var _this2 = this;

  var outputDate = this.getDate(this._indexOfCollection);
  var strings = {
    'dtime_nums': function dtime_nums() {
      return _this2._euFormat ? "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year) : "".concat(outputDate.month, ".").concat(outputDate.day, ".").concat(outputDate.year);
    },
    'dtime': function dtime() {
      return "".concat(outputDate.weekDay, " ").concat(outputDate.day, ", ").concat(outputDate.month, " ").concat(outputDate.year);
    },
    'dtimes': function dtimes() {
      return "".concat(outputDate.day, " ").concat(outputDate.month);
    },
    'ryear': function ryear() {
      return outputDate.year;
    },
    'rstart': function rstart() {
      return "".concat(outputDate.day, "/").concat(outputDate.month, "/").concat(outputDate.year);
    },
    'rdate': function rdate() {
      return "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year, " - ").concat(outputDate.hours, ":").concat(outputDate.minutes);
    }
  };
  return strings[this._mode] ? strings[this._mode]() : '';
};

AdcLandDate.init = function () {
  var DAY = 24 * 60 * 60;
  var MONTH = 30 * DAY;
  if (!$.cookie('randDate')) $.cookie('randDate', new Date().getTime() - MONTH * 1000, {
    expires: 1
  });
};

function getLocalizedEntity(date, entity) {
  date = new Date(date);
  var defLang = 'en';
  var locale = window.lang_locale || defLang;
  var configs = {
    month: {
      dict: months_localized,
      method: 'getMonth'
    },
    day: {
      dict: days_localized,
      method: 'getDay'
    }
  };
  var config = configs[entity];
  if (!config) return 'Unknown entity';
  return config.dict[config.dict[locale] ? locale : defLang][date[config.method]()];
}

function dtime_nums(shift, euFormat) {
  var date = new AdcLandDate({
    shift: shift,
    euFormat: euFormat
  });
  document.write(date.toString());
}

function dtime(shift) {
  var date = new AdcLandDate({
    mode: 'dtime',
    shift: shift
  });
  document.write(date.toString());
}

function dtimes(shift) {
  var date = new AdcLandDate({
    mode: 'dtimes',
    shift: shift
  });
  document.write(date.toString());
}

AdcLandDate.init();
$(function () {
  $.fn.adcLandDate = function (mode) {
    var $collection = this;
    $collection.each(function (i) {
      var el = $collection.eq(i);
      var shift = el.attr('data-date-shift');
      var euFormat = el.attr('data-date-eu');
      var date = new AdcLandDate({
        mode: mode,
        shift: shift,
        old: false,
        index: i,
        euFormat: euFormat
      });
      el.text(date.toString());
    });
  };

  $('.ryear, .nowyear').adcLandDate('ryear');
  $('.rstart, .startdate').adcLandDate('rstart');
  $('.rdate, .ypdate').adcLandDate('rdate');
  $('.dtime').adcLandDate('dtime');
  $('.dtime_nums').adcLandDate('dtime_nums');
  $('.dtimes').adcLandDate('dtimes');
});function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (_typeof(adcValid) !== 'object') var adcValid = {};
adcValid.errorMes = {
  settings: {
    button: [],
    message: 'js_errorMessage'
  },
  remove: function remove() {
    $('.' + this.settings.message + ', .' + this.settings.message + '2').remove();
  },
  mes: function mes(elem, msg) {
    var _t = this,
        style,
        x,
        y,
        $elem = typeof elem.attr === "function" ? elem : $(elem);

    if (!$elem.length) {
      console.error('Not an item to display an error', $elem);
      return false;
    }

    ;

    if (_t.body === _t.add) {
      _t.add.add("html");

      x = $elem.offset().left;
      y = $elem.offset().top;
    } else {
      x = $elem.offset().left - _t.add.offset().left;
      y = $elem.offset().top - _t.add.offset().top + _t.add.scrollTop();
    }

    _t.add.animate({
      scrollTop: y - 50
    }, 0, function () {
      style = 'left: ' + x + 'px;' + 'top: ' + (y - 36) + 'px;' + 'background-color: #e74c3c;' + 'border-radius: 5px;' + 'border: 1px dashed black;' + 'color: #fff;' + 'font-family: Arial, \'Nimbus Sans L\', Helvetica, sans-serif;' + 'font-size: 14px;' + 'margin: 3px 0 0 0px;' + 'padding: 6px 5px 5px;' + 'position: absolute;' + 'display: block;' + 'z-index: 9999';

      _t.remove();

      _t.add.append('<div class="' + _t.settings.message + '2" style="' + style + '">' + msg + '</div>');

      $elem.focus();
    });
  },
  resize: function resize() {
    var _t = this;

    _t.window.resize(function () {
      _t.remove();
    });
  },
  init: function init() {
    var _t = this;

    _t.window = $(window);
    _t.body = $('body');
    _t.add = _t.body;
    _t.click = $('input, textarea').add(_t.body);

    _t.click.on("touchend click", function (e) {
      var result = true;

      for (var i = 0; i < _t.settings.button.length; i++) {
        if ($(e.target).closest('.' + _t.settings.button[i]).length || e.target.classList.contains(_t.settings.button[i])) result = false;
      }

      if (result) _t.remove();
    });

    _t.resize();
  }
};
adcValid.validation = {
  settings: {
    postal_code: /^[\d]{2,6}$/i,
    rename: /^[^\\|\/.!@#$%^&*()=+`~'":;?,<>{}[\]\d«»„\t\n\v\f\r]+$/i,
    rename2: /^[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+\s[^\\|\/.!@#$%^&*()=+~'":;?,<>{}[\]\d«»„\t\n\v\f\r\s]+$/i,
    rephone: /^[\d\-+() ]*$/i,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
  },
  cleaning: function cleaning(text) {
    return text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  },
  partition: function partition(input, hint, _req, _cc) {
    var _t = this,
        req = false,
        $input = typeof input.attr === "function" ? input : $(input),
        val = _t.cleaning($input.val());

    mes = hint || defaults.get_locale_var('set_address');

    if (!val) {
      if (_typeof(_req) === 'object') {
        if (_req[_cc] !== undefined) req = _req[_cc];
      } else {
        req = _req;
      }

      if (req) {
        $input.val('');
        adcValid.errorMes.mes($input, mes);
        return false;
      }
    } else {
      $input.val(val);
    }

    return true;
  },
  init: function init(button, fullAddress) {
    var _t = this,
        errorText = {
      not: ['Field is required'],
      notName: ['Name is a required field', 'set_fio'],
      erName: ['Name field is entered incorrectly', 'error_fio'],
      notPhone: ['Phone number is a required field', 'set_phone'],
      erPhone: ['The phone number is entered incorrectly', 'error_phone'],
      erEmail: ['The email is entered incorrectly', 'error_email'],
      notAddress: ['Address is a required field', 'set_address'],
      erAddress: ['Invalid address, please, refill the form', 'error_address'],
      notHouse: ['House is a required field', 'set_house'],
      notCity: ['City is a required field', 'set_city']
    };

    for (var ekey in errorText) {
      if (_typeof(defaults) === 'object' && errorText[ekey][1]) errorText[ekey][0] = defaults.get_locale_var(errorText[ekey][1]);
    }

    _t['button'] = typeof button.attr === "function" ? button : $(button);
    _t['form'] = _t.button.closest('form');
    if (!_t['allForm']) _t['allForm'] = $('form');
    _t['input'] = {
      name: _t.form.find('[name="name"]'),
      phone: _t.form.find('[name="phone"]'),
      address: _t.form.find('[name="address"]'),
      email: _t.form.find('[name="email"]')
    };
    if (_t.input.name.attr('data-count-length') === "2+") _t.settings.rename = _t.settings.rename2;

    if (!_t.cleaning(_t.input.name.val())) {
      adcValid.errorMes.mes(_t.input.name, errorText.notName[0]);
      return false;
    } else if (!_t.settings.rename.test(_t.cleaning(_t.input.name.val()))) {
      adcValid.errorMes.mes(_t.input.name, errorText.erName[0]);
      return false;
    } else if (!_t.input.phone.val() || !_t.input.phone.val().length) {
      adcValid.errorMes.mes(_t.input.phone, errorText.notPhone[0]);
      return false;
    } else if (!_t.settings.rephone.test(_t.input.phone.val()) || _t.input.phone.val().length < 6) {
      adcValid.errorMes.mes(_t.input.phone, errorText.erPhone[0]);
      return false;
    } else if (_t.input.address.length && _t.cleaning(_t.input.address.val()) === '' && _t.input.address.is(':visible')) {
      adcValid.errorMes.mes(_t.input.address, errorText.erAddress[0]);
      return false;
    } else if (_t.input.email.length && _t.input.email.is(':visible') && !_t.settings.email.test(_t.input.email.val())) {
      adcValid.errorMes.mes(_t.input.email, errorText.erEmail[0]);
      return false;
    } else {
      if (_typeof(fullAddress) === 'object' && !fullAddress.length) {
        _t['fullAddress'] = [];

        for (var key in fullAddress) {
          var el = _t.form.find('[name="' + key + '"]'),
              error = key === 'street' ? 'notAddress' : key === 'house' ? 'notHouse' : key === 'city' ? 'notCity' : 'not';

          if (el.length) {
            if (fullAddress[key]) {
              if (!_t.cleaning(el.val()) || _t.settings[key] && !_t.settings[key].test(_t.cleaning(el.val()))) {
                adcValid.errorMes.mes(el, errorText[error][0]);
                return false;
              }
            }
          } else {
            el = _t.form.find('#' + key + '[type="checkbox"]');

            if (el.length) {
              if (!el.prop("checked")) {
                adcValid.errorMes.mes(el, errorText[error][0]);
                return false;
              }
            }
          }

          if (el.attr('type') !== 'checkbox') _t.fullAddress.push(_t.cleaning(el.val()));
        }

        _t.allForm.find('[name="address"]').val(_t.fullAddress.join(' '));
      }

      adcValid.errorMes.remove();
      return true;
    }
  }
};
$().ready(function () {
  adcValid.errorMes.init(); //change phone input type to tel manually

  $('[name="phone"]').attr('type', 'tel').addClass('only_number'); //scroll to top

  $('.to_top').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 400);
    return false;
  }); // autoselect local country from selector

  var ip_country = $('input[name=ip_country]').val();

  if (ip_country) {
    var found = false;
    $('select').each(function () {
      if (this.id === 'country_code_selector') {
        $(this).change(function () {
          $('input[name=country_code]').val(this.value);
        });
        $('#' + this.id + ' option').each(function () {
          if (this.value === ip_country) {
            found = true;
            this.parentElement.value = ip_country;
          }
        });
      }
    });

    if (found) {
      $('input[name="country_code"]').each(function () {
        this.value = ip_country;
      });
    } else {
      var ip_country_name = $('input[name=ip_country_name]').val();

      if (ip_country_name) {
        $('select').each(function () {
          if ($(this).attr('id') === 'country_code_selector') $(this).append($('<option>', {
            value: ip_country
          }).text(ip_country_name).attr('selected', 'selected')[0]);
        });
      }
    }
  }

  var cc_select = $('#country_code_selector').val();

  if (cc_select) {
    $('input[name=country_code]').val(cc_select);
  }

  $('.only_number').on('keydown', function (event) {
    if (/^(?:46|8|9|27|187)$/.test(event.keyCode) || event.keyCode == 65 && event.ctrlKey === true || event.keyCode >= 35 && event.keyCode <= 39) {
      return;
    } else {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
      }
    }
  });
  $('.js_submit').click(function (e) {
    e.preventDefault();
    check_form(this);
    return false;
  });
  $('.js_scroll_to_form').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('form').offset().top
    }, 400);
    return false;
  });
  $('.change-package-button').on('touchend, click', function () {
    var package_id = $(this).data('package-id');
    $('.change-package-selector [value="' + package_id + '"]').prop("selected", true);
    set_package_prices(package_id);
  });
  $('.change-package-selector').on('change', function () {
    var package_id = $(this).val();
    set_package_prices(package_id);
  });

  function show_form_hint(elem, msg) {
    $(".js_errorMessage").remove();
    jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
      'left': jQuery(elem).offset().left,
      'top': jQuery(elem).offset().top - 30,
      'background-color': '#e74c3c',
      'border': '1px dashed black',
      'border-radius': '5px',
      'color': '#fff',
      'font-family': 'Arial',
      'font-size': '14px',
      'margin': '3px 0 0 0px',
      'padding': '6px 5px 5px',
      'position': 'absolute',
      'z-index': '9999'
    });
    jQuery(elem).focus();
  }

  ;

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1),
        vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");

      if (pair[0] == variable) {
        return decodeURIComponent(pair[1]) || "";
      }
    }

    return false;
  } // for mobile prelands


  ['model', 'browser', 'brand', 'appname'].forEach(function (item) {
    window[item] = getQueryVariable(item) || '';
  });
  $('input[name=name]').on('touchend, click', function () {
    if (name_hint != '') {
      show_form_hint(this, name_hint);
      return false;
    }
  });
  $('input[name=phone]').on('touchend, click', function () {
    if (phone_hint != '') {
      show_form_hint(this, phone_hint);
      return false;
    }
  });

  function check_form(target) {
    var feed = {
      submit: function submit(form, callback) {
        var formInputs = {
          country: form.find('[name="country_code"]'),
          fio: form.find('[name="name"]'),
          phone: form.find('[name="phone"]'),
          lid: form.find('[name="lid"]'),
          address: form.find('[name="address"]'),
          house: form.find('[name="house"]'),
          city: form.find('[name="city"]'),
          email: form.find('[name="email"]'),
          validate_address: form.find('[name="validate_address"]')
        };
        var postParams = {
          method: 'feedback',
          name: formInputs.fio.val(),
          phone: formInputs.phone.val(),
          country: formInputs.country.val(),
          lid: formInputs.lid.val(),
          email: formInputs.email.val(),
          house: formInputs.house.val(),
          address: formInputs.address.val(),
          city: formInputs.city.val(),
          validate_address: formInputs.validate_address.val()
        };
        jQuery('.js_errorMessage').remove();
        var country = postParams.country.toLowerCase();
        var rename = /^[\D+ ]*$/i,
            rephone = /^[0-9\-\+\(\) ]*$/i,
            remail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

        if (formInputs.fio.attr('data-count-length') == "2+") {
          rename = /^\D+\s[\D+\s*]+$/i;
        } // checking name


        if (!postParams.name.length) return feed.errorMessage(formInputs.fio, defaults.get_locale_var('set_fio'));
        if (!postParams.name.length || !rename.test(postParams.name)) return feed.errorMessage(formInputs.fio, defaults.get_locale_var('error_fio'));
        if (!postParams.phone || !postParams.phone.length) return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));
        if (!rephone.test(postParams.phone) || postParams.phone.length < 6) return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));

        if (postParams.email && postParams.email.length) {
          if (!remail.test(postParams.email)) return feed.errorMessage(formInputs.email, defaults.get_locale_var('error_email'));
        }

        if (formInputs.address.length && $(formInputs.address).css('display') !== 'none' && postParams.address === '') {
          return feed.errorMessage(formInputs.address, defaults.get_locale_var('set_address'));
        }

        if (formInputs.city.length && $(formInputs.city).css('display') !== 'none' && formInputs.city.attr('type') !== 'hidden' && postParams.city === '') {
          return feed.errorMessage(formInputs.city, defaults.get_locale_var('set_city'));
        }

        if (formInputs.house.length && $(formInputs.house).css('display') !== 'none' && postParams.house === '') {
          return feed.errorMessage(formInputs.house, defaults.get_locale_var('set_house'));
        } //deprecated function need remove


        if (formInputs.validate_address && postParams.validate_address === '1' && formInputs.address.length && $(formInputs.address).css('display') !== 'none') {
          var o = {};
          $.each(form.serializeArray(), function () {
            if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
              }

              o[this.name].push(this.value || '');
            } else {
              o[this.name] = this.value || '';
            }
          });
          $.post('/order/validate_address/', o).done(function (response) {
            for (key in response) {
              if (response.hasOwnProperty(key)) {
                form.append('<input type="hidden" name="' + key + '" value="' + response[key] + '">');
              }
            }

            if (callback) {
              callback(this);
            } else {
              form.submit();
            }
          }).fail(function () {
            $(formInputs.city).css("display", "inline-block");
            $(formInputs.house).css("display", "inline-block");
            var message = defaults.get_locale_var('error_address');

            if (postParams.address === undefined) {
              showAnotherFormHint(message);
            } else {
              return feed.errorMessage(formInputs.address, message);
            }
          });
          return false;
        } else {
          if (callback) {
            callback(form);
          } else if ($(target).hasClass('js_custom_validate') && typeof adc_custom_validate === 'function') {
            if (adc_custom_validate(form)) {
              form.submit();
            } else {
              return false;
            }
          } else {
            form.submit();
          }

          return false;
        }
      },
      errorMessage: show_form_hint
    };
    feed.submit($(target).parents('form').first());
  }

  $("body").on('touchend, click', function () {
    $(".js_errorMessage").remove();
  });
  checkTimeZone();
  setBrowser();

  if (typeof site_title !== 'undefined') {
    $('title').text(site_title);
  }

  if (window.lang_locale && window.lang_locale.toLowerCase() in defaults.locale) {
    defaults._locale = window.lang_locale.toLowerCase();
  } else {
    defaults._locale = 'en';
  }
});
var defaults = {
  get_locale_var: function get_locale_var(var_name) {
    var country = this._locale.toLowerCase();

    return this.locale[country][var_name] !== undefined ? this.locale[country][var_name] : this.locale[this._locale][var_name];
  },
  locale: {
    ru: {
      set_country: 'Вы не выбрали страну',
      set_fio: 'Вы не заполнили ФИО',
      set_phone: 'Вы не заполнили Телефон',
      set_comment: 'Расскажите о вашей проблеме',
      set_holder_name: 'Заполните имя номинанта',
      set_house: 'House is a required field',
      set_nomin: 'Заполните номинацию',
      set_address: 'Заполните адрес',
      set_city: 'Заполните город',
      error_email: 'Неверно заполнен электронный адрес',
      error_fio: 'Неверно заполнено ФИО',
      error_address: 'Неверный адрес, пожалуйста, заполните форму заново',
      error_phone: 'Неверно заполнен Телефон',
      exit_text: 'Вы точно хотите закрыть вкладку? До завершения заказа осталось нажать одну кнопку!'
    },
    hi: {
      set_country: 'आपने देश का चयन नहीं किया',
      set_fio: 'आपनें पूरा नाम नहीं भरा',
      error_fio: 'गलत नाम',
      set_phone: 'आपनें फोन नंबर नहीं भरा',
      error_address: 'Invalid address, please, refill the form',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'गलत फोन नंबर',
      exit_text: 'क्या आप सुनिश्चित रूप से छोड़ना चाहते हैं? आप अपने आर्डर से बस एक चरण की दूरी पर हैं'
    },
    id: {
      set_country: 'Anda belum memilih negara',
      set_fio: 'Anda belum mengisi nama lengkap',
      error_fio: 'Nama tidak valid',
      error_address: 'Invalid address, please, refill the form',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Anda belum mengisi nomor telepon',
      error_phone: 'Nomor telepon tidak valid',
      exit_text: 'Apakah Anda yakin Anda ingin meninggalkan laman ini? Hanya tinggal satu langkah lagi untuk menyelesaikan pesanan Anda!'
    },
    ms: {
      set_country: 'Anda tidak memilih negara',
      set_house: 'House is a required field',
      set_fio: 'Anda tidak mengisi nama penuh',
      error_fio: 'Nama tidak sah',
      set_phone: 'Anda tidak mengisi nombor telefon',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Nombor telefon tidak sah',
      exit_text: 'Adakah anda pasti anda ingin keluar? Hanya tinggal satu langkah lagi daripada pesanan anda!'
    },
    bg: {
      set_country: 'Вие не сте избрали държава',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_fio: 'Моля, въведете валидно име',
      error_fio: 'Моля, въведете валидно име',
      set_phone: 'Моля, въведете телефон за връзка',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Телефонния номер е въведен неправилно',
      exit_text: 'Сигурни ли сте че искате да затворите раздел? До приключване на поръчката кликнете с левия бутон един бутон!'
    },
    ro: {
      set_country: 'Vă rugăm să completați câmpul "Nume/Prenume"',
      set_fio: 'Cimpul a fost completat incorect "Nume/Prenume"',
      set_house: 'House is a required field',
      error_fio: 'Cimpul a fost completat incorect  "Nume/Prenume"',
      set_phone: 'Vă rugăm să completați câmpul "Telefon"',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_phone: 'Cimpul a fost completat incorect "Telefon"',
      exit_text: 'Sunteți sigur că doriți să închideți o filă? Până la finalizarea comenzii stânga faceți clic pe un buton!'
    },
    br: {
      set_country: 'Não selecionou país',
      set_fio: 'Por gentileza, verifique os seus dados',
      set_house: 'House is a required field',
      error_fio: 'Por gentileza, verifique os seus dados',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'or gentileza, verifique os seus dados',
      error_phone: 'or gentileza, verifique os seus dados',
      exit_text: 'Tem certeza de que quer fechar uma guia? Até a conclusão da ordem esquerda clique em um botão!'
    },
    hu: {
      set_country: 'Nem választott ország',
      set_house: 'House is a required field',
      set_fio: 'Nem kitölteni Név és vezetéknév',
      error_fio: 'Helytelenül kitöltött Név és vezetéknév',
      set_phone: 'Nem kitölteni Phone',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Helytelenül kitöltött Telefon',
      exit_text: 'Biztos benne, hogy be akarja zárni a lapra? Befejezéséig a rendelés bal gombbal egy gombot!'
    },
    tr: {
      set_country: 'Siz ülkeyi seçmediniz',
      set_house: 'House is a required field',
      set_fio: 'Adınızı yazınız lütfen',
      error_fio: 'Adınız yalnış yazılmış',
      error_address: 'Geçersiz adres, litfen tekrar giriniz',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Telefon numaranızı yazınız lütfen',
      error_phone: 'Telefon numarası yanlış yazılmış',
      exit_text: 'Sayfamızı kapatmak istediniz. Eminmisiniz? Sipariş etmek icin son tıklama lazım!'
    },
    pl: {
      set_country: 'Podaj kraju',
      set_house: 'House is a required field',
      set_fio: 'Podaj imię i nazwisko',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Podaj realne imię i nazwisko',
      set_phone: 'Podaj numer telefonu',
      error_phone: 'Podaj realny numer telefonu',
      exit_text: 'Czy na pewno chcesz zamknąć kartę?'
    },
    es: {
      set_country: 'No escogió un país',
      set_house: 'House is a required field',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_fio: 'No escribió su nombre y apellido',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Usted escribió mal su nombre y apellido',
      set_phone: 'No escribió su teléfono',
      error_phone: 'Escribio mal su teléfono',
      exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!'
    },
    cl: {
      set_country: 'No escogió un país',
      set_house: 'House is a required field',
      set_fio: 'No escribió su nombre y apellido',
      error_fio: 'Usted escribió mal su nombre y apellido',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'No escbribió su teléfono',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_phone: 'Escribio mal su teléfono',
      exit_text: '¿De verdad quiere cerrar la pestana? ¡Para terminar su pedido solo queda presionar el botón!'
    },
    en: {
      set_country: 'Select country',
      set_house: 'House is a required field',
      set_fio: 'Name is a required field',
      error_fio: 'Name field is entered incorrectly',
      set_phone: 'Phone number is a required field',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_email: 'The email is entered incorrectly',
      error_phone: 'The phone number is entered incorrectly',
      exit_text: 'You really want to close tab?'
    },
    ja: {
      set_country: '国を選択していません',
      set_house: '家の情報をご入力ください',
      set_fio: '苗字と名前を入力していません',
      error_fio: '無効の苗字と名前です',
      set_phone: '電話番号を入力していません',
      set_address: '住所を入力してください',
      error_address: '無効の住所です。再度ご入力ください',
      set_city: '都市名を入力してください',
      error_email: '無効のメールアドレスです',
      error_phone: '無効の電話番号です',
      exit_text: '本当にタブを閉じますか？左のボタンを押せば注文が完了します！'
    },
    nl: {
      set_country: 'Je hebt het land nietgekozen',
      set_house: 'Huisnummer is eenverplicht veld',
      set_fio: 'Je hebtnaamenachternaamnietingevuld',
      error_fio: 'Naamenachternaamzijnniet correct ingevuld',
      set_phone: 'Je hebtTelefoonnummernietingevuld',
      set_comment: 'Vertel over je probleem',
      set_address: 'Vul het adres is',
      error_address: 'Ongeldigadres, vulalsjeblieft het formulieropnieuw in',
      set_city: 'Vul de woonplaats in',
      error_email: 'Het e-mailadres in niet correct ingevuld',
      error_phone: 'Telefoonnummer is niet correct ingevuld',
      exit_text: 'Weet je zekerdat je het tabblad wilt sluiten? Nog maar één knop teklikken om je bestellingafteronden!'
    },
    pt: {
      set_country: 'Não selecionou o país',
      set_house: 'House is a required field',
      set_fio: 'Não preencheu o nome completo',
      error_fio: 'Nome inválido',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Não preencheu o telefone',
      error_phone: 'Número de telefone inválido',
      exit_text: 'Tem a certeza de que quer sair? Está apenas a um passo da sua encomenda!'
    },
    zh: {
      set_country: '你沒有選擇國家',
      set_house: 'House is a required field',
      set_fio: '你沒有填寫完整姓名',
      error_fio: '無效姓名',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: '你沒有填寫電話號碼',
      error_phone: '無效電話號碼',
      exit_text: '你是否確定要離開？離你的訂單僅剩一步了！'
    },
    km: {
      set_country: 'លោកអ្នកមិនបានជ្រើសរើសប្រទេស',
      set_house: 'House is a required field',
      set_fio: 'លោកអ្នកមិនបានបំពេញឈ្មោះពេញ',
      error_fio: 'ឈ្មោះមិនត្រឹមត្រូវ',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'លោកអ្នកមិនបានបញ្ចូលលេខទូរសព្',
      error_phone: 'លេខទូរសព្ទមិនត្រឹមត្រូវ',
      exit_text: 'តើអ្នកពិតជាចង់ចាកចេញមែនឬទេ? នៅសល់តែមួយជំហានទៀតអ្នកនឹងបញ្ជាទិញបានហើយ!'
    },
    nb: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    nn: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      error_fio: 'Ugyldig navn',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    no: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    nb_no: {
      set_country: 'Du valgte ikke land',
      set_house: 'House is a required field',
      set_fio: 'Du oppgav ikke fullt navn',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Ugyldig navn',
      set_phone: 'Du oppgav ikke fullt telefonnummer',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Ugyldig telefonnummer',
      exit_text: 'Er du sikker på at du vil forlate siden? Du er bare et steg unna din ordre!'
    },
    ur: {
      set_country: 'آپ نے ملک کا انتخاب نہیں کیا',
      set_house: 'گھر ایک مطلُوبہ فِیلڈ ہے',
      set_fio: 'آپ نے پورا نام درج نہیں کیا ',
      set_address: 'پتہ ایک مطلُوبہ فِیلڈ ہے',
      set_city: 'شہر ایک مطلُوبہ فِیلڈ ہے',
      error_fio: 'غیر موزوں نام ',
      error_address: 'غیرمعتبرپتہ، برائے مہربانی فارم کو دُوبارہ پُر کریں',
      set_phone: 'آپ نے فون نمبر درج نہیں کیا',
      error_phone: 'آپ نے فون نمبر درج نہیں کیاغیر موزوں فون نمبر',
      exit_text: 'کیا آپ اس صفحے سے جانا چاہتے ہیں؟ آپ اپنا آرڈر بک کرانے سے صرف ایک کلک دوری پر ہیں '
    },
    fil: {
      set_country: 'Hindi mo pinili ang bansa',
      set_house: 'House is a required field',
      set_fio: 'Hindi mo pinunan ang buong pangalan',
      error_fio: 'Inbalidong pangalan',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Hindi mo pinunan ang telepono',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Inbalidong numero ng telepono',
      exit_text: 'Sigurado ka bang gusto mong umalis? Ikaw ay isang hakbang nalang mula sa iyong order!'
    },
    ar: {
      set_country: 'أنت لم تختر البلاد',
      set_house: 'House is a required field',
      set_fio: 'أنت لم تملء الاسم الكامل',
      error_fio: 'اسم غير صالح',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'أنت لم تدخل رقم الهاتف',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'رقم الهاتف غير صحيح',
      exit_text: 'هل أنت متأكد أنك تريد أن تغادر؟ كنت للتو في خطوة واحدة من النظام الخاص بك!'
    },
    vi: {
      set_country: 'Bạn chưa chọn quốc gia',
      set_house: 'House is a required field',
      set_fio: 'Bạn chưa điền họ tên',
      error_fio: 'Tên không hợp lệ',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      set_phone: 'Bạn chưa điền số điện thoại',
      error_phone: 'Số điện thoại không hợp lệ',
      exit_text: 'Bạn có chắc muốn rời đi không? Chỉ còn còn một bước đặt hàng nữa thôi!'
    },
    ng: {
      set_country: 'Select country',
      set_house: 'House is a required field',
      set_fio: 'Name is a required field',
      set_address: 'Address is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_city: 'City is a required field',
      error_fio: 'Name field is entered incorrectly',
      set_phone: 'Phone number is a required field',
      error_phone: 'The phone number is entered incorrectly',
      exit_text: 'You really want to close tab?'
    },
    rs: {
      set_country: 'Niste odaberete zemlju',
      set_house: 'House is a required field',
      set_fio: 'Niste popunite imenom',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Invalid format Ime',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'Niste napuniti telefon',
      error_phone: 'Invalid format Telefon',
      exit_text: 'Da li ste sigurni da želite da zatvorite karticu ? Pre završetka naloga ostaje jedan taster pritisnuti!'
    },
    fr: {
      set_country: 'Vous n\'avez pas choisi le pays',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_fio: 'Vous n\'avez pas indiqué le nom',
      error_fio: 'Le nom est incorrect',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_phone: 'Vous n\'avez pas indiqué le numéro de téléphone',
      error_phone: 'Le numéro de téléphone est uncorrecte',
      exit_text: 'Êtes-vous sûr de fermer l\'onglet ? Il vous reste de cliquer sur un seul bouton pour passer la commande !'
    },
    it: {
      set_country: 'Cortesemente compilare questo spazio vuoto',
      set_house: 'House is a required field',
      set_fio: 'Non è stato inserito il nome',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_fio: 'Errato il nome',
      set_phone: 'Inserire il numero di telefono',
      error_phone: 'Errato il numero di telefono',
      exit_text: 'Sicuro di chiudere la pagina? Per completare l\'ordine basta solo premere il bottone!'
    },
    de: {
      set_country: 'Das Land ist nicht gewählt.',
      set_house: 'House is a required field',
      set_fio: 'Name ist nicht ausgefüllt',
      error_fio: 'Name ist falsch ausgefüllt',
      set_phone: 'Telefon ist nicht ausgefüllt',
      set_address: 'Ausfüllen Sie die Adresse',
      set_city: 'Ausfüllen Sie die Stadt',
      error_email: 'Falsche E-Mail-Adresse',
      error_phone: 'Telefon ist falsch ausgefüllt',
      exit_text: 'Wirklich diesen Tab schließen? Bis Bestellungsabnahme bleibt nur ein Klick!',
      error_address: 'Falshe Adresse!Bitte korrigieren Sie diese Bestellmaske'
    },
    cs: {
      set_country: 'Nezvolil jste zemi',
      set_fio: 'Nevypsal jste jméno, jméno po otci a příjmení',
      error_fio: 'Nesprávně zadané jméno, jméno po otci a příjmení',
      set_phone: 'Nezadal jste Telefonní číslo',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'Nesprávě zadané Telefonní číslo',
      set_address: 'Address is a required field',
      set_house: 'House is a required field',
      set_city: 'City is a required field',
      exit_text: 'Jistě chcete uzavřít stránku? Abyste ukončil zadání objednávky, náleží stlačit jedno tlačítko!',
      set_comment: 'Řeknete prosím o Vašem problému',
      set_holder_name: 'Zadejte prosím jméno nominanta',
      set_nomin: 'Zadejte prosím nominaci'
    },
    cn: {
      set_country: 'You haven’t chosen your country',
      set_house: 'House is a required field',
      set_fio: 'You haven’t entered  your first and last name',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      error_fio: 'Your first and last name were entered incorrectly',
      error_address: 'Invalid address, please, refill the form',
      set_phone: 'You haven’t entered your phone number',
      error_phone: 'Your phone number was entered incorrectly',
      exit_text: 'Do you really want to close the tab? Before an order completion  you should press only 1 button!'
    },
    sk: {
      set_country: 'Nezadali ste krajinu',
      set_fio: 'Nezadali ste plné meno',
      error_fio: 'Neplatné plné meno',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      set_phone: 'Nezadali ste telefón',
      error_phone: 'Neplatný telefón',
      exit_text: 'Ste istí, že chcete zatvoriť kartu? Pre dokončenie objednávky zostalo potrebné jedné kliknutie!',
      set_comment: 'Povedzte niečo o svojom probléme',
      set_holder_name: 'Vyplňte meno kandidáta',
      set_nomin: 'Vyplňte nomináciu'
    },
    th: {
      set_country: 'คุณไม่ได้ยังไม่ได้เลือกประเทศ',
      set_fio: 'คุณไม่ได้ระบุชื่อจริง',
      error_fio: 'ชื่อนี้ใช้ไม่ได้',
      set_phone: 'คุณยังไม่ได้กรอกเบอร์โทรศัพท์',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      error_phone: 'เบอร์โทรศัพท์นี้ใช้ไม่ได้',
      exit_text: 'คุณแน่ใจไหมว่าจะออกจากหน้านี้ การสั่งซื้อของคุณเหลืออีกเพียงขั้นตอนเดียวเท่านั้น!',
      set_comment: 'Povedzte niečo o svojom probléme',
      set_holder_name: 'Vyplňte meno kandidáta',
      set_nomin: 'Vyplňte nomináciu'
    },
    gr: {
      set_fio: 'Δεν έχετε συμπληρώσει το ονοματεπώνυμο',
      set_phone: 'Μη έγκυρος αριθμός τηλεφώνου',
      error_address: 'Invalid address, please, refill the form',
      set_address: 'Address is a required field',
      set_house: 'House is a required field',
      set_city: 'City is a required field',
      error_phone: 'Λάθος αριθμός τηλεφώνου! Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου ξεκινώντας με 69'
    },
    ko: {
      set_country: '국가를 선택하지 않았습니다',
      set_fio: '성명을 입력하지 않았습니다',
      error_fio: '유효하지 않은 이름',
      set_address: 'Address is a required field',
      set_city: 'City is a required field',
      set_house: 'House is a required field',
      error_address: 'Invalid address, please, refill the form',
      set_phone: '전화번호를 입력하지 않았습니다',
      error_phone: '유효하지 않은 전화번호',
      exit_text: '정말 이 페이지에서 나오시겠습니까? 주문까지 오직 한 단계만 남았습니다!'
    }
  }
};

function set_package_prices(package_id) {
  if (package_prices[package_id] === undefined) {
    return;
  }

  var price = package_prices[package_id]['price'] * 1,
      old_price = package_prices[package_id]['old_price'] * 1,
      shipment_price = package_prices[package_id]['shipment_price'] * 1;
  $('.js_new_price').each(function () {
    $(this).is('input') ? $(this).val(price) : $(this).text(price);
  });
  $('.js_old_price').each(function () {
    $(this).is('input') ? $(this).val(old_price) : $(this).text(old_price);
  });
  $('.js_full_price').each(function () {
    $(this).is('input') ? $(this).val(price + shipment_price) : $(this).text(price + shipment_price);
  });
  $('.js_delivery_price').each(function () {
    $(this).is('input') ? $(this).val(shipment_price) : $(this).text(shipment_price);
  });
  $('input[name=price]').each(function () {
    $(this).val(price);
  });
  $('input[name=shipment_price]').each(function () {
    $(this).val(shipment_price);
  });
  $('input[name=total_price]').each(function () {
    $(this).val(price + shipment_price);
  });
  $('input[name=total_price_wo_shipping]').each(function () {
    $(this).val(price);
  });
  $('input[name=package_id]').val(package_id);
}

function checkTimeZone() {
  var tz_name;

  try {
    tz_name = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    tz_name = 'Err get timezone';
  }

  var offset = new Date().getTimezoneOffset();
  var hours = offset / -60;
  $('form').append('<input type="hidden" name="time_zone" value="' + hours + '">');
  $('form').append('<input type="hidden" name="cc_combo_tz_name" value="' + tz_name + '">');
}

function setBrowser() {
  if (typeof ua !== 'undefined') {
    $('form').append('<input type="hidden" name="bw" value="' + ua.browser.name + '">');
  }
}

function sendPhoneOrder(form) {
  var form_data = $(form).serializeArray();
  form_data.push({
    "name": "uri_params",
    "value": window.location.search.replace("?", "")
  });
  $.ajax({
    type: "POST",
    url: "/order/create/",
    data: form_data,
    crossDomain: true,
    dataType: "json",
    success: function success(e) {}
  });
}

function cancelEvent(e) {
  try {
    if (e) {
      e.returnValue = defaults.get_locale_var('exit_text');
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
  } catch (err) {}

  return defaults.get_locale_var('exit_text');
}

function RemoveUnload() {
  window.onbeforeunload = null;
}

function showLoader() {
  var loaderDiv = document.createElement('div');
  loaderDiv.id = 'loader-block';
  loaderDiv.className = 'loader-block';
  document.getElementsByTagName('body')[0].appendChild(loaderDiv);
  var ImgUrl = '/!common_files/images/loader.gif';
  var cssValues = {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "z-index": 9999,
    "width": "100%",
    "height": "100%",
    "background": 'url(' + ImgUrl + ') center center rgba(0,0,0,0.5) no-repeat'
  };
  $('#loader-block').css(cssValues);
  $('#loader-block').animate({
    'opacity': 0
  }, 20000, function () {
    hideLoader();
  });
}

function hideLoader() {
  var loader = $('#loader-block');
  loader.remove();
}

function sendOrderData(data, callback) {
  $.post('/order/create/', data, function (resp) {
    $('input[name="esub"]').val(data.esub);

    if (data.pixel_code) {
      $('body').append(data.pixel_code);
    }

    if (callback !== undefined) {
      return callback();
    }
  });
}

function renderQueryVariable() {
  $('#parse-params__brand').text(window.brand);
  $('#parse-params__model').text(window.model);
}