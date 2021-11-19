self.addEventListener('fetch', event => {
    if (event.request.url.includes('alumno.png')) {
        event.respondWith(fetch('img/omar.jpg'));
        /*let imagen = fetch('img/cuervos.jpg')*/
    }
    if (event.request.url.includes('estilos.css')) {
        let respuesta = new Response(`
        img{
            
            border-radius:150px;
             padding: 4px;
              margin: 8px; 
              width: 120px;
        }
            .nombre{
                color: #000000;
                font-style: oblique;
            }
           
            #principal{
               
                background-color: #29d; 
                border-radius: 5px;
                
            },
       
       
        `, {
            headers: {
                'Content-Type': 'text/css'

            }
        });
        event.respondWith(respuesta);
    }
   
})












self.addEventListener('fetch', event => {
    if (event.request.url.includes('tic.png')) {
        event.respondWith(fetch('img/software.png'));
    }
    if (event.request.url.includes('utvt2.png')) {
        event.respondWith(fetch('img/cuervos.jpg'));

    }
    if (event.request.url.includes('estilos2.css')) {
        let respuesta = new Response(`
        
        img{

            border-radius:150px; 
          }
            #tarjeta{
                margin-left: auto;
                margin-right: auto;
                background-color: #0D47A1; 
                border-radius: 5px;
                width: 350px;
                height: 350px;
            },
            
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respuesta);
    }
})



self.addEventListener('fetch', event => {

    if(event.request.url.includes('utvt2.png')){
        event.respondWith(null);
    }else{
        event.respondWith(fetch(event.request));
    }
        
    })
    