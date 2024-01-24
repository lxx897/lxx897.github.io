/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ef78194ed27ad8c2c787de5e5c20b432"],["/about/index.html","7e17455ca08420af38de1bc0ef116627"],["/archives/2023/11/index.html","2ccf0e41959d99499e8cc8758340936e"],["/archives/2023/11/page/2/index.html","62a6fb83102d8d3b04819b549826c629"],["/archives/2023/12/index.html","73601231b7ddb7e699abd5496a549513"],["/archives/2023/index.html","ab1f787a4157771f9dd6e7416315e94d"],["/archives/2023/page/2/index.html","c466cae19f9dc03e53c33599d245190f"],["/archives/2024/01/index.html","b8156f7c24a3fd4143523bee8349e8d3"],["/archives/2024/index.html","5ca128ecf4cc8bbc2890caa6770315a4"],["/archives/index.html","598036135dea836216dc8e85182c6804"],["/archives/page/2/index.html","b0e169c0261c4fd480bcf6c75afa0b3d"],["/archives/page/3/index.html","a24c0abcacf2efcc483334a427bc2a2c"],["/categories/Docker/index.html","4cc83e1546e69dd87a5b85104abbdddb"],["/categories/HuTool/index.html","2804b167192a0011d33366ab5c28a5e1"],["/categories/Java-MySQL/index.html","423bab2ba31f238a667753782461a1fb"],["/categories/Java-远程调用/index.html","08d5b1128ecf68b889e588356e63417a"],["/categories/Java/index.html","0b835e0b5babd8eee68074f833870f45"],["/categories/Java配置/index.html","592a007414df293086c7c8491f91599d"],["/categories/MYSQL/index.html","8393450e8f4530c8dbd35e1e9be902d7"],["/categories/hexo配置/index.html","f88c2e8baf29bd5a3e75bff4dc2d8ec7"],["/categories/index.html","adf76dbd38d03c0bff75ca186da608cd"],["/categories/实用工具/index.html","8b2d7080b86d58ae05c5c1997ebb44bd"],["/categories/工具/index.html","e87b0ef4da49596e37475f69d1a10e60"],["/categories/工具类/index.html","8d568e3b4f81a924d1d1112289b49693"],["/categories/时间/index.html","5a46beca4da3f2b108bedbf3f9328520"],["/categories/视频/index.html","8ad8f4dbce88fbd7266be70da651c061"],["/categories/配置/index.html","70d8b558750bf0f7bcc45a98da88e871"],["/categories/配置文件/index.html","371fd62ebeb467de53d37796c908afcb"],["/completed/2024/index.html","21c068a0fa76c9e36bc65fe0bce4b8f6"],["/completed/2025/index.html","57ed74bfad1d410d486d2d92e8a540d0"],["/completed/index.html","cb5b5d270b049178d2d889706dae0570"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","57c9eb92e7fa3cef91047f3994995adc"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0b835beb248b55223a9501398d4ec4e2"],["/page/2/index.html","cd7871ffde67749d414edd628a080124"],["/page/3/index.html","d469b3fc4f4100727f5d51411f741879"],["/photos/appointment/2023/index.html","fa34a852f248a3c777a5a10da24cded3"],["/photos/appointment/2024/index.html","2656e13ab49cbdda6901d761bbe75c40"],["/photos/appointment/index.html","a930a017124f2bb5a41c8bc2f96940e2"],["/photos/babyAndBabies/2023/index.html","219d6e1a0bb6d48f662dc8691bc98141"],["/photos/babyAndBabies/2024/index.html","0f3153af618c00362e2cecea481d911c"],["/photos/babyAndBabies/index.html","088ee8334bafb0ed72f72fee5d384988"],["/photos/game/dzpd/index.html","63d525c8d3dd7958423751789a87dffd"],["/photos/game/gy/index.html","dae041eb2e3e3cfc418e383ec8d9dbeb"],["/photos/game/index.html","cc8b2608c9257c0a251c303d7abcbd95"],["/photos/game/steam/index.html","e9bcf60a1f1d12ced1351bd813875945"],["/photos/game/wzry/index.html","ab37fc9579dce6106fb927682d0189c2"],["/photos/index.html","0301dc66cc7b97cfa92e4b4955ddea64"],["/photos/movie/2023/index.html","4f7f9fcc75bf7172b6ca71ecfea806e5"],["/photos/movie/2024/index.html","b60794e74277a8129ef36d36d0eedb06"],["/photos/movie/index.html","6a750fe5d0e6b17e163c8e66913b09c8"],["/photos/ohmygirl/2023/index.html","2261d6af7067d036b10495a3b46a9375"],["/photos/ohmygirl/2024/index.html","da5e368c249179837b8ee4faf4c4bab8"],["/photos/ohmygirl/index.html","c2b71a9f84181bdcbacd9a6b9fa9c543"],["/photos/outside/NanJing/index.html","40102f8e5d2d4fd748cabb993199532d"],["/photos/outside/QingDao/index.html","81c05c782a8aa4d065b5dde5e0e6d5cc"],["/photos/outside/index.html","f1c98d4c7d3a64cd4411fa877341a5bb"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","a1610291d8a4eaf282c486f22837f336"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","51d5affb9a30255f661e27ba9fa7d603"],["/record/2024/index.html","ccc0cf2c1ce341ea6f29aff4744f7871"],["/record/index.html","8fa56ea06ec6e8e36ccc970fab7f5728"],["/sw-register.js","ac8634a2718883b15f1d445e5e7bfbbf"],["/tags/B站/index.html","403b829314b195bb01d5e54015d11263"],["/tags/JAVA-工作总结/index.html","cb875f283f7d34ea9348a4452f5182f9"],["/tags/Java-Docker/index.html","bfc38d02a53c0aab59a90828e9707bd5"],["/tags/Java-EasyExcel/index.html","a1b5616c3cb3423eca25f2c6ca86e1f4"],["/tags/Java-MYSQL/index.html","5c214aad85814ab83c55cb96ef69c33b"],["/tags/Java-RestTemplate/index.html","88ddb62151d9b17f829181b2133dec6c"],["/tags/Java-工具/index.html","62253625b6c35e7c794c763f298ba42a"],["/tags/Java-常量/index.html","30dae7c2d1a2eb923e8aa4068085daf8"],["/tags/Java-校验/index.html","a113b55e4eea53b7f299fe5d4b8f8e9b"],["/tags/Java-配置/index.html","b3bc0c12f9f27f5bc1421e15e684cc97"],["/tags/SQL-便捷/index.html","3392d511c070609217945f29ab11a5a2"],["/tags/index.html","8e04584174fd39a468db186cb29050c4"],["/tags/java/index.html","43d77986abc115553a79d8de3b79dee7"],["/tags/minio/index.html","3f82ea5629aa3e93f36c6f332cf50d0d"],["/tags/定时任务/index.html","4f134b749694ca9933f31eeab6586935"],["/tags/工具/index.html","b5ee107233b323fcec9442bf3db5ed2a"],["/tags/搜索/index.html","e7b1c2f74ea633305aee868b64d7b7a8"],["/tags/时间工具类/index.html","7efcaa6f7b9a50e8e68ce5c8d67737ef"],["/tags/虚拟机/index.html","d504505207f38efc8eca4d4f96583f5e"],["/tags/递归/index.html","5ef77d39f6a85eac392c365ce9347c10"],["/tags/配置/index.html","5275e37d59219630f997e459056ac05f"],["/tags/阿里云/index.html","25125b082b441c23902e0a4ccd26bd13"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
