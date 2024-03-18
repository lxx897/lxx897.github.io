/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a43fc4c4a4f0779e23d49576cae8e892"],["/about/index.html","679b82de9c4f2bb1dab87cce951d1615"],["/archives/2023/11/index.html","69054da199d84070ab266a13857a5845"],["/archives/2023/12/index.html","3e870a6171ee0dddbf147b13e8575ab2"],["/archives/2023/index.html","a6e20adddaed1a47c9a6dc5069a03d9e"],["/archives/2023/page/2/index.html","e59d9f732b4c4e85f41b334351c826f7"],["/archives/2024/01/index.html","ce51671a0471f50397dc4ef35666cfa7"],["/archives/2024/02/index.html","4274420665deeb864f5449d6cad20fd0"],["/archives/2024/index.html","93d3fba92c47531a0b55e2725e2e71cb"],["/archives/index.html","88fc3563c1e51fc7f3cf456eae639b47"],["/archives/page/2/index.html","703115cd10b939d649fdd0d88e28d81f"],["/archives/page/3/index.html","6b8914c34b4e5995c0445d047a6bbbc6"],["/categories/Docker/index.html","18edbd5c97051dd7e37d024c47e708d1"],["/categories/HuTool/index.html","c448e4b31ded3118c0daaa7f4c8c0928"],["/categories/Java-MySQL/index.html","014e07b253b3ec6747a3e94713c6e097"],["/categories/Java-远程调用/index.html","92d1340eed154b9305955e19f2e202cb"],["/categories/Java/index.html","d90e2fc83a78a0b2e319557dd10a55ed"],["/categories/Java配置/index.html","62b177b43240a858eb0bec0bb8a37f6e"],["/categories/MYSQL/index.html","4f66ae3b3ca6873b87d7d79e3fa509d6"],["/categories/Page/index.html","9f25a9e23540cc7cafd1af582b5516b0"],["/categories/Safe/index.html","7b577f15ef667e0a16adf40d2585bff7"],["/categories/Stream/index.html","5c285e22fb74bb4ae490fd47adfcf677"],["/categories/hexo配置/index.html","0fbb898b16f68468351741fd7a7f8b73"],["/categories/index.html","b2892ce5c9edd41109da274c3f07b380"],["/categories/实用工具/index.html","fe2cac5ef1011916f1c0b9085308c8e7"],["/categories/工具/index.html","7e4bc139ed5f7570127c8d4b70b41f8a"],["/categories/工具类/index.html","4c9c9a860aeca5dafcdeafb27a7b2727"],["/categories/时间/index.html","f6dbcb1286908fd1d661afc717a9ac4c"],["/categories/配置/index.html","077fe3d64457ab1793fffaf3cf6e1618"],["/categories/配置文件/index.html","d7a3cce1c9ade6a12c55b3879e7df321"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","74f7bc0c8d67f7d0914d9438037ac384"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","8856670eee830af2b11e06afef4eb571"],["/page/2/index.html","5cda54da499574bf61cf99d2a86427f6"],["/page/3/index.html","b4008d171db556cf13f1d8d463bb8aa7"],["/photos/appointment/2023/index.html","2cce6fccbfc5595f9b58eae7690de48d"],["/photos/appointment/2024/index.html","c64e684156ed5e3ac45c82d192290507"],["/photos/appointment/index.html","cdb6a2d0a07588b485c09a1499e781da"],["/photos/babyAndBabies/2023/index.html","ed2e898b06aac0b595fafae6f4f255fe"],["/photos/babyAndBabies/2024/index.html","86faa62ebceeaa8b74276c3c640aa158"],["/photos/babyAndBabies/index.html","adaa795328ac157580a18d3cb7edad53"],["/photos/game/dzpd/index.html","6083a714ee470d858624460e441d680d"],["/photos/game/gy/index.html","d6460d3cbbf56abb0d83885f7a3616be"],["/photos/game/index.html","f4ada4a5f77a90153fb32e274a2751cc"],["/photos/game/steam/index.html","33f835cf1deaa2d19645665ff8673c52"],["/photos/game/wzry/index.html","e18db03c4400e806dd8e7cfc049b1aef"],["/photos/index.html","1f33fae546330426e0cd3b4bee42e8d4"],["/photos/movie/2023/index.html","d7796721e56ccc8565ee844737491249"],["/photos/movie/2024/index.html","29247774ad0871164a23785198ddb6de"],["/photos/movie/index.html","3fd5cf148371c076bbd6f6edc5e2e28c"],["/photos/ohmygirl/2023/index.html","eebd1818b9ec79036b76fe5326f97703"],["/photos/ohmygirl/2024/index.html","352005b9a43f103fc07e17b8b755a974"],["/photos/ohmygirl/index.html","62cf17236ac8b3889142dcf19d726204"],["/photos/outside/NanJing/index.html","4102f5a5f8fe5e838a57861d1fedb5a0"],["/photos/outside/QingDao/index.html","7ad8cb6e1035fca5ae3e569dcf60363c"],["/photos/outside/index.html","cd54a81428d2b7168c12e19efe0c5774"],["/posts/17303.html","0c597a04f6703d20a08dcaf459d984e8"],["/posts/18206.html","4dddbfa8a44bd64842ba83298cd685e7"],["/posts/21635.html","8f37d630b5ad8366340a2e858000aa23"],["/posts/22910.html","68c84a8e936ea260983724cfdb6a00b3"],["/posts/26185.html","a8d3caa31dbb9a1a0143926e2146da52"],["/posts/27699.html","9d0816369b8c31c91aa9d2739330a7db"],["/posts/34134.html","da3044cf4884f8007635fbaec9243937"],["/posts/38362.html","feb8bf4d7300b905103faac37a3fdbe9"],["/posts/4186.html","abab680d8b7d06a5a0a2d73784340884"],["/posts/42658.html","920959f0d0a8c028fe4ca3aec0ea2be6"],["/posts/43618.html","a757fbcd4f92635a004aad2799f6fa5e"],["/posts/47374.html","1364c662d4534600ab3a46158e443055"],["/posts/48428.html","27120a19084cc598316eb4541cde0810"],["/posts/52307.html","bea20927c7caee58bc46c8c8b0394bca"],["/posts/52812.html","a28988e9ae53716ed62eb0bf2746e497"],["/posts/53486.html","533e5ccaf1bfcee951a7798cd6b7b0ec"],["/posts/53714.html","d58f63e8a76823b8aaa6a72430c716ff"],["/posts/54999.html","64dda5fa9934ff0bc7d82872890aca3a"],["/posts/57395.html","f79c4c778143d3315abf59c883731ae5"],["/posts/58565.html","2a44409ead4c353eca006fcdfcec76f8"],["/posts/59743.html","d6530b463029ac19f9a195d416e917a4"],["/posts/62255.html","bdd2f9084c320f03030e126c1f1c5ae3"],["/posts/62580.html","c2f878eb0541841fe2fe024a616525b5"],["/posts/64032.html","a944ba5fe3796af5d8865897540d5376"],["/posts/64329.html","78aa2ea28b4548d27affd32611849bad"],["/posts/9968.html","6220bed5b63fa8bb891b632a91fe97b2"],["/record/completed/index.html","44260297d78f553d243d4fa45ea96d6c"],["/record/emphasize/index.html","9b02c5807c68fd573aabff440230b5ae"],["/record/index.html","d519a446a884a1a49b08a8c88563cd2a"],["/record/period/index.html","007c0a4dc714468d4c9498766c7844d2"],["/sw-register.js","3b24fc97c3fce41957028f66c3bc3635"],["/tags/JAVA-工作总结/index.html","8303786d2c792fc050fe49f08ee53173"],["/tags/Java-Docker/index.html","924aff662f8f4ebc11bdbebb3ab2038d"],["/tags/Java-EasyExcel/index.html","c05c031c5acf8290fe109e1f33b3d38b"],["/tags/Java-MYSQL/index.html","2b1d843e99ed24606922f272bc2d0a28"],["/tags/Java-Page/index.html","1955f69aa5625376b9683ab09f49012b"],["/tags/Java-RestTemplate/index.html","3d20a6b0a3fe972ac0eb62152ce9f02b"],["/tags/Java-Stream/index.html","2ae6abd3ce15cd6efab2a2fb77bc1a5b"],["/tags/Java-工具/index.html","a8ee20d553dad20a6305e768422c9568"],["/tags/Java-常量/index.html","10f3d8c3ea86475db563e2152f822134"],["/tags/Java-校验/index.html","d05c1e23b34180f003d349a0be142868"],["/tags/Java-配置/index.html","725762965ce077c32ad0dc4911750ffa"],["/tags/SQL-便捷/index.html","e1186a9b2405251998d7fca0312df5c4"],["/tags/Safe/index.html","8c43df7123f50fb725c245b751e23af5"],["/tags/index.html","95101deb1e23b1262a38ddbb58ac1485"],["/tags/java/index.html","d2f3398260fcf98036d4a1a8ce0ca73f"],["/tags/minio/index.html","20e47bed9b47dded6a711f173024d385"],["/tags/定时任务/index.html","5ab19a6a86728f069acd5bd8d59a964f"],["/tags/工具/index.html","51bdca50cd38800029c57138bac533b2"],["/tags/搜索/index.html","89b0b579280f8a7ad571163f591b38c4"],["/tags/时间工具类/index.html","96359cae6a50d146d1205e5c3b92fddb"],["/tags/虚拟机/index.html","692fffa3bf3d8ab845249e54230c2024"],["/tags/递归/index.html","df4a29ae6c53410c481864d74fba13bd"],["/tags/配置/index.html","b9c6d23df8cc4f379b0a3fc2031961e1"],["/tags/阿里云/index.html","f216ad9dd7ea30a76b0df36f74f26157"]];
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
