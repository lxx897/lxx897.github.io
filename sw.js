/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1d0122384ad615d98fcee3582eeba557"],["/about/index.html","dda27cb5e42c1e55899e247402815cbe"],["/archives/2023/11/index.html","a963591dea2aa19564e62fe18abd2555"],["/archives/2023/11/page/2/index.html","b267a5479665860ec6f05f2b97db15cc"],["/archives/2023/index.html","551f2be80eccb178deb8de0730b28505"],["/archives/2023/page/2/index.html","8503247eb82e1673266f2d221457f2fd"],["/archives/index.html","d25f6317d9de5d345e5ddf608d2b9428"],["/archives/page/2/index.html","dc6617a0359b0eee664e64696d33f8d5"],["/categories/Java/index.html","a8f07cf477ceefa49107e2fe94e36cc7"],["/categories/Java配置/index.html","24d4a4b4fecb7dbc7ad6ce9b795252ed"],["/categories/hexo配置/index.html","70007522d002a06811f29d43073750d3"],["/categories/index.html","bf579e82e50f232991ba1c850ae3499f"],["/categories/实用工具/index.html","1f3728d1193dfda1b7e627b3a21259ed"],["/categories/工具/index.html","0be982fcfe22165bad416750e6ad1d54"],["/categories/视频/index.html","3b1f575256997ea9d988414cd03efb73"],["/categories/配置/index.html","6a1a4db48569e3a43bef3f2aabc413bf"],["/categories/配置文件/index.html","ff08c3a72e76743edbc060c718df16b1"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","e954d2eefcef3ca5fbfa2d0b86233fcc"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","e859d03fddfcdd4bcf29723b86a7a34b"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","3acba210a0eaa2a01972c3b4a8efb676"],["/page/2/index.html","4ad1ebfde715fb7dde2623d43660a6ad"],["/photos/appointment/index.html","e801034c5f62412277d6d86051bed6fd"],["/photos/babyAndBabies/index.html","747d14d35f473b459ab897053c1c59a2"],["/photos/game/index.html","0e590b8676b7e2c1b7ec9fc4ecb831ce"],["/photos/index.html","41463baeeb856c5f9d90c64b6fa8635b"],["/photos/movie/index.html","f02f98acb8c3db807ec547d09ca80515"],["/photos/ohmygirl/index.html","fb3316a874f36777dffe0ca96a8b95f5"],["/photos/outside/index.html","02962e01a032cd9c7f9138fab544fb61"],["/posts/16888.html","02040e01f00e35ecfe571e7052260b88"],["/posts/18206.html","c73c07c95710213209899824bc7f4483"],["/posts/21635.html","e4df7eef83c4a0fe5176e98432fb0cdd"],["/posts/22910.html","dd7a1f86689e64a03077b762afebfc21"],["/posts/34134.html","bea7403ae3037bd023bfdc5ad39983c0"],["/posts/38362.html","10505c79ed9a5d54924ee3b3f8dc8a67"],["/posts/47374.html","d7c1ef70c97c8a173f580b443b5fbaa5"],["/posts/52307.html","61a113864a9892b82e0de7eb226ec521"],["/posts/52812.html","bb6986084b4bc1b35900f2c1e0aa1e4d"],["/posts/53714.html","d981f594f07cbd04c2be8eca2a7d6ce1"],["/posts/58565.html","971ace3d46a1a9bc65f4e94d0d23e909"],["/sw-register.js","7bc123e54432273fd47f5ff82b11970e"],["/tags/B站/index.html","2de5c426b351c457998660df8251ca59"],["/tags/Java-配置/index.html","6430a51ce94b04f27519cf2ddee733c9"],["/tags/SQL-便捷/index.html","20f1f8c62d139084d6aeb8fc0c897e50"],["/tags/index.html","2948edcb68f318cafbd47601fcbad502"],["/tags/java/index.html","7392f962cb864b1dc2be132b5f732183"],["/tags/minio/index.html","eba4809638aad026c557ea9b4dbdb27d"],["/tags/定时任务/index.html","f8b1408d5ec05a03f55fd8eb46903954"],["/tags/工具/index.html","10633d94935b2373ec838a265aefe22e"],["/tags/搜索/index.html","4abdbe9e94b9dd641bb354e4f7851eda"],["/tags/时间工具类/index.html","63895639dae623e54b87c4163c87b118"],["/tags/虚拟机/index.html","8cecdcedd7096ee98e08008bdad2930c"],["/tags/递归/index.html","963b297b7661f7cf693b725e6349e4d6"],["/tags/配置/index.html","99e2bc3c40d2f6219a306531e2f98488"],["/tags/阿里云/index.html","3a54278380738362e01693d68fcc04a5"]];
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
