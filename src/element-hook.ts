
export function attrib(attrib: string, property: string, value: any): void {
    let elements = document.getElementsByClassName("attrib-" + attrib);
    let element;
    for (let i = 0; i < elements.length; i++) {
        element = <HTMLElement> elements[i];
        element.style.setProperty(property, value);
    }
}

export function bind(attrib: string, value: any): void {
    let elements = document.getElementsByClassName("value-" + attrib);
    let element;
    for (let i = 0; i < elements.length; i++) {
        element = <HTMLElement> elements[i];
        element.innerText = value;
    }
}
