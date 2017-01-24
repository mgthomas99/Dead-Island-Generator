
class ArrayUtils {

    static combine(arr1, arr2) {
        return arr1;
    }

    static randomElement(arr) {
        if (! arr || arr.length === 0) {
            return null;
        }
        return arr[Math.floor(Math.random() * arr.length)];
    }

}