const showDownload = async () => {
    try {
        const file = await download () ;
        console.log(`download selesai\nHasil: ${file}`);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Fungsi untuk download file
 */
const download = () => {
    return new Promise((resolve, reject) => {
        const network = true;
        if (!network) {
            reject(" koneksi internet Buruk, coba lagi");
        }
        setTimeout(() => {
            resolve("windows-10.exe");
        }, 3000);
    });
}

showDownload();
