/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","aa7805aedec63808f24f29d69fcd056f"],["/about/index.html","045097f3c96a19b67699c2e8beea957c"],["/archives/2023/11/index.html","c7b0670c460a567884085cce672ee7d3"],["/archives/2023/11/page/2/index.html","2d37cfdaf2b62ef52d9f3af3ee4c8889"],["/archives/2023/12/index.html","5d0a3d7144753166f10187cfb628a115"],["/archives/2023/index.html","c3c1aee51ff94f3b52a6131238c35b0c"],["/archives/2023/page/2/index.html","f70126f819c0da3b4fdaf4c2248fce63"],["/archives/index.html","0fc8127763951567536e1e42a077d276"],["/archives/page/2/index.html","f5a12c5e23eef67e70906ac85340e177"],["/categories/HuTool/index.html","d66090ca81a23f567b9bf40dff3f1937"],["/categories/Java-MySQL/index.html","7667d4efc1390d38935663ca8e25a4ac"],["/categories/Java/index.html","b6fc5aa4b43fc73922a77e9aade5eee2"],["/categories/Java配置/index.html","7e0bf8e1f5e43cd7f76e9d1a8ecf54f9"],["/categories/hexo配置/index.html","4435113862a96052a7bcd091a580fb54"],["/categories/index.html","89bd87fc000ca94288a154967c39be00"],["/categories/实用工具/index.html","c6decbac20e1b03324f28a4352b6ad58"],["/categories/工具/index.html","3fbf2e7c63ec2f5cc8735e103e3d5fc3"],["/categories/时间/index.html","792c8fd25fbd0e7e46ff4f006ce1fd8f"],["/categories/视频/index.html","5366bea5623646346aac1a8db8889e90"],["/categories/配置/index.html","30264e322031df173f8b7d98e7bbc65a"],["/categories/配置文件/index.html","d992204de44511eb48bdd546eb5894a4"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/iconfont.css","f5cdd7811e5856e5922720a1f418f06f"],["/css/iconfont.ttf","9dc9e0cac7fb7068a0f74638549a2955"],["/css/iconfont.woff","c4235ac47047d86c77d63d12da75cf3a"],["/css/iconfont.woff2","df674d59d5be495dee29d5d90d19eb7d"],["/css/index.css","040b6b2ed8f79fe67e74d7d1108c66e7"],["/css/my.css","29943dd5ac0eb931848db1d2b384bd74"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","5e529e67bc25502429617b94e321e2f8"],["/js/main.js","83ea4e2ab7b0c8206a90aa557cd491c3"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/weather.js","cb9bf328e0b860cbffa6cc9f90033760"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ea0aad95978cb2e918f1463276ad8676"],["/page/2/index.html","2991895689745b58ef03fd66b4bf21f3"],["/photos/appointment/index.html","0804995c3370ff079c6d089b39a7983b"],["/photos/babyAndBabies/index.html","f0bd1c9b0e6a7879e44e18ec3d76df0c"],["/photos/game/index.html","0d97c8fc7450fb60821b0cd8034bdcfd"],["/photos/index.html","7c88a119a5efd661d69ed31fef7d5344"],["/photos/movie/index.html","a9a2a424c406fa9c6cdb42adabdaf8b2"],["/photos/ohmygirl/index.html","fee9de9b57babef60653a9a4a3de6eaa"],["/photos/outside/index.html","ac1fbb886433d586a3d2d413d5314df9"],["/posts/16888.html","ca883062e27ce9e7f4104e68b4ac7907"],["/posts/18206.html","699b5162eee3b412a9ab066ba97c8bab"],["/posts/21635.html","110b89547d44b55f4cd7e71bf807f4d3"],["/posts/22910.html","1a299f7ed99c823efde343f7c176d277"],["/posts/26185.html","acb2289d8fab6a4e34188705829f5a32"],["/posts/27699.html","0fd34c96d926e4865bfec8786e0510ea"],["/posts/34134.html","38ae01725ab94ed6998ff7beddcfa3ca"],["/posts/38362.html","24b1084b2f124529a4bd93836560c39c"],["/posts/4186.html","f33efc3d317a493d90f8057a4ff2fa81"],["/posts/42658.html","fa6aa51ce8ed3691063fb2ff8a330423"],["/posts/47374.html","7332b05395055146e02cbf6cdbcf6543"],["/posts/52307.html","efb9bd46ff9fa01f0ec640af9c57d161"],["/posts/52812.html","cba505e7ccc31409df0995b842fd31b7"],["/posts/53486.html","85bc99aba3e8550e4fd907305dbfc21e"],["/posts/53714.html","651714ec9abdb34eb27507544d4c87ca"],["/posts/58565.html","dc61a9724eb3571419fe8b12ce6aaacf"],["/posts/62580.html","4145b91c706cc62d40e9afe95dbd8f72"],["/posts/64329.html","ec1490ef3bc81bd449bb6e0fd00bb122"],["/posts/9968.html","d1fdf8e397d653ec8f5b1b9fca38cf2e"],["/record/index.html","50467723760f8fab840892f907022995"],["/sw-register.js","661f13c7e02f83e6f98ab887edbad8c2"],["/tags/B站/index.html","6b4ec6912c9ff2db28d2a5948d7973a5"],["/tags/JAVA-工作总结/index.html","d7122e8147e6a8f728e94676585fe8c6"],["/tags/Java-EasyExcel/index.html","c7cd3705baa2e9cfd347cc6fd48bef9c"],["/tags/Java-MYSQL/index.html","701ec7ee461442192a9d63a247b357ee"],["/tags/Java-工具/index.html","248b3b89b136cc5496a6fb2cbbc76b74"],["/tags/Java-常量/index.html","12d0ade4c3c4d2b6dc04a5acdeb65730"],["/tags/Java-配置/index.html","802932586f3a54ed27b53a5bf9dc2d3c"],["/tags/SQL-便捷/index.html","dd26227fc90b1e236eee66dd8cd6e54e"],["/tags/index.html","6ff8ce246c17dc03c45dfca8a74f43cb"],["/tags/java/index.html","4617c67df3c9bec19c60e6c5a9d01992"],["/tags/minio/index.html","7d884073eb7e0e4cf33fde9baafd87ce"],["/tags/定时任务/index.html","ca769fa2bdd9cc655148b3fe0b492b18"],["/tags/工具/index.html","2feafb5a9be264484555310aec0ba7b9"],["/tags/搜索/index.html","3821af9d5194f88f43a3eccf660fac57"],["/tags/时间工具类/index.html","923aa84645d8ba3d30fc322072bd31ff"],["/tags/虚拟机/index.html","61a47eeb24bf6142381a5e2b69d5dd09"],["/tags/递归/index.html","4df131df6f5988227b4ede920620943b"],["/tags/配置/index.html","171d1653366e72e5827a25bb4b12f685"],["/tags/阿里云/index.html","62d8b745b29965a26c9a6ab6ad99328e"]];
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
