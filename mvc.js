import routes from "./routes.js";
import handler from "./hadler.js";


class Model {
    constructor() {       
    }

    findComponentByPth(path, routes) {
        return (
            routes.find((item) => item.path.match(new RegExp(`^\\${path}$`, 'gm'))) ||
            undefined
        )
    }

    router = () => {
        const path = location.hash.slice(1).toLowerCase() || '/';
        const { view } = this.findComponentByPth(path, routes) || {};
        
        document.getElementById('root').innerHTML = view.render();

        const main = document.querySelector('.main-wrapper');
        main?.addEventListener('click', handler(this.router, routes));
    }

}

class View {
    constructor(routes) {
        this.routes = routes;       
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        window.addEventListener('hashchange', () => {
            this.model.router(this.view.routes);
        })
        window.addEventListener('load', () => this.model.router(this.view.routes));
    }
}

const app = new Controller(new Model(), new View(routes));

export default app;
