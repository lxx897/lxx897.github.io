/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bdb5d29a9f282e17503017f83ea48c5b"],["/about/index.html","39bd65c7f510c7f6a179b4b794bbc823"],["/archives/2023/11/index.html","256db88fbf19f5a953173d0cea6d1b9e"],["/archives/2023/11/page/2/index.html","7317d9678e545e84d5e55984fbdc804f"],["/archives/2023/12/index.html","fe6c2b861f5cfdbfbce4be894f75a588"],["/archives/2023/index.html","c4325031abe34b77283d39859f080c87"],["/archives/2023/page/2/index.html","2f757b1254223ae2940c79c876cb25e6"],["/archives/2024/01/index.html","40e4adf8af34d2349c4efc23247b3f1c"],["/archives/2024/02/index.html","1396f6139e6df9fb47a1eaf6c2aa4c16"],["/archives/2024/index.html","c80367e1b76b9cf2ac3726f908928747"],["/archives/index.html","017cc1106e1f8071f3ba278058204b3a"],["/archives/page/2/index.html","38d6fb6827cdbb4b38f82b6bc0e65a9b"],["/archives/page/3/index.html","7e5c91c1afefa674ead138c41eb71f03"],["/categories/Docker/index.html","b45f32864a92a48bd1c4b5925020c612"],["/categories/HuTool/index.html","b836d50c0ae52f07533181df2985bc16"],["/categories/Java-MySQL/index.html","38430678f44306048d63d0b8e82ae5b4"],["/categories/Java-远程调用/index.html","5b8543b0db3753e7d8bd5b768d167eae"],["/categories/Java/index.html","f72279a97a76af1f107a1fc8e2da147c"],["/categories/Java配置/index.html","a21c0e401b2787210310c2d3d34bd46d"],["/categories/MYSQL/index.html","4575ff3e766ea463467ac70fbfe6d52b"],["/categories/Page/index.html","82ffd4a726d72d7d49412f73ef2359a9"],["/categories/Safe/index.html","050425ca668c1c5dcfa22b3762db0316"],["/categories/Stream/index.html","f91447079ea10b73e48ecb6df721084a"],["/categories/hexo配置/index.html","50264e9d8f3ff986ab75df29eedf3390"],["/categories/index.html","ce5b2287e3d2c1076174d1c5a8c5e975"],["/categories/实用工具/index.html","f0f073324cbd1a221f12ddb77b22a9a6"],["/categories/工具/index.html","ccfe64c7c43b7fddd711241b45160eb8"],["/categories/工具类/index.html","dc60e52952b8f147b0b528a54c8da29a"],["/categories/时间/index.html","d86089aac3a57687dcfdfde06381fae8"],["/categories/视频/index.html","5534dc55622e026f4a229751734c8ae3"],["/categories/配置/index.html","24690a51d62ad789b5794f7ea17b3e8e"],["/categories/配置文件/index.html","c655682dec10ccd1e58efd4f2d71d888"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","755fa6a36b3ee8e658a564a96dc01001"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","313717efc631a53e55d5f7e523c36194"],["/page/2/index.html","faae59896286be9c2cc780db1580b7a9"],["/page/3/index.html","fc79699056f01eaae263cb8ed442b924"],["/photos/appointment/2023/index.html","71c8b56a4d14a803dccb800866bf4457"],["/photos/appointment/2024/index.html","4cc6d31138a0e7c5b12820d8deb750bf"],["/photos/appointment/index.html","cac7500c15cc988dd9b953d506d866c6"],["/photos/babyAndBabies/2023/index.html","f21f63659d40e6cd5aae565db9e4e8c4"],["/photos/babyAndBabies/2024/index.html","dd2a15946ab8fcb8e34cab877338196a"],["/photos/babyAndBabies/index.html","c6c0a16422114fe7c6d06a66a0ec819f"],["/photos/game/dzpd/index.html","3e68a6f494d65d9681b7f78939853300"],["/photos/game/gy/index.html","8c63151ee20ca0054cffa919720f5872"],["/photos/game/index.html","c8068f5ba0089b9e00d31acd8c986de6"],["/photos/game/steam/index.html","472e4708ce360a29c32ccc9cf82f2bfb"],["/photos/game/wzry/index.html","0294b7e774ee7bfef4b158bcc44e5506"],["/photos/index.html","cb11a761266e62c5b9678b8275b9c10a"],["/photos/movie/2023/index.html","7f4cb0ef50af49581c7e1267e580761c"],["/photos/movie/2024/index.html","463d912020693751a3b5c28351898623"],["/photos/movie/index.html","fb3cef428e9250e0b4f7814a7596efad"],["/photos/ohmygirl/2023/index.html","4e7b5b8b40c9cf9f995d78ac7661e524"],["/photos/ohmygirl/2024/index.html","ece8c610df0c7b83a73b14d411445e9d"],["/photos/ohmygirl/index.html","de9e7594e4986bebf8d6da8e63e064d5"],["/photos/outside/NanJing/index.html","3165953c3b515deac267b9b5a339413c"],["/photos/outside/QingDao/index.html","8193d486571bf06914e0465d82c341e6"],["/photos/outside/index.html","3604c99d5b464535580714e6cc828220"],["/posts/16888.html","d43ea1e740b2aa780b6b449b076d1eaf"],["/posts/17303.html","f8622bef1d9c66a963fa8eeba59808be"],["/posts/18206.html","7f8c407305217a4050ed0c3c5e1582a6"],["/posts/21635.html","c17df0c0800a76671db6698b10bbfe79"],["/posts/22910.html","dae522ba3f0e71b8939700109095e08e"],["/posts/26185.html","527623b203c74ca6feb47fca6dc00cf4"],["/posts/27699.html","9274a52fa74869dd0078b9524168294d"],["/posts/34134.html","f1e411dc9959dde1a57655d683a3ae35"],["/posts/38362.html","2f6864b8d4d592c5da0a69796b5f37c5"],["/posts/4186.html","66a49ed04dc242cf0dde751ad6dab598"],["/posts/42658.html","516b8e2449c56adf95ac1abfa80b6a5c"],["/posts/43618.html","05cf8b335834ddaef5eb985bf36efa0c"],["/posts/47374.html","d7d6e23a3db651afc290a02d46bb0ff9"],["/posts/48428.html","d184565c6173cbcdd3cd7e81d741d417"],["/posts/52307.html","797aad3e73875c51b2a830c269303117"],["/posts/52812.html","9e56d76c1003ff3392bfa5036fb8d122"],["/posts/53486.html","143167072f20c44071fc0c218d353b82"],["/posts/53714.html","7851ae1c0c9de522969661ede1b3dc94"],["/posts/54999.html","9dc73d7a8c2bf43963fcfaccda110bbc"],["/posts/57395.html","97d4340b9afc47ba8378db3c92b397ad"],["/posts/58565.html","f1e72c774e0fbed50e237b68dc91cc8c"],["/posts/59743.html","db5c6121bd081a795db4b1ee46630c4b"],["/posts/62255.html","aed76ddff3ae8c0f95034dadb413d244"],["/posts/62580.html","c5f2c882861496726f65e5584bd8d2d8"],["/posts/64032.html","94679d1c2bed0712e3500fab476dbc8d"],["/posts/64329.html","ca6cb161750fc2f511b4370b867876c5"],["/posts/9968.html","f4b7a4705bf039c67d0eabbccda61559"],["/record/completed/index.html","4bae96752e08018db230c5d3819da6c0"],["/record/emphasize/index.html","ac83ec4b5c2f2255f4e13700a4889709"],["/record/index.html","526ed270a57c9680c0b155906ed4f709"],["/record/period/index.html","28faa3d75d3796549e9ec0639c8d8ce2"],["/sw-register.js","a83ee28a13e963cf68434fbcbcb51976"],["/tags/B站/index.html","137857d1c55a582abc0ed5363225623f"],["/tags/JAVA-工作总结/index.html","f506521c882d01a8726553bf78d73558"],["/tags/Java-Docker/index.html","b00e7184dc5cd69bb3d64fe1aaea0fb5"],["/tags/Java-EasyExcel/index.html","d353282d242db5455b59b51937e78a1b"],["/tags/Java-MYSQL/index.html","129963f76efb8393fb45356c78339076"],["/tags/Java-Page/index.html","998df72c325d10177f78e37b218ed524"],["/tags/Java-RestTemplate/index.html","c739111db015c25171df63086a3966ce"],["/tags/Java-Stream/index.html","9d93a499719469c7107be5d010107ad8"],["/tags/Java-工具/index.html","dc9f4978f60d55ab960d963a4d38dbd4"],["/tags/Java-常量/index.html","5e0e4d841fccf69e330107a988aade5f"],["/tags/Java-校验/index.html","397be132aff5cb13b2d73bb51f18cfc4"],["/tags/Java-配置/index.html","9418bc5a11f14c747471c5e243e159e7"],["/tags/Java/index.html","f4728fd891b970bb09f28bc24f156502"],["/tags/SQL-便捷/index.html","332a2881f995870211cf11969d18e734"],["/tags/Safe/index.html","29ea7886b70e5b9022394340d2994b17"],["/tags/index.html","d26b250b23fce6edc932d79cc762a89e"],["/tags/minio/index.html","285a14d0ff6fa69a7afebcec92f86485"],["/tags/定时任务/index.html","d43425da844dba50dc3b48df036c9de6"],["/tags/工具/index.html","ddf80c809d466ec8f10833cec6a7edeb"],["/tags/搜索/index.html","32780d6d58c7e8322a6e453bd27baff9"],["/tags/时间工具类/index.html","2c0fb7929d78d0510e597073ac3c2e5e"],["/tags/虚拟机/index.html","0f1b403c9f8e31d5269d30a63fc5832d"],["/tags/递归/index.html","b3cb6cf62116412c31efc161bf907cd1"],["/tags/配置/index.html","f8c0f1e59a011c45d12f75cf700275cc"],["/tags/阿里云/index.html","b268b5f807abb2b1f2763e4705a2cf80"]];
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
