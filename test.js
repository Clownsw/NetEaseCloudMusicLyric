var CryptoJS = require("crypto-js");

var bitsPerDigit = 16
var biHalfRadix = 32768
var maxDigits = 131
var maxDigitVal = 65535
var highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535)
var biRadix = 65536
var biRadixSquared = 4294967296
var biRadixBits = 16
var lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535)
var hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f")
var ZERO_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var bigZero = { "digits": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "isNeg": false }
var bigOne = { "digits": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "isNeg": false }
var i = 'QfWiEhFUkhmPQ7ne'
var bd2x = {}
let Rg7Z = { "emj": { "色": "00e0b", "流感": "509f6", "这边": "259df", "弱": "8642d", "嘴唇": "bc356", "亲": "62901", "开心": "477df", "呲牙": "22677", "憨笑": "ec152", "猫": "b5ff6", "皱眉": "8ace6", "幽灵": "15bb7", "蛋糕": "b7251", "发怒": "52b3a", "大哭": "b17a8", "兔子": "76aea", "星星": "8a5aa", "钟情": "76d2e", "牵手": "41762", "公鸡": "9ec4e", "爱意": "e341f", "禁止": "56135", "狗": "fccf6", "亲亲": "95280", "叉": "104e0", "礼物": "312ec", "晕": "bda92", "呆": "557c9", "生病": "38701", "钻石": "14af6", "拜": "c9d05", "怒": "c4f7f", "示爱": "0c368", "汗": "5b7a4", "小鸡": "6bee2", "痛苦": "55932", "撇嘴": "575cc", "惶恐": "e10b4", "口罩": "24d81", "吐舌": "3cfe4", "心碎": "875d3", "生气": "e8204", "可爱": "7b97d", "鬼脸": "def52", "跳舞": "741d5", "男孩": "46b8e", "奸笑": "289dc", "猪": "6935b", "圈": "3ece0", "便便": "462db", "外星": "0a22b", "圣诞": "8e7", "流泪": "01000", "强": "1", "爱心": "0CoJU", "女孩": "m6Qyw", "惊恐": "8W8ju", "大笑": "d" }, "md": ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"] }
var j2x = {};

var JW5b = function (i2x, v2x) {
    try {
        v2x = v2x.toLowerCase();
        if (i2x === null)
            return v2x == "null";
        if (i2x === undefined)
            return v2x == "undefined";
        return bd2x.toString.call(i2x).toLowerCase() == "[object " + v2x + "]"
    } catch (e) {
        return !1
    }
};

j2x.gV4Z = function (i2x) {
    return JW5b(i2x, "function")
}

j2x.bg2x = function (k2x, cG3x, O2x) {
    if (!k2x || !k2x.length || !j2x.gV4Z(cG3x))
        return this;
    if (!!k2x.forEach) {
        k2x.forEach(cG3x, O2x);
        return this
    }
    for (var i = 0, l = k2x.length; i < l; i++)
        cG3x.call(O2x, k2x[i], i, k2x);
    return this
}

j2x.xk9b = function (gL4P, Xf9W, cFB4F) {
    if (!gL4P)
        return "";
    var bx2x = [];
    for (var x in gL4P) {
        bx2x.push(encodeURIComponent(x) + "=" + (!!cFB4F ? encodeURIComponent(gL4P[x]) : gL4P[x]))
    }
    return bx2x.join(Xf9W || ",")
}

j2x.cr3x = function (gL4P) {
    return j2x.xk9b(gL4P, "&", !0)
}

var buV1x = function (chL0x) {
    var m2x = [];
    j2x.bg2x(chL0x, function (chE0x) {
        m2x.push(Rg7Z.emj[chE0x])
    });
    return m2x.join("")
};

// ====================================================
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
        i = biCompare(h, this.modulus) >= 0; i;)
        h = biSubtract(h, this.modulus),
            i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
        d = a,
        e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
            e = biShiftRight(e, 1),
            0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)
        c[e] = b.charCodeAt(e),
            e++;
    for (; 0 != c.length % a.chunkSize;)
        c[e++] = 0;
    for (f = c.length,
        g = "",
        e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
            h = 0,
            i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
                j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
            l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
            g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
            i = k,
            j = 0; e >= j; ++j,
            ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
                c.digits[i] = h & maxDigitVal,
                d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
        c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
        c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
        c
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}

function digitToHex(a) {
    var b = 15
        , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
            a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
        d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
        e = b % bitsPerDigit,
        f = bitsPerDigit - e,
        g = 0,
        h = g + 1; g < d.digits.length - 1; ++g,
        ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
        d.isNeg = a.isNeg,
        d
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biSubtract(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
            d = 0,
            f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
                c.digits[f] = 65535 & e,
                d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
        c = biHighIndex(a),
        d = 0,
        f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
            result.digits[f] = e & maxDigitVal,
            d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
        result
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
        c
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biAdd(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
            e = 0,
            f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
                f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                    c.digits[f] = 65535 & d,
                    c.digits[f] < 0 && (c.digits[f] += biRadix),
                    e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
        h = d; f > g; ++g,
        ++h)
        c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
        e = b % bitsPerDigit,
        f = bitsPerDigit - e,
        g = d.digits.length - 1,
        h = g - 1; g > 0; --g,
        --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
        d.isNeg = a.isNeg,
        d
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
            f.isNeg = !b.isNeg,
            a.isNeg = !1,
            b.isNeg = !1,
            g = biSubtract(b, a),
            a.isNeg = !0,
            b.isNeg = e) : (f = new BigInt,
                g = biCopy(a)),
            new Array(f, g);
    for (f = new BigInt,
        g = a,
        h = Math.ceil(d / bitsPerDigit) - 1,
        i = 0; b.digits[h] < biHalfRadix;)
        b = biShiftLeft(b, 1),
            ++i,
            ++d,
            h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
        c += i,
        j = Math.ceil(c / bitsPerDigit) - 1,
        k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)
        ++f.digits[j - h],
            g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
            n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
            o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
            p = h >= b.digits.length ? 0 : b.digits[h],
            q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
            f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
            r = f.digits[l - h - 1] * (p * biRadix + q),
            s = m * biRadixSquared + (n * biRadix + o); r > s;)
            --f.digits[l - h - 1],
                r = f.digits[l - h - 1] * (p * biRadix | q),
                s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
            g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
            g.isNeg && (g = biAdd(g, k),
                --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
        f.isNeg = a.isNeg != e,
        a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
            b = biShiftRight(b, i),
            g = biSubtract(b, g)),
        0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
        new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
        b.isNeg = a.isNeg,
        b
}

function BarrettMu(a) {
    this.modulus = biCopy(a),
        this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
        this.mu = biDivide(b, this.modulus),
        this.bkplus1 = new BigInt,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = BarrettMu_modulo,
        this.multiplyMod = BarrettMu_multiplyMod,
        this.powMod = BarrettMu_powMod
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)
        --b;
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
            b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
        e = 0; d > 0; d -= 4,
        ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
        this.d = biFromHex(b),
        this.m = biFromHex(c),
        this.chunkSize = 2 * biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new BarrettMu(this.m)
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
        this.isNeg = !1
}

function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}

function a(a) {
    var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
    for (d = 0; a > d; d += 1)
        e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
    return c
}

function b(a, b) {
    var c = CryptoJS.enc.Utf8.parse(b)
        , d = CryptoJS.enc.Utf8.parse("0102030405060708")
        , e = CryptoJS.enc.Utf8.parse(a)
        , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
    return f.toString()
}

function c(a, b, c) {
    var d, e;
    return setMaxDigits(131),
        d = new RSAKeyPair(b, "", c),
        e = encryptedString(d, a)
}

function d(d, e, f, g) {
    var h = {}
        , i = a(16);
    return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
}

function start(musicId) {
    var i2x = { "id": String(musicId), "lv": -1, "tv": -1, "csrf_token": "" }
    var window = {}
    window.asrsea = d;

    var bKB4F = window.asrsea(JSON.stringify(i2x), buV1x(["流泪", "强"]), buV1x(Rg7Z.md), buV1x(["爱心", "女孩", "惊恐", "大笑"]))
    return j2x.cr3x({
        params: bKB4F.encText,
        encSecKey: bKB4F.encSecKey
    });
}

console.log(start(22845491));

// curl 'https://music.163.com/weapi/song/lyric?csrf_token=' \
//   -H 'authority: music.163.com' \
//   -H 'accept: */*' \
//   -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
//   -H 'content-type: application/x-www-form-urlencoded' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36' \
//   --data-raw 'params=APht7bmNe0BuC6JgNGkPUaNzU6ks68KTCOOIyL12ksJhmPZBYvc4So5AfFolo6Vxmyedi8P6lF9KOASr21OMpqhdZ7sKWUn8ys%2FDnp1oyhQjYcLzUoF8ZPOYyhrzUArl&encSecKey=22d7e6a8e4e8d4d00971fdd8f3aa56dea48362567d5cb8ceaa63bcc91eb62036ee3646a6b82bf6fe5a4c20ed52f930a204a90f1ca39c0e47f4c2bec1bbd69d848ba216928859b8568fadef4a88c902340e9df23a9e71ac191b5efe188a7745e691f74bd739dcf90c1853c63587b10aed5c16144d264c808e92a11e22ecd00c17' \
//   --compressed