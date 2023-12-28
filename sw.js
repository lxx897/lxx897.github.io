/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","06a1d57315ebf01fbeeae481d349bf18"],["/about/index.html","94ecc0814f1c420e5b5b0490b9b53bb6"],["/archives/2023/11/index.html","507ac3591f38c95e833223b76abaf536"],["/archives/2023/11/page/2/index.html","91bb6df8491c91aa7221d1ad9c5d0e58"],["/archives/2023/12/index.html","34a48e92838a4e4c9932fcd1016d0780"],["/archives/2023/index.html","d3c7e6e7d7704a4ed912b414a0e84e97"],["/archives/2023/page/2/index.html","e04dec2a8a5c4bc844365a8a2cdef5e9"],["/archives/index.html","c90579ba7f7cb2daf969675508228e63"],["/archives/page/2/index.html","17f327a8d541f54ae23ccc51aec9a0c3"],["/categories/HuTool/index.html","4a3c55c94a6f6c2498c5b7c505c17b07"],["/categories/Java-MySQL/index.html","14e724493653488d52752154368a978a"],["/categories/Java/index.html","f3452a133c98a723ccf82c03ae600cb9"],["/categories/Java配置/index.html","7431225c84d8e2a0aa8112ce8416a38f"],["/categories/hexo配置/index.html","32ce6a35283fe11fe4ff588626e3f663"],["/categories/index.html","37b57ea3a8415dd123e27809d5be1df4"],["/categories/实用工具/index.html","753b44a68cfd671a0d8e46a64324a99c"],["/categories/工具/index.html","2b9cef5aebc333961066f04daaa568d1"],["/categories/时间/index.html","47ca35241fa7509b18e8b19945d9dfde"],["/categories/视频/index.html","ab8f9c0534bdd483f9969d57453addac"],["/categories/配置/index.html","8c28dcb9778a9f1fb9f433511d2b3407"],["/categories/配置文件/index.html","132c4746c6ea3579978e79c48d33aa55"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d33e437361734542304f81cef19117de"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","53a97f239d783ea85d7954fbece6ed5d"],["/page/2/index.html","742256241bbedba9def26f5fb46b5d0e"],["/photos/appointment/index.html","6f11dc24d2f04a6aef2840073e3ea4e8"],["/photos/babyAndBabies/index.html","ba9f9baa9fb9bcfcdc9203dceacb6601"],["/photos/game/index.html","e7365561a9f98f73c10d0a5753aff554"],["/photos/index.html","414f97dee4a0b570b7840751e76cb244"],["/photos/movie/index.html","c8ccb41094f45e4ac4ff661b803b927f"],["/photos/ohmygirl/index.html","540282ed27a8668502917780bfaa9729"],["/photos/outside/index.html","277d2386c1ce09e752541369863b7527"],["/posts/16888.html","210bba9075b24c7ee20682f1d475e55a"],["/posts/18206.html","78e56c4e30ed6adb682df57fce68f34c"],["/posts/21635.html","ddfbe9584cd1a32b3c8cad14b3f67710"],["/posts/22910.html","9a997d254363b70c2a94400d2097f0ab"],["/posts/26185.html","231a7999d9914b1f9bd23afc0978391e"],["/posts/27699.html","5104fc32b14fd25a241e0af680196901"],["/posts/34134.html","986c2ebced561566d68a7cbbd5d1d64e"],["/posts/38362.html","993de6dff49c97981b3ade73ef55f50b"],["/posts/4186.html","23db9e395d652c87e187bdf812d731fa"],["/posts/42658.html","e86299c7768d0077452f8f2ab965f906"],["/posts/47374.html","f52e254d0c2d371d317a36d308791168"],["/posts/52307.html","d05c03386c645b7737ccdd0a4f31b547"],["/posts/52812.html","981d95284dd443a4dd265d2e8fe9709e"],["/posts/53486.html","ed4060af95bb20e38b912bb26388a588"],["/posts/53714.html","00c274303b414f23bfa4d8ef7b8ec366"],["/posts/58565.html","6691f2bb1fd5ae4ff18cee8d9d722c4f"],["/posts/62580.html","41d82c76a90ab94934224eabf0da55c1"],["/posts/64329.html","96ba3a393facfd2ed43e5eac3356856c"],["/posts/9968.html","2385101a8fec05ceb8370cd60ed468c0"],["/record/index.html","d14690dd0fab1a6ae0d70afa4d4ff22a"],["/record/photos/appointment/index.html","030a4b9a51c3bb2c17478dcd8775c077"],["/record/photos/babyAndBabies/index.html","54f656bd5a56890387ac3671424dba86"],["/record/photos/game/index.html","a890bd230bb25abc8c5e0364fe2fab3e"],["/record/photos/index.html","80e2c5621baa650f44e1debb1e8d8601"],["/record/photos/movie/index.html","53d40dfea80fa73c67212669dc485249"],["/record/photos/ohmygirl/index.html","4e4d69ac2a38bf19774405d432c66c3a"],["/record/photos/outside/index.html","6ea445ce132a18c986a49757cdad5e71"],["/sw-register.js","b8bf4ee366c5fe448daa705fb71d13d1"],["/tags/B站/index.html","2a5962b4a3c566a35d4ade0ba22adfb7"],["/tags/JAVA-工作总结/index.html","765ad27c8236c6b8e3a923497ba30a2d"],["/tags/Java-EasyExcel/index.html","5a8f01a651e45c2d2efe3c5db80ea902"],["/tags/Java-MYSQL/index.html","7d0b14b9acff45d23c3c8d7e88f9f50f"],["/tags/Java-工具/index.html","2cb72477e8b1f29a5fd14516e1936d16"],["/tags/Java-常量/index.html","a1b74474a28163b9b4c47249c2361378"],["/tags/Java-配置/index.html","c720c096ba3c3ae5904258d90ae68116"],["/tags/SQL-便捷/index.html","f15d8a1ec2d56ee239307b463a6bd9af"],["/tags/index.html","c21f2f1bdb3a3ab0b864d6320ca08a82"],["/tags/java/index.html","33b0984b9f0251fa51972cdffb1a5760"],["/tags/minio/index.html","dd7b083e53cabd39e9bcb84b6b3b0d78"],["/tags/定时任务/index.html","35d4e56f37f7dad39a5d2a434170cf5e"],["/tags/工具/index.html","ab1a662843d7635c796db20774adebaa"],["/tags/搜索/index.html","10f21f2335cf50f05d2a5c96b3ec1b9f"],["/tags/时间工具类/index.html","b319ad79768088fcac3c434077593d86"],["/tags/虚拟机/index.html","debc7ac6d0abbc0c763461e963a82de2"],["/tags/递归/index.html","fd6f50c67c883eac179b175aeac95188"],["/tags/配置/index.html","beb1dfa37d7d2cadafed56374a49f2ba"],["/tags/阿里云/index.html","f94bc4ea2f04a8920509fa751dd18359"]];
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
