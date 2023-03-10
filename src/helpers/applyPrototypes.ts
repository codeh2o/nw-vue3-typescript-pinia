// Make NW.js and Node globals available in Vue
export default function applyPrototypes(component) {
    component.isDesktop = Boolean((window as any).nw);
    if ((window as any).nw) {
        component.nw = (window as any).nw;
        component.process = (window as any).nw.process;
        component.require = (window as any).nw.require;
        component.global = global;
    }
    return component;
}
