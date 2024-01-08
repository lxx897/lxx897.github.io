/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8e56b95632c4075e94d56f0ffe94d20b"],["/about/index.html","cae46c6742369cc6d1ecb8990b49c176"],["/archives/2023/11/index.html","6cdab032a45bda9ce4b3be10bdc08785"],["/archives/2023/11/page/2/index.html","7330f5ccd17b1d94811ebbe52ee05461"],["/archives/2023/12/index.html","00b2eb0cf9053a68b5134e6a13b724e8"],["/archives/2023/index.html","8be4d76c387211a8401c84d14985fd00"],["/archives/2023/page/2/index.html","d67003e59bb893d1b55160685a244e94"],["/archives/2024/01/index.html","00846ab0298eec57a4b2c0cb937e81df"],["/archives/2024/index.html","ec51a2365a8970aeb3664edea70e4731"],["/archives/index.html","620c33f44b4fb0eea2f241052ed79e53"],["/archives/page/2/index.html","f8474e16a90a1e5621c135416b0a7b79"],["/archives/page/3/index.html","e89fc8568d3d61de01099e34d76b30af"],["/categories/Docker/index.html","c04092f4f7b8e6b4fa7f0f82aec9109a"],["/categories/HuTool/index.html","6fdf4203ff67a02a0bfcb465baa36d30"],["/categories/Java-MySQL/index.html","be2f2a215c93bfbdb976301b349d260a"],["/categories/Java-远程调用/index.html","af39a626f9e66f54ac32a4d0bd0238b8"],["/categories/Java/index.html","a45267578d6ff01b71351257bf234281"],["/categories/Java配置/index.html","f31536e28ffefde3c5a9cbf655aa2f50"],["/categories/hexo配置/index.html","67b148e1676ea680dcbe04756da125c2"],["/categories/index.html","0d0070926e92e6b7c1337fda5342fb76"],["/categories/实用工具/index.html","eabf0c0554ad00b95652c490d80638df"],["/categories/工具/index.html","bfcac41902e9c9b2de172c3d6193154e"],["/categories/时间/index.html","d2b473367469ba48bfef54bba8ae2996"],["/categories/视频/index.html","131e14458ddcbafaf2f0d1a6f90baabd"],["/categories/配置/index.html","555701382913249227396c9c9ce10e03"],["/categories/配置文件/index.html","031e7b04e260d2488b22f85407cb3feb"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","047b329856a00933a60fdb1c5a14f15e"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","45d12ce4ba01b104cf5c537549c2f5ca"],["/page/2/index.html","b4041f578a33e6759d324a93a26b3341"],["/page/3/index.html","5d77db3464d6f8f65f316633bb52d3d3"],["/photos/appointment/index.html","2d7202e94166b4db70ef54031aa0bbda"],["/photos/babyAndBabies/index.html","81d90210e07b7a4b158b1af784bdf278"],["/photos/game/index.html","b6d6f46050502b72796c68c8ea1f516e"],["/photos/index.html","ef60efd50079ae4e0caa2a28c273d845"],["/photos/movie/index.html","cf48cf48f3deb16f73be705eba2a0e1d"],["/photos/ohmygirl/index.html","2cdd4e914f905b1f0e8e9991fb585834"],["/photos/outside/index.html","7f094ff15ed7183b14fbcbd8acb2b6cb"],["/posts/16888.html","03f87b77e20132362ab6bd2d7249fc3d"],["/posts/18206.html","10672574de36c54a7f1e9c6f28b2b38b"],["/posts/21635.html","962ad20c5d4aae063ec2a164612518c3"],["/posts/22910.html","8cfd42e50b76209f9a171df4d6e04a0f"],["/posts/26185.html","1c6613cafe5f8538a9438d02209a0e35"],["/posts/27699.html","dca023e97a5c91ca3d0df14f3cb51661"],["/posts/34134.html","5b67f3649bb6dae09ac340c83073ae78"],["/posts/38362.html","1001504d563cee7c90d1fd8f607438ff"],["/posts/4186.html","f33ff0abf29aef41d3f4f15d7b6102eb"],["/posts/42658.html","4cef5a19432c47dd6f65a9ce462832d1"],["/posts/47374.html","556e80266fb2d3e6ddf37139c8d13f32"],["/posts/48428.html","c541d42aa40e2df79e8efd39f40c6dce"],["/posts/52307.html","6b3a9ba7f0bb34fa409f7bc4cdb9c7f6"],["/posts/52812.html","0463019c58bef0fe987e2521201abdc9"],["/posts/53486.html","c4030429133f8483ba487d53279c2836"],["/posts/53714.html","fbad4724094dad55a97d45904cbdf673"],["/posts/57395.html","5eac6040b75f55432d336299a8c009c3"],["/posts/58565.html","64c2ea386c6a5013f911e4a8ffdc64f9"],["/posts/62580.html","7fdbdfbadf60d363a6838aaec8c822c7"],["/posts/64329.html","f1b38af7f8539cc4f3ab37e947914b2d"],["/posts/9968.html","e0c436c3e40ee3dc4763dac06596b58c"],["/record/index.html","796eba0024acc83a4a8160ce11f546cf"],["/sw-register.js","38a8198494e0959f060af97755e49871"],["/tags/B站/index.html","f06b4d00823620ae175974cc31cb3bde"],["/tags/JAVA-工作总结/index.html","494c88eb64652f4c624c1fb40735abc7"],["/tags/Java-Docker/index.html","e98748ed5047de9703451f3772ddfe2a"],["/tags/Java-EasyExcel/index.html","dcd6db3161694cd98a27943a93d201f4"],["/tags/Java-MYSQL/index.html","3bc545df51c18d380f106abd0af1e709"],["/tags/Java-RestTemplate/index.html","eb28206135469d93552d4a58902a6478"],["/tags/Java-工具/index.html","c03e1fe7ee1059ed097a50b04b81777d"],["/tags/Java-常量/index.html","a448e16d2a1f369d825a1ee8f9866fc0"],["/tags/Java-配置/index.html","e386ef2c314adc178330904c2a9dcd48"],["/tags/SQL-便捷/index.html","83a01535ab2f0d3fcaf07920c907db1a"],["/tags/index.html","4249083d59fb2cd8f68b2bbe411be9c2"],["/tags/java/index.html","799a64835b652370ba866cf5209ed7d3"],["/tags/minio/index.html","86057deca5ff9d303ca9dd5820a5b512"],["/tags/定时任务/index.html","fd71b2bc4362aa1a5877df17edcadb27"],["/tags/工具/index.html","9d9bb2dcb2ffe05c5a737f0d5b51106b"],["/tags/搜索/index.html","7d84e6120487068cac207030b2309cc1"],["/tags/时间工具类/index.html","01b5acf290979cb43ab89683c4f15b2a"],["/tags/虚拟机/index.html","48ceabfd0b18e163846ac3424ac99989"],["/tags/递归/index.html","76be5999326a20eca2e1766071062612"],["/tags/配置/index.html","ac24ba3b0fdea860f6d67827722a0abf"],["/tags/阿里云/index.html","145a32a7a36ec03b9f98b7c8a66d8af0"]];
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
