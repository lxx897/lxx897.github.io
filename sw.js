/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","04776000dc9c426ef81529ce3330538c"],["/archives/2023/11/index.html","696de058e47a1ce8ba3df30105666dda"],["/archives/2023/11/page/2/index.html","6bcf34b2856b0e2e9b3f246ee0d11a37"],["/archives/2023/12/index.html","8fa5b714bf2f99c8628c9fe7ceb226a5"],["/archives/2023/index.html","9d62ee45b7d2a5e8f971bb27f8e51059"],["/archives/2023/page/2/index.html","2eefecb67b7166f814f1a64604c8d795"],["/archives/2024/01/index.html","be4407c5fef2702ce74b5dee345cbe3c"],["/archives/2024/07/index.html","404a7c23f840b41e4e121d9d251c3386"],["/archives/2024/09/index.html","f7c12ab5c86955e52a0ba7d20da81c07"],["/archives/2024/index.html","b5754fb78d8d41cd6369a44cd380f445"],["/archives/index.html","655a9da187a06efd619eb6950609ad57"],["/archives/page/2/index.html","428aee0dfe9b407469f662ecd1de2c90"],["/archives/page/3/index.html","ced763713ab19dca9ba57b26bf48252a"],["/cat/index.html","979ddaac816615c952fb1c471674457d"],["/cat/picture/index.html","862f2ccb9546cd6fef151088914473f8"],["/categories/Docker/index.html","2ded325db6007ca0de9f3c3b0ea4afef"],["/categories/HuTool/index.html","e0e6c6b71cb83a086cdffae0537d2683"],["/categories/Java-MySQL/index.html","0930d8f340febeb39438a31ab8ee5c4a"],["/categories/Java-远程调用/index.html","28d92a5826ff12aca29f3632c34caf6b"],["/categories/Java/index.html","62e18b00c73303d21f05fc7d3c0b7d2e"],["/categories/Java配置/index.html","fb465591eb755e0f27576d9eb35bd765"],["/categories/MYSQL/index.html","8f458a6a53840a66f462676631cd1668"],["/categories/Page/index.html","f764e70e237a30b326575b0d0f2a068f"],["/categories/Safe/index.html","fc54d99d84d32b3a4682d4f00b9c52e1"],["/categories/hexo配置/index.html","caf8142b50c9b45ebcbeaa4e11b96f3c"],["/categories/index.html","1414eedc214646f6d2d9ca846cec146c"],["/categories/passWorld/index.html","3b1e63df62f66e4867d309d5dcce1806"],["/categories/实用工具/index.html","827228e47c1256da02ba0888a59b7a41"],["/categories/工具/index.html","1a712959d074393563489bff640e6775"],["/categories/工具类/index.html","a36c9d0e8939a37d66954fac638f099e"],["/categories/招标/index.html","d2cec3c363a8885dee36c4c7bdbf05b0"],["/categories/时间/index.html","57fde6c85db421b14da20590343a658e"],["/categories/视频/index.html","e7d7abb1b952b4fd9787aba23b1973a7"],["/categories/账号/index.html","e0e4fc410fe3e8e8cb0d3fe297c41c36"],["/categories/配置/index.html","07693ebfbb767c5cf2a3f1ceaff00ba7"],["/categories/配置文件/index.html","45943a92cbf22bef0c1eecc8a583207c"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c51c7b7f0541ebc8bd23ddb1020e9df9"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","30acae679adb296a8b9b309fe20f2634"],["/page/2/index.html","2470756b5d735d60f638e6e213c0d769"],["/page/3/index.html","1e2e82761166756749032d5708e76a33"],["/photos/appointment/2023/index.html","a44a2f27f9af34013e5ffab515623e76"],["/photos/appointment/2024/index.html","beea38f1e2dc6ce9a938ce39271789c8"],["/photos/appointment/index.html","6837bb76be6c45235b3da37bfe943b93"],["/photos/babyAndBabies/2023/index.html","d18a69d547c1d17dea701eff4a42c492"],["/photos/babyAndBabies/2024/index.html","7bf9a2c5a38e1a5bc8958a462ed9694f"],["/photos/babyAndBabies/index.html","b7793cf8736e7de20d5795d2b0a30d5c"],["/photos/game/dzpd/index.html","0c2a7670e62d70d6302004322abd4c06"],["/photos/game/gy/index.html","05f72643131b35a9ac3f39093afce911"],["/photos/game/index.html","d57b3219dbe1cb04d38915587ecfb692"],["/photos/game/steam/index.html","4c65d72cd34c6e157d3161b46510e873"],["/photos/game/wzry/index.html","27a48f6aafff4f54666b686616aa8649"],["/photos/index.html","b10c5ca6e2710abd4b5e9dcec3837df4"],["/photos/movie/2023/index.html","590e8950508efcfb514fc1f50e5d410a"],["/photos/movie/2024/index.html","63506150025e674df896cbd8faf828db"],["/photos/movie/index.html","f8b44aa102f9403e8ceac86810f9e139"],["/photos/ohmygirl/2023/index.html","7c77b7791d75b69074d2e93476f1f313"],["/photos/ohmygirl/2024/index.html","b3694684af4747b563d6432aebe4a935"],["/photos/ohmygirl/index.html","989ca0ce7caed8ad64e274e996521a86"],["/photos/outside/NanJing/index.html","eea557d438442c288014abc95b513260"],["/photos/outside/QingDao/index.html","70a308de06a2a9e126a2e41255413d88"],["/photos/outside/WuHan/index.html","7269c7b532e654e865c4ad067052e9c1"],["/photos/outside/index.html","6c6400dbec017e78204c42be7b875dfc"],["/posts/15940.html","619f3c9da0529b2cc74e212524317ade"],["/posts/16888.html","5e49900c0eb3adf8cb1af90415ac5851"],["/posts/17303.html","0ba44fa5a4c047763bb2537435dff968"],["/posts/18206.html","b1a83b356671446336d6f39c626e56a9"],["/posts/21635.html","4ad3fb9ad4980da96de04083c9f89c5f"],["/posts/22910.html","e4914e4c897a295b8d0dba92dfb3a5ea"],["/posts/26185.html","476835de165e4821034ca2cbaefcbc10"],["/posts/27699.html","568b49cecefe63b94b3a64292bcb3ede"],["/posts/34134.html","c1f79175ef7752cb45575042d9b755c5"],["/posts/38362.html","bd0436070f76736b2f26393b3830af27"],["/posts/38878.html","9ed43e58835baedc954f99da735a328c"],["/posts/4186.html","7360200dff6fcbcabe73ffe0d14eb922"],["/posts/42658.html","e59b8993da675ec6d63fd36bcd6c44ea"],["/posts/43076.html","2d8a9bf1288fed325ce6293fc39ac2b7"],["/posts/43618.html","df25b4d3dfd385d8ebf080d33ac0afdf"],["/posts/47374.html","24db9a310d513618e4bf737f1fb57812"],["/posts/48428.html","d7949302c28d68cd66ad822fbfe8b5ff"],["/posts/52307.html","227d05e8f8cef5673edcb0761ecb2794"],["/posts/52812.html","3cafd721f74caf3c06e4094ebe635d46"],["/posts/53486.html","e92d7358114562d74e42cad6beb1b583"],["/posts/53714.html","8c43fd69c8456392f87a058cee567789"],["/posts/57395.html","56732dff116166e32b186674aa5aa8ad"],["/posts/58565.html","1d5867152b6b27621afcf13e38006cdb"],["/posts/59743.html","08aac71467ff7617da9e9ea63f1edeaf"],["/posts/62255.html","c8f76838d11297e4e21f6d2f7954165b"],["/posts/62580.html","7132073a59a000c24208cdc9e1444b4b"],["/posts/64032.html","3a952319b901dc7acda8049b4e0494bd"],["/posts/64329.html","828ca404981693e24dd7da23519858f9"],["/posts/9968.html","3647f1d591192b3c1aefec4015b84cfb"],["/record/completed/index.html","e0aea139b87203b61032fd170f0af59d"],["/record/emphasize/index.html","b23f1e5928ce3962675937373a7f60aa"],["/record/index.html","ff9dc571bb866d66d4e13c895d0c8de7"],["/record/period/index.html","dbfd895326b4e103f90367d0ff0ff0db"],["/sw-register.js","165aa45e6a86f26cedca5d30ee76ecf0"],["/tags/B站/index.html","7112fbb076f248287623b35c5a014eb3"],["/tags/JAVA-工作总结/index.html","661c938d288dfb377699f5bf9c53b7af"],["/tags/Java-Docker/index.html","f29c41ed6efaafaf6b7838b8c710c0e4"],["/tags/Java-EasyExcel/index.html","82b2598e3d7e25f88cbd45308356c6a2"],["/tags/Java-MYSQL/index.html","d1329268d638fffb4686cdfa274812d7"],["/tags/Java-Page/index.html","15e176e5336361cac275d78c3836cbf0"],["/tags/Java-RestTemplate/index.html","af0808338ffd9aa0b695f66065fc3cda"],["/tags/Java-工具/index.html","12add89b7205273e512e5897f1699823"],["/tags/Java-常量/index.html","dbfae56e8e99acfbdff307f73d9b4ceb"],["/tags/Java-校验/index.html","eb2852b1bf401c15652dfba31a1af9b9"],["/tags/Java-配置/index.html","135aa69c65db34839a659f5fd856283b"],["/tags/SQL-便捷/index.html","d06648d0fab3c3f41ef194b3b7f3762d"],["/tags/Safe/index.html","3fd46bf348cb0e9d3f98eff28f5d0236"],["/tags/index.html","05f3854ccd06c1f7f022da0560500f61"],["/tags/java/index.html","2c2c98653ba7e176e1275968eb8cb608"],["/tags/minio/index.html","7b51f9b91754269e594be183c64cb263"],["/tags/商务/index.html","5dcbe39307d5c30af3029f78c50322cd"],["/tags/定时任务/index.html","0ca0eed4edadf97282a459eea7bac680"],["/tags/工具/index.html","4db486d2ebd6dbe536d15f1cfedec2b8"],["/tags/招标/index.html","6634caf68c2e43b96c00a8260b66cedb"],["/tags/搜索/index.html","921a590a138331f30b66e1515fa7297c"],["/tags/时间工具类/index.html","8f7b4c7c27b5d1d86550f745a776609b"],["/tags/虚拟机/index.html","dd530a2dbda1a3e9c940e26f12041332"],["/tags/账号/index.html","6febc37f7d77e2f21da2d7a3d7707b65"],["/tags/递归/index.html","bc51b20254bbcd45f57f2e8af6525c85"],["/tags/配置/index.html","7378598a7ae76e284f593e868a54b49f"],["/tags/阿里云/index.html","cdf56b7b382e86f1381fe8450ea51f9a"]];
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
