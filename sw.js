

self.addEventListener('fetch', event => {

    if(event.request.url.includes('utvt2.png')){
        event.respondWith(null);
    }else{
        event.respondWith(fetch(event.request));
    }
        
    })
    