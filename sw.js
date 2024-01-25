/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","13af3b1b1cb075d2430d809f8d14998d"],["/about/index.html","8dd41fc7c0017203e780499e03281bc5"],["/archives/2023/11/index.html","45f1e5c4a14c76f4d3a90cf3d00f4b6c"],["/archives/2023/11/page/2/index.html","d33368130ca5690862885390bbebc5e8"],["/archives/2023/12/index.html","8abf40bc99ab54b6237b698d4c1192ec"],["/archives/2023/index.html","ee93fd524513dd08a444e2eae9f29f87"],["/archives/2023/page/2/index.html","33187fd24812a9f376c5fc1fe1a49920"],["/archives/2024/01/index.html","0a89f83d77504f97b0a9b412c370e8f1"],["/archives/2024/index.html","4bd46656889a8c8830c8239d2cee65fa"],["/archives/index.html","e1d3616757b2df020fd9cf2f94bac1da"],["/archives/page/2/index.html","84ca8604ebe63e8fac4b439d17501561"],["/archives/page/3/index.html","57aaca1265dec52645e8b680fe566e38"],["/categories/Docker/index.html","22e556be669129f87e3c6818b499f29c"],["/categories/HuTool/index.html","eee9a8ee2dcbd808e29b7be4dd9ffb11"],["/categories/Java-MySQL/index.html","696a963c940128834ea1a5c7c7f8a2f1"],["/categories/Java-远程调用/index.html","930ad14c06c10fd58048b39f8326ab8c"],["/categories/Java/index.html","a2379e2b9b4d9bfd2cd9d5e286bd9883"],["/categories/Java配置/index.html","2dfa296ac469b1ec8a9c65704582a24a"],["/categories/MYSQL/index.html","0ba4892bd816b1b49973ed3f08e93fce"],["/categories/hexo配置/index.html","5b80d7888097a903228bcc64d6baa756"],["/categories/index.html","747422edc1f51603354859518e4fb465"],["/categories/实用工具/index.html","31791e28c27ff840d7e3a723ce29b038"],["/categories/工具/index.html","e7c6165c501f29e16229ec736efed3d0"],["/categories/工具类/index.html","f3799a2c8bfebd645ff649e4d1094f2d"],["/categories/时间/index.html","757e1d8cf342397646ee844229d6e50e"],["/categories/视频/index.html","a29383ebb5b9fa414b4d2640e849cdfe"],["/categories/配置/index.html","5547447e8fdbcf5eaee334f98fb8dca6"],["/categories/配置文件/index.html","fcf2b4b5eba78185fc40ded08d288965"],["/completed/2024/index.html","42bfc2492c8fd9e9d13ae4c4a7f7c848"],["/completed/2025/index.html","9ad789fdb341c90c3e342b053a5b65db"],["/completed/index.html","738cbea443cc9dda3944bfd8c8bb9b6b"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","ba465a5fd0fd65ad6ad9b9367b3c727c"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","e936827bbec4e57438575ed751050bbb"],["/page/2/index.html","8cc3f76dcbb35c24923476d88b5bc4dd"],["/page/3/index.html","5fa51c19e438ef21d6512121b4a961f7"],["/photos/appointment/2023/index.html","f9f0caee57f8ed31e40fb8baced8cb61"],["/photos/appointment/2024/index.html","0ee92a776cfcf5519e71554fbf680560"],["/photos/appointment/index.html","b1a8940dabd8c954da397234a665d75e"],["/photos/babyAndBabies/2023/index.html","d4fb73bac950df5b205af204917ad5ad"],["/photos/babyAndBabies/2024/index.html","7b22b24dd4dd16e86db08a4116038d57"],["/photos/babyAndBabies/index.html","4f860765031f56bbe546fdefd7009de6"],["/photos/game/dzpd/index.html","2e9621d67ce6457be6d499075d175d99"],["/photos/game/gy/index.html","12b31c7fa344d07b78b84feae17b72f7"],["/photos/game/index.html","d999c007fc71338ec969956f0b8fb740"],["/photos/game/steam/index.html","a80d743ac96672b2d9ed53879d482629"],["/photos/game/wzry/index.html","a41db01a9e6969b225c83cc8abcfd6ed"],["/photos/index.html","c9c4b198f64804f1d364d1614af74135"],["/photos/movie/2023/index.html","88c53826bc5b1625cb508ef58b4367e2"],["/photos/movie/2024/index.html","e37c24f9f06bdd6cc7ad8b1bb66583bb"],["/photos/movie/index.html","a8c3254af01ea17799ebb6fde2483512"],["/photos/ohmygirl/2023/index.html","622a9bf65b32452847facccc610fc20a"],["/photos/ohmygirl/2024/index.html","cbac9e7a2ec3179f62c79fb7325830d8"],["/photos/ohmygirl/index.html","d9229c9af47b8396c9e0b1f47b01b22e"],["/photos/outside/NanJing/index.html","9c63c591acae77fbc472111852b74c0e"],["/photos/outside/QingDao/index.html","659ba8fa68b864341e0923e83e5be46e"],["/photos/outside/index.html","dfd2ce6b1af231385220b354fdeb172f"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","c4263960da2065d3f7fffc70cf85f755"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","640e8ee40a95edd7afa1b6c9bfb373ec"],["/record/2024/index.html","c3169bc842f6ede7281ab93daeb32595"],["/record/index.html","cef84b513a26e53c49db540256250db5"],["/sw-register.js","83b90da6f22a3a7b3da5f7e2b94335db"],["/tags/B站/index.html","3e84e4d7bd7b3bb2e1bd16e9b222713d"],["/tags/JAVA-工作总结/index.html","a8fa257073f86a1c80d89b8a12ca30f6"],["/tags/Java-Docker/index.html","cc05770d7b500b468b88e2cf8e532bbf"],["/tags/Java-EasyExcel/index.html","6794107a5af765bd6aac53bdc663c6f3"],["/tags/Java-MYSQL/index.html","8aeb9f974d91d23add43daba018d4b1e"],["/tags/Java-RestTemplate/index.html","6550afd29bb2de87ca45bb1f0650eb59"],["/tags/Java-工具/index.html","76b31b0316e93eba391f9c389a54190b"],["/tags/Java-常量/index.html","f530472b2f904c0e9255453d35996098"],["/tags/Java-校验/index.html","c7b332156a0c6db13c69caa1fdb16d63"],["/tags/Java-配置/index.html","592241ca079404ee87d5fb44a34dfecb"],["/tags/SQL-便捷/index.html","edf61f18483910d4853584c8c086d5f8"],["/tags/index.html","ac6e0f35223da887ba8a12178b5e575d"],["/tags/java/index.html","6cf8ddd226785eb086e4ec8fbaac0a6e"],["/tags/minio/index.html","a6e7228613e3003802858ca96099ffba"],["/tags/定时任务/index.html","a7a3400148af091bd9340cc58d156ac2"],["/tags/工具/index.html","f0489f9790aa4943f8f0a1e6f747a833"],["/tags/搜索/index.html","766874aefdd38abfbf345af918e6f08e"],["/tags/时间工具类/index.html","100906227b09d36c494d117e1b10aa19"],["/tags/虚拟机/index.html","4c731791adaa5a0239917cae40605b5a"],["/tags/递归/index.html","25885a76c1938af5b4f9f234d9ae0c9f"],["/tags/配置/index.html","0e51add26f9f438c75d0396622d22003"],["/tags/阿里云/index.html","1119387cb8ab268fe9c8121136ca6006"]];
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
