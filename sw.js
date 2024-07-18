/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2d6ddbaa46b32355d274088dce92826d"],["/archives/2023/11/index.html","b85ec36f46c807caa3de5fc4ac7eab0b"],["/archives/2023/11/page/2/index.html","2ca13fd752f247e975bfb163d42badbb"],["/archives/2023/12/index.html","9b06e0f235b8c1dbfb3cb21714991b0a"],["/archives/2023/index.html","37fd2fdd1e6ff13f3ce33a33d64e1a1f"],["/archives/2023/page/2/index.html","8fafd5809650d3e7f1baa629477bb7a2"],["/archives/2024/01/index.html","5c215129245521d50ca100a0fdeadda3"],["/archives/2024/07/index.html","41210c0de14d970a90ec8990e9318acb"],["/archives/2024/index.html","20db8ea6dae0efc5324de6fb646f96cf"],["/archives/index.html","98162c270695e92e5d8f6fb18cb3d555"],["/archives/page/2/index.html","b0b77c0f5881bec7e5893ee446c459bc"],["/archives/page/3/index.html","410dc54865bfb6e6b3d00b7e72467771"],["/categories/Docker/index.html","d6948beb8ea7e109130c662ead19be90"],["/categories/HuTool/index.html","51d942d68b7203d912196da65c7c2fc2"],["/categories/Java-MySQL/index.html","9b9909dfdebf552826277f71cfd9968b"],["/categories/Java-远程调用/index.html","62876682d103ebcb4db0ea982df4cd03"],["/categories/Java/index.html","0a94ac53075c59e3928bba0273a3149e"],["/categories/Java配置/index.html","0d54c3c038a6c1d1e1c3ff3ce711280d"],["/categories/MYSQL/index.html","9ef6eb415027004f0e8fa5f01155aaeb"],["/categories/Page/index.html","e38fafc3714ab37dd103d5f1a70d52de"],["/categories/Safe/index.html","9479422ccda33cdcdff479a8fbd63363"],["/categories/hexo配置/index.html","0c1c38508612d044c5437058f163bb33"],["/categories/index.html","0ab97161282ed9b65a37f7769b4dd42b"],["/categories/实用工具/index.html","2b56fb9ed02586735002fd9df72378db"],["/categories/工具/index.html","bb72de5ba0731083e3d71b5ac6b6cf7c"],["/categories/工具类/index.html","5f191719f94b1df7cb29d93941d7fa81"],["/categories/招标/index.html","bd962575c5d10817f85d823e9c51872f"],["/categories/时间/index.html","ddedf1413ee63bf40c3c465de5903b7c"],["/categories/视频/index.html","fd3ece02eb6a49b4146457c0433d60ec"],["/categories/配置/index.html","6203ed162cfdb97d1f436b9f8a231c88"],["/categories/配置文件/index.html","1fff8791068ee257abc7ede44ab84ee2"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","52618dc18772cc651529f2a610be4eed"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","cca9a26716871e1ce05d5adbfdfb1c01"],["/page/2/index.html","21ef1ad8882bdee571828f5f97d155a0"],["/page/3/index.html","ff9017ba90565c046320aab97d580cce"],["/photos/appointment/2023/index.html","1c5b662777c27bac2f7fb05cc5f492d7"],["/photos/appointment/2024/index.html","fbe33e927b3f71c5be39649ad3a541a6"],["/photos/appointment/index.html","681c7e8e7526bd0fd1587ea2a9c60d9d"],["/photos/babyAndBabies/2023/index.html","1c69518ad1aa08dc551edfa5dc637272"],["/photos/babyAndBabies/2024/index.html","0d7a690114a07ef49de784b0a18402f6"],["/photos/babyAndBabies/index.html","882a0c18162e59c65479fe4aa0bae231"],["/photos/game/dzpd/index.html","891cc1faeeb1a02327160b83f0d1a236"],["/photos/game/gy/index.html","5b3888c2f4a9478e6872d17e12ecb28c"],["/photos/game/index.html","1394492ad24c3f241d412b6c7a28eebb"],["/photos/game/steam/index.html","20309e98b42b10fef9184bb89c686514"],["/photos/game/wzry/index.html","830406e3077e9864dcd8f5cdf0b06999"],["/photos/index.html","bc7bfc026c0e43b771b4779d0a54ab97"],["/photos/movie/2023/index.html","ba7b66f6c29d42bfedd764c816a388b4"],["/photos/movie/2024/index.html","6cf541b1df8b6cc68f166ba51ac13468"],["/photos/movie/index.html","b3c2f3fb67bf23e2aca5258bc2353e56"],["/photos/ohmygirl/2023/index.html","4219a78a770589135ecb84835185ea3f"],["/photos/ohmygirl/2024/index.html","4bce077c578a5ecee7d612a55aaeb016"],["/photos/ohmygirl/index.html","41079500b7ac1a3f2bad306c99a8039b"],["/photos/outside/NanJing/index.html","bcb51e284b66899ce9b31289292d169d"],["/photos/outside/QingDao/index.html","ef25f761cc17ed4b72db29eb22b78e3c"],["/photos/outside/index.html","47f249131f8c75b232e675532b8bd010"],["/posts/16888.html","3a3a15aec4388c0df0f32bafc1d11a19"],["/posts/17303.html","55d61ffef8805d885dd5e1c489df9a0e"],["/posts/18206.html","2dd5137280df2af2d2bbf454004df675"],["/posts/21635.html","ab32f74b75f683ddc57d2181e51b09e4"],["/posts/22910.html","cbfe8ce81c16d9d924539acc25640cad"],["/posts/26185.html","41c8b84b72833d44cbe81252b8a3db29"],["/posts/27699.html","c414cd83804aef996f074cd51a39c2e8"],["/posts/34134.html","4b34007717fa5ec13260b9b03daaa75f"],["/posts/38362.html","e06e2ff11e955e5a6f579caec12e3093"],["/posts/4186.html","c6adefebdcaee8de2949930f6c9487e2"],["/posts/42658.html","adbb6f0b2465b74dea4ab5c43971789b"],["/posts/43076.html","927b0e238a05514081a23d3283c694bb"],["/posts/43618.html","f10b7329ac8d81c4a392018a1fedeae1"],["/posts/47374.html","26dacdb6bdf267ed12262c54c1163559"],["/posts/48428.html","7d65d1e6312a78d8ef1398a85ea7c6fc"],["/posts/52307.html","f0ed3f160ad49ef938c1126269d45c95"],["/posts/52812.html","ffc8bad52da53f00ef0c2e5532b9711b"],["/posts/53486.html","a42d54ed144cfeb4db56f7d9d189a1e1"],["/posts/53714.html","0ef6a55e9ffb515094db7e2c40f1df05"],["/posts/57395.html","543b9d5611201a25c9f8d1f21b9e7376"],["/posts/58565.html","ffdf627a5b1df5744920256952be0d0a"],["/posts/59743.html","ffc851c26d1841c1437598f71a0baaaf"],["/posts/62255.html","ee0d56a715d9c98cda3efe0ef4d7c465"],["/posts/62580.html","7cb774238cb743b57e1256d750808db4"],["/posts/63595.html","eae88578d6ff653f6e7530738b2fa869"],["/posts/64032.html","13e27895e83da932a1fd892a266f4a6f"],["/posts/64329.html","eca5c431d1064a2c3a0bc7dc65016bb6"],["/posts/9968.html","6b4b015b3454913db445fa1f7ed1e3cf"],["/record/completed/index.html","87dd8947ed84b95c3efab491a45e0946"],["/record/emphasize/index.html","ce0128032256066f7b718c38f8ea84f5"],["/record/index.html","ad321280a6f470144c8fea925a8e84dd"],["/record/period/index.html","1312eda86791c81157421cdcbe32f99f"],["/sw-register.js","8b76533b03289c26a61ea07193725e8c"],["/tags/B站/index.html","f22b7bc7c03dd17229aecc734dca3a06"],["/tags/JAVA-工作总结/index.html","0f88f43191d333df0aa2e9e3d7f7bc82"],["/tags/Java-Docker/index.html","486cc88c9d492fb4b07354f51a7504b1"],["/tags/Java-EasyExcel/index.html","0218aa6c60dfcc9b78b27393dbbe7bad"],["/tags/Java-MYSQL/index.html","7cf55505784674ba8ec6879d81825e0e"],["/tags/Java-Page/index.html","428c5efddc2a34da3c26b4a8247b380a"],["/tags/Java-RestTemplate/index.html","008bfdbd7b2ae597346a1f9304a4847b"],["/tags/Java-工具/index.html","53ab13a8f4bb62e047b341a6fc90d5f7"],["/tags/Java-常量/index.html","0bedd4430086a875a8252af464a48f52"],["/tags/Java-校验/index.html","88992e133e16150446b85933528acfd9"],["/tags/Java-配置/index.html","72be46659224cc294928ead3ebb40a07"],["/tags/SQL-便捷/index.html","14dc76aabd21a30307e01704f24acaa6"],["/tags/Safe/index.html","a89cecf9b0ba69a7f50a4127e20d6b2f"],["/tags/index.html","ec061af2c05b5fccec9190118de8942e"],["/tags/java/index.html","eff3169a2c58b1f0270f2afc68f3d2d0"],["/tags/minio/index.html","16dde430e663290bbba350603c0420f4"],["/tags/商务/index.html","2dbc9026b73ee60f47e42ee38a259037"],["/tags/定时任务/index.html","7d54ca75a6fef40b1b1ce3d601e42425"],["/tags/工具/index.html","5aa574bf132003bc933afe9bc128dfbf"],["/tags/搜索/index.html","b109d3c933b9a4414abeb028ab6dd1e0"],["/tags/时间工具类/index.html","140d2664bc7e9ab4a0c537f1e01c76b4"],["/tags/虚拟机/index.html","2a28f5987370b68d47e4c3be0c5b9c66"],["/tags/递归/index.html","b289499aea17afeecd838eb80cb6a550"],["/tags/配置/index.html","242f5eff27d51bbb1b0e005c61caa7aa"],["/tags/阿里云/index.html","549931ba03c07dc35318625054b7e34e"]];
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
