/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c3aafe4e5da563711550d78afb72f6e3"],["/about/index.html","73a248a1430cf88424b3340ba86ce420"],["/archives/2023/11/index.html","f6d608445efe3c10398695b528644c4c"],["/archives/2023/11/page/2/index.html","6b06128164a0be690b498862f99c43ce"],["/archives/2023/12/index.html","61263edbda3a95c84730b94f61a97447"],["/archives/2023/index.html","2c715a45698adda1a2c84e9b44f6b258"],["/archives/2023/page/2/index.html","1d5680069cd1fb07fab05ca56fdd1a9c"],["/archives/2024/01/index.html","87294e4ad6d8b58210cf6f5f66e53aa7"],["/archives/2024/index.html","afd3df4a1d4cc2c854f90b572f7ee3f9"],["/archives/index.html","5f522d775a6d18d36e1c95497d7ba332"],["/archives/page/2/index.html","6ae80a8c22867b741bbca9d1befbc73c"],["/categories/Docker/index.html","cf9d0317ffbfecf52beda115390edefc"],["/categories/HuTool/index.html","9e085fc7dfb803850e3b1739122ffe8a"],["/categories/Java-MySQL/index.html","80d734583765ce3d75a13642381b197d"],["/categories/Java/index.html","66f6bbdc1120d162cc9af28eb88619cc"],["/categories/Java配置/index.html","25f70ef6430540d7231377b8ad6c04ec"],["/categories/hexo配置/index.html","dd37a9d92f87c45222e059d276706945"],["/categories/index.html","28cdafc519327759259f83efd6d061cf"],["/categories/实用工具/index.html","901573b89793d6876a7f4b7dc3640ec2"],["/categories/工具/index.html","aa976a95a5c585ccc5d8a285c3e5fee8"],["/categories/时间/index.html","96ce01f905e003d21111a7074aa022e4"],["/categories/视频/index.html","76866f5fa6d78dc3ec03a6d9257cd73c"],["/categories/配置/index.html","2c08eb790a44547ef34b9031876ae849"],["/categories/配置文件/index.html","f02e3e242e025e8b31cbcacb544e586c"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","aa7f874d359006472b6c1de3a2b977b0"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","562d66583a0056f19dc3079d7b7980c0"],["/page/2/index.html","a24d420171a82682b6be6c9f72142daa"],["/photos/appointment/index.html","979f1f54357c9682bbcff77d19227a44"],["/photos/babyAndBabies/index.html","1ca0e88e3b4e63f1603c9e2271c57f1d"],["/photos/game/index.html","ecf59b741eee408e9a939c2c9d854f08"],["/photos/index.html","45466d757258b57f0a695ffe0c9e5884"],["/photos/movie/index.html","6b6bf7cac4cf1fc6c5269d79538362c8"],["/photos/ohmygirl/index.html","345def80c1370ca00ec2e3fdd1fad521"],["/photos/outside/index.html","748719b98bc210e6a138d374811f9f15"],["/posts/16888.html","4806294c0ccbbee0f14cc7c3ea5ce02f"],["/posts/18206.html","8f4d57a8c4a54045bbaa7656b6c20afe"],["/posts/21635.html","12a8649031cf63ba16d7c2bdc10800da"],["/posts/22910.html","c4183dcb459d92e0b391c12031cc3eab"],["/posts/26185.html","0df713d026cc1727fba097993bbae116"],["/posts/27699.html","2033a76a2566f0c95a18ca61a41464d7"],["/posts/34134.html","2958dbe4e76e499f749ae6c731968778"],["/posts/38362.html","232dcc0a025d1679cf223d3ef015d1ec"],["/posts/4186.html","8205b4b74e6cf36b821ebccaf358dc45"],["/posts/42658.html","bd2830e94b50383f09d53db6507954f0"],["/posts/47374.html","34911512a928854f9b4f1ee0213aa337"],["/posts/52307.html","857fddaa8c1bcbd6e223c51e6ceb55fd"],["/posts/52812.html","fe16bd16047c1ae057a7b09167cbddfa"],["/posts/53486.html","e877e88a573a5fe42992f7e824595fcb"],["/posts/53714.html","e7087e1ebc84204cb12c684dd2f6c7fb"],["/posts/57395.html","58fd62468f3f7a8baeacf7dcff6a014d"],["/posts/58565.html","44acb3c0f4535d918f423c786f4619db"],["/posts/62580.html","66ab742da05827fd51eddc3565949e51"],["/posts/64329.html","9e2f6bf9fe4f7d6aed93797d73bc7829"],["/posts/9968.html","1eabd2856634c38267defae650ef199c"],["/record/index.html","85404160c1401c7c0c9c0d9ce3053ef7"],["/sw-register.js","d25067c4758ff2aec6a35f8fc10b8a0d"],["/tags/B站/index.html","ab6d83c40adba3aa3d53398bc0adac64"],["/tags/JAVA-工作总结/index.html","d38cb2c8d568e284ce047c9ad8c97dd2"],["/tags/Java-Docker/index.html","4747b104c2ea9d39b067228697583d28"],["/tags/Java-EasyExcel/index.html","697e09e37092bcaef4f1a306bfc326bb"],["/tags/Java-MYSQL/index.html","21d111324d22be707c44c6726dfce7ae"],["/tags/Java-工具/index.html","e7796b4f5d60e1d8eca2d1305b15612c"],["/tags/Java-常量/index.html","28ca9774dd7993c0c5293b420302216b"],["/tags/Java-配置/index.html","d7ae8004beb7bcdc1eab84b167f7ce93"],["/tags/SQL-便捷/index.html","658fd6427a509545edb3e27fd49e7fd1"],["/tags/index.html","4449215d2ba01ab7c64e75878ec462e8"],["/tags/java/index.html","18dbbbf6bde89ca445ef46249ee2da13"],["/tags/minio/index.html","4a007d93898323ce68ac4e8dc8172221"],["/tags/定时任务/index.html","4638f2012e15eb006deb0fdf141ad695"],["/tags/工具/index.html","f92e37c2a9d766631f790022de18e70a"],["/tags/搜索/index.html","2349ae6b1d52b4d49527ffde34ad3391"],["/tags/时间工具类/index.html","fd288ff84d6deb4300d9e465f08091d0"],["/tags/虚拟机/index.html","03e40b0a39054ae399d723618028fccd"],["/tags/递归/index.html","1ea2c170d09e01a564745f16331e3af2"],["/tags/配置/index.html","0d3b5cff2f68cb84a357a8f7bfdc29c9"],["/tags/阿里云/index.html","811c15b5f630b67f780469dd871d2c95"]];
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
