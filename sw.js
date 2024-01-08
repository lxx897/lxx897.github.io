/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","60fda1211a7dae379ab392205dfabcb6"],["/about/index.html","4ade395a56f244f43ae9040555ebfabc"],["/archives/2023/11/index.html","b430bbc6d3096c6f551cf66359f38adc"],["/archives/2023/11/page/2/index.html","d4348a87e1e4f89f0582faea48b83c53"],["/archives/2023/12/index.html","166144876ef5d993bea3a8d627798fbe"],["/archives/2023/index.html","8cf7222a52b77d0b46a9935ca74ca7a9"],["/archives/2023/page/2/index.html","8c86d551f50df6abdd3229bc390b6b69"],["/archives/2024/01/index.html","8e08155db932e2fad1ab6bdbf7aa0bb8"],["/archives/2024/index.html","996847c11736848eec132e69dd5fada6"],["/archives/index.html","1cdf66261a9e1864fa30b53832e69d2a"],["/archives/page/2/index.html","af11bf2b70ff4ef5f3626fdf52d9420c"],["/archives/page/3/index.html","2383dba10e521955c7c9566df651aba4"],["/categories/Docker/index.html","6549084ad0a0187abe6dd407d14949ae"],["/categories/HuTool/index.html","31def7d6f80d96f119956423637bb291"],["/categories/Java-MySQL/index.html","1b3803388e42e4c71abda07a1b190092"],["/categories/Java-远程调用/index.html","40a73f1c59b2232236eb61c186dfd880"],["/categories/Java/index.html","f6592a3baad6645b6230cc51be8f6566"],["/categories/Java配置/index.html","cb14290e9cd05e2f52340f2fbac67110"],["/categories/hexo配置/index.html","f57ee58a6489f0c828ec1c278600b3f9"],["/categories/index.html","90a46a57d656b447a127b660ba63b35d"],["/categories/实用工具/index.html","3e536666c84875550ed8a625e53924eb"],["/categories/工具/index.html","aee6ecaa92506590b15498f6624ee942"],["/categories/时间/index.html","3abb59c4e32965bf613a9fd7995091f4"],["/categories/视频/index.html","d052fd6bc97af60adeb04b1f0de3be5d"],["/categories/配置/index.html","7dfcebb98b592d02b90df9b9dbfe61a3"],["/categories/配置文件/index.html","fadcaaee67633a80504366a944093ab8"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","5c2aa96759e679e5f06029c029fcfc61"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1604ade2bc85ea8f9a77c75c2a17ca4f"],["/page/2/index.html","9adc208aed5c853c2986c186504834d2"],["/page/3/index.html","60769d6400e3dc4531628c19b56608a0"],["/photos/appointment/index.html","ff0022da8e90c097ca16e9fc222ba676"],["/photos/babyAndBabies/index.html","82f0a460ad674144205e641a49ed0864"],["/photos/game/index.html","30995a21a437e492f7465ddd61b9d561"],["/photos/index.html","ac12620cbde022614cbfbcb76bab39a9"],["/photos/movie/index.html","7f72e9190d9ffbc70cf671606e101f1f"],["/photos/ohmygirl/index.html","f5e21dde2909ef9e381432a04dbd7088"],["/photos/outside/index.html","579ef76e54439091bffa18e74331f71a"],["/posts/16888.html","03f87b77e20132362ab6bd2d7249fc3d"],["/posts/18206.html","10672574de36c54a7f1e9c6f28b2b38b"],["/posts/21635.html","962ad20c5d4aae063ec2a164612518c3"],["/posts/22910.html","a65cf9f0848ffe1b6cfd695b0d1d2d13"],["/posts/26185.html","1c6613cafe5f8538a9438d02209a0e35"],["/posts/27699.html","dca023e97a5c91ca3d0df14f3cb51661"],["/posts/34134.html","5b67f3649bb6dae09ac340c83073ae78"],["/posts/38362.html","1001504d563cee7c90d1fd8f607438ff"],["/posts/4186.html","f33ff0abf29aef41d3f4f15d7b6102eb"],["/posts/42658.html","4cef5a19432c47dd6f65a9ce462832d1"],["/posts/47374.html","556e80266fb2d3e6ddf37139c8d13f32"],["/posts/48428.html","a746a2f52e7de4319009219847abb30a"],["/posts/52307.html","6b3a9ba7f0bb34fa409f7bc4cdb9c7f6"],["/posts/52812.html","c436fcdf2b391b583d720cb21cc065eb"],["/posts/53486.html","c4030429133f8483ba487d53279c2836"],["/posts/53714.html","fbad4724094dad55a97d45904cbdf673"],["/posts/57395.html","5eac6040b75f55432d336299a8c009c3"],["/posts/58565.html","64c2ea386c6a5013f911e4a8ffdc64f9"],["/posts/62580.html","c087c996a4c4e9226ff018cf52ffa446"],["/posts/64329.html","f1b38af7f8539cc4f3ab37e947914b2d"],["/posts/9968.html","e0c436c3e40ee3dc4763dac06596b58c"],["/record/index.html","23246c12d12726dbca803ef0cccd6610"],["/sw-register.js","e58393d114f497ecf061f60949fc96db"],["/tags/B站/index.html","7a501a0fc8103580eed6274b5fe45527"],["/tags/JAVA-工作总结/index.html","c7abfce8a720c0e3b0c624007aad98bd"],["/tags/Java-Docker/index.html","9c93acb813e17a1cdf374951c29d808a"],["/tags/Java-EasyExcel/index.html","179aff45d9338045ed90415bbd32e246"],["/tags/Java-MYSQL/index.html","e8d2fcf4e5f1d95194117bb6fa341dbc"],["/tags/Java-RestTemplate/index.html","60fbad84cfd8b671a8674c13ed3e75c8"],["/tags/Java-工具/index.html","2faa36bc70337719e352237a472804a7"],["/tags/Java-常量/index.html","83355ec3eef21b175e585d2668fae772"],["/tags/Java-配置/index.html","c707801eb32922ebac52482bcac7a3fd"],["/tags/SQL-便捷/index.html","9d8b6ebb0a6e985f975c7c0676ee69b2"],["/tags/index.html","a59ed9e030dbafd34ac6eb582b2e33bd"],["/tags/java/index.html","6a1d9b0ff658450073ef33832b8fc24e"],["/tags/minio/index.html","0c0312ab51dad1c32924e1992d84f6e7"],["/tags/定时任务/index.html","2d66917ede48861b253b7503293db0cb"],["/tags/工具/index.html","ef3c7d13222da87b1d2ec48588da192f"],["/tags/搜索/index.html","17037e041b06d26bb1f07ab5a50af493"],["/tags/时间工具类/index.html","7e4f115cc574ac7773fb032d76081344"],["/tags/虚拟机/index.html","d8fd57d88fb775572e8a874f4b9921d6"],["/tags/递归/index.html","4c2b57bdbb3269c28cd5b16cf3ae6f87"],["/tags/配置/index.html","2bc0c13177ae2b8ef3b9295af0afc5df"],["/tags/阿里云/index.html","eee19b37489b37cfe3af077b3b9260c9"]];
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
