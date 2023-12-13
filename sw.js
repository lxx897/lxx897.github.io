/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","85fd5771be0b5c0b7507ec052ce15766"],["/about/index.html","a4ff7a69ae70ba191f819e5074a7807b"],["/archives/2023/11/index.html","ecc362c0a202e980ec0f7d47e79fb7ae"],["/archives/2023/11/page/2/index.html","ba0b6b819c0e2603b70c455640f4470f"],["/archives/2023/12/index.html","a4a37f0604df4e383832a09afae4032f"],["/archives/2023/index.html","86c3e441905c22451dde6e9ac2bca57f"],["/archives/2023/page/2/index.html","7dc2e4939434c3d7ccae9fa5200b2482"],["/archives/index.html","a5744247ee62854c6ee48085061f657b"],["/archives/page/2/index.html","7a1edc15815c273caa5f3b0724eb74dc"],["/categories/Java/index.html","0073c94a037d4a7efee1e3489211a27c"],["/categories/Java配置/index.html","7c9bf1d533ba95bd0dd880c8249a4071"],["/categories/hexo配置/index.html","322a60dcb7deffb1f612ae41237f9f5d"],["/categories/index.html","e3a844bef121242d145b226bb18d048b"],["/categories/实用工具/index.html","fe75c682d7db9bf6ab76fca0e2d7e7c1"],["/categories/工具/index.html","0e6212b523c5674d062f83bbfc40d6f7"],["/categories/视频/index.html","57b91ab753b333d0c3be5cae7c31c121"],["/categories/配置/index.html","1a766c9af704bb8444dfdec4b81dfafc"],["/categories/配置文件/index.html","91293809ab863625a749a2ea57225c55"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","e0240a1202e84c68d00ba94ab5b92123"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","846395e434a11ce63c8fedec57cb137f"],["/page/2/index.html","3aedbd845d9553f2582f7ea4d983deda"],["/photos/appointment/index.html","9632a62ec653bcdef83a46bed81bbec2"],["/photos/babyAndBabies/index.html","b38d869f3d49d950c13e120d26fe6445"],["/photos/game/index.html","fba4ae46605059f04d79b5966937bd1c"],["/photos/index.html","86419654fbb4e09ae794b348003c764a"],["/photos/movie/index.html","74183b679add58787b5ac01f2b69af95"],["/photos/ohmygirl/index.html","a1b7382f2cb2461bce8db264eb7a1365"],["/photos/outside/index.html","ba88d5cd7288929e29ff7d3f8b17ccca"],["/posts/16888.html","dbdaf50a08db427ae72899119b5a475b"],["/posts/18206.html","65b04a4163f807b279b7777ccf7af54f"],["/posts/21635.html","1ae1226cabf5c425384c92cf6565cb0f"],["/posts/22910.html","2601553fb2c79c8350c76a8993c67ad9"],["/posts/27699.html","2c051790a135b13d90c6d559d7734ac0"],["/posts/34134.html","a7312227f0f085d4a06cd73597bf62fa"],["/posts/38362.html","222f78e24e1d9fcdcc675342ce023b3b"],["/posts/47374.html","fb1811af85129390360ba403d9a50456"],["/posts/52307.html","7f3f569a09777ef50763686ff5730ac0"],["/posts/52812.html","db53f267547d73417d31df692e4b75d5"],["/posts/53714.html","5fe6b39f694442fb6ece0308df0f083d"],["/posts/58565.html","cb04f1de6131a0b050f5d6dce0dad076"],["/record/index.html","4c40c82f29ff54b738cb0162fd26db9f"],["/sw-register.js","0caf73fa6ae207e745f763c19be7c297"],["/tags/B站/index.html","f97414d4d349c124901b47357738d2bc"],["/tags/JAVA-工作总结/index.html","20eca0c20bc5e67cfa0a831b69d584c9"],["/tags/Java-配置/index.html","171dc965f40741e1e4404682ac8f948f"],["/tags/SQL-便捷/index.html","1b7fc640b4db54ce53bd0876f39fea2a"],["/tags/index.html","859b8ba1adccc44c2bfe5bd1925ed3a0"],["/tags/java/index.html","3cd642b8a6f0dc47c49cad9ec6e353f1"],["/tags/minio/index.html","bab2b4d9bd221a546bb92200f6a823a1"],["/tags/定时任务/index.html","b4cda60df30f6583271d991ad6501295"],["/tags/工具/index.html","0cf01482d0268ebf8b05e5a5987c44d3"],["/tags/搜索/index.html","2ad762fa382c5bacff9e5dfe9c532a4f"],["/tags/时间工具类/index.html","1a09d5b03189975398af9a37ec573520"],["/tags/虚拟机/index.html","dc4fe4a021dffc551350cd85e259569c"],["/tags/递归/index.html","fad4ccc729215fab2434eebcf22731f3"],["/tags/配置/index.html","93b745adcb306f05b375f19cc415d0c4"],["/tags/阿里云/index.html","7436905e73e590bcfc7e3a3c04136ad0"]];
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
