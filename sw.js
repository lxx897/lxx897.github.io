/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","899fa5e46d9144ebb153b0c6fbca658a"],["/about/index.html","4518053d88032339c5927f8d345bdd9c"],["/archives/2023/11/index.html","987da6e0396cc34c797ff50bcda004aa"],["/archives/2023/11/page/2/index.html","108b0c32a759d3277235e8d0c3d88d58"],["/archives/2023/12/index.html","7044b2001eb7f2a08eaaf54697656c2c"],["/archives/2023/index.html","6b2e078b87b90bf3c349e2ac326fcf1f"],["/archives/2023/page/2/index.html","27a02bd499b2829fae25d793e28fa406"],["/archives/2024/01/index.html","a87b66aa5f92986610ae4681e6ed200e"],["/archives/2024/index.html","a69fe2fbe1da64c5aecb2105cec81685"],["/archives/index.html","590cad14dc70403e453dd39cade58550"],["/archives/page/2/index.html","18bec235432479b004109addeeb43449"],["/archives/page/3/index.html","f3f8c17aeba89ce8480ef3fe28cec7a6"],["/categories/Docker/index.html","910c14ae578f3a88475a1d999570e045"],["/categories/HuTool/index.html","3efedd1decbae2786247469a13f6a650"],["/categories/Java-MySQL/index.html","6c47224b9d46b739a828fbea990acc4a"],["/categories/Java-远程调用/index.html","265e717d07e3b1a28a91ecbed86313be"],["/categories/Java/index.html","6040cf748378fbe32034cfff9ba64b56"],["/categories/Java配置/index.html","a0cd745110cef4b80921ce4781760fd1"],["/categories/MYSQL/index.html","ea79d7749d1f3fad91a3134d4d03e2c9"],["/categories/hexo配置/index.html","da522a85fd6ed28a05739f5826fadb04"],["/categories/index.html","356ada0725284bd072057f7b14e15e52"],["/categories/实用工具/index.html","b13fc3c07de8697d32e6bafd218d10e9"],["/categories/工具/index.html","a5bb2aa53d5ff0780024510aa0746be5"],["/categories/工具类/index.html","636b021c475bb630e1c5576b6f3f9383"],["/categories/时间/index.html","5246933214bb4fa12cba8a9c20b7d467"],["/categories/视频/index.html","9fcfd73184b4ca3e10e21327f43e4940"],["/categories/配置/index.html","0f928968ed40343eb6b2717624ab69aa"],["/categories/配置文件/index.html","7b792b0da4d5516ad4ca09f00df9d472"],["/completed/2024/index.html","f81fbbbc802c0dfd324b28176166578b"],["/completed/2025/index.html","a64995b3123e5679f5316bfb84716be5"],["/completed/index.html","39f2f86a3b91626ad99c6f11d3176361"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","cdca2669b9685013ee458d0fbe92f611"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","55cc8efd75a024a995a51abad6aba8b2"],["/page/2/index.html","a0d2b3eed0192080285e82b3d374501c"],["/page/3/index.html","df981af77528025d675f678589525175"],["/photos/appointment/2023/index.html","4387f4cb7e0c8bd31e1a128710e72689"],["/photos/appointment/2024/index.html","2da00132e8d12d22475ed6bc2dc7dda3"],["/photos/appointment/index.html","a1b55dbf36f263d94aa17be946f8ef9c"],["/photos/babyAndBabies/2023/index.html","aa347354c0ebafb6ce5e5bed50a66027"],["/photos/babyAndBabies/2024/index.html","da5475de8789918341c0d53e8bac0f7a"],["/photos/babyAndBabies/index.html","ebb8c117b845e17b68efeb32608dcb8e"],["/photos/game/dzpd/index.html","cd15b03f56433183e521727d4c9af2b3"],["/photos/game/gy/index.html","63a20005a7045238f254d5cc793dcc10"],["/photos/game/index.html","5e7b9125b0ae295596137257b852bc42"],["/photos/game/steam/index.html","ce6bf1edcea9a68543413c4ca192cad0"],["/photos/game/wzry/index.html","fa7d147d2224be524e6281043bcb2b74"],["/photos/index.html","c0bad6b63b12b12f8b84c253a6d1a768"],["/photos/movie/2023/index.html","e0ef312f6c35d7b7a077bf94927bee1e"],["/photos/movie/2024/index.html","986c0a4b682bb4b8ae40d46fbf89510e"],["/photos/movie/index.html","8f9ddd2c0bc1ba3489c094cbf564118e"],["/photos/ohmygirl/2023/index.html","ebe05ef012a45b45b286bb0c214e0e68"],["/photos/ohmygirl/2024/index.html","e47d9ba093eebc15d9d3e13e6d9db2fa"],["/photos/ohmygirl/index.html","36851951717f8d4f6a65f3838aae1347"],["/photos/outside/NanJing/index.html","f6d1fa2933c638cbb100f7a6869d35c9"],["/photos/outside/QingDao/index.html","a2a5df261de47408f44eb777299cf639"],["/photos/outside/index.html","df72537256f8bdcb1e10f9ae57122f60"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","f0e579c3a74c394f864cdc5404994f69"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","d4453c8dfaa333430b99b3efeab2d5da"],["/record/2024/index.html","5d4568be5416a72b2de572d574f62717"],["/record/index.html","d153251257ad2c190e90d7d3af4bbf5e"],["/sw-register.js","0814ffa0744a3aba32d4a9d983026f5c"],["/tags/B站/index.html","e25666c1f3d1e29540016d04208a69bd"],["/tags/JAVA-工作总结/index.html","b18e79ff1ba024a9d22f2ad49d2248af"],["/tags/Java-Docker/index.html","b4d37083dcdfb7e6eb83e3263a8c171c"],["/tags/Java-EasyExcel/index.html","d494bba030696df5aa4eb15bed6a64cd"],["/tags/Java-MYSQL/index.html","fb953f559e9fe68cb6dca33fcb642b5d"],["/tags/Java-RestTemplate/index.html","c5028f737449adb40485633b6d2ea080"],["/tags/Java-工具/index.html","ffca0cef3d862a43d0d6f0c16d20b60a"],["/tags/Java-常量/index.html","6a7afe461988b779712cfc3c388fea5b"],["/tags/Java-校验/index.html","bb1dce829d041327e8c9566443269761"],["/tags/Java-配置/index.html","5c53a11ffa9564e2280b24a831e4b8eb"],["/tags/Java/index.html","fd88f13b588d17cf65d9e8831b0688fa"],["/tags/SQL-便捷/index.html","55641eb73fd3a79d14e1e483f076c84a"],["/tags/index.html","8532ef1275c61bcc25a31ba534c7886c"],["/tags/minio/index.html","baf89c247c16f968c46772a3673c8ce5"],["/tags/定时任务/index.html","39f9464fa29913702e53172f2fd8485b"],["/tags/工具/index.html","9bf2601f467475356db6f39bfd63f52d"],["/tags/搜索/index.html","d594f987921f4b5eec83ee84ca05a7c4"],["/tags/时间工具类/index.html","c884927bae625a658711e3c68d6f2f7b"],["/tags/虚拟机/index.html","da7238b0c37d1f076b0099c60dd945d8"],["/tags/递归/index.html","e45e11b7ed27a550bd873e3db24ffcdf"],["/tags/配置/index.html","da8d8eca6f68a53a580556b64aed362a"],["/tags/阿里云/index.html","1456ec565234f9a77936f50b5a06bd4e"]];
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
