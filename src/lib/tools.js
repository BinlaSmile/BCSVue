export default {
    fileTo64(file) {
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onloadend = function () {
            console.log('reader.result :>> ', reader.result)
            return reader.result;
        };
    },
}