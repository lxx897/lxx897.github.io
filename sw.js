/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9d36ca4246591a045046d333e9653e87"],["/about/index.html","c45917ba25d451012302fa7f29ff04e9"],["/archives/2023/11/index.html","d8189042f465b13263ff32ae650e91dc"],["/archives/2023/11/page/2/index.html","2cf21e98435e5f0fdc6d2856058d5477"],["/archives/2023/12/index.html","c06f5f4d5e5b0514342bc9b8e007d70e"],["/archives/2023/index.html","ba70390a62e29c9575bc40616b9425da"],["/archives/2023/page/2/index.html","5ea7ed03faeeb01db124bc47e3e98328"],["/archives/2024/01/index.html","c15b560b49ef5d7bdfa7f407e682abac"],["/archives/2024/02/index.html","0b83bef17e8f06fc90d2b70c76bb2a7e"],["/archives/2024/index.html","5f559c114b0fb2760200d2bcca4adf87"],["/archives/index.html","466127842893d7d6b00b4402f3ca739e"],["/archives/page/2/index.html","41237424c7e1c7f5feaba12d8ae445c7"],["/archives/page/3/index.html","0e9ff624044de3ad26007f4da25cb8c0"],["/categories/Docker/index.html","0ef823147941319dee992336dd14ec67"],["/categories/HuTool/index.html","1042db0c8cbaffac49f34d8a5537f646"],["/categories/Java-MySQL/index.html","f8cad9508b1e64b9b2e1201e144344d2"],["/categories/Java-远程调用/index.html","1e93a7384d003a88c3a1541c83c277b7"],["/categories/Java/index.html","00849720be765b922714e59adefcb2b6"],["/categories/Java配置/index.html","39c828b3940892cc9433ddd004d94e8c"],["/categories/MYSQL/index.html","0a12970ffc584d4cbb0be9e41c02c124"],["/categories/Page/index.html","46cf4f689665c1ccc9efb2cc1948d005"],["/categories/Safe/index.html","3be4add2aa449ea226c3d0625f4d3033"],["/categories/Stream/index.html","10dc89ba51fc9eb85bce27b9e6e28458"],["/categories/hexo配置/index.html","c8346ec58dfab3a13175e5e81d8dcf0f"],["/categories/index.html","166e144dea1d38c6737981183d3f310d"],["/categories/实用工具/index.html","71cc5e8eabded66d8328940d99e31d2b"],["/categories/工具/index.html","7b90338c97937423392c7b876a16a17e"],["/categories/工具类/index.html","1901bc9327afc8baa9f1bc2ad239f143"],["/categories/时间/index.html","84ba57238fbeb8051325f132f728799a"],["/categories/视频/index.html","6a547e75f5cd2e01beef8fbfc8c80bd5"],["/categories/配置/index.html","199d119bc310d5c69f788c6dd1ececb8"],["/categories/配置文件/index.html","deb8626712beac1d72736b37ea4ea372"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","04c798d2e540795beea365312d4f4abc"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","542355f3e6fe92b3d11d58f21b8b798c"],["/page/2/index.html","197182aece06aa2498f03f62e8ca47b8"],["/page/3/index.html","7755d95f1390ab589711330f0ca1429a"],["/photos/appointment/2023/index.html","89de8a5fef0f3c4925d5c2862d459a9b"],["/photos/appointment/2024/index.html","b58bb5d1ceeb0e739f05979c9db6e9e0"],["/photos/appointment/index.html","cad447d66198ff722f805eac2958d93e"],["/photos/babyAndBabies/2023/index.html","3ce0576330448af2bccfb54adaa18386"],["/photos/babyAndBabies/2024/index.html","8d0b1a91f82af948242aa3a272468596"],["/photos/babyAndBabies/index.html","2732a304cf86939d07f6e764b2ef49d3"],["/photos/game/dzpd/index.html","17e67097df42a29bda8d7d88a9445343"],["/photos/game/gy/index.html","336959dc8af337d6ff284fb79b5f7200"],["/photos/game/index.html","9b9d8b10422072767fd26103c0e60544"],["/photos/game/steam/index.html","2a235521804e4522f6eb27510176f3ad"],["/photos/game/wzry/index.html","927121c052ff269c32ac1ca3241f25ef"],["/photos/index.html","08f1a1b1599c59b4e45441cc350e9236"],["/photos/movie/2023/index.html","fb3a555fdb954478c2b8489eaccd32f1"],["/photos/movie/2024/index.html","25eb2a3687d8ce0f5924868c519e32c1"],["/photos/movie/index.html","8597c587b6fc2901b649ae639334a0ce"],["/photos/ohmygirl/2023/index.html","14e2f40097b68c6948b84ce0498d52d4"],["/photos/ohmygirl/2024/index.html","2b0312f8dc0c43eb900f8fca19ebda90"],["/photos/ohmygirl/index.html","0d66a61544f250f6d64cffe647fa9fd8"],["/photos/outside/NanJing/index.html","3a13663d5a00a8dd4c100e2280dc0d65"],["/photos/outside/QingDao/index.html","cabbcc4b8ce2b87b000082d995c41c12"],["/photos/outside/index.html","fa2e5d1f1000e33c42f515f5e830caea"],["/posts/16888.html","d43ea1e740b2aa780b6b449b076d1eaf"],["/posts/17303.html","f8622bef1d9c66a963fa8eeba59808be"],["/posts/18206.html","7f8c407305217a4050ed0c3c5e1582a6"],["/posts/21635.html","c17df0c0800a76671db6698b10bbfe79"],["/posts/22910.html","dae522ba3f0e71b8939700109095e08e"],["/posts/26185.html","527623b203c74ca6feb47fca6dc00cf4"],["/posts/27699.html","9274a52fa74869dd0078b9524168294d"],["/posts/34134.html","f1e411dc9959dde1a57655d683a3ae35"],["/posts/38362.html","2f6864b8d4d592c5da0a69796b5f37c5"],["/posts/4186.html","66a49ed04dc242cf0dde751ad6dab598"],["/posts/42658.html","516b8e2449c56adf95ac1abfa80b6a5c"],["/posts/43618.html","05cf8b335834ddaef5eb985bf36efa0c"],["/posts/47374.html","d7d6e23a3db651afc290a02d46bb0ff9"],["/posts/48428.html","d184565c6173cbcdd3cd7e81d741d417"],["/posts/52307.html","797aad3e73875c51b2a830c269303117"],["/posts/52812.html","9e56d76c1003ff3392bfa5036fb8d122"],["/posts/53486.html","143167072f20c44071fc0c218d353b82"],["/posts/53714.html","7851ae1c0c9de522969661ede1b3dc94"],["/posts/54999.html","9dc73d7a8c2bf43963fcfaccda110bbc"],["/posts/57395.html","97d4340b9afc47ba8378db3c92b397ad"],["/posts/58565.html","f1e72c774e0fbed50e237b68dc91cc8c"],["/posts/59743.html","db5c6121bd081a795db4b1ee46630c4b"],["/posts/62255.html","aed76ddff3ae8c0f95034dadb413d244"],["/posts/62580.html","c5f2c882861496726f65e5584bd8d2d8"],["/posts/64032.html","94679d1c2bed0712e3500fab476dbc8d"],["/posts/64329.html","ca6cb161750fc2f511b4370b867876c5"],["/posts/9968.html","f4b7a4705bf039c67d0eabbccda61559"],["/record/completed/index.html","4f37ee865519d4495ce4fe40e353d5d3"],["/record/emphasize/index.html","77db180a509d76eff893cbfb7df1ef49"],["/record/index.html","4d9f55a2e2bc21cd712300e7a6f70b1a"],["/record/period/index.html","875bc021e84ab259c570080ad2206b9a"],["/sw-register.js","917820095bc799d96841f73292e70ff5"],["/tags/B站/index.html","6530ab268cf4abec0c01abfdb2131961"],["/tags/JAVA-工作总结/index.html","2cbd8a1ae36fc009d7a4e6a63ab23f2c"],["/tags/Java-Docker/index.html","8db1a82bb32ca3e05e619e2fd1cc913a"],["/tags/Java-EasyExcel/index.html","31a81cba4e80697e08a13b22ee9c5f1c"],["/tags/Java-MYSQL/index.html","73a0329e5396699869f407fae71dd2d7"],["/tags/Java-Page/index.html","078ebb8a0b063332717bcd819855b11c"],["/tags/Java-RestTemplate/index.html","9e4312a68c4872407846dafeab46f20d"],["/tags/Java-Stream/index.html","ac9c40648560f89c7bc4276d662e87c5"],["/tags/Java-工具/index.html","07f5fc9fd8bde853a5a190b008e70f4a"],["/tags/Java-常量/index.html","95286d747ed35c92e456a82c29ac2f0c"],["/tags/Java-校验/index.html","3e72ec3303404924ea569fbb830e013a"],["/tags/Java-配置/index.html","f8c67e382d3fe1e9fbeb4dfc686319e9"],["/tags/SQL-便捷/index.html","be9fa55323588c1c56bd701c251d048e"],["/tags/Safe/index.html","b82dc212290a7e0809148ff2d99ae482"],["/tags/index.html","5c75fbe367b15f8dd8defe108613b8d9"],["/tags/java/index.html","60a107de567b324d146f3820a1c4d0e2"],["/tags/minio/index.html","bea65cf1b7f8605913d219cf3ba18555"],["/tags/定时任务/index.html","e4cf181089c3c0b24b7949ddf04644d5"],["/tags/工具/index.html","572c24014817721ed1674b55801b32bd"],["/tags/搜索/index.html","475a4a2def9827dd293dfd7b514db58d"],["/tags/时间工具类/index.html","bb1308f8450095b65982fe3cd7a6e3d7"],["/tags/虚拟机/index.html","592314f8022d8fab4d59d26632edbdd6"],["/tags/递归/index.html","492a83d8474c11ae1244c977983cc0c0"],["/tags/配置/index.html","cf6c9da4f034e654b5d942958eaba36c"],["/tags/阿里云/index.html","eb35c32b6c2d7a95b7d77016a2f49452"]];
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
