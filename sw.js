/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d880a55c6ee65c035bd82a1913a00d81"],["/about/index.html","472e0a782b5f42b12660a08b275f2eed"],["/archives/2023/11/index.html","991373b3777b365e991edec2982e5003"],["/archives/2023/11/page/2/index.html","8e58790f611a48d18bc157a613cceef4"],["/archives/2023/12/index.html","265b0a3ebb05b59e4783a1f8b561c2af"],["/archives/2023/index.html","be1d9e299c91943b0612e254cff1e429"],["/archives/2023/page/2/index.html","d9b57b82f2b8560b35e18897624d0fc1"],["/archives/2024/01/index.html","20614bf2419c3a0c1ea6bf2765bcc7d0"],["/archives/2024/index.html","70b6608f3810276411f19f488f287297"],["/archives/index.html","8f22e64b4dca235568fa5cbf1c6b9b8d"],["/archives/page/2/index.html","79d486a7e3ab6b07ee293f593a917342"],["/archives/page/3/index.html","dcc58153dffc7e43dc6ac31b90b53969"],["/categories/Docker/index.html","57812d24feed1f36f8ca2c3c0cbf8161"],["/categories/HuTool/index.html","cc4262282a5b8c488a2385a0b22116f9"],["/categories/Java-MySQL/index.html","2edf5a0dfa68c9a816a510abf8a6a4ca"],["/categories/Java-远程调用/index.html","a5775a56e4819e715894956062db1462"],["/categories/Java/index.html","30a9b983823cf9a4f105ce169ff97ac8"],["/categories/Java配置/index.html","e3db735d4c899066a91344ee0abd0485"],["/categories/MYSQL/index.html","a4ce87777521c0aa64e58cdba6f804a7"],["/categories/Page/index.html","01dea3b8ffb2198693945bde8fa53710"],["/categories/Safe/index.html","594c6a2807164a4c69e3e197828e89da"],["/categories/hexo配置/index.html","ff7f98153b1a1027e30a054a389e051e"],["/categories/index.html","b7a6742b7e7439fac0195350ab4bfe1e"],["/categories/实用工具/index.html","dcac28390409d1290cb8c42ab82901fd"],["/categories/工具/index.html","3a3bc767533bc0b5901b13c92ab17f8b"],["/categories/工具类/index.html","10ea2176925c62b44af9298a554a83ba"],["/categories/时间/index.html","5abbb6379d74a650356d509a9fde4020"],["/categories/视频/index.html","b3b26cdf35e72db2aa298f13e790884c"],["/categories/配置/index.html","115a9093ad1a7b1af407d8dffed24c3f"],["/categories/配置文件/index.html","02a213f5b38b242ca05534504a378d6f"],["/completed/2024/index.html","7963d267aebf4f1cf5ba5a0401d9030e"],["/completed/2025/index.html","ca8f7ec8b1e93c67e9ec87757c38a52d"],["/completed/index.html","3c9d277231304c46ac02083f0e003b28"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","877cf9fa1a724e63db7257948462c294"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c8a46c64935e89f7e534211f72741bc0"],["/page/2/index.html","56bcedc092b5fa96eeb70b2f7535fb51"],["/page/3/index.html","9a589bc00c64416d23a51126bae6f7be"],["/photos/appointment/2023/index.html","c1c9453a87ec5bd471b1c0689be46674"],["/photos/appointment/2024/index.html","7207e096d715c06657774ece4ae92e3e"],["/photos/appointment/index.html","cd5fde072fa60984064af1fd82c20e1c"],["/photos/babyAndBabies/2023/index.html","e833cc225952da6f4e9032fc6826013b"],["/photos/babyAndBabies/2024/index.html","d8ade9380ff8ee78de8c2546087cc8fa"],["/photos/babyAndBabies/index.html","b2a8e71f80ac83f3f0e888d5f0c7c4e5"],["/photos/game/dzpd/index.html","cc6d909eb40e03e2e1924c8a63e60776"],["/photos/game/gy/index.html","e62e39c9a15507e027e5a4d3973c44b6"],["/photos/game/index.html","40aa44f6183d08447b107e5b5fac9bba"],["/photos/game/steam/index.html","9b5346b05a3cbf604ad44e8879a6f05e"],["/photos/game/wzry/index.html","511b93ab06aa3c99353bfa8c558168f8"],["/photos/index.html","68b5c528780fc764d58387ead7a86040"],["/photos/movie/2023/index.html","b6ce57c8514989d6fc1537f2ab3ffa12"],["/photos/movie/2024/index.html","5e3f154ab86b6eb5f62251fb09d9ebb6"],["/photos/movie/index.html","0e600bf49b0aed121cf9fd60bbf4a024"],["/photos/ohmygirl/2023/index.html","8e29f34b7168d035019df9f2d71ec76a"],["/photos/ohmygirl/2024/index.html","a1d0954f3269d8aa6c3644da6791f0c2"],["/photos/ohmygirl/index.html","57b425798dafbc122a36cc472a414d80"],["/photos/outside/NanJing/index.html","81a602ed8d2ab254d86ba3261b83945c"],["/photos/outside/QingDao/index.html","fea6424db1546660765eb4ec53edfce6"],["/photos/outside/index.html","9c93cb6764d423d36d918b35e14276c3"],["/posts/16888.html","f44f131423c8ca8d84f52f6f937f1f9f"],["/posts/17303.html","b73a3db98f85f647d20f954b8fcc0a11"],["/posts/18206.html","3ad73dc0c352393fdc6ad50137f94f63"],["/posts/21635.html","7898d6203e2c182faf7e8553fdc673b1"],["/posts/22910.html","04f28e8ab798b025fbc5293dea9eef70"],["/posts/26185.html","b3d143a2f52fe62fa069752591cb2d8a"],["/posts/27699.html","0dc3ed9c937c7258fdc48ef6af8090fd"],["/posts/34134.html","98d5b5e8ff635f405590813750421315"],["/posts/38362.html","020c764361544ebe2e2851c1cb02312b"],["/posts/4186.html","64411be6df47486ac760596805caae5b"],["/posts/42658.html","9886042c8aa1b9ee3c068570be14f70f"],["/posts/43618.html","405b2305caa10466a3dac66a36d8101c"],["/posts/47374.html","0cf9c72c2e1559b374b5f1faab7a1399"],["/posts/48428.html","ab25f1478d7c860707358288e4e30007"],["/posts/52307.html","7810e6d0fcf151519c96ef7f83109498"],["/posts/52812.html","bb69c126cad3c1ba459e9290259eceef"],["/posts/53486.html","84df27f533b5f6292d49dc2efc0c6c2f"],["/posts/53714.html","753cdc8b2ee2121953dfa784c17f9da2"],["/posts/57395.html","abfc81566c1cd3bc7e7c7f715cd2e4f4"],["/posts/58565.html","0d60e802c0ed82f4a2b74e049ac7b32a"],["/posts/59743.html","830ec22d4790a4007b8401185a1cde73"],["/posts/62255.html","d531a1f355756ffbe871049ea858dde5"],["/posts/62580.html","ab94ea8c267c77ea1d467e446749090e"],["/posts/64032.html","cd4d0309492001730d71bc39406cfa28"],["/posts/64329.html","9b74dda17245797049d898413cebf9d5"],["/posts/9968.html","ba831b4528612d57c85a1bd94f877e08"],["/record/2023/index.html","ac38d6552d26eaf244660f892c5e1279"],["/record/2024/index.html","d4785586bd1a5dd1ebf15156aaa78cc2"],["/record/index.html","dece9424c583ddcaf74e01b045204a57"],["/sw-register.js","ba6e290aa5196c0e688f44fb43e21f78"],["/tags/B站/index.html","c5036d011641c19339293915b14e7c82"],["/tags/JAVA-工作总结/index.html","cecf451a39f2c85cb4dd7540da1f5eaf"],["/tags/Java-Docker/index.html","6932caaedc641730eb501c329c259b80"],["/tags/Java-EasyExcel/index.html","b5ad056502680353e50685dcdfcb4769"],["/tags/Java-MYSQL/index.html","a5d1fa9773586d207ddbd2987a0953b4"],["/tags/Java-Page/index.html","62389eae881a58ef54b3a22249b2e445"],["/tags/Java-RestTemplate/index.html","75c00f8e2670db2af1d722d8587099b2"],["/tags/Java-工具/index.html","728610fb76e3c3829fca85632fd64716"],["/tags/Java-常量/index.html","ce0e1f51b0cc7ad8e0de9fe5b46a43d4"],["/tags/Java-校验/index.html","26c3bb2f0975edd6ed11c8fb4c7d5a54"],["/tags/Java-配置/index.html","b03738be2df38daa1badb200769fa917"],["/tags/SQL-便捷/index.html","b6fe09cacaa8b640005c8b7de33a1c70"],["/tags/Safe/index.html","17035ac920c80bd6bfbdb223cdaea426"],["/tags/index.html","950ea0f83f9add4a1b0066ccafc40a66"],["/tags/java/index.html","211a96ec7bde95a80e4ab03a4fa5470b"],["/tags/minio/index.html","afa6993fa1592a5cb2f970d3a4d3731c"],["/tags/定时任务/index.html","1ef7c689711b3ac0be7550bcbd4768ec"],["/tags/工具/index.html","d74db294341a36cac5d4b48799279663"],["/tags/搜索/index.html","043e3c013d6062dc0e4c977d907fbe45"],["/tags/时间工具类/index.html","bab88880aea851fad1a830a1d3d35907"],["/tags/虚拟机/index.html","90278cde445d8271d8271dc4139828e0"],["/tags/递归/index.html","44e6ab68f53b039d917b736640883303"],["/tags/配置/index.html","0d991c426de482dfa81206f74c576099"],["/tags/阿里云/index.html","22797951ecddeaed2076d26a6464bce7"]];
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
