/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","693b31da37c5abf557370448b0a4a6a6"],["/about/index.html","1d9762283b7ebf14d2816596036b6103"],["/archives/2023/11/index.html","6865710d2e509b23d7735bda711666da"],["/archives/2023/11/page/2/index.html","6270375351d5c30e8db44b2df3c5a158"],["/archives/2023/12/index.html","a7c29b866b71e56147161ab68f166707"],["/archives/2023/index.html","344acd226cf3859fd07c46369a9571f7"],["/archives/2023/page/2/index.html","6859bdb9491e54fb68707032bb2e9e73"],["/archives/2024/01/index.html","3a304f9f4457a8055542f081e11d4e8a"],["/archives/2024/index.html","2ced905673e23c31dc64eafd20a59e4e"],["/archives/index.html","418872bbb3363d9332af912e03e07c6f"],["/archives/page/2/index.html","d953c01bd459dab556507238b9515e75"],["/archives/page/3/index.html","4abc7de236655c312982ca4aec4619a5"],["/categories/Docker/index.html","d20959f6f9832b07cd1a009948fe9c7a"],["/categories/HuTool/index.html","09a49800a581b0783ebdce8316eaffef"],["/categories/Java-MySQL/index.html","88181aedc0103162dccf69e9737ddb35"],["/categories/Java-远程调用/index.html","14c41fcaf5a1631c9aca7126e1403918"],["/categories/Java/index.html","b72a2beb4e4641b4649925987e0b82af"],["/categories/Java配置/index.html","4e14fdfc45edb82d3ca6f241f7a929da"],["/categories/hexo配置/index.html","da6c2df688b207b75366dcb92029be41"],["/categories/index.html","23b136aee2b3e047a8705a00c3b72918"],["/categories/实用工具/index.html","4254954441d31de38761b68aa0dbf48f"],["/categories/工具/index.html","f7782f3b1ad452ea34c25f50ca229be0"],["/categories/时间/index.html","30b521189f7252ba9a540c1bad5789db"],["/categories/视频/index.html","35e5c1e4a221c573460600dca65b41c2"],["/categories/配置/index.html","9c103606111e117e0e1d88b80299d43a"],["/categories/配置文件/index.html","7cf5fc2ba65830af3a91fadce7926992"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","6b1817729a6d7a51db7085c08ada84b4"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","d8cd49f1390b7d4cf9bbc257ef1f599c"],["/page/2/index.html","b3c2783bfcd1cf5e84ce0beef2ef01fc"],["/page/3/index.html","29adbe47dc0495c416902442c551ae20"],["/photos/appointment/index.html","2fc80a62ad0d7d981f806689d9325816"],["/photos/babyAndBabies/index.html","7613343896e5d0d1b0d46d39ebceda06"],["/photos/game/index.html","d3c9ba89dd01c8a1a5f86ae7aff31bb3"],["/photos/index.html","7a5ec3b658df4dbdcccacccf5944a4bc"],["/photos/movie/index.html","5363608bf7d376d7d49cdb38a08a9cd5"],["/photos/ohmygirl/index.html","3a6a50126e2a7f6a95fbf9bd158f8911"],["/photos/outside/index.html","3b0126de00a56b6eda940076beec44a5"],["/posts/16888.html","03f87b77e20132362ab6bd2d7249fc3d"],["/posts/18206.html","10672574de36c54a7f1e9c6f28b2b38b"],["/posts/21635.html","962ad20c5d4aae063ec2a164612518c3"],["/posts/22910.html","8cfd42e50b76209f9a171df4d6e04a0f"],["/posts/26185.html","1c6613cafe5f8538a9438d02209a0e35"],["/posts/27699.html","dca023e97a5c91ca3d0df14f3cb51661"],["/posts/34134.html","5b67f3649bb6dae09ac340c83073ae78"],["/posts/38362.html","1001504d563cee7c90d1fd8f607438ff"],["/posts/4186.html","f33ff0abf29aef41d3f4f15d7b6102eb"],["/posts/42658.html","4cef5a19432c47dd6f65a9ce462832d1"],["/posts/47374.html","556e80266fb2d3e6ddf37139c8d13f32"],["/posts/48428.html","a746a2f52e7de4319009219847abb30a"],["/posts/52307.html","6b3a9ba7f0bb34fa409f7bc4cdb9c7f6"],["/posts/52812.html","0463019c58bef0fe987e2521201abdc9"],["/posts/53486.html","c4030429133f8483ba487d53279c2836"],["/posts/53714.html","fbad4724094dad55a97d45904cbdf673"],["/posts/57395.html","5eac6040b75f55432d336299a8c009c3"],["/posts/58565.html","64c2ea386c6a5013f911e4a8ffdc64f9"],["/posts/62580.html","c087c996a4c4e9226ff018cf52ffa446"],["/posts/64329.html","f1b38af7f8539cc4f3ab37e947914b2d"],["/posts/9968.html","e0c436c3e40ee3dc4763dac06596b58c"],["/record/index.html","9f561bcbf21dbb54373e61b36b171eae"],["/sw-register.js","b751b1ad08ef9d5f9a5393ea89c702a4"],["/tags/B站/index.html","fb7bfde7dea4c9c6f4a934d5e555e54e"],["/tags/JAVA-工作总结/index.html","8a07130f759ad549602f6ad5d4838c55"],["/tags/Java-Docker/index.html","e5af4b030928b37c8a1a7ac794b14a44"],["/tags/Java-EasyExcel/index.html","6909f08fcaab04101e829d0e4675ff07"],["/tags/Java-MYSQL/index.html","0f8afdb9fdae3ae165760e944574e540"],["/tags/Java-RestTemplate/index.html","8c80037d17f57e6b7f9d0689f082e891"],["/tags/Java-工具/index.html","1a4c7b79746d4a6d0b8b9c6806acc3b0"],["/tags/Java-常量/index.html","96341b5c4c6361d59db784bd2ab3312a"],["/tags/Java-配置/index.html","07c8b5cb528301f2532c5c01ff570bc1"],["/tags/SQL-便捷/index.html","7a144301f4ef553f8ef992c6b4a723f4"],["/tags/index.html","471beb3be373bf25dc8666aebc286719"],["/tags/java/index.html","3801392411a28be2a1537397b690182d"],["/tags/minio/index.html","bb0b5cedd3f05129f716ff7cabf770ef"],["/tags/定时任务/index.html","64ff14cea3f0b10c2c1212be97125575"],["/tags/工具/index.html","0511ad8a064c93581c5bdd33a172f1d5"],["/tags/搜索/index.html","87ace048e7e16963bbb8ae21efb206ee"],["/tags/时间工具类/index.html","3cf4c365ae478cea93da23c32e284409"],["/tags/虚拟机/index.html","30f42cc88cd812a451f7e2f817905db0"],["/tags/递归/index.html","96258d2f29015e3db653d81b671b6852"],["/tags/配置/index.html","7294e14c3055d6357798352f9882a3d6"],["/tags/阿里云/index.html","f45e0083737859a2ea07b23980a3c026"]];
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
