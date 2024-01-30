/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7b0f874ae3993443a099240ed957a20b"],["/about/index.html","93a06eb2e33c3fa28b779d37905de3d6"],["/archives/2023/11/index.html","0c34fd04baa9d75131dd5938f82164d9"],["/archives/2023/11/page/2/index.html","c6f43edca9b037c9b590b48a0e74f9e1"],["/archives/2023/12/index.html","f11aec0abb82e993b3950bd67c1bc8ad"],["/archives/2023/index.html","83a3da79ff6e4bf7ba9a106ac0798e81"],["/archives/2023/page/2/index.html","87a0ce1c4f7cd358a9a7de534c3b2336"],["/archives/2024/01/index.html","175cdfd27a6d1399ae58104fb7100d15"],["/archives/2024/index.html","93e2f854de8014c1022d8c9d8aff4faa"],["/archives/index.html","6a691b9abcca4f008f2565078a1e0d75"],["/archives/page/2/index.html","c4c180fd7eed07b7e40df0cefdc65415"],["/archives/page/3/index.html","9804f600586852315f7e9a51b75c3d00"],["/categories/Docker/index.html","c06fca93d7f9ab117a43e636a53d2b59"],["/categories/HuTool/index.html","11778806ad2b07916419f3bbc339876b"],["/categories/Java-MySQL/index.html","e9b586fb3456cb10de66a950ab7baed2"],["/categories/Java-远程调用/index.html","5e3948696b3a0fa7b6490dbb4117476f"],["/categories/Java/index.html","f48bb7fd38e60bedafcb8d8a94c8142d"],["/categories/Java配置/index.html","bc7c257b5eeefc432c0f858411730374"],["/categories/MYSQL/index.html","19cb8fee1f9d54c9feb0ee99064e1916"],["/categories/Page/index.html","642786bac6cff67d8f2fdc75da705fe8"],["/categories/hexo配置/index.html","850f3e1722f15844b7ad9bb4aaa43c2f"],["/categories/index.html","69a80d1a779152d34e4751f0454286d9"],["/categories/实用工具/index.html","6bd6797779012d71b83ded9bb807612c"],["/categories/工具/index.html","add9e1aeb8c70c61716b28084b36da33"],["/categories/工具类/index.html","2e86653824106695be962868e6204ec8"],["/categories/时间/index.html","4c398e98f579f79ab3bc1c7de92178c0"],["/categories/视频/index.html","d0fe453bbd41f33396b16746dab6cd60"],["/categories/配置/index.html","3e86326edca2d59c83eb4039993d41e1"],["/categories/配置文件/index.html","7dfb9f1539ad4604d84c959a0c4a0cf2"],["/completed/2024/index.html","dc4da58aabca9d172a12895e4bddc7c8"],["/completed/2025/index.html","23ad25c2ba8ba5d0a03356e7d672ec7a"],["/completed/index.html","291508390056c1425e2db935e22ebf2b"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c64f06ab6f55d58fbcbcb7e083100133"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","8960590a38b442f4ac391a5c3eb70e74"],["/page/2/index.html","12e75b680e318212afa8d1007d81f202"],["/page/3/index.html","016c25d7485ba54823d9ea82f8c99436"],["/photos/appointment/2023/index.html","f97b65f819c948e50bd4fe54aeb27ba5"],["/photos/appointment/2024/index.html","ed26785bfc365f925b3d86ea2014da0e"],["/photos/appointment/index.html","1967ff2d34756f051017bbf4ff3afc96"],["/photos/babyAndBabies/2023/index.html","2030d3675c9e171ea5773994c5712993"],["/photos/babyAndBabies/2024/index.html","99bd34a5a0588cae55b499089f32692d"],["/photos/babyAndBabies/index.html","7f16fa53b63c82033d274e80bfbfa148"],["/photos/game/dzpd/index.html","dffdb2be188f668f308635b141f550dd"],["/photos/game/gy/index.html","b9ea0757a8fd8730293e7dd747af92ab"],["/photos/game/index.html","d37484e6a2b80b6a99587c62e2efabfb"],["/photos/game/steam/index.html","a9e724aeb578f71528aff439c6248818"],["/photos/game/wzry/index.html","828bf4a5ebc6854ab52223d0477f9524"],["/photos/index.html","8b30866c6f18dcdfc1be9fcf723bf870"],["/photos/movie/2023/index.html","542504923cf7839028d9e474ae0e9251"],["/photos/movie/2024/index.html","5ac3590ba40d9c94cb891effad590d80"],["/photos/movie/index.html","0e2046ce26a55157fa0bd966d2fc6842"],["/photos/ohmygirl/2023/index.html","61a29bc233eb2a033fdd5749af74389b"],["/photos/ohmygirl/2024/index.html","ea5353d575d4662be4a5acc148dc94be"],["/photos/ohmygirl/index.html","4792781b638e8044a4e08c4f0be146d9"],["/photos/outside/NanJing/index.html","4924d5aa107c594d6a7afd7c467ec81e"],["/photos/outside/QingDao/index.html","cb4396608ab14c0464269604414e012d"],["/photos/outside/index.html","10c117e72537024ae282e514d1662702"],["/posts/16888.html","187e2ab51c7724bf5ea565403558faf0"],["/posts/17303.html","7cf46afa94665b9b1988efffa6bfed8d"],["/posts/18206.html","657cb9bda1d2d7c6e397241eff123633"],["/posts/21635.html","233f03de8084edb002abce0c1cc235e5"],["/posts/22910.html","f938425d89bcddcfd476424ae412f42a"],["/posts/26185.html","b3927abae5488342151d298edf267f86"],["/posts/27699.html","ec0ae348e80f72994e9e702b902f9243"],["/posts/34134.html","2ae3227e857a5f0e0c2b69957871912e"],["/posts/38362.html","6e4438ae5feefce76f4d36bcadb73334"],["/posts/4186.html","586a91e0f90aa7402edbba091088549c"],["/posts/42658.html","1cb87c8f0a4aad0eb339c8076f87d82b"],["/posts/43618.html","e4a20af7359f1159a63da2aa8fcf5ea6"],["/posts/47374.html","3618d862b966d92e505f593fe2386f2e"],["/posts/48428.html","bdb49d98a8ea95a77c145604d7e5a46b"],["/posts/52307.html","0f943f78cc2bd000d49c6ffc3dd2ce11"],["/posts/52812.html","b06b44f58c800dfe81ade9596190d21d"],["/posts/53486.html","14979d1b34fe2fe9ff97821906ed77ab"],["/posts/53714.html","b942a771a5fde7946b426049d112a1fd"],["/posts/57395.html","4f1a89f20baa8cf8c9d14c92de764a6f"],["/posts/58565.html","5310778604b91c180b71d0fe1264aca7"],["/posts/62255.html","4fbe5fa222e7339dcd151ec3d88276af"],["/posts/62580.html","cb74d9ceb7c839b09bc2df315f3ee1a9"],["/posts/64032.html","0f5f6a7a282050a3200484add9d1944b"],["/posts/64329.html","3eeb080ba882635a7da9d3b6fc4dae1e"],["/posts/9968.html","5a655c31b964b4480955a23a0a82379f"],["/record/2023/index.html","4875be7a4f2781eab095a1da2f080228"],["/record/2024/index.html","ffcc5ea2f702d437e03ca92305312546"],["/record/index.html","166af0113bf4675d83c96f1aa05d16a6"],["/sw-register.js","46cf60fdf7afaddd24e11a9c4f81ade2"],["/tags/B站/index.html","cb1c6cec0d74e0417b1137ec074c4e96"],["/tags/JAVA-工作总结/index.html","912ad6bac8a4d0652cc6077c3df67b43"],["/tags/Java-Docker/index.html","0cefd1761c6e048832b7ed51211624a1"],["/tags/Java-EasyExcel/index.html","e48a5a14273852f6f4a7173c6f66ec0b"],["/tags/Java-MYSQL/index.html","ef099aed6ac3c4d932263aedec1aede5"],["/tags/Java-Page/index.html","1ee10072a2ec9fd7fb26a4f12b9a363c"],["/tags/Java-RestTemplate/index.html","54c0ec55b444a86bc43abd63c0e4fc10"],["/tags/Java-工具/index.html","fd7dc58d6d95fd576ce3f7c0454c2dd7"],["/tags/Java-常量/index.html","33bf122779967bd3d6c5730de4e51d41"],["/tags/Java-校验/index.html","f69018b587f4ab99a9b3da60a1847b05"],["/tags/Java-配置/index.html","b6f3356b4d0138ffca9349e7954fca58"],["/tags/SQL-便捷/index.html","4cb2e5b72ef251b7d0e370007b2759eb"],["/tags/index.html","a13748217664b00333988467d9ed8edf"],["/tags/java/index.html","c6cc55415f3e6611dd15eedf7920fdf6"],["/tags/minio/index.html","9551feaadd7be7bf05821f9032eb5624"],["/tags/定时任务/index.html","35c7fe096af248bcba760d15178c80c2"],["/tags/工具/index.html","a35d9613f10c17bcbe1ad0ad0aee23d5"],["/tags/搜索/index.html","a8f0d43bb22e1a08249d6f3cb055279a"],["/tags/时间工具类/index.html","f3198495b35597e7f506c4d812d9bb8d"],["/tags/虚拟机/index.html","dd6748d914f16047fb7caef7c98a8cf7"],["/tags/递归/index.html","51cd3bd94e40c7655ef4ab73be63a0a4"],["/tags/配置/index.html","c4ce1bd2ba27bae0ab9ab8600ef3b793"],["/tags/阿里云/index.html","6f6fc535cbc184b1d2b712c560613b8e"]];
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
