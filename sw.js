/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3bcb11f49e76640fd5002f4e3f381dbf"],["/about/index.html","251906065f45023a05c3dddbea1e6e6d"],["/archives/2023/11/index.html","4cd44d932eeb88ccad0f021211a72dab"],["/archives/2023/11/page/2/index.html","8fa5f24d3860f32dcb46cd9d026141a7"],["/archives/2023/12/index.html","ea113909cb80a34cae8ac1cb6319f8c3"],["/archives/2023/index.html","44b5d4ef192bda32bee2c8063c8d3446"],["/archives/2023/page/2/index.html","fba4c759ad62720a531650b1c19f7f46"],["/archives/2024/01/index.html","c24324163ad42392393d117893fc48ff"],["/archives/2024/02/index.html","05b45167c0bef7f1049b882fa273ec93"],["/archives/2024/index.html","8f2dee6de79cf3caac1301ae34e5c4c4"],["/archives/index.html","12a837d68baffaa1298456ae5d08abaa"],["/archives/page/2/index.html","4d7a76b6f82dceac8db8a5c77ed7e3aa"],["/archives/page/3/index.html","8f8a81bfec1ac954a66b2ff1ec574559"],["/categories/Docker/index.html","13b55e6c68b113a5f35f53cf595a7846"],["/categories/HuTool/index.html","341b6ebc256b7b869487cc75d5f4b3e8"],["/categories/Java-MySQL/index.html","c758ab44575222e3f8c330d8a1db92bc"],["/categories/Java-远程调用/index.html","093549316ca3fba5752a88f6745fdb5d"],["/categories/Java/index.html","2c6aeacbfd915055eb8457055a9b6864"],["/categories/Java配置/index.html","ad8638a76f2d1e0b856eb6e4d6b25f01"],["/categories/MYSQL/index.html","a1268068d2cd8f72f6719dd91ede996d"],["/categories/Page/index.html","40337c4eeee5cc65efa8e12e47455fe4"],["/categories/Safe/index.html","8f3b67490d608313cd229681f662b47e"],["/categories/Stream/index.html","707178376605d1852ed55278cf757137"],["/categories/hexo配置/index.html","53e35221753b062ca940523e962eb43f"],["/categories/index.html","d8c8883b379985bafef28462f0e77fbc"],["/categories/实用工具/index.html","addb1fe87170eebc732dfb656bf97093"],["/categories/工具/index.html","aedb7c28908f99d00f40ec4c427414f1"],["/categories/工具类/index.html","03e42a48a2c9a70c454a303e13c5f6c2"],["/categories/时间/index.html","64c515bf445bffdaeda003b193dad506"],["/categories/视频/index.html","f2f62dde6a7926ccc51d96b9fa7214bc"],["/categories/配置/index.html","d03dd07ead436ac19ba95b9a6fbe5199"],["/categories/配置文件/index.html","f4e164d1f6306e54392750b601000aa4"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","f66121f0fb631c4b687a88be12dfbd5c"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","9f3a503e6cc05d2c6bea90159f192541"],["/page/2/index.html","2b4823e2870b120361dd3d756288fef5"],["/page/3/index.html","f528e1c876f2f891fd5d934ca08ed08f"],["/photos/appointment/2023/index.html","375a4655385c0ceef0db188c5e0fada6"],["/photos/appointment/2024/index.html","457dde3fe7e710c78ddf531eccbbff71"],["/photos/appointment/index.html","ef76fb5ea56f804e1d9ffea0df0e8270"],["/photos/babyAndBabies/2023/index.html","f62c82da19a9b2b05a8f2334cb528a3d"],["/photos/babyAndBabies/2024/index.html","a0c4d075930a217eebdb80ac530bccd6"],["/photos/babyAndBabies/index.html","975449a37d51657ae6f2085942314c74"],["/photos/game/dzpd/index.html","44958407ade3e0dd24bdac141f10bfe0"],["/photos/game/gy/index.html","f755743aea8fd83b8523fa8894eb45ef"],["/photos/game/index.html","df220273a70280fac854ae1c41b8be3c"],["/photos/game/steam/index.html","ccdb67f41cff0a4cdba676c608e7ad61"],["/photos/game/wzry/index.html","cad6941b3755c7c27b8c16d7029e2f86"],["/photos/index.html","a5bec3e0ca33a205740802a8ccaa805f"],["/photos/movie/2023/index.html","132c679e0488bfadcced472b04c7342f"],["/photos/movie/2024/index.html","b8757a1f06514f2dd99e4586a61e88d4"],["/photos/movie/index.html","e9d9a5cfcb13160751f98cb8cbfbe34b"],["/photos/ohmygirl/2023/index.html","cb7ff2159efd59b5d70653bd7794f118"],["/photos/ohmygirl/2024/index.html","5ae5f7670addf32f08fd42c50bf9e193"],["/photos/ohmygirl/index.html","39df8a0d2d4a92c1a15ea6dba1e3a096"],["/photos/outside/NanJing/index.html","e4ed6db594f9320b2b9d39ff5ff33909"],["/photos/outside/QingDao/index.html","7a74b870f0a53e7aef44e706adef4e3c"],["/photos/outside/index.html","5ec31dbf4fe2d5b718c2ab4fb61a53ac"],["/posts/16888.html","d43ea1e740b2aa780b6b449b076d1eaf"],["/posts/17303.html","f8622bef1d9c66a963fa8eeba59808be"],["/posts/18206.html","7f8c407305217a4050ed0c3c5e1582a6"],["/posts/21635.html","c17df0c0800a76671db6698b10bbfe79"],["/posts/22910.html","dae522ba3f0e71b8939700109095e08e"],["/posts/26185.html","527623b203c74ca6feb47fca6dc00cf4"],["/posts/27699.html","9274a52fa74869dd0078b9524168294d"],["/posts/34134.html","f1e411dc9959dde1a57655d683a3ae35"],["/posts/38362.html","2f6864b8d4d592c5da0a69796b5f37c5"],["/posts/4186.html","66a49ed04dc242cf0dde751ad6dab598"],["/posts/42658.html","516b8e2449c56adf95ac1abfa80b6a5c"],["/posts/43618.html","05cf8b335834ddaef5eb985bf36efa0c"],["/posts/47374.html","d7d6e23a3db651afc290a02d46bb0ff9"],["/posts/48428.html","d184565c6173cbcdd3cd7e81d741d417"],["/posts/52307.html","797aad3e73875c51b2a830c269303117"],["/posts/52812.html","9e56d76c1003ff3392bfa5036fb8d122"],["/posts/53486.html","143167072f20c44071fc0c218d353b82"],["/posts/53714.html","7851ae1c0c9de522969661ede1b3dc94"],["/posts/54999.html","9dc73d7a8c2bf43963fcfaccda110bbc"],["/posts/57395.html","97d4340b9afc47ba8378db3c92b397ad"],["/posts/58565.html","f1e72c774e0fbed50e237b68dc91cc8c"],["/posts/59743.html","db5c6121bd081a795db4b1ee46630c4b"],["/posts/62255.html","aed76ddff3ae8c0f95034dadb413d244"],["/posts/62580.html","c5f2c882861496726f65e5584bd8d2d8"],["/posts/64032.html","94679d1c2bed0712e3500fab476dbc8d"],["/posts/64329.html","ca6cb161750fc2f511b4370b867876c5"],["/posts/9968.html","f4b7a4705bf039c67d0eabbccda61559"],["/record/completed/index.html","4bfaa1ada2b4ae8558c094039e71038a"],["/record/emphasize/index.html","5a62d045d69d5f72e1de00480657c5c0"],["/record/index.html","d3daa6334a53570fa4f5db919c37a904"],["/record/period/index.html","969c3777c8fda574258af6501760fd32"],["/sw-register.js","6b8a36c2ed929d6fb9b058aa3cbe4841"],["/tags/B站/index.html","823b59d98312253e9065778e2f5dc6f2"],["/tags/JAVA-工作总结/index.html","8873a64b8a2ca023411238d593650e36"],["/tags/Java-Docker/index.html","d1e404e8f226098244e0cfe492c5b621"],["/tags/Java-EasyExcel/index.html","be28d644e9a4b4b5eec5355165fde90e"],["/tags/Java-MYSQL/index.html","b14f478c4e58286322c857bae8e66fc0"],["/tags/Java-Page/index.html","a432e60dbf831a3c94bea2ca652680d0"],["/tags/Java-RestTemplate/index.html","41c8da96f3650580c4954ba48ffea596"],["/tags/Java-Stream/index.html","b874127a2877d81bdc311e724fce89b0"],["/tags/Java-工具/index.html","b231ecba60591e577d9770bf7aeb55ca"],["/tags/Java-常量/index.html","1ee65eb850ad79a53dff3e0749a5dba1"],["/tags/Java-校验/index.html","c611f5cf429ff4ce48b798cd0d56eef3"],["/tags/Java-配置/index.html","cd9615086bcbca8cd50a21bd32fb6e8f"],["/tags/SQL-便捷/index.html","5bb36f9b18c6e803efea28a7a96dd352"],["/tags/Safe/index.html","f97e7d13a549e17e8fc8c88aeccc30d5"],["/tags/index.html","30fe6d6c17bbd394be730ee4fd5e6383"],["/tags/java/index.html","c923867caadd107efce2fbbc2ff41ca9"],["/tags/minio/index.html","1f3aa4215e6491141e92aa924cce501d"],["/tags/定时任务/index.html","913249b4d86e3a5803ed2046a015fbbc"],["/tags/工具/index.html","26b402ad904ff9095e9a97b0139a5d71"],["/tags/搜索/index.html","cd6d0274ae809724fdbd9ff07d1a5621"],["/tags/时间工具类/index.html","5838a20c829357ced97a8328e26928e8"],["/tags/虚拟机/index.html","3a40a141b1c984bb97f11393efb9590f"],["/tags/递归/index.html","579220d21b2db0e76aca485ab58ed212"],["/tags/配置/index.html","f49ff32742e13e80a01209130921fed0"],["/tags/阿里云/index.html","b15763ec47aa66a9f9fd026a4bf6863c"]];
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
