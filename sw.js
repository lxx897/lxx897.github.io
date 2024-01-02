/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","abf992e4bf2357e67f0757ed368b76ea"],["/about/index.html","2c8b5b8aa3cd62e9988013d5fe7ff568"],["/archives/2023/11/index.html","41f5be2f0ff2f397a2a82baf070188f8"],["/archives/2023/11/page/2/index.html","0a471df370c3404d4587b7b8667a48b3"],["/archives/2023/12/index.html","6d97877a14c9b4a442ea3240ff061808"],["/archives/2023/index.html","688c7a8699387a7edad8896d8888fb01"],["/archives/2023/page/2/index.html","7ac60f7d88add76a0b804e234bd58e38"],["/archives/index.html","12cc68cb6b65273a67697e22eb97c56f"],["/archives/page/2/index.html","62dc0ab13d5788121b2ea9b29318106b"],["/categories/HuTool/index.html","00d4d00a4fe13dc9a1d95694a11771c9"],["/categories/Java-MySQL/index.html","5a38da896dcf49ce24449a652191d964"],["/categories/Java/index.html","2853d457b1a6b83040dc18c2503e0b06"],["/categories/Java配置/index.html","0e3140c691336f5873be92ec05e93527"],["/categories/hexo配置/index.html","96e32bdd71691fd67995c1dee48fd0af"],["/categories/index.html","96f38f33537bb2cdc544ccc29a3a8c2e"],["/categories/实用工具/index.html","6b6abbebb4e71059020ee7a89a997746"],["/categories/工具/index.html","56434474ccae1991b3309a11a5b3e43d"],["/categories/时间/index.html","2eb968722b0940e0a4aa4b9acf636a22"],["/categories/视频/index.html","c8ef8a92782dd6488d99700bcd83898e"],["/categories/配置/index.html","b5379ba11618bf3808b06337a92aa8a0"],["/categories/配置文件/index.html","3f48d27143d00068833ea995369c1c7b"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","a9622023d65f2147fd0e16f5d9e7f391"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","e267f4f1ddc6d7db242a7e870b8247f1"],["/page/2/index.html","2a97f318ae2793fe06c29deb6d3d670e"],["/photos/appointment/index.html","8b530297359894875d90cac9995ad6b4"],["/photos/babyAndBabies/index.html","8b804a50f8d69bef39005758be1f4ab0"],["/photos/game/index.html","1bc3367853e4d68e16725fe98527f343"],["/photos/index.html","f01947d01fdfb4085c1397b0a42ba396"],["/photos/movie/index.html","c01339232a56020d0be012cb46364f63"],["/photos/ohmygirl/index.html","58154ee927a10fdd7273e9ecfb46c7f9"],["/photos/outside/index.html","cc89b40437c68d25414aed5a52d55600"],["/posts/16888.html","ca883062e27ce9e7f4104e68b4ac7907"],["/posts/18206.html","699b5162eee3b412a9ab066ba97c8bab"],["/posts/21635.html","110b89547d44b55f4cd7e71bf807f4d3"],["/posts/22910.html","7185330e43cf9200fdbaa38b8af5b9fa"],["/posts/26185.html","acb2289d8fab6a4e34188705829f5a32"],["/posts/27699.html","0fd34c96d926e4865bfec8786e0510ea"],["/posts/34134.html","38ae01725ab94ed6998ff7beddcfa3ca"],["/posts/38362.html","24b1084b2f124529a4bd93836560c39c"],["/posts/4186.html","f33efc3d317a493d90f8057a4ff2fa81"],["/posts/42658.html","fa6aa51ce8ed3691063fb2ff8a330423"],["/posts/47374.html","7332b05395055146e02cbf6cdbcf6543"],["/posts/52307.html","efb9bd46ff9fa01f0ec640af9c57d161"],["/posts/52812.html","911a608336fe7ceb19cf5380ceb0999d"],["/posts/53486.html","85bc99aba3e8550e4fd907305dbfc21e"],["/posts/53714.html","651714ec9abdb34eb27507544d4c87ca"],["/posts/58565.html","dc61a9724eb3571419fe8b12ce6aaacf"],["/posts/62580.html","4145b91c706cc62d40e9afe95dbd8f72"],["/posts/64329.html","ec1490ef3bc81bd449bb6e0fd00bb122"],["/posts/9968.html","d1fdf8e397d653ec8f5b1b9fca38cf2e"],["/record/index.html","493eeeeedeead7b9d3b4116ebcc98563"],["/sw-register.js","7cd71644c41719d4132b97375d29c96f"],["/tags/B站/index.html","f273bd0f255deec76c4214e0c6082e4b"],["/tags/JAVA-工作总结/index.html","11d3ec8665b98e30aa23da4f0e58cef6"],["/tags/Java-EasyExcel/index.html","411769c5f8f1534041e13b164a0470ce"],["/tags/Java-MYSQL/index.html","e383a25e3f159f5f585716e55cc93742"],["/tags/Java-工具/index.html","c194c589c2db462a29c0fd5c43be665a"],["/tags/Java-常量/index.html","f4b71e441cbb8de3b047b6e669a27ec5"],["/tags/Java-配置/index.html","93cd278bbf69cf8d45506623630abe86"],["/tags/SQL-便捷/index.html","7c0273f822598e4147b4b9a76c3dd0a7"],["/tags/index.html","340c4cb2e75267f7cf81ccc547d2c6d4"],["/tags/java/index.html","a8b77d6dae939fa7da0dd00cacabd993"],["/tags/minio/index.html","1f2720308c9feab23e5e707ff6f33786"],["/tags/定时任务/index.html","6d0dd60f5e0a06e8a9d81a58cbb5ef34"],["/tags/工具/index.html","7b0f195ad5fb96023882d36cc2b8025c"],["/tags/搜索/index.html","4310faa229c2722bd561f4937d1838ec"],["/tags/时间工具类/index.html","5ba1e019ff8dd7eedccb06d27d2139ab"],["/tags/虚拟机/index.html","21281868d9b6d2c95914e0c5b29f1b6d"],["/tags/递归/index.html","6ff17102e3857bf4c59f39315e9746fa"],["/tags/配置/index.html","fb42f21312d37c77bd7be21167d50ed2"],["/tags/阿里云/index.html","ceafdbf5a5876c88afc8a4a0d2d94734"]];
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
