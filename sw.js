/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","702c17156b5312d1f16b8663160041f8"],["/about/index.html","4e4cd211a2d3e7f3b223034e8d729019"],["/archives/2023/11/index.html","9db658b3971bf713a2f0b90d65d31074"],["/archives/2023/11/page/2/index.html","dbae6efd0819dab0b984658a280b97b8"],["/archives/2023/12/index.html","4071473f16b6493fae81d2d72aaaeee7"],["/archives/2023/index.html","9fd3034593b3d48ce30524dc5d377c53"],["/archives/2023/page/2/index.html","3596953ba449d4c3b077e8359c15e0b5"],["/archives/2024/01/index.html","8ae03c61e1e2d2431a36fc4f59cff641"],["/archives/2024/index.html","c3551522b55487a9a7647387ce911d2a"],["/archives/index.html","66ad73fe6c198df5b8f53502d9a0307f"],["/archives/page/2/index.html","7d1690cfc49c8997d9841f4ea41526af"],["/archives/page/3/index.html","4904bb5f07c61e8c4498ab30e1675e24"],["/categories/Docker/index.html","0b45e59474ff2b9ea4309ff9aeceb65a"],["/categories/HuTool/index.html","4584283f7df8321adbd1b7f4e4a2326a"],["/categories/Java-MySQL/index.html","a283ecbe09d602007b873672721a7247"],["/categories/Java-远程调用/index.html","77db0e1bb3ba5de91c7a63ab2b52a66b"],["/categories/Java/index.html","9a539afca93b1ec0d62a9ba11e0f23c3"],["/categories/Java配置/index.html","a19b73d70640c36b6ccad8e2169f9481"],["/categories/MYSQL/index.html","609a17c13ffa25ea1fcf130472df4b06"],["/categories/hexo配置/index.html","36821465d72ff2c55d853fee2c57af8d"],["/categories/index.html","f42bcb4b40754876b101cc2d8c879580"],["/categories/实用工具/index.html","59c1f695e774b5044fb45fa0b704b418"],["/categories/工具/index.html","42e4f5c40c4429c2269b19e48ea6162e"],["/categories/工具类/index.html","efe3f31c7d9727656ae00b5c674fa8f8"],["/categories/时间/index.html","a95e182002da6fc3bcd3d27fc5c56f14"],["/categories/视频/index.html","2192c517c1397ad211308d42826b3a2a"],["/categories/配置/index.html","fb7a2d7a5291ed7f5461fbfb4a7c986e"],["/categories/配置文件/index.html","6bd9b560c2ff047ae662397362031acc"],["/completed/2024/index.html","2fe1d2954a31c1bb40624c223f38fb80"],["/completed/2025/index.html","ed60ea0a945721614d23ef9813fe4d95"],["/completed/index.html","17e32e223a9f42c43df56d95e9edd813"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","8c9ee7e72fd004f0197d25993a5c3969"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1833b55b91d6155bc3708b416383859e"],["/page/2/index.html","22ab18b3f583a541c0965b5105a15860"],["/page/3/index.html","5a233e55b3d66e626c137be38e4c80a1"],["/photos/appointment/2023/index.html","7ce9179f0f3bbf955d9e56cefa323808"],["/photos/appointment/2024/index.html","37ee6601993a9660aee5ae152fd158a0"],["/photos/appointment/index.html","e0b8c0ce440546a644b7c58b4304b5fe"],["/photos/babyAndBabies/2023/index.html","31ffe19c77d43358a2c44928dfa8ef67"],["/photos/babyAndBabies/2024/index.html","89f3df4be798892f4ec4c11a3f0ceb67"],["/photos/babyAndBabies/index.html","81bd93c66e0378b966d9f9972be6e5ca"],["/photos/game/dzpd/index.html","c4c6830eb9f8878ad5dd8d0133f44ce9"],["/photos/game/gy/index.html","34ff3e507bcf486473189f65acdf85e1"],["/photos/game/index.html","f175be856e6e51c790553bc625931a4e"],["/photos/game/steam/index.html","ecda8fc7c36785505402fad54424fe76"],["/photos/game/wzry/index.html","edbe252688aa88d17c5bfd1f42059047"],["/photos/index.html","941296514bd819b5bddbc7a42f260361"],["/photos/movie/2023/index.html","86b7138baaab9e3a9363489e56589519"],["/photos/movie/2024/index.html","72163c3a930060e3cae08bb81d41d2ea"],["/photos/movie/index.html","6298546397cc24a08ff1f270d8e4a7e4"],["/photos/ohmygirl/2023/index.html","4a518b7fdce8515f2610803f70196753"],["/photos/ohmygirl/2024/index.html","0bd2e20a60b2a9442fd1e5b7d60fef01"],["/photos/ohmygirl/index.html","6d28cebde5e41f86e7e217816ddfaaf1"],["/photos/outside/NanJing/index.html","275c750c79eb25ddcf6d23f484a393cc"],["/photos/outside/QingDao/index.html","b826f1c8ee3b7e9cb860046ff5ddd9f4"],["/photos/outside/index.html","ebdb1e6b0959fb1013e17867ad2d4c09"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","a1610291d8a4eaf282c486f22837f336"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","48607ea59e63aa515fc4c98c4c0c63f1"],["/record/2024/index.html","de796fd382d6904183af150a298a070b"],["/record/index.html","9ce0d56f0270264640a628dec8c8e3d7"],["/sw-register.js","1e0fe82204857d8bea1ee14ecf09b1cc"],["/tags/B站/index.html","f5b22feba48ada4c436f15570fb5326a"],["/tags/JAVA-工作总结/index.html","436774d882511702e69aa1c4639bc111"],["/tags/Java-Docker/index.html","a480473c89f89fba6e85704c68e604b6"],["/tags/Java-EasyExcel/index.html","4c7a6dc363ba49b5d6bc521360bde41d"],["/tags/Java-MYSQL/index.html","a1ab213537b1315455adbb083f8c928c"],["/tags/Java-RestTemplate/index.html","8704998c732ad72274ffcf61b7a4b1b6"],["/tags/Java-工具/index.html","fba53029f61030bbb176282b6d439882"],["/tags/Java-常量/index.html","f1e3b02e89207e73e951d977124af940"],["/tags/Java-校验/index.html","ce443e02da863bd5b290762edaa574bd"],["/tags/Java-配置/index.html","f203e440cb329d7120c1c0d570280cd2"],["/tags/SQL-便捷/index.html","86a1683bd34630bc9ebe14baf63d293d"],["/tags/index.html","e304cafd4926807a7c8cde46123c60ce"],["/tags/java/index.html","4ad494e1530819f65f86000caa48bc01"],["/tags/minio/index.html","e1431e125c1a4d2e302b9aa7310e00e8"],["/tags/定时任务/index.html","7148b6d335e793687a1b6c13850d4a1c"],["/tags/工具/index.html","02680eb4c2e56375db1ff61dbe514680"],["/tags/搜索/index.html","7421740f4f4e0ea0da6c56911117a180"],["/tags/时间工具类/index.html","8fc9213e45fd31c50588d9342574c2c7"],["/tags/虚拟机/index.html","9ca9cca34a7a09cda8dea9681ec04214"],["/tags/递归/index.html","5ea32fa35625a2827c6a62f15a1ae726"],["/tags/配置/index.html","5521d79d7901f574ccf8123e39c07cbd"],["/tags/阿里云/index.html","f4f7746d2a8770c22d8701771ae0efaa"]];
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
