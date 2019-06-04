var app = new Vue({
    el: '#vue-app',
    data: {
        alerta: false,
        show: false,
        loading: true,
        legisladores: [],
        url: 'https://openstates.org/api/v1/legislators/',
        stateSearch: window.location.search,
    },
    methods: {
        cachedFetch: (url, cacheKey = url) => {
            let cached = sessionStorage.getItem(cacheKey);
            if (cached !== null) {
                console.log('---------------')
                console.log('CACHEADO')
                console.log('---------------')
                app.legisladores = JSON.parse(cached);
                setTimeout(() => {
                    app.loading = false;
                    app.show = true;
                }, 500)
                return Promise.resolve(new Response(new Blob([cached])));
            }

            return fetch(url, {
                    headers: {
                        'X-API-Key': 'b3a55830-5dbb-4058-a1bf-da67838daa9e'
                    }
                })
                .then(response => {
                    console.log('---------------')
                    console.log('AJAX')
                    console.log('---------------')
                    if (response.status === 200) {
                        response.clone().text().then(content => {
                            sessionStorage.setItem(cacheKey, content);
                        })
                    }
                    setTimeout(() => {
                        app.loading = false;
                        app.show = true;
                    }, 500)
                    return response.json();
                })
                .then((jsonData) => {
                    app.legisladores = jsonData;

                })
                // Intento mostrar los datos que recibo por consola.
                .catch((error) => {
                    app.alerta = true;
                    app.loading = false;
                }) // En caso de haber algún error, mostrarlo por consola.
        },
        getChamber: (chamber) => {
            if (chamber == 'upper') {
                return 'Senator';
            } else {
                return 'Representative';
            }
        },
    },

})
app.cachedFetch(app.url + app.stateSearch);
