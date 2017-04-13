import * as express from 'express';
let app = express();
let httpMethods: string[] = ['post', 'get', 'put', 'delete'];
let apiNouns: string[] = ['posts', 'products', 'events'];

function apiLoop(methods: string[], nouns: string[]) {
    let apiNouns = nouns;
    let httpMethods = methods;
    apiNouns.forEach(noun => {
        httpMethods.forEach(method => {
            app[method](`api/${noun}`, (req, res) => {
                res.status(200)
                .json({
                    "message": `${method} request for ${noun} endpoint`
                });
            });
        });
    })
}

apiLoop(httpMethods, apiNouns);
app.get('/', (req, res) => {
    res.status(200)
    .json({
        "message": "welcome to the typescript-express demo"});
});
app.listen(3000, () => {
    console.log('listening on port 3000');
})
