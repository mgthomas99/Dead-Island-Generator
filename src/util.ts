
export class GenericArrayUtils {

    public static combine(...arrays) {
        let arr = [];
        for (let a of arrays) {
            arr.concat(a);
        }
        return arr;
    }

    static randomElement(arr) {
        if (! arr || arr.length === 0) {
            return null;
        }
        return arr[Math.floor(Math.random() * arr.length)];
    }

}

export class ArrayUtils {

    public static combine(...arrays: any[][]): any[] {
        let arr: any[] = [];
        for (let a of arrays) {
            arr.concat(a);
        }
        return arr;
    }

    static randomElement<T>(arr: T[]): T {
        if (! arr || arr.length === 0) {
            return null;
        }
        return arr[Math.floor(Math.random() * arr.length)];
    }

}
