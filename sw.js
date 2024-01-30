/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","792b9cbd47a9bad0441e567c247e5be0"],["/about/index.html","2fd6de656d2f81c036a5d7161f3b08f0"],["/archives/2023/11/index.html","77554239dafccad461488d76838b2466"],["/archives/2023/11/page/2/index.html","8c7b123d4d72860cbb18a7f371855559"],["/archives/2023/12/index.html","17bfb5a716389e1e41015a14307e1bdc"],["/archives/2023/index.html","855f374c6de74464e28bc5d25726f699"],["/archives/2023/page/2/index.html","3423dfe1b2bae6f8a3302f332265a75b"],["/archives/2024/01/index.html","8f2da50b46b7f510cb7a9487352a6c72"],["/archives/2024/index.html","1b4cbc84dfe9b8174cd4d7706b6e0a2e"],["/archives/index.html","715f972a269cb7e221ff88237cc1a752"],["/archives/page/2/index.html","9cba8fefdb69757f73aee9f8db4bfd88"],["/archives/page/3/index.html","faee17b0730fb09baa02b762fc3dc6cd"],["/categories/Docker/index.html","7d76750b76acad784a4eb112ae40022d"],["/categories/HuTool/index.html","277bbc1be181a2d5f3b821574c5d1404"],["/categories/Java-MySQL/index.html","edac6da8f0b156f5b26fc08dc70e3a0a"],["/categories/Java-远程调用/index.html","c6895d35288c52d1015a0ead0c85f01c"],["/categories/Java/index.html","0379628fce64510c7561fa5701a9fc93"],["/categories/Java配置/index.html","29ef7b9d69029a25786d40284406dde3"],["/categories/MYSQL/index.html","8c27284ba50ff9ae5c36f45c4896c1df"],["/categories/Page/index.html","69e2e8a31cbe6f83e76cd64ed5c0066a"],["/categories/Safe/index.html","a98b4db0e6f5a759958d56d195e03987"],["/categories/hexo配置/index.html","87c1e54819d1236c523a7364b62ba0f9"],["/categories/index.html","3c49c19a565e3df8e9959ed1c5b397c7"],["/categories/实用工具/index.html","2ad4466344f765dabaab9a684b2f1ed0"],["/categories/工具/index.html","f3a95145c3c7fe9f8a3cfdb99dea7fdd"],["/categories/工具类/index.html","0681ee91871afd8951391d76a259175e"],["/categories/时间/index.html","0c60424d501ec4f15dfea1cb9ca6ad03"],["/categories/视频/index.html","e47624c35d5bc66f5be14fdf3893c156"],["/categories/配置/index.html","cd7529697b15e0cdce4c093f2af7a6d2"],["/categories/配置文件/index.html","111b8342960b7fa73ff1a9412b2a3ecf"],["/completed/2024/index.html","3686689dbe7c99a4d48441d8fc1b30c9"],["/completed/2025/index.html","731589e71052c932eb3677f61a16f69b"],["/completed/index.html","20a55dba9d3d12ad9e3cb2f03e4109aa"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","6b3a5b751c7fb7c49bc82d96ba77f556"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","bcf6fe7dd6bebef760cbae8e4447a365"],["/page/2/index.html","8ac29482f88e9faba89aedc04ee199a1"],["/page/3/index.html","ea88f63ad7362d2931c5d01b56245c60"],["/photos/appointment/2023/index.html","7ecf30c42e0815e1923587490669e0b7"],["/photos/appointment/2024/index.html","0ed6f31e307c76076143a38b5cf056a8"],["/photos/appointment/index.html","2259e31f1e0073b1d855c53228ec74ec"],["/photos/babyAndBabies/2023/index.html","9b1b4ab20608d325c84db7e50dd8812d"],["/photos/babyAndBabies/2024/index.html","bbfc8925274d1148bff09f2ee8d8d31d"],["/photos/babyAndBabies/index.html","0ec0a3f2fe02e90377d8a640bd715a84"],["/photos/game/dzpd/index.html","87ca95e3e1a3697f0a51ae8efed023f2"],["/photos/game/gy/index.html","7a13a6c57b44575d9e36656fad53cb3c"],["/photos/game/index.html","1c6d7e97b2669629f03e7fe245146da1"],["/photos/game/steam/index.html","0528578e1ebc9b06d06fafe3335f5770"],["/photos/game/wzry/index.html","b7d170d120cf06f4fa34c47d7d3451c6"],["/photos/index.html","1890dd85c0bd1979f4ac0a2c6cb0c20f"],["/photos/movie/2023/index.html","9b3e2f565cb9dd340a74378622fad861"],["/photos/movie/2024/index.html","8c5f04e0fddfab4048e42351f9987ffe"],["/photos/movie/index.html","f3209da69c5f620f6c5e85317343423a"],["/photos/ohmygirl/2023/index.html","425acefb114a48f4f1f261c201138045"],["/photos/ohmygirl/2024/index.html","cb701ad7241e12e159e80bee23ace59c"],["/photos/ohmygirl/index.html","cde1095b987b310e4a9a93d5599ebf77"],["/photos/outside/NanJing/index.html","664ae1082148df53adb0589344bc3316"],["/photos/outside/QingDao/index.html","1917575baf5347d44d1048587aa1d93f"],["/photos/outside/index.html","2aad26c1ffcb6f23aaa35addef1a3a0e"],["/posts/16888.html","67da43ae2497262f4be15399afb5ffd3"],["/posts/17303.html","bbcaefab9ad6b780f2b795b166f5b6b0"],["/posts/18206.html","8fa42cca35f1e62fb2d7fe47c1da2b1c"],["/posts/21635.html","80ee196efaae0e875b218250fae8b90c"],["/posts/22910.html","b58cc589b07a2322ae3411353c56888f"],["/posts/26185.html","7555d5c41b7f274b4727ed8c04982f47"],["/posts/27699.html","f370f635bda66e6d745acbc364cbeb6b"],["/posts/34134.html","7a8eabb0ee7ccc4fc461bc7b3c7aa2f3"],["/posts/38362.html","2006d3412e8c6cdcf957299f7291028b"],["/posts/4186.html","15f2ee2b59df2c4d245a82e0e0f8cecf"],["/posts/42658.html","3e33e18e538ae7eb38a47e23d59a5ee3"],["/posts/43618.html","f446ee9f1253f945df250a1c09425309"],["/posts/47374.html","63d85ba03e88e23fe1f9595a5651b89a"],["/posts/48428.html","871bb1186af03a190f0563b141a93a9e"],["/posts/52307.html","db8e5e3cce53055f2dfbd1d91edfac10"],["/posts/52812.html","8d447c809069315f22b71fa18860956a"],["/posts/53486.html","b810415185288538c46e38be8cc582fd"],["/posts/53714.html","0505662e8aca140720f723447a4eb6e0"],["/posts/57395.html","438da2af8ce0036c739b292124d2cb5a"],["/posts/58565.html","d7316da734aab2f58debb8cb48f7c065"],["/posts/59743.html","9b21c8623bff1b0433ebbc7720f69a8b"],["/posts/62255.html","317d4d241b986c6a1f9f050dacf4edbd"],["/posts/62580.html","848a6dc106a7ce83e7a55e0ec616a329"],["/posts/64032.html","c6687e943d35f978cfd51ea7e06ace76"],["/posts/64329.html","86b9507d979ee3634ea663495df97ff7"],["/posts/9968.html","b049fac3f88dda3f65c552ab0bfa2db2"],["/record/2023/index.html","48c989987b345485c3f756d52421648a"],["/record/2024/index.html","975dde08d350edcac90239d6a72b6316"],["/record/index.html","492553afbc2293abfb54679f73d7181c"],["/sw-register.js","8ff75d4770cb6fa9b7e143540cff28ae"],["/tags/B站/index.html","2c539c49a3f836a3fa5efec37014a6a7"],["/tags/JAVA-工作总结/index.html","47b90800e73fa139f5b1de3cead5970a"],["/tags/Java-Docker/index.html","da8aaf706b4b88a355286e7056184ed0"],["/tags/Java-EasyExcel/index.html","c78b757e4c9210ea4648e11714b42be8"],["/tags/Java-MYSQL/index.html","54d2be6b8aa8ae36588ae1a453e9818f"],["/tags/Java-Page/index.html","89823bde89355e6bf1a4c6a61903511f"],["/tags/Java-RestTemplate/index.html","0d6d461143cb7f8eadaf0f4d3fb1e6b5"],["/tags/Java-工具/index.html","21683ad5c9c7bf0c3974f26be3ffa5e4"],["/tags/Java-常量/index.html","f74edda77ef7fb8ae0ef69445fda6af5"],["/tags/Java-校验/index.html","5882d142b52e408db1b9146a1b4df874"],["/tags/Java-配置/index.html","bc87e93aa3b1e3e1150fc55b9b48b99b"],["/tags/SQL-便捷/index.html","f6de1868dfc3c1c0c83023f562d3d939"],["/tags/Safe/index.html","fdf18bd350425baaf924a41b03764c6a"],["/tags/index.html","c90f09feddfaf8e20e04e5cd5a937644"],["/tags/java/index.html","551605e0d6ca62582211a80733dc2a14"],["/tags/minio/index.html","2b44c16086c3482cb80df18f415a04ad"],["/tags/定时任务/index.html","da2acb3f49562021e82dec4f5c932929"],["/tags/工具/index.html","50c411b84abc57377fc8164b8b2efc8d"],["/tags/搜索/index.html","e5bd366087ca438a956d225eab6a4317"],["/tags/时间工具类/index.html","bebaf181bcc13851cfb9ce01d3910e33"],["/tags/虚拟机/index.html","4b946cee6d5ef9bf258371d1d5acb14b"],["/tags/递归/index.html","16da4f68f12f111cd6c5ac5767cd2d13"],["/tags/配置/index.html","989b26697d29b57f75703082710c7a3c"],["/tags/阿里云/index.html","138fa39b94c0a6aa98b661fec69b6d4e"]];
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
