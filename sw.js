/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6cbee481280f9952686acfffd3e05696"],["/about/index.html","8e8271665056d2e4a0a6b0c2da7da112"],["/archives/2023/11/index.html","323263464a7921167ef8f90325d897aa"],["/archives/2023/11/page/2/index.html","56b546e5312012f3aac76b5bb637f6bf"],["/archives/2023/12/index.html","ad0a29eb4a2ea7b481313e31ffc89020"],["/archives/2023/index.html","eeb96e0d054d62b504a02d4dac296f42"],["/archives/2023/page/2/index.html","7e9e0bc791cb2942b904fef25e87cb78"],["/archives/2024/01/index.html","8c0c543a0409c1e5676c4733495652c2"],["/archives/2024/index.html","00d92ac14391530a7cf0e20439a63cea"],["/archives/index.html","08b483cb97d2e8d95a2f51649e6f8262"],["/archives/page/2/index.html","27335cfb1c8f6311a15ed4b12980db38"],["/archives/page/3/index.html","c5c389a22497c34430a0ba2aa45e3ea5"],["/categories/Docker/index.html","0df2ed21ccd8734e78055aed83151aaf"],["/categories/HuTool/index.html","387b671848729e8d3a371e78f615a64f"],["/categories/Java-MySQL/index.html","21448655f0a50985adc86540ac19124a"],["/categories/Java-远程调用/index.html","50dffb95e7f8f1bd6fa12efe06893d1a"],["/categories/Java/index.html","c910ae8b8b29aae779a6103e576d4a40"],["/categories/Java配置/index.html","a4bf5fd6807169081932e6e1ac1210a2"],["/categories/hexo配置/index.html","4ccd00adf5136b0b4295d0092df99862"],["/categories/index.html","0eaa6600f5b983b825339eb39e34b6cc"],["/categories/实用工具/index.html","f331c46bc5f6c8203f43a87ca1fd199e"],["/categories/工具/index.html","be58531ee0310e3d9483c2e16332b7e3"],["/categories/工具类/index.html","0e1fd6b79599a67f4d343f6ab0bf598b"],["/categories/时间/index.html","6604ff096ff8fe0605b07f00fbd1d09f"],["/categories/视频/index.html","c899d7198dd3f3d0b0e67870af524730"],["/categories/配置/index.html","5f4dcbf0cd0ad38e5c42db89d6dbbec8"],["/categories/配置文件/index.html","3c93d866a34c80fb8e3e655cf3aaee9d"],["/completed/index.html","b05c888c7b8cdab80ed6b4fad71a9096"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","b2e9e0c52208511263895e04b44a5177"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","97b7d433b0d9a99d1e3f81efa1ae9264"],["/page/2/index.html","058711c24f8bc63ab4244dbf140fcaaa"],["/page/3/index.html","e6b2d14b66eee699f3ff04cf6f4d3ffd"],["/photos/appointment/index.html","2be367134284c26c4e88fb0a4a3836c6"],["/photos/babyAndBabies/index.html","be5386eb6471961f94730a3f12650938"],["/photos/game/index.html","4fec6d4ba69ccffbb39789db758b3b03"],["/photos/index.html","0f9993b45c796971a96c7c05d1166abe"],["/photos/movie/index.html","7decb812c00a7aec0034c723848a45c6"],["/photos/ohmygirl/index.html","da1810d6ac39bbe4ae36860f7f192e0e"],["/photos/outside/index.html","6be9a4a6ae23e9d37e7a153b7cf25a7d"],["/posts/16888.html","0992394986619c11f73f6b690c7b5c06"],["/posts/18206.html","47f16360d7ceaef740567a20e0fcaca2"],["/posts/21635.html","8c4c0519a2523472fb3e4503e1cef64e"],["/posts/22910.html","b8f9d649b3e39f5c504ddf0f45b03381"],["/posts/26185.html","3572d9c2a79400dc28d1a8fd2409c10a"],["/posts/27699.html","7fd2eadbc1c3462832968b46bb6b36e6"],["/posts/34134.html","b06182f2f68ec318e5b726b1d5a7a654"],["/posts/38362.html","51f816a0137a822f3687643c2a795175"],["/posts/4186.html","a82e005ac73bc4a19dddf14c7f1c65ad"],["/posts/42658.html","a7d94ff423262d4f46e69daf87bb11d9"],["/posts/47374.html","6cc1f548e5df12d84678ea79c8318cc7"],["/posts/48428.html","b3dacb7ef5db75bbb56253c0a867e95b"],["/posts/52307.html","af9227af2b63e07587b846eb49cc0d2f"],["/posts/52812.html","08157c3338f7c2010532e5453d5824af"],["/posts/53486.html","f3e7ce44edb8f611dc968ca02f98f59b"],["/posts/53714.html","9c1e37e69e0823370f351c9922d64436"],["/posts/57395.html","1a342bf71d284036e4a37bf7cc8a948f"],["/posts/58565.html","73eb32e8e7ae6c1141653076abef9858"],["/posts/62255.html","d4161a3b89a4cc5862b2491922af7f3c"],["/posts/62580.html","406a5c1f411681379c867eb0e751d928"],["/posts/64032.html","146de13a54782bb390e923deec57d6f7"],["/posts/64329.html","d0ea13d7e0ab125eeb4529a935509a13"],["/posts/9968.html","999f5fc7dc69e5aad16d22b5839aeb91"],["/record/index.html","5bfd74e5aef4543d18ada0613e4debbb"],["/sw-register.js","3424da6793bcfb6c4eb897ed5384d491"],["/tags/B站/index.html","539fc5c5c142d6fd2c6c4701364c44ca"],["/tags/JAVA-工作总结/index.html","159dea64633b2ea3bd1e6cdaba34f448"],["/tags/Java-Docker/index.html","5ce2510ff9188c97b743ccbcfb490f87"],["/tags/Java-EasyExcel/index.html","1ad8437d58a82eb1ce959dd63b33bdf2"],["/tags/Java-MYSQL/index.html","8ec603ffeb6790a6291505e25af7de4a"],["/tags/Java-RestTemplate/index.html","1bceaac3b24242b25f56ace2c0809da3"],["/tags/Java-工具/index.html","a289dd1cd203b2ac2d7a987a01af0aa7"],["/tags/Java-常量/index.html","fd7c6b54fe70d35c25ead7c00d4f528a"],["/tags/Java-校验/index.html","a4ffdc055db4058e193a1c35ce3439c8"],["/tags/Java-配置/index.html","50509716abd8f13ffebddfced25ea95d"],["/tags/SQL-便捷/index.html","07c5e3c4dd0de191c1d5bc97aba4946a"],["/tags/index.html","708cb6ead0b48aece9818a1f1e724e7b"],["/tags/java/index.html","375c3b622636023066d6632ecdbb639a"],["/tags/minio/index.html","bf46bc92c1d092dd2b9cabdaf9ef5f51"],["/tags/定时任务/index.html","c402435f41b7b2bc203bbdb77d3eef93"],["/tags/工具/index.html","dc3f414801310379eff8289b88db5dfc"],["/tags/搜索/index.html","a3fc36ce506430240ea7bc2eea69b3b6"],["/tags/时间工具类/index.html","ffef8a914df496e3196be46e98a6d1b7"],["/tags/虚拟机/index.html","a9e313e072ff76d9bc3af0e42663f0dc"],["/tags/递归/index.html","d2a128e581600852dcea423944f6cd72"],["/tags/配置/index.html","1620aed4d0ce5d90fdd0f2b1f8ab347d"],["/tags/阿里云/index.html","1754938c67732745b6e8339217ed6707"]];
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
