/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","51d73778f19991e377ebb12e3b0b037a"],["/about/index.html","8cafaae990c6224ebc1e0cbd52d3b163"],["/archives/2023/11/index.html","b1deae84cf52a0f1c47e030a3a8ad6f9"],["/archives/2023/11/page/2/index.html","4332bad2f4d459ff2a5c567ff78b8457"],["/archives/2023/12/index.html","b8b0b603bd66448b033ad60419dd0ef1"],["/archives/2023/index.html","5fce6335273aa9f15abc9a2ce2c21bb7"],["/archives/2023/page/2/index.html","db2d927b47b310baf062eaad3170c218"],["/archives/2024/01/index.html","8ee05cfbc465aa6b5d4f5ab0fc0dbabf"],["/archives/2024/index.html","218ef0f0e9c88e67fd44b7fa21bca259"],["/archives/index.html","15a244327040bdc5a3db6eb78c00bae7"],["/archives/page/2/index.html","43ee17cd14f0ef3ef051e07dc031a67e"],["/archives/page/3/index.html","f3d86b5f082380fed42737757f144f2a"],["/categories/Docker/index.html","39f4838dd6e2df5e57a6b907049ddadd"],["/categories/HuTool/index.html","99c796802077846265f780a92c381a0c"],["/categories/Java-MySQL/index.html","06360723a8173672b3ab6f140bf9f6c6"],["/categories/Java-远程调用/index.html","b743aee289c617abcb128ce5880fe154"],["/categories/Java/index.html","7828eff02604b6e9be1913afc3865b42"],["/categories/Java配置/index.html","9e7ac5cba84a97779aaf7c4a5479e343"],["/categories/hexo配置/index.html","b6b68804d391ec769046bdbb2c62c67f"],["/categories/index.html","8245aa31251f7e22b75e07d051602f4a"],["/categories/实用工具/index.html","b0b4ead7dd3f1fb1ef1e1d2cb874ca98"],["/categories/工具/index.html","7f5a953c77f8ff87337000def8557dba"],["/categories/时间/index.html","dd4145af4c8980ceaa34ad89381b6b13"],["/categories/视频/index.html","103ad0d109c4b18621e88e1272933af7"],["/categories/配置/index.html","d108fc9bf1edba31f315efc08257be97"],["/categories/配置文件/index.html","44b4922c85615f2af719936d123d4113"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","e1589a39f770d3fb87943019c8df0131"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","1b81ac7773481397b2368e6c46a158b1"],["/page/2/index.html","11d455174e19edbf269d9f07233695f5"],["/page/3/index.html","fa1c8fa738abb2c8704441a6ded5a911"],["/photos/appointment/index.html","7d8339ec349e0addc8e26647d547a7c6"],["/photos/babyAndBabies/index.html","d53109b7d3cbfa8e04d79c4948f1f34a"],["/photos/game/index.html","4854af8f1612e03a913e65ecea829d78"],["/photos/index.html","49a7b34dde5d66eb87f2d932040d8668"],["/photos/movie/index.html","fbd751a4dd9ea354c4e48b9e16845b96"],["/photos/ohmygirl/index.html","97acbab7ee6fd190f8eed6f636f8155b"],["/photos/outside/index.html","66bec2612b85b98350863c2e0ee8e0c0"],["/posts/16888.html","94d62d51c44782890b7eb69795460476"],["/posts/18206.html","8180e79093266cc2d039cf70e7d3df22"],["/posts/21635.html","4c419759013181315d46dec047b8b259"],["/posts/22910.html","c893502d580d4cb38c56fbb1127c56d7"],["/posts/26185.html","9f4c6c05711e54a3547de630c8d98009"],["/posts/27699.html","d2e2443f9604110fbb1eda19e71fef15"],["/posts/34134.html","d746366640d0e67adc937c7bce7a33f3"],["/posts/38362.html","5873306f93219ae1a57aa7b2998c1b11"],["/posts/4186.html","f149afc4afe459f516f7df9d9138cead"],["/posts/42658.html","c5b262ccaeece2c5dcc88076d342b7e1"],["/posts/47374.html","f7b46e979270d84789e8c437c85d75ec"],["/posts/48428.html","e5d100e15c0e0008b36db2962a30591c"],["/posts/52307.html","b5c7c4cd439ab9199513b8449ec4e761"],["/posts/52812.html","9bc8f7bda74483d7cabc3699eab2a353"],["/posts/53486.html","dbb7418ace0b765af32d53f6abae6eb1"],["/posts/53714.html","c75a9a5f1b8c781287b5769272a70bd1"],["/posts/57395.html","e2689ee62000b5d54b12ced5e54ee070"],["/posts/58565.html","a7ee49e0c85aacaf926a9f0b6302eaca"],["/posts/62580.html","4ececc6ba8058be719f7153ccb17adc4"],["/posts/64032.html","7625bc1d5cbf55e1bf9ed762e4fc51ab"],["/posts/64329.html","77a7e7098fa7e8c15850adef465293fe"],["/posts/9968.html","a9ed82bcdc5687d8374129243ea080a8"],["/record/index.html","b213edf0c120da7c3fea653caa395369"],["/sw-register.js","448abc4d913dcab1970d9e34a641f7c1"],["/tags/B站/index.html","3e5f8cfeb3b18debc032c6d80c9f6dbe"],["/tags/JAVA-工作总结/index.html","85e37f51175f07c786773d52dc17245c"],["/tags/Java-Docker/index.html","aa2be72dc76752107b485d113e1fc065"],["/tags/Java-EasyExcel/index.html","4d6ee52ca4d3e609c9f2a946436d377e"],["/tags/Java-MYSQL/index.html","199d202393ee6cbb14d0329427a2500a"],["/tags/Java-RestTemplate/index.html","e3b851bb4693a3815a6e132c11b79235"],["/tags/Java-工具/index.html","f9f7382aebafd10b8ed2149391f0bb82"],["/tags/Java-常量/index.html","f94ae89886ef511f73351d217a181445"],["/tags/Java-校验/index.html","aec9a115f5ec2d62bbc25ddc11531d57"],["/tags/Java-配置/index.html","c818260154c4de2ecf5c0744dafc0d9f"],["/tags/SQL-便捷/index.html","8aa85ecf3f8e017e33b5a07de9497ad5"],["/tags/index.html","480d3d79870a4e040405bdce44568b19"],["/tags/java/index.html","f8c19f877622aa5b4b325cceab52d3a0"],["/tags/minio/index.html","bcb6a49666acacb678292f930cb68974"],["/tags/定时任务/index.html","863cbb334ed85612412a9db2ef13f3d0"],["/tags/工具/index.html","c595d9622ded3dfaf5395be650217c28"],["/tags/搜索/index.html","cb0a3d1fb9a5280d718e5e966d701234"],["/tags/时间工具类/index.html","3fd5bb749af984d296c13e5d4056b715"],["/tags/虚拟机/index.html","b38dbc6ba59ca94ca9fa503d01565c49"],["/tags/递归/index.html","81f09fe87d9f56fba2fdad3e67607b37"],["/tags/配置/index.html","ba949409b35c65bce7900067bbcc78ea"],["/tags/阿里云/index.html","5f615f9f840215111da18912b4cb76c8"]];
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
