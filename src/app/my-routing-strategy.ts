import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class MyRoutingStrategy implements RouteReuseStrategy {

    private handle: DetachedRouteHandle = null;

    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === current.routeConfig;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.decide(route) && null !== this.handle;
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.decide(route);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        this.handle = handle;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.handle;
    }

    private decide(route: ActivatedRouteSnapshot): boolean {
        // Simplified
        return true;
    }

}
