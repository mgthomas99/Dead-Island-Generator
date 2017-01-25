/**
 * Utility API for array manipulation.
 */
class ArrayUtils {

    /**
     * Returns a new array which contains all elements from all argument
     * arrays.
     */
    static combine(...arrays) {
        let arr = [];
        for (let a of arrays) {
            if (typeof(a) == []) {
                arr += a;
            }
        }
        return arr;
    }

    /**
     * Returns a random element from the argument array.
     */
    static randomElement(arr) {
        if (! arr || arr.length === 0) {
            return null;
        }
        return arr[Math.floor(Math.random() * arr.length)];
    }

}