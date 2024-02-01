/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fb9094b3a8f51e434dd3fb1e0669bd74"],["/about/index.html","b4b114465679d31be020168a064f7c0b"],["/archives/2023/11/index.html","a0531d2876c8a24c4c7f506e3c7a95c1"],["/archives/2023/11/page/2/index.html","9a7138b1fbf710cb2373223887560144"],["/archives/2023/12/index.html","dae614c734f961194ad238c610ea9fa8"],["/archives/2023/index.html","e49f5434f3f684d821364c943c0350c2"],["/archives/2023/page/2/index.html","21963e3b4aebd45bfd251d26a00c6900"],["/archives/2024/01/index.html","333389929c15ca46a671944caee71ca3"],["/archives/2024/index.html","322556c217efc64fed54f71269c50f3d"],["/archives/index.html","bce4142e93ee72583db39a123f30e5b0"],["/archives/page/2/index.html","f4ef1c7caaa744d9a11dbc80b23f7ba5"],["/archives/page/3/index.html","4ca8c197807f1fbc9dff76f38cd2d00d"],["/categories/Docker/index.html","379036d0d9c208fc208c1137d8170212"],["/categories/HuTool/index.html","6ebeed111d5a8cda47f231cd1aa60de8"],["/categories/Java-MySQL/index.html","6faaee85b0fefe0841bf3e75cee88499"],["/categories/Java-远程调用/index.html","98d6bbf3f850d3617e88c87802dbc170"],["/categories/Java/index.html","a74043427a5b0ec653cbef34a6f79402"],["/categories/Java配置/index.html","2f92ec8d91587a6e9b33e78160db781c"],["/categories/MYSQL/index.html","0525b3a563347a21c8d7942f055ad225"],["/categories/Page/index.html","8011526a2434a9fa2ed273867534f1e5"],["/categories/Safe/index.html","08f78e401374ac105ef2278eaaa78fef"],["/categories/hexo配置/index.html","21ee999c9830a3a0112baa5a337d97b1"],["/categories/index.html","35bd1585a11e46d0bfabece30af6778e"],["/categories/实用工具/index.html","acb8155a577a68c56073a0a2527b3ff7"],["/categories/工具/index.html","cbd0bf4eadf9aadb48b3ba97e50d77f6"],["/categories/工具类/index.html","96bc5d6b741ee01dba5e78fe184b42f3"],["/categories/时间/index.html","f564bec28d18b110098fdb8ea64f3fb7"],["/categories/视频/index.html","6927d7ea481a15b05754c7094dd98df2"],["/categories/配置/index.html","f1e1b5861996e0b9b66ee7e898550b58"],["/categories/配置文件/index.html","0b713897b5bf6755f34ba4ee325e420b"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","f9a5749033cb25a544c721747fb5e7ec"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","6454c46cde1e00cc7dd278c13622ee46"],["/page/2/index.html","076fe46a0009a8fabf906948c302082e"],["/page/3/index.html","58de41e653e2173bcfd20648d7a23a35"],["/photos/appointment/2023/index.html","2063431fee32b9213f87fab6a4682906"],["/photos/appointment/2024/index.html","9d574a22e94d593cbfb14cfdeba231dd"],["/photos/appointment/index.html","d70f9d4d757cbefae3bfac32d1bd42b1"],["/photos/babyAndBabies/2023/index.html","6cf35af0d089caad042fb82172329726"],["/photos/babyAndBabies/2024/index.html","9b4cd90069a1bb78e35f2c1194b0b998"],["/photos/babyAndBabies/index.html","13a8d34d625bf3b2441085f2e60291bb"],["/photos/game/dzpd/index.html","0bd960121f89092d286121a48bf3e216"],["/photos/game/gy/index.html","f535806892c8a35f981198cf2d546fce"],["/photos/game/index.html","1b1cee3b25012becd01dfd1d24f927bd"],["/photos/game/steam/index.html","5ecfa9e8c534ceb3f12d8bb75aaa1836"],["/photos/game/wzry/index.html","d00f4c44b42c538836db1d2c05f412ee"],["/photos/index.html","4f08f5a0e5953cfda617ece1cb6f359c"],["/photos/movie/2023/index.html","ca4f078ecb1b88595a07d8f516fe6f67"],["/photos/movie/2024/index.html","216774240428d9bdc4ae9a183de56039"],["/photos/movie/index.html","f35752e918f153c8e3b656a1530768c7"],["/photos/ohmygirl/2023/index.html","ac621c144540ab1d69cc8ca1ab095a06"],["/photos/ohmygirl/2024/index.html","d67f57a9450def24de7820c852c35b14"],["/photos/ohmygirl/index.html","5f712265287e029e391c7d3eba5e3b36"],["/photos/outside/NanJing/index.html","35bc835314c17bc826bf0a6fe9f515af"],["/photos/outside/QingDao/index.html","e6fcdeee38093c473b84a88a581cc40c"],["/photos/outside/index.html","522ce0fb81df84c63ca095e3b1dfa240"],["/posts/16888.html","6be50e3a0a0348e8c3bef3160f3c9278"],["/posts/17303.html","3c37ba8c4a8f9087deb7b8f86f491558"],["/posts/18206.html","e7ce7423ca68455960542510312c1a14"],["/posts/21635.html","b0a8dfdb57f0f8c48cb406ba1f40c5a3"],["/posts/22910.html","554495882366f2944856d64cfdebfd50"],["/posts/26185.html","4a2965ac045725c8b69c7068f9755109"],["/posts/27699.html","30971411eb1149bbfd85d15d3e552e36"],["/posts/34134.html","b6ba11cf4d813c0f1e4eb31740ff3917"],["/posts/38362.html","008e8fd1b24df9843db914c585949535"],["/posts/4186.html","c5650cbd55251473c8aa876e2b0e8994"],["/posts/42658.html","0935772a13ba477ddcc0600242a31a76"],["/posts/43618.html","9f7997d46d98adefe7c529f925386017"],["/posts/47374.html","e7f6b46997181078590a8e8f9c422c59"],["/posts/48428.html","28542052ac551631862cb49cefc026ea"],["/posts/52307.html","dc7c9635c59e3c0608213ec88f05ad4a"],["/posts/52812.html","a1b6ccc219967ce39b2b386de960b0d1"],["/posts/53486.html","3ac44a3403f488745a112d2276fc0c9f"],["/posts/53714.html","83487d2cbe309b16e8e648621048e93d"],["/posts/57395.html","83055e0a9602b3eb0eafd6dfa647bda6"],["/posts/58565.html","157aff70981ae1215b6d10411d5e68ab"],["/posts/59743.html","e929616f24e16eb470b6adc711b9c82d"],["/posts/62255.html","e9cc8a9c61b44ada26634b2a39da9fc4"],["/posts/62580.html","5fc945441159db6411e38637c6a68655"],["/posts/64032.html","86c6e0c2feed68326b5376ec3ff1d83f"],["/posts/64329.html","7db362c87910a31837c560f859f866ab"],["/posts/9968.html","9b79d2abce8acdfa2f52e7e1fde2ac7e"],["/record/completed/index.html","362f6c2e1e073d4031b936d27328df64"],["/record/emphasize/index.html","de032ccfbeebe979fc8fc91867d75027"],["/record/index.html","30c8e80152c0ab75ed1bb8743ae1360c"],["/record/period/index.html","d5980a2d60a85554927ac64603b3c5c8"],["/sw-register.js","5ef4b29d7159820f94a3cd60c8135ecc"],["/tags/B站/index.html","12298d8b7bb1cb44f7a2cad34f923cf4"],["/tags/JAVA-工作总结/index.html","a013d3011d9ade1dea382e0796721ed3"],["/tags/Java-Docker/index.html","6911244b17d482fe03f3a611ab1b29c9"],["/tags/Java-EasyExcel/index.html","177954c296bddd9d3eedeb7582181ec1"],["/tags/Java-MYSQL/index.html","81661a0f9fa60fe6e18d5790f4c54b20"],["/tags/Java-Page/index.html","aedc2536d3f6704a7f7c172a6be28cab"],["/tags/Java-RestTemplate/index.html","a711d5d194ecec264e2cb10b8fc5aab0"],["/tags/Java-工具/index.html","7219caf3b232830f40e9b73946387eb4"],["/tags/Java-常量/index.html","9dfc526edbd0df27fc393d7208391b6a"],["/tags/Java-校验/index.html","5e43807bc1bfb643e3e8548e58747ee6"],["/tags/Java-配置/index.html","736ed11218d97b26d5e856f1a456a58a"],["/tags/SQL-便捷/index.html","de31fffabedf0f2b987ce1c7daf8b24c"],["/tags/Safe/index.html","b30e3df3906c4c6141d0a0ed39c6e6f9"],["/tags/index.html","392e5818fbde11ee1e869e258e87a3c2"],["/tags/java/index.html","b018d3f0682a9b476206bdae35594806"],["/tags/minio/index.html","43165e475b3e60d8f72b9c18510715f5"],["/tags/定时任务/index.html","5c933a40270e22c66ebac71aba2362b5"],["/tags/工具/index.html","b6a2ad50c0b56d27438755fb1c3eeb18"],["/tags/搜索/index.html","583ec57867c822afa02df6d91ddefd5a"],["/tags/时间工具类/index.html","62efda25e3c527b7fc41f8eb8712725d"],["/tags/虚拟机/index.html","5b6efe308d812910e879d9eff593dfc2"],["/tags/递归/index.html","508a3ec8108fae8f18ad64ef33ee4362"],["/tags/配置/index.html","21e400d88cd54d295ad1a79d6f0c245f"],["/tags/阿里云/index.html","0f7f9b045688d707c2e969da8b8d1390"]];
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
