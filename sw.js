/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ca92b8449559c4105c967540ddccb680"],["/about/index.html","92177ea88bb0fb0fcf98a93bb46bc18e"],["/archives/2023/11/index.html","3fc20dcae964c140ec1a25ec5ad71513"],["/archives/2023/11/page/2/index.html","f2d7baa71d0e9032cb7b98fefa9d796a"],["/archives/2023/12/index.html","5ac2adbef4996053e73df652e6539ca8"],["/archives/2023/index.html","ad5e855d3a8b4ca2d15a460bc9c28f08"],["/archives/2023/page/2/index.html","ec8f6970424d45fda46f31a988599580"],["/archives/index.html","aeca58a25be95d62d187f60cadcac989"],["/archives/page/2/index.html","2e44f397ffbf168f109d507fc2943c34"],["/categories/HuTool/index.html","a050e5a50a810142d6769b27baacd894"],["/categories/Java-MySQL/index.html","b9f3858dbb1a42ceb8d3a7e1741db2e6"],["/categories/Java/index.html","cc6761cc9630ce67737e5314b18df478"],["/categories/Java配置/index.html","7a5be0f36106358574cfc9529004f2a6"],["/categories/hexo配置/index.html","65bc3276a17d90e9e0eba7c8742489a1"],["/categories/index.html","d082294a1df9135e1250432f34bf069a"],["/categories/实用工具/index.html","f87cf212c10c11b21d1a06a6542eef27"],["/categories/工具/index.html","e7cd176a0e109745d9f078933d99a051"],["/categories/时间/index.html","6c8d31cd728b7fdcce3c2eaf5d281492"],["/categories/视频/index.html","499bdfd3c2a61cb27d68965228c2d092"],["/categories/配置/index.html","2ebf4081602f2b2172f51c8a15bd9023"],["/categories/配置文件/index.html","5b29256299bd0e240ddc0ef26a18b75c"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c59abe42fd06c892dccad61ea429dc34"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","9fb7b0b2d3e8033b03ce23f23d579a21"],["/page/2/index.html","cb1a183392db448f6f46fca5441d910a"],["/photos/appointment/index.html","22bfd54623c25be23d26cac0335903ae"],["/photos/babyAndBabies/index.html","1d5f71dd946fcd70fc43bfe2ee2baa32"],["/photos/game/index.html","b1a3342414090dd629b60f865b74e73e"],["/photos/index.html","9b3910d3e40e90bd9d8d1c84528e1bf6"],["/photos/movie/index.html","e7c627228d762b754ff96a53a9f10429"],["/photos/ohmygirl/index.html","d8dc4222284fdc27b9fb98bd81778c25"],["/photos/outside/index.html","d57fbc1653b8c9d3a2e853ee0c774be7"],["/posts/16888.html","a89dbf7cc455a2e31c6934df3cfa1bf8"],["/posts/18206.html","8b60813afd753f04c92721202732595d"],["/posts/21635.html","94ec4693cd901d10bbc58f5bb9944a5f"],["/posts/22910.html","dd8d533e7a6cfdaf20fe40c8872b7181"],["/posts/26185.html","c96492fc3ceb1a9d91d4c1a76a933782"],["/posts/27699.html","648d03c7dc1a9f877be5223ce4b7a6da"],["/posts/34134.html","d4e636d51c430ba7954a0a27ee3f93cd"],["/posts/38362.html","752f95856f349f4d60cb6130af114b77"],["/posts/4186.html","d6b62338eb3cf77a51a9827cc0581f73"],["/posts/47374.html","6f9d6094e50a625fecfdd9f9fa74f8b7"],["/posts/52307.html","9039314e202215eefa47f91c318550a9"],["/posts/52812.html","08081291d384326ba63a13fc5a376eef"],["/posts/53486.html","00e0a0beac29e51a8f934234c087e793"],["/posts/53714.html","d7299d25daee8c3a131463af53023882"],["/posts/58565.html","32ae3c95609c461e5159eb2102a98343"],["/posts/64329.html","8a6c4e36d5d843ddc181eb09ac50b5ea"],["/posts/9968.html","069aff6a960b7ef8050d8649704f68c9"],["/record/index.html","52f09f7ddd60214c9e58c33a28d14497"],["/record/photos/appointment/index.html","89c52617e381a0d0037b4ff0f18737b4"],["/record/photos/babyAndBabies/index.html","14b353a0db14a1e4f036791332868a14"],["/record/photos/game/index.html","910bdebcffa2dc67a653ef675852af1e"],["/record/photos/index.html","e8c0ae9fc3e217885dd7627adeae3f6c"],["/record/photos/movie/index.html","0adc934ba1c0a63e6bd871c34304743a"],["/record/photos/ohmygirl/index.html","c487333f4a6162001bed95d499bcbd96"],["/record/photos/outside/index.html","c31c516b210d32e902b4539028d31598"],["/sw-register.js","82e23d6f4c11c84ddf3d2f8107409ba2"],["/tags/B站/index.html","a524e83c96464e8dd898b6bfdc11589c"],["/tags/JAVA-工作总结/index.html","9f82bb90ac83fe9fcc0474902619cce5"],["/tags/Java-MYSQL/index.html","d5b6b3b2fa3d54306a61ff6147a51381"],["/tags/Java-工具/index.html","8ae7a2370c2927334fd06f9c273127de"],["/tags/Java-配置/index.html","aefc2d54a643749725191f148b78a3df"],["/tags/SQL-便捷/index.html","a5562f5279b562fc89f375f92810a11b"],["/tags/index.html","c8bb51e9299b0627035135b1579999ce"],["/tags/java/index.html","ccfdab3aa243195471162dce8e775c4f"],["/tags/minio/index.html","8b7f9cabc927708b5588c8c6a9aae1da"],["/tags/定时任务/index.html","59e0288d745f5654ede39ca4f2950761"],["/tags/工具/index.html","e52e80996032d5a91b4410e2faff25fa"],["/tags/搜索/index.html","b3ea1ffb379c1e5c02d3ddabe1ce2eb9"],["/tags/时间工具类/index.html","3131bbb59fb292aebf479abd3f4b0201"],["/tags/虚拟机/index.html","c83cff291a1b8eee21ce07703209e3f7"],["/tags/递归/index.html","705163e0b443216b9353582bce133181"],["/tags/配置/index.html","285aca84cd4b04623fea1a48abee2505"],["/tags/阿里云/index.html","18601e35b020acea495a0c4ddd75c02c"]];
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
