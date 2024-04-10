/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","990cc9bbdd9150cfa78501f2671fbf0a"],["/about/index.html","77c23b97746b2d22a94a98f564ac782d"],["/archives/2023/11/index.html","22fff8e991a670e2ec405432d56b8b59"],["/archives/2023/12/index.html","dbe3e7b836940cd18f3467340b728abc"],["/archives/2023/index.html","3b1eb33952243b09d090eccc5ee58404"],["/archives/2023/page/2/index.html","604f267320a4a6a7e687019b958edd37"],["/archives/2024/01/index.html","69ca9b3edfb7bc77406d3ef841ad2f1d"],["/archives/2024/02/index.html","9b0f798cf0a32a0cef236b21969bf960"],["/archives/2024/03/index.html","4aa53d27d2915a39e6a58da9d4a12276"],["/archives/2024/04/index.html","fdd31425bb805d14c6d2bbb1edaa46a2"],["/archives/2024/index.html","f4f56c2d8669dbb128c027a375b2beab"],["/archives/2024/page/2/index.html","b6cd2f4f34bd183bb048a6049a21e0d1"],["/archives/index.html","b1e27b47bab9e8c4df3b8200ee5879f0"],["/archives/page/2/index.html","63c71d483f7039b880e72e5b66b4afba"],["/archives/page/3/index.html","caf44b18e434728f366d8288649a4214"],["/archives/page/4/index.html","0cd861d230daf50db462651cbcbfed07"],["/categories/Docker/index.html","08974d86fb55a23c7ae5b60000afa1c2"],["/categories/HuTool/index.html","ca4f2b6648fe99548e913a9085b01710"],["/categories/Java-MySQL/index.html","6db2e39dba87a9758707c792a95de71e"],["/categories/Java-分享/index.html","587019616ff145a49d93448cee94e22f"],["/categories/Java-远程调用/index.html","b974b49ee3d3f6ff00bb1345de9a556c"],["/categories/Java/index.html","c069e8ab3a1420e0b973015ade9a634d"],["/categories/Java/page/2/index.html","463e8f548e180ad067c5fb98c960efa2"],["/categories/Java配置/index.html","bd60531540555790245a8c120fa29682"],["/categories/MYSQL/index.html","4a1faaf60a537d9a22da64eda037916d"],["/categories/Page/index.html","ce743c1ce0a65f9544652b3f1ef83bc1"],["/categories/Safe/index.html","c07f3ce565f7c807083fcdf7a5e96796"],["/categories/Stream/index.html","eff2abe3fc66368cdb67083b5f4d50ed"],["/categories/hexo配置/index.html","ed69b4f292a383530ad614ce3ba218fb"],["/categories/index.html","96efa5c1f5e91dcd44f9db59bfb37b5f"],["/categories/实用工具/index.html","90ad1436eb4d66f2bb457e7cd3f76d7e"],["/categories/工具/index.html","a08422796e79e5dcac217a099d6e586b"],["/categories/工具类/index.html","299afe18c5850926b4aedbeaaa6ab5fe"],["/categories/时间/index.html","c1962a10fed51a9df5bb0cec6103268e"],["/categories/配置/index.html","092c7a7e04b2c870a1bb9af755aa0ce4"],["/categories/配置文件/index.html","3fc2a7a56d1cd644f6165ad4dd7e7dfe"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","f7b55e1152d8879a010da62db1513fcf"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","016e07f56f0a75dbe2de9a3fe20d1f7f"],["/page/2/index.html","eb3085f54975b6ca7fe1c57d28edc996"],["/page/3/index.html","c1a0800001459d4d19cae783b4969c67"],["/page/4/index.html","7594e28d07cd26e6de931b9293d141a4"],["/photos/appointment/2023/index.html","6a7d9b5bda4eba378e8f3d60ccd4016c"],["/photos/appointment/2024/index.html","9928befe393d8236acd8e98eda66f08d"],["/photos/appointment/index.html","eb24133c4e6ed8e1972b0475f545e95b"],["/photos/babyAndBabies/2023/index.html","264c63c6a68e060b709aeae55959b1db"],["/photos/babyAndBabies/2024/index.html","78e23a0a2fc16a24de04feed08b462ba"],["/photos/babyAndBabies/index.html","2b71ed92b4fd92e3bcd97fae08fb95f8"],["/photos/game/dzpd/index.html","a23e5ebc4da78276ab86c5f4f6655366"],["/photos/game/gy/index.html","8954054f2a496360c50551c8e95745af"],["/photos/game/index.html","e08bffcdbb3151bb51c9cdbfee91516d"],["/photos/game/steam/index.html","48bd49bb1be058daf8adf186ccc20c1c"],["/photos/game/wzry/index.html","bf1d491432293d39f8ecf749fea4b5f8"],["/photos/index.html","68cfc1d759d36fd59c46eaeb3028cfcb"],["/photos/movie/2023/index.html","cf958f74015661730fe387078d050067"],["/photos/movie/2024/index.html","dc8ea6f06e2c0e3dbff7c5b1510f686a"],["/photos/movie/index.html","de99123154071337019fc25b6089a2a7"],["/photos/ohmygirl/2023/index.html","6236a5592747e93fb1a126c38be90715"],["/photos/ohmygirl/2024/index.html","1956f9f2b62574aa6047f5ef823abefa"],["/photos/ohmygirl/index.html","e969976de7acb6e80e8ad4ebffdab676"],["/photos/outside/NanJing/index.html","6b741c67004053d5ffe1f2d98d1800bd"],["/photos/outside/QingDao/index.html","38acaa302163cc2a115d9561185d8576"],["/photos/outside/index.html","07382d8b6390da05e03b8f69431f0fbb"],["/posts/12933.html","7f4553ed42ec264749eb593382e27cb3"],["/posts/17303.html","627070a2a5ff4ad7bfa6d5276a4be4de"],["/posts/18206.html","b7d2ad319508133b59273a94707c219c"],["/posts/20933.html","a1375521121f909975ca41bc77d0b422"],["/posts/21635.html","e61940f1dcae8907f192381292e7c20f"],["/posts/22910.html","0387953a9bed8d019375ab8812204468"],["/posts/23407.html","f61a470f277f4b08a37b8d72ab78fcef"],["/posts/26185.html","fdb3ce36bf4cf6ed657035bd9b0839c6"],["/posts/27699.html","99464eb3a04e18b073856eb39bf644ce"],["/posts/34134.html","e5644556166049f630beebadebf6ee39"],["/posts/38362.html","f39dfab103935e8a5a6efe8e28c0792b"],["/posts/4186.html","416b8c0544c155caaa48beb923ed7d30"],["/posts/42658.html","97560d83b27a05a038927d7af9956861"],["/posts/43618.html","7e26d6d47deea6b07edfa8e07f44b0a3"],["/posts/47374.html","f13ad7fbc71082bab9ea46b1d5b57bd9"],["/posts/48428.html","dfab655ae533aa39f0dcbc8e5dace5df"],["/posts/52307.html","380fbf5798a9eba3c9887930453c3cd1"],["/posts/52812.html","c4804f87ea7702514aed1918be28d362"],["/posts/53486.html","159160740b19608e26ff077b1f5b0fbd"],["/posts/53714.html","352a037dc7850cefab3145c3e1a3b303"],["/posts/54999.html","073d2d423e971aa74e7fccb314aa9edf"],["/posts/55564.html","df144fedfd483d12e73aae3e09a57041"],["/posts/57395.html","bc2765edb441334f1d738c7ad32de275"],["/posts/58565.html","8393c5e07304d40c76213beec8801cf9"],["/posts/59743.html","dfaac195573c525c2b174a7cc7c4d2db"],["/posts/62255.html","3ee28e56d0612d81f8fb6ddf07454f4e"],["/posts/62580.html","5d1c04a2c272308c7b14fcc38a99883c"],["/posts/64032.html","e0904a3aacbd84493e2ea680de6a4ed3"],["/posts/64329.html","924c47637b52badaeb142e70535f9f89"],["/posts/6594.html","59f6c726c17e25e9c731167036375000"],["/posts/9968.html","3b4adfe16803ce807ed38792ed3b1e2b"],["/record/completed/index.html","eaf4ccef7361ccf59b2d1bb60aeeec1a"],["/record/emphasize/index.html","d635c129bd63d9a671eee88f084a7d0e"],["/record/index.html","f59e1637422da3f2802171b42e549c1a"],["/record/period/index.html","5ce2526e9c1f5abedcd4b3d7b8586647"],["/sw-register.js","bcfc87e47035ac6af6c857490aac9952"],["/tags/JAVA-工作总结/index.html","73bdaad652e49473149dd09a8851f7ab"],["/tags/Java-Docker/index.html","06dcb7a3d3f17fe84f43deb77b14d9a7"],["/tags/Java-EasyExcel/index.html","e9b42f0452175e5845e4f4e97e6f7243"],["/tags/Java-List/index.html","8d697638d4d1c45e912b318de3b23527"],["/tags/Java-MYSQL/index.html","63885707d019259ac9c37399ee1331e7"],["/tags/Java-Page/index.html","e0c02af34683c2b5c90a62d601f2b8c3"],["/tags/Java-RestTemplate/index.html","1c241e13d74bdbbb5c2c57287db0e5ec"],["/tags/Java-Stream/index.html","db3e94376fe31d925a06dedb6b8f76d0"],["/tags/Java-工具/index.html","e870aa26062245bd6c341a79ba4aea96"],["/tags/Java-常量/index.html","acb810f583118aa13760329864c65a3e"],["/tags/Java-校验/index.html","109eaad30ab668e1783bf6cf0da990e8"],["/tags/Java-配置/index.html","d49ec1f3213688d527cb347371a4be39"],["/tags/Java/index.html","0b74fdba2f01be0feb9823ae2990a98d"],["/tags/SQL-便捷/index.html","4e7b9b533db11f6a579bf0dea6cba855"],["/tags/Safe/index.html","09703c8dc15608b9ac277c0c8b98012c"],["/tags/index.html","dcd03fc9fbc91d790ef2a723e779af50"],["/tags/minio/index.html","461f957a0767553ba44c6a233f770e18"],["/tags/字符串/index.html","88dcedc5d9bc63cddb6b5c7b43ffb2ce"],["/tags/定时任务/index.html","526394727b29a5db5d2081d387477f25"],["/tags/工具/index.html","88749ef92adb5cf9cead81cc291b4810"],["/tags/搜索/index.html","cd4f53d912d811833fd0c699d281d169"],["/tags/时间工具类/index.html","0124ea01c41b14a5036ad23bcdec0938"],["/tags/虚拟机/index.html","ff3953ed2ae622fd451cb9fb9b6d49d2"],["/tags/递归/index.html","1f04dccf9af3286b4711da1125f53cad"],["/tags/配置/index.html","e31aedaa00afb3d00566f6af4cc0c384"],["/tags/阿里云/index.html","d221619ef38a185e53f778cc91f26d6e"]];
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
