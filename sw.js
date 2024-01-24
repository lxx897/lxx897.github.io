/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","691889f2767099f0446255fe74f7864e"],["/about/index.html","83ecf07174ad6ba94ae5bddeb8194800"],["/archives/2023/11/index.html","976385a9fc60b9eedb1544d638e976d0"],["/archives/2023/11/page/2/index.html","26e7dd2a0291786cb33ccfeab9b539df"],["/archives/2023/12/index.html","0602b2b537f84ee544e2e7c770bfc14b"],["/archives/2023/index.html","aefee0716290bf0cb727096fbecb15bb"],["/archives/2023/page/2/index.html","041cd81b5fcdd6ad119ecf3e75f42531"],["/archives/2024/01/index.html","d19a912f457213cc7976b856873b3f09"],["/archives/2024/index.html","5b2103fd140a9ee04ada3ad39f988ac5"],["/archives/index.html","c740df119f78e00ba0bb2b92048fa950"],["/archives/page/2/index.html","996515d5d548dc379a34c63422ac2d6b"],["/archives/page/3/index.html","b43388b49895dd1a865c8f371141edde"],["/categories/Docker/index.html","b628e67549f25162b64a144d19d93714"],["/categories/HuTool/index.html","ca139968a52c03b11fd0d85a676bd795"],["/categories/Java-MySQL/index.html","19fabfd4b0386111326a4bf5b58c0767"],["/categories/Java-远程调用/index.html","90aec2330707deb31a97c65b181b5b73"],["/categories/Java/index.html","1f0d02907e045e2fbfdab4f0737e8083"],["/categories/Java配置/index.html","bde660dfc26dfed51950b605e401486e"],["/categories/MYSQL/index.html","090bfdb5eceb15c662119a03d0b6750f"],["/categories/hexo配置/index.html","c831ebfa6072be71923283edef23f480"],["/categories/index.html","622c54b4adc67d89069ee1972791f438"],["/categories/实用工具/index.html","84c205423613002e7931e91fbed519fd"],["/categories/工具/index.html","874a987189297d17e7fa784cdf6ea6ce"],["/categories/工具类/index.html","aa517f4ed24107b63e962b9e48998b6a"],["/categories/时间/index.html","a0e9677a96fdeda2db71dd48cb7c9e8f"],["/categories/视频/index.html","32b6d31ea0ce87f8cb651e5e25f54b14"],["/categories/配置/index.html","ad2c53639f7b41cffc7f9cb200471b89"],["/categories/配置文件/index.html","2949fb6ddb8543d756c84ac7643cb1e8"],["/completed/2024/index.html","2016be7cdd133424a0f8d2686b6ebc82"],["/completed/2025/index.html","9a26445559c4294ad4412d6de4e26b6d"],["/completed/index.html","e8716559a06817a5b557b07fb4b7607f"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","16e40ded15757f08b3f9fc701f8ac7ce"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c6afeca8a841f1cf30a1ceff29971b01"],["/page/2/index.html","5b24f2278288db35f4fe606737eaa781"],["/page/3/index.html","297b1aa0ff2093b0b5240f5d5cb55358"],["/photos/appointment/2023/index.html","2674bc2721db2c2510d7b805f3619848"],["/photos/appointment/2024/index.html","4fe49f7ca75fc5b6f30d867262f12664"],["/photos/appointment/index.html","b9f308f15b621d54c625222e8e4d4b91"],["/photos/babyAndBabies/2023/index.html","d8d16b930105c3f36b24991a0f5d8cc6"],["/photos/babyAndBabies/2024/index.html","92bf5979f4872d60fc845ba9b1d3761f"],["/photos/babyAndBabies/index.html","9593a512517d84dee1f7d72351c69c0f"],["/photos/game/dzpd/index.html","eb9a50b900901910ac756472adbd1950"],["/photos/game/gy/index.html","ae3f3e4b7a599abe8ddb5fd531840d36"],["/photos/game/index.html","56720ef0e896150edec4b87cf55790c6"],["/photos/game/steam/index.html","7d3f0331b789d8841b12125f009c0229"],["/photos/game/wzry/index.html","39a95f07d04d00e9a75436b9e67a29ee"],["/photos/index.html","97e0eaaa5099c162a69604e9d71e885e"],["/photos/movie/2023/index.html","2e2b9d2d64bf25041ab0eaeee6f6c920"],["/photos/movie/2024/index.html","7d18e3878ee5369231b182acf8a24eef"],["/photos/movie/index.html","f4a68f19f0ebb7b642eeb43f70ae8765"],["/photos/ohmygirl/2023/index.html","efa8791abd1b6c2e5d5a03cccd4a5f2e"],["/photos/ohmygirl/2024/index.html","d0eddbd6ca7bae27bc8b9a48219a52c9"],["/photos/ohmygirl/index.html","604a8c343ab626909e6bdbe16c092a8a"],["/photos/outside/NanJing/index.html","b07ad41c8f5dbc14757d738a8b4ae637"],["/photos/outside/QingDao/index.html","5b321a364ed6014b20c2faf193fad9a5"],["/photos/outside/index.html","223e344228f97c06e0ac22e06915a6ed"],["/posts/16888.html","bc09b17ef1c90d196ecc8af8e61ab118"],["/posts/17303.html","58f0ef6a26e6735faca3e5bfa9e50417"],["/posts/18206.html","e3137e8b8411b5ad0df8685afcb1f4ed"],["/posts/21635.html","d97dbcbc934b1086998424a8df02f3c6"],["/posts/22910.html","02d900a7518c17963f6caf600865a0e5"],["/posts/26185.html","f98da41a65e06352f87eebee88369fa5"],["/posts/27699.html","1befc5215ef7cf66877feee5994f89c4"],["/posts/34134.html","50418945dad23aa0ae46476c4384761d"],["/posts/38362.html","cdae28174a940c795c32e2becea4753a"],["/posts/4186.html","f0e579c3a74c394f864cdc5404994f69"],["/posts/42658.html","a377475ec556690685825de5a21322c2"],["/posts/47374.html","b26730b57626b1674d6e295493721c26"],["/posts/48428.html","4d5a6a2611544bd935d9d34a74043911"],["/posts/52307.html","f32ce3f16aa7562f15342785c62400b9"],["/posts/52812.html","728a05f8df62db3ffd0532728e486caa"],["/posts/53486.html","e7621862ce8816fde6de520e8ce498d5"],["/posts/53714.html","6e0cd57c3224d11532fc0377fd1af2c7"],["/posts/57395.html","2b332ca53bc6e0a2bbacdcbc865365e3"],["/posts/58565.html","23d1859aaa9b150bc8d5cd75bc480683"],["/posts/62255.html","fc743c57834800928fb370b2df562216"],["/posts/62580.html","1bd3e448a096da3465712082e7ccbe25"],["/posts/64032.html","f1dc8743e064efa81ec2a793bfe55200"],["/posts/64329.html","3aa83729d1df6c639b330ba118ddeda2"],["/posts/9968.html","da85019b491544d3a15e58fc129b7b47"],["/record/2023/index.html","7df88449c1d9ae86c3c999afb251be4d"],["/record/2024/index.html","091d236ff608d94bae7312d7305fc8a9"],["/record/index.html","e4c82c36abec1000eacb0382a010ca64"],["/sw-register.js","530b0fb45cfe2931293bf4051c8c1052"],["/tags/B站/index.html","7b35537c22c1788b1cade462d6c72010"],["/tags/JAVA-工作总结/index.html","20037bda9b64eb033c9b9705f8e63b26"],["/tags/Java-Docker/index.html","eaf9c61f0d6d459bbd8df1519e899873"],["/tags/Java-EasyExcel/index.html","c64ec0216a55912001786e45b5b77695"],["/tags/Java-MYSQL/index.html","74b2a120f772d884c8742916ac323def"],["/tags/Java-RestTemplate/index.html","9cf74ba61c67c67a9a4858cce4ed1ea9"],["/tags/Java-工具/index.html","747bba5314205ead29c934594a4ffb7b"],["/tags/Java-常量/index.html","f073ec4d228b82565f007450c3d7417d"],["/tags/Java-校验/index.html","21f0122dd60549edd1e40feec2f36c9f"],["/tags/Java-配置/index.html","437e884d6454c2f0bba37358f6fb673e"],["/tags/SQL-便捷/index.html","8ad4e890e777acb56fc891b01d017dfd"],["/tags/index.html","d16ff2b9dbfed793ef139ce1060ed6bf"],["/tags/java/index.html","7d738081982b4d2c5f99d834c7a45c8d"],["/tags/minio/index.html","636e9bebe1ba07f2e7a188e751db29b5"],["/tags/定时任务/index.html","22e761c47f3abc2103be903aaee229aa"],["/tags/工具/index.html","ddd755325c55b8c4871cbc5131b3a1b0"],["/tags/搜索/index.html","2592c20006cb0eb5f58f3bf97eeaf154"],["/tags/时间工具类/index.html","f6d657a6ae5b94a5a29b2a02f0b517c5"],["/tags/虚拟机/index.html","670bb7f8fe5e5228886e0d80377b10a0"],["/tags/递归/index.html","bfb4ef617e07b4b10f6eb409b1a9f2fa"],["/tags/配置/index.html","3f5c7be8597c0f80591765ddbdea4a4e"],["/tags/阿里云/index.html","a2a67101107006aab64799cbc14c5db2"]];
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
