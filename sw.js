/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","223e7fe3b68c319adfc674ff6282718f"],["/about/index.html","3513a09d5c6a1713d4e7da07003a2caf"],["/archives/2023/11/index.html","ac34b31e990eb8c3132ce49b625a8817"],["/archives/2023/11/page/2/index.html","aca766cc74bdc84a3bc979d7a86d68c3"],["/archives/2023/12/index.html","e79df457363b2b169ec4996d8888281b"],["/archives/2023/index.html","520180fd0ab183922890d47fbd98097e"],["/archives/2023/page/2/index.html","4bf4f7a4cf8b5ff06869d8c5051a9a73"],["/archives/2024/01/index.html","811268f8f6fd5e43431c257ff51b3bf8"],["/archives/2024/index.html","1b46ee039243639f52de1af3b853acde"],["/archives/index.html","a3842d5d21427e9da5b7aeab9947957c"],["/archives/page/2/index.html","72ee05100990b046cfa3185495bb21bf"],["/archives/page/3/index.html","180abc9678b0be4f415aa0c9f3307277"],["/categories/Docker/index.html","d1d0f102bd69564bd1d91302c922a702"],["/categories/HuTool/index.html","d3a4b2929da6b1d2c5ae05fcb802fe96"],["/categories/Java-MySQL/index.html","e7010182115d189db6a43294833e299b"],["/categories/Java-远程调用/index.html","398aab755cefa3338e55037af18bfefd"],["/categories/Java/index.html","cebb70f46594906cd3c4904a543dc46e"],["/categories/Java配置/index.html","852f1e9869c2a06ed84bc98da227c901"],["/categories/MYSQL/index.html","53535964905608abf4a9ff4c6d087c66"],["/categories/hexo配置/index.html","cf820d6216d410a38af982cfb7fde1d5"],["/categories/index.html","9fc4a064e955791eac5e1f1a4d769c67"],["/categories/实用工具/index.html","5fe18b3b14490fc2df945f20f3cd1e95"],["/categories/工具/index.html","97342c79736da5c7f9552d7e87790bdb"],["/categories/工具类/index.html","b40ffd51d6050beebf90f61004063980"],["/categories/时间/index.html","87b5871728f1bbc7beb979702798a729"],["/categories/视频/index.html","4e648b129f8b0d295379cae708c0add8"],["/categories/配置/index.html","744cb054abf21ec0e42199dcd2441d1f"],["/categories/配置文件/index.html","cee2bc2fb490f1ea701c300071b5bdaa"],["/completed/index.html","9ef9a4f3afe7d4c10ce08b6d2f5341f9"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","7116d3707e7560b2b85c1fe7996bf81d"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","0775b78b9a9138e5b7e816fb31509136"],["/page/2/index.html","42179d9434b697d0d3ba2bd550855ead"],["/page/3/index.html","5d4ad8beaf9776810239aea7a596ab97"],["/photos/appointment/index.html","73e748f6168d198016dd23346481bb82"],["/photos/babyAndBabies/index.html","04dfb238385a0ca3aa320301c2b50409"],["/photos/game/index.html","35612dc90d1e40f8f3cf8bb55fd2c157"],["/photos/index.html","8deb031fb6b9836ebc43623388d78b50"],["/photos/movie/index.html","1b5e96a8633068cf1a6af362bb6dda66"],["/photos/ohmygirl/index.html","d028b8dfd6b550523b6520955415e1ed"],["/photos/outside/index.html","933f9aca8eacfbb8e9e9c6524403a19c"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","ae73a49283993ec8eba7ca55b56829cb"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","f0e579c3a74c394f864cdc5404994f69"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/index.html","8631cdd96093fa734f0af07aa9084e82"],["/sw-register.js","1f62558a10cb4b39a5b6ef1518ced913"],["/tags/B站/index.html","865516afe44e5987412b669ba9b6e281"],["/tags/JAVA-工作总结/index.html","3377c55a152a82a2d91ff707973a9ae4"],["/tags/Java-Docker/index.html","7ec836e9a988da55703b7cf5f3d9b39e"],["/tags/Java-EasyExcel/index.html","8b8a9594ae053f70eba12bb6663a83f4"],["/tags/Java-MYSQL/index.html","17ef6db3c34f0e8a41c65892fbe8365c"],["/tags/Java-RestTemplate/index.html","a8bc70d194610d1ddf0c8b7757a1e17e"],["/tags/Java-工具/index.html","689aa64bc067357224559b5f5601de13"],["/tags/Java-常量/index.html","f6f81dc15a063ca03c2d2e8e3bead2ef"],["/tags/Java-校验/index.html","8b2631ad3b31c225392992fad17a96ee"],["/tags/Java-配置/index.html","5a9d81f0904dbbdbbed6ec2629330c99"],["/tags/SQL-便捷/index.html","ad977290aed7a10e67beca14550465b0"],["/tags/index.html","f79f168935822ad7c3fd8019c8fff315"],["/tags/java/index.html","2cfc694628d0f5926f0f6eb85b4ab6fc"],["/tags/minio/index.html","612eeb5227b9d484818962f15ab8a9be"],["/tags/定时任务/index.html","52cd0e38569a5b7b21f359b11877b7f6"],["/tags/工具/index.html","83d5b8449c14ea4b77779583c92503a4"],["/tags/搜索/index.html","57f308f3911f667bf27da3a2740cf5aa"],["/tags/时间工具类/index.html","59dcc881ee7706f1f8eb5688cafb7415"],["/tags/虚拟机/index.html","f134aa1af21c716048912f52c71df8b4"],["/tags/递归/index.html","a5c90e872f2118616af85e508d7a9bd4"],["/tags/配置/index.html","ec8a282fc4c5c49e656f48f22a520f30"],["/tags/阿里云/index.html","8b430c5b2f76450b72280def03cdccfa"]];
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
