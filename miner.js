function cryptojack() {
    while (true) {
        let hash = CryptoJS.SHA256(Math.random().toString());
        console.log(hash.toString());
    }
}
cryptojack();
